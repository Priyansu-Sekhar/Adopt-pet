import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import toast from 'react-hot-toast'

const API_BASE_URL = 'http://localhost:5000/api'

const ForgotPassword = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!email || !newPassword || !confirmPassword) {
      setError('Please fill in all fields')
      return
    }

    if (newPassword !== confirmPassword) {
      setError('Passwords do not match')
      return
    }

    try {
      await axios.post(`${API_BASE_URL}/forgot-password`, {
        email,
        newPassword
      })

      setError('')
      toast.success('Password reset successful')
      navigate('/signin')
    } catch (err) {
      const msg = err.response?.data?.message || 'Password reset failed. Please try again.'
      setError(msg)
      toast.error(msg)
    }
  }

  return (
    <div className="w-full min-h-screen bg-linear-to-b from-white to-stone-400 flex items-center justify-center px-4 py-10">
          <div className="font-['Macondo'] tracking-wide absolute top-[35%] sm:top-[35%] md:top-[38%] left-1/2 -translate-x-1/2 text-[40px] sm:text-[180px] md:text-[250px] lg:text-[240px] font-bold text-white/50 whitespace-nowrap pointer-events-none select-none leading-none">
                Adoptpet.io
            </div>
      <div className="max-w-md w-full bg-white p-8 rounded-b-3xl shadow-2xl border-t-4 border-[#a28d80] z-10">
        <h2 className="text-2xl font-bold mb-2 text-center text-[#795548] font-['condiment']">AdoptPet.io</h2>
        <p className="text-center text-black text-4xl mb-6 font-['Aladin']">Forgot Password</p>

        {error && (
          <div className="mb-4 p-4 bg-red-50 text-red-600 rounded-lg border border-red-200 text-sm font-medium">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2 text-gray-700 font-['Montserrat']">Email Address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-stone-500 focus:ring-2 focus:ring-stone-200 transition"
              placeholder="you@example.com"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2 text-gray-700 font-['Montserrat']">New Password</label>
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-stone-500 focus:ring-2 focus:ring-stone-200 transition"
              placeholder="••••••••"
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-semibold mb-2 text-gray-700 font-['Montserrat']">Confirm Password</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-stone-500 focus:ring-2 focus:ring-stone-200 transition"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-stone-400 text-white py-3 rounded-lg font-semibold hover:bg-stone-500 transition duration-200 shadow-md hover:shadow-lg"
          >
            Reset Password
          </button>
        </form>

        <p className="text-center text-gray-600 text-sm mt-6">
          Back to <Link to="/signin" className="text-stone-950 font-semibold hover:underline">Sign in</Link>
        </p>
      </div>
    </div>
  )
}

export default ForgotPassword
