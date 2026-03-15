import React from 'react';
import { Bar, Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
import NavBar from '../components/layout/NavBar';
import Footer from '../components/layout/Footer';

const rescueData = [15, 20, 18, 25, 22, 30]; // Example monthly rescue numbers
const adoptionData = [10, 12, 14, 18, 20, 22]; // Example monthly adoption numbers
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];

const barData = {
  labels: months,
  datasets: [
    {
      label: 'Rescued',
      data: rescueData,
      backgroundColor: '#795548',
    },
    {
      label: 'Adopted',
      data: adoptionData,
      backgroundColor: '#f7b801',
    },
  ],
};

const lineData = {
  labels: months,
  datasets: [
    {
      label: 'Rescued',
      data: rescueData,
      borderColor: '#795548',
      backgroundColor: 'rgba(121, 85, 72, 0.2)',
      tension: 0.4,
    },
    {
      label: 'Adopted',
      data: adoptionData,
      borderColor: '#f7b801',
      backgroundColor: 'rgba(247, 184, 1, 0.2)',
      tension: 0.4,
    },
  ],
};

const chartOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Rescue & Adoption Stats',
    },
  },
};

const Admin = () => {
  const [showAddPet, setShowAddPet] = React.useState(false);
  const [showUsers, setShowUsers] = React.useState(false);
  const [showAdoptions, setShowAdoptions] = React.useState(false);

  return (
    <div>
      <NavBar />
      <div className="flex -mb-5 bg-[#f5f5f5]">
        {/* Sidebar */}
        <aside className="w-64 bg-[#795548] text-white flex flex-col py-8 px-20 left-0 top-0 h-[609.5px] ">
          <nav className="flex flex-col gap-8 font-[macondo] text-xl mx-auto">
            <a href="#dashboard" className="">Dashboard</a>
            <a href="#pets" className="">Pets</a>
            <a href="#adoptions" className="">Adoptions</a>
            <a href="#users" className="">Users</a>
            <a href="#settings" className="">Settings</a>
          </nav>
        </aside>
        {/* Main Content */}
        <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-8 ml-0">
          <h1 className="md:text-5xl lg:text-5xl sm:text-4xl font-medium text-[#795548] font-[Aladin]">Admin Dashboard</h1>
          <section className=" p-6">
            <h2 className="text-xl font-semibold mb-4 text-[#6f6256] font-[montserrat]">Overview</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="bg-[#f7f1e8] p-4 rounded-lg text-center border border-[#d4c6b8] font-[montserrat]">
                <span className="block text-2xl font-bold text-[#795548]">120</span>
                <span className="block text-[#6f6256] mt-2">Total Pets</span>
              </div>
              <div className="bg-[#f7f1e8] p-4 rounded-lg text-center border border-[#d4c6b8] font-[montserrat]">
                <span className="block text-2xl font-bold text-[#795548]">45</span>
                <span className="block text-[#6f6256] mt-2">Adoptions</span>
              </div>
              <div className="bg-[#f7f1e8] p-4 rounded-lg text-center border border-[#d4c6b8] font-[montserrat]">
                <span className="block text-2xl font-bold text-[#795548]">8</span>
                <span className="block text-[#6f6256] mt-2">Pending Requests</span>
              </div>
            </div>
            {/* Bar & Line Graphs Side by Side */}
            <div className="mt-8 flex flex-col md:flex-row gap-8 justify-center items-stretch font-[montserrat]">
              <div className="flex-1 bg-white rounded-lg shadow p-4">
                <Bar data={barData} options={chartOptions} />
              </div>
              <div className="flex-1 bg-white rounded-lg shadow p-4">
                <Line data={lineData} options={chartOptions} />
              </div>
            </div>
          </section>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Admin;
