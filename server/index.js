import express from 'express'
import cors from 'cors'
import { randomUUID, scryptSync, timingSafeEqual } from 'node:crypto'
import { Buffer } from 'node:buffer'
import { promises as fs } from 'node:fs'
import path from 'node:path'
import process from 'node:process'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const DB_PATH = path.join(__dirname, 'db.json')
const PORT = process.env.PORT || 5000

const app = express()
app.use(cors())
app.use(express.json())

const readDb = async () => {
  const file = await fs.readFile(DB_PATH, 'utf-8')
  const normalized = file.replace(/^\uFEFF/, '').trim()

  try {
    return JSON.parse(normalized)
  } catch {
    throw new Error('Invalid JSON in server/db.json. Fix the file content and restart the server.')
  }
}

const writeDb = async (db) => {
  await fs.writeFile(DB_PATH, JSON.stringify(db, null, 2), 'utf-8')
}

const hashPassword = (plain) => {
  const salt = randomUUID().replace(/-/g, '').slice(0, 16)
  const hashed = scryptSync(plain, salt, 64).toString('hex')
  return `${salt}:${hashed}`
}

const verifyPassword = (plain, stored) => {
  const [salt, hash] = stored.split(':')
  if (!salt || !hash) {
    return false
  }

  const hashedBuffer = scryptSync(plain, salt, 64)
  const hashBuffer = Buffer.from(hash, 'hex')

  if (hashedBuffer.length !== hashBuffer.length) {
    return false
  }

  return timingSafeEqual(hashedBuffer, hashBuffer)
}

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', message: 'Local REST API is running' })
})

app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body

  if (!name || !email || !message) {
    return res.status(400).json({ message: 'name, email and message are required' })
  }

  const db = await readDb()
  if (!Array.isArray(db.contacts)) {
    db.contacts = []
  }

  const contact = {
    id: randomUUID(),
    name: String(name).trim(),
    email: String(email).toLowerCase().trim(),
    message: String(message).trim(),
    createdAt: new Date().toISOString()
  }

  db.contacts.push(contact)
  await writeDb(db)

  return res.status(201).json({ message: 'Message sent successfully', contact })
})

app.post('/api/adoptions', async (req, res) => {
  const {
    fullName,
    email,
    phone,
    city,
    petType,
    petName,
    homeType,
    hasPetsBefore,
    message,
    agree
  } = req.body

  if (!fullName || !email || !phone || !city || !petType || !homeType || !hasPetsBefore || !message || !agree) {
    return res.status(400).json({ message: 'All required adoption fields must be provided' })
  }

  const db = await readDb()
  if (!Array.isArray(db.adoptions)) {
    db.adoptions = []
  }

  const adoption = {
    id: randomUUID(),
    fullName: String(fullName).trim(),
    email: String(email).toLowerCase().trim(),
    phone: String(phone).trim(),
    city: String(city).trim(),
    petType: String(petType).trim(),
    petName: petName ? String(petName).trim() : '',
    homeType: String(homeType).trim(),
    hasPetsBefore: String(hasPetsBefore).trim(),
    message: String(message).trim(),
    agree: Boolean(agree),
    createdAt: new Date().toISOString()
  }

  db.adoptions.push(adoption)
  await writeDb(db)

  return res.status(201).json({ message: 'Adoption request submitted', adoption })
})

app.get('/api/adoptions', async (_req, res) => {
  const db = await readDb()
  if (!Array.isArray(db.adoptions)) {
    db.adoptions = []
    await writeDb(db)
  }

  res.json(db.adoptions)
})

app.post('/api/signup', async (req, res) => {
  const { name, email, password } = req.body

  if (!name || !email || !password) {
    return res.status(400).json({ message: 'name, email and password are required' })
  }

  const db = await readDb()
  const emailLower = String(email).toLowerCase().trim()
  const existingUser = db.users.find((user) => user.email === emailLower)

  if (existingUser) {
    return res.status(409).json({ message: 'Email already exists' })
  }

  const user = {
    id: randomUUID(),
    name: String(name).trim(),
    email: emailLower,
    password: hashPassword(String(password)),
    createdAt: new Date().toISOString()
  }

  db.users.push(user)
  await writeDb(db)

  res.status(201).json({
    message: 'Signup successful',
    user: { id: user.id, name: user.name, email: user.email }
  })
})

app.post('/api/signin', async (req, res) => {
  const { email, password } = req.body

  if (!email || !password) {
    return res.status(400).json({ message: 'email and password are required' })
  }

  const db = await readDb()
  const emailLower = String(email).toLowerCase().trim()
  const user = db.users.find((item) => item.email === emailLower)

  if (!user || !verifyPassword(String(password), user.password)) {
    return res.status(401).json({ message: 'Invalid credentials' })
  }

  res.json({
    message: 'Signin successful',
    user: { id: user.id, name: user.name, email: user.email }
  })
})

