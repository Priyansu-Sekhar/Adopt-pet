import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import toast from 'react-hot-toast'
import NavBar from '../components/layout/NavBar'
import Footer from '../components/layout/Footer'

const API_BASE_URL = 'http://localhost:5000/api'

const Signup = () => {
    const navigate = useNavigate()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const handleSubmit = async(e) => {
        e.preventDefault()
        try {
            await axios.post(`${API_BASE_URL}/signup`,
                {name, email, password});
                toast.success('Signup successful!')
                navigate('/signin')
            } catch (error) {
                const msg = error.response?.data?.message || 'Signup failed. Please try again.'
                setError(msg);
                toast.error(msg);
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

                    <h2 className="mb-2 text-left text-3xl font-bold text-[#795548] font-['condiment']">AdoptPet.io</h2>
                    <p className="mb-3 text-center text-5xl text-black font-['Aladin']">Create an account</p>

                    {error && (
                        <div className="mb-4 rounded-lg border border-red-200 bg-red-50 p-4 text-base font-medium text-red-600">
                            {error}
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="gap-4">
                        <div className="mb-4">
                            <label className="mb-3 block text-base font-semibold text-gray-700 font-['Montserrat']">Username</label>
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full rounded-lg border-2 border-gray-200 px-4 py-3 text-base transition focus:border-stone-500 focus:ring-2 focus:ring-stone-200 focus:outline-none"
                                placeholder="Your full name"
                            />
                        </div>

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
                        </div>

                        <button
                            type="submit"
                            className="w-full rounded-lg bg-stone-400 py-3 text-base font-semibold text-white shadow-md transition duration-200 hover:scale-[1.01] hover:bg-stone-500 hover:shadow-lg"
                        >
                            Sign Up
                        </button>
                    </form>

                    <p className="mt-6 text-center text-base text-gray-600">
                        Already have an account? <a href="/signin" className="text-stone-950 font-semibold hover:underline">Sign in</a>
                    </p>
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default Signup
