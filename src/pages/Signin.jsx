import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import toast from 'react-hot-toast'
import NavBar from '../components/layout/NavBar'
import Footer from '../components/layout/Footer'

const API_BASE_URL = 'http://localhost:5000/api'

const Signin = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        
        if (!email || !password) {
            setError('Please fill in all fields')
            return
        }
        
        try {
            const response = await axios.post(`${API_BASE_URL}/signin`, { email, password })
            localStorage.setItem('adoptpet_user', JSON.stringify(response.data.user))
            setError('')
            toast.success('Signin successful!')
            navigate('/')
        } catch (err) {
            const msg = err.response?.data?.message || 'Signin failed. Please try again.'
            setError(msg)
            toast.error(msg)
        }
    }

    return (
        <div className="flex min-h-screen flex-col">
            <NavBar />
            <main className="relative flex w-full flex-1 items-center justify-center overflow-hidden bg-linear-to-b from-white to-stone-400 px-4 py-4 md:py-6">

                {/* Watermark */}
                <div className="font-['Macondo'] tracking-wide absolute top-[35%] sm:top-[35%] md:top-[38%] left-1/2 -translate-x-1/2 text-[40px] sm:text-[180px] md:text-[250px] lg:text-[240px] font-bold text-white/50 whitespace-nowrap pointer-events-none select-none leading-none">
                    Adoptpet.io
                </div>

                {/* Card */}
                <div className="z-10 w-full max-w-md rounded-b-3xl border-t-4 border-[#a28d80] bg-white p-6 shadow-2xl">
                    <h2 className="mb-1 text-center text-3xl font-bold text-[#795548] font-['condiment']">
                        AdoptPet.io
                    </h2>
                    <p className="mb-6 text-center text-5xl text-black font-['Aladin']">
                        Welcome back
                    </p>

                    {error && (
                        <div className="mb-4 rounded-lg border border-red-200 bg-red-50 p-4 text-base font-medium text-red-600">
                            {error}
                        </div>
                    )}

                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className="mb-3 block text-base font-semibold text-gray-700 font-['Montserrat']">Email Address</label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full rounded-lg border-2 border-gray-200 px-4 py-3 text-base transition focus:border-stone-500 focus:ring-2 focus:ring-stone-200 focus:outline-none"
                                placeholder="you@example.com"
                            />
                        </div>

                        <div className="mb-5">
                            <label className="mb-3 block text-base font-semibold text-gray-700 font-['Montserrat']">Password</label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full rounded-lg border-2 border-gray-200 px-4 py-3 text-base transition focus:border-stone-500 focus:ring-2 focus:ring-stone-200 focus:outline-none"
                                placeholder="••••••••"
                            />
                            <div className="mt-2 text-right">
                                <Link to="/forgot-password" className="text-base font-semibold text-stone-700 hover:underline">
                                    Forgot Password?
                                </Link>
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="w-full rounded-lg bg-stone-400 py-3 text-base font-semibold text-white shadow-md transition duration-200 hover:scale-[1.01] hover:bg-stone-500 hover:shadow-lg"
                        >
                            Sign In
                        </button>
                    </form>

                    <p className="mt-6 text-center text-base text-gray-600">
                        Don't have an account? <a href="/signup" className="text-stone-950 font-semibold hover:underline">Sign up</a>
                    </p>
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default Signin