app.post('/api/forgot-password', async (req, res) => {
  const { email, newPassword } = req.body

  if (!email || !newPassword) {
    return res.status(400).json({ message: 'email and newPassword are required' })
  }

  const db = await readDb()
  const emailLower = String(email).toLowerCase().trim()
  const index = db.users.findIndex((item) => item.email === emailLower)

  if (index === -1) {
    return res.status(404).json({ message: 'User not found for this email' })
  }

  db.users[index].password = hashPassword(String(newPassword))
  db.users[index].updatedAt = new Date().toISOString()
  await writeDb(db)

  return res.json({ message: 'Password reset successful' })
})

app.get('/api/users', async (_req, res) => {
  const db = await readDb()
  const users = db.users.map((user) => ({
    id: user.id,
    name: user.name,
    email: user.email,
    createdAt: user.createdAt,
    updatedAt: user.updatedAt
  }))
  res.json(users)
})

app.get('/api/users/:id', async (req, res) => {
  const db = await readDb()
  const user = db.users.find((item) => item.id === req.params.id)

  if (!user) {
    return res.status(404).json({ message: 'User not found' })
  }

  res.json({
    id: user.id,
    name: user.name,
    email: user.email,
    createdAt: user.createdAt,
    updatedAt: user.updatedAt
  })
})

app.put('/api/users/:id', async (req, res) => {
  const { name, email, password } = req.body
  const db = await readDb()
  const index = db.users.findIndex((item) => item.id === req.params.id)

  if (index === -1) {
    return res.status(404).json({ message: 'User not found' })
  }

  if (email) {
    const emailLower = String(email).toLowerCase().trim()
    const conflict = db.users.some((u) => u.email === emailLower && u.id !== req.params.id)
    if (conflict) {
      return res.status(409).json({ message: 'Email already exists' })
    }
    db.users[index].email = emailLower
  }

  if (name) {
    db.users[index].name = String(name).trim()
  }

  if (password) {
    db.users[index].password = hashPassword(String(password))
  }

  db.users[index].updatedAt = new Date().toISOString()
  await writeDb(db)

  const user = db.users[index]
  res.json({
    message: 'User updated',
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt
    }
  })
})

app.delete('/api/users/:id', async (req, res) => {
  const db = await readDb()
  const before = db.users.length
  db.users = db.users.filter((item) => item.id !== req.params.id)

  if (db.users.length === before) {
    return res.status(404).json({ message: 'User not found' })
  }

  await writeDb(db)
  res.json({ message: 'User deleted' })
})

app.get('/api/pets', async (req, res) => {
  const db = await readDb()
  const { type } = req.query

  if (!type) {
    return res.json(db.pets)
  }

  const filtered = db.pets.filter((pet) => pet.type.toLowerCase() === String(type).toLowerCase())
  res.json(filtered)
})

app.get('/api/pets/:id', async (req, res) => {
  const db = await readDb()
  const pet = db.pets.find((item) => item.id === req.params.id)

  if (!pet) {
    return res.status(404).json({ message: 'Pet not found' })
  }

  res.json(pet)
})

app.post('/api/pets', async (req, res) => {
  const { name, type, age, breed, adopted = false } = req.body

  if (!name || !type || age === undefined || !breed) {
    return res.status(400).json({ message: 'name, type, age and breed are required' })
  }

  const db = await readDb()
  const pet = {
    id: randomUUID(),
    name: String(name).trim(),
    type: String(type).toLowerCase().trim(),
    age: Number(age),
    breed: String(breed).trim(),
    adopted: Boolean(adopted),
    createdAt: new Date().toISOString()
  }

  db.pets.push(pet)
  await writeDb(db)

  res.status(201).json({ message: 'Pet created', pet })
})

app.put('/api/pets/:id', async (req, res) => {
  const db = await readDb()
  const index = db.pets.findIndex((item) => item.id === req.params.id)

  if (index === -1) {
    return res.status(404).json({ message: 'Pet not found' })
  }

  const allowed = ['name', 'type', 'age', 'breed', 'adopted']
  for (const key of allowed) {
    if (req.body[key] !== undefined) {
      db.pets[index][key] = key === 'type' ? String(req.body[key]).toLowerCase().trim() : req.body[key]
    }
  }

  db.pets[index].updatedAt = new Date().toISOString()
  await writeDb(db)

  res.json({ message: 'Pet updated', pet: db.pets[index] })
})

app.delete('/api/pets/:id', async (req, res) => {
  const db = await readDb()
  const before = db.pets.length
  db.pets = db.pets.filter((item) => item.id !== req.params.id)

  if (db.pets.length === before) {
    return res.status(404).json({ message: 'Pet not found' })
  }

  await writeDb(db)
  res.json({ message: 'Pet deleted' })
})

app.get('/api/debug/routes', (_req, res) => {
  const stack = app.router?.stack || []
  const routes = stack
    .filter((layer) => layer.route?.path)
    .map((layer) => ({
      path: layer.route.path,
      methods: Object.keys(layer.route.methods || {}).filter((m) => layer.route.methods[m])
    }))

  res.json(routes)
})

app.listen(PORT, () => {
  console.log(`REST API running on http://localhost:${PORT}`)
})
