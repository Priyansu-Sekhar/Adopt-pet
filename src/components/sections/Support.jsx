import Duck from '../../assets/duck (2).png';
import Cocktaiel from '../../assets/cocktiel.png';

const Support = () => {
  return (
    <div className="w-full sm:py-12 md:py-12 lg:py-16" name="support" id="support">
      <h1 className="text-4xl text-center mt-5 font-['Aladin'] sm:text-5xl lg:text-6xl">
        Support
      </h1>
      
      <div className="flex flex-col sm:flex-row justify-center items-center bg-[#fffffd] gap-6 sm:gap-10 lg:gap-20 px-3 sm:px-4 lg:px-10 py-8 sm:py-12 lg:py-16">
        
        {/* ADOPT Card */}
        <div className="border-[2.5px] border-gray-800 rounded-lg h-64 sm:h-67.5 w-52 sm:w-57.5 relative transition-all duration-300 hover:shadow-lg hover:border-gray-600 hover:scale-105">
          <h1 className="text-lg sm:text-xl font-bold text-center mt-6 sm:mt-10">ADOPT</h1>
          <span className="text-center flex py-3 sm:py-4 px-6 sm:px-8 text-[#6b5e52] font-semibold text-sm sm:text-base">
            Provide Comfort & Care to rescued animals.
          </span>
          <div className="bg-white w-10 sm:w-12 h-32 sm:h-35 absolute top-[50%] left-[85%]"></div>
          <img 
            src={Duck} 
            alt="Duck" 
            className="w-auto h-[70%] object-contain absolute top-[36%] left-[56.7%]" 
          />
        </div>

        {/* DONATE Card */}
        <div className="border-[2.5px] border-gray-800 rounded-lg h-64 sm:h-67.5 w-52 sm:w-57.5 transition-all duration-300 hover:shadow-lg hover:border-gray-600 hover:scale-105">
          <h1 className="text-lg sm:text-xl font-bold text-center mt-6 sm:mt-10">DONATE</h1>
          <span className="text-center flex py-3 sm:py-4 px-6 sm:px-8 text-[#6b5e52] font-semibold text-sm sm:text-base">
            Donate for food and medical care for homeless animals.
          </span>
        </div>

        {/* FOSTER Card */}
        <div className="border-[2.5px] border-gray-800 rounded-lg h-64 sm:h-67.5 w-52 sm:w-57.5 relative transition-all duration-300 hover:shadow-lg hover:border-gray-600 hover:scale-105">
          <h1 className="text-lg sm:text-xl font-bold text-center mt-6 sm:mt-10 z-10">FOSTER</h1>
          <span className="text-center flex py-3 sm:py-4 px-6 sm:px-10 text-[#6b5e52] font-semibold text-xl sm:text-base">
            Be foster parent to animals in need.
          </span>
          <div className="bg-white w-10 sm:w-12 h-44 sm:h-50 absolute top-[32%] right-[81%]"></div>
          <img 
            src={Cocktaiel} 
            alt="Cocktail" 
            className="w-auto h-full object-contain absolute top-[6.5%] right-[72%]" 
          />
        </div>
      </div>

      <div className="flex justify-center ml-163 sm:mt-8 lg:mt-0">
        <a 
          href="/about"
          className="border border-[#6b5e52] rounded-full px-8 sm:px-10 lg:px-12 py-2 sm:py-3 text-[#6b5e52] font-semibold text-sm sm:text-base transition-all duration-300 hover:bg-[#6b5e52] hover:text-[#fffffd] hover:shadow-lg"
        >
          Learn More →
        </a>
      </div>
    </div>
  );
};

export default Support;