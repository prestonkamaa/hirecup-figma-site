import { MdOutlineLocationOn } from "react-icons/md";
import Navbar from "./Navbar"; 

export default function HeroSection() {
  return (
    <section className=" bg-white bg-[url('/images/slide.png')] bg-no-repeat bg-right bg-contain">

      <Navbar />  
      
      <div className=" container mx-auto px-12 py-20 grid lg:grid-cols-2" >  
         
        <div>    
          <h1 className=" text-[#127681] font-semibold text-lg pb-9">Get Best Employee</h1>

          <h1 className=" text-[#10375C] font-bold text-7xl pb-9 line">We find the best <br />asset for you</h1>

          <p className=" text-[rgba(0,0,0,0.6)] font-normal text-lg pb-9">Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br/>
          Vitae sit donec lectus suscipit ultricies rhoncus. Egestas <br/>
          platea in mauris urna gravida odio nam quisque</p> 

          <p className="text-[#F3C623] text-lg font-semibold pb-0">Search for job/employee</p>

          <div className="mt-3 lg:w-2/3">
            <div className="px-2 flex items-center border-1 bg-white shadow-lg rounded-full">
              <input className="rounded-l-sm w-full py-2 px-6 text-[rgba(0,0,0,0.4)] leading-tight focus:outline-none" id="search"
              type="text"placeholder="Ex: Graphic Designer" />
              <div className="p-2">
                <button className="bg-[#127681] text-white rounded-full p-2 hover:bg-[#199aa8] focus:outline-none w-12 h-12 flex items-center justify-center">
                  < MdOutlineLocationOn size={'1.5em'} />    
                </button>
              </div>
            </div>
          </div> 
        </div>
 





      </div>

    </section>
  )
}
