import Image from "next/image";
import { MdOutlineLocationOn } from "react-icons/md";
import { MdAccessTime } from "react-icons/md";
import { MdOutlineCalendarToday } from "react-icons/md"; 

export default function LatestAssets() {
  return ( 
    <section className=" py-28 bg-[#F4F6FF]">

      <div className=" container mx-auto">
        <h1 className=" mx-auto max-w-[37rem] text-center font-black text-4xl text-[#10375C]"><span className=" text-[#127681]">Latest asset </span>that waiting for you
         100+ Job, 330+ Employee
        </h1>

        <div className="px-10 py-16 grid mx-auto lg:grid-cols-4 lg:max-w-5xl justify-center items-center"> 
          <div className="mr-4 drop-shadow-xl px-10 py-3 w-auto h-auto mb-2 bg-white rounded-full content-center">
            All
          </div> 
          {/* <div className="mr-4 drop-shadow-xl px-10 py-3 w-auto h-auto bg-white rounded-full content-center">
            All
          </div>  */}
          <div className="mr-4 drop-shadow-xl px-10 py-3 w-auto h-auto mb-2 bg-[#F3C623] rounded-full content-center">
            Employee
          </div> 
          <div className="mr-4 drop-shadow-xl px-10 py-3 w-auto h-auto mb-2 bg-white rounded-full content-center">
            Company/Job
          </div> 
  
          
          <div className="px-2 flex items-center border-1 bg-white drop-shadow-xl rounded-full">
            <input className="rounded-l-sm w-full py-2 px-6 text-[rgba(0,0,0,0.4)] leading-tight focus:outline-none" id="search"
            type="text"placeholder="Ex: Graphic Designer" />
            <div className="p-2">
              <button
              className="bg-[#127681] text-white rounded-full p-2 hover:bg-[#199aa8] focus:outline-none w-12 h-12 flex items-center justify-center">
              <MdOutlineLocationOn  /> 
              </button>
            </div> 
          </div>  
           
        </div> 

        
        <div className="px-10 grid lg:grid-cols-4 gap-6"> 

        
          <div className=" drop-shadow-xl px-5 mx-auto py-3 w-auto h-auto bg-white rounded content-center border-2">
            <div className=" flex content-center items-center">
              <div className="mr-auto">  
                <h1 className=" text-[#111D5E] font-extrabold text-lg max-w-[9rem] mr-3">
                  Graphic &          Visual Designer
                </h1> 
              </div>
              <div className=" content-center items-center">
                <MdOutlineLocationOn size={'2.5em'} />
              </div>
            </div> 
            <hr className=" mt-4 mb-6"/>  
              <div className=" flex px-10 my-4 py-3 w-fit h-auto bg-[#F4F6FF] text-[#10375C] rounded-2xl font-bold text-center content-center">
                <div className="flex justify-center items-center mr-2">
                  <MdOutlineLocationOn size={'1.5em'} />
                </div> 
                <div>
                  Azaiba, Oman
                </div>
              </div> 

              <div className=" flex px-10 my-4 py-3 w-auto h-auto bg-[#F4F6FF] text-[#10375C] rounded-2xl font-bold text-center content-center">
                <div className="flex justify-center items-center mr-2">
                  <MdAccessTime size={'1.5em'} />
                </div> 
                <div>
                  Full Time
                </div>
              </div> 

              <div className=" flex px-10 my-4 py-3 w-auto h-auto bg-[#F4F6FF] text-[#10375C] rounded-2xl font-bold text-center content-center">
                <div className="flex justify-center items-center mr-2">
                  <MdOutlineCalendarToday size={'1.5em'} />
                </div> 
                <div>
                  21 June
                </div>
              </div>  
              <hr  className=" mt-4 mb-6"/>
              <div className=" grid place-items-center pb-3">
                <Image src="/images/latestassets.png" width="131" height="43" alt="" />
              <p className=" text-[#787878] underline font-normal text-base">Muscat Gas Company</p>
              </div>
          </div> 



          <div className=" drop-shadow-xl px-5 mx-auto  py-3 w-auto h-auto bg-white rounded content-center border-2">
            <div className=" flex content-center items-center">
              <div className="mr-auto">  
                <h1 className=" text-[#111D5E] font-extrabold text-lg max-w-[9rem] mr-3">
                  Graphic &          Visual Designer
                </h1> 
              </div>
              <div className=" content-center items-center">
                <MdOutlineLocationOn size={'2.5em'} />
              </div>
            </div> 
            <hr className=" mt-4 mb-6"/>  
              <div className=" flex px-10 my-4 py-3 w-fit h-auto bg-[#F4F6FF] text-[#10375C] rounded-2xl font-bold text-center content-center">
                <div className="flex justify-center items-center mr-2">
                  <MdOutlineLocationOn size={'1.5em'} />
                </div> 
                <div>
                  Azaiba, Oman
                </div>
              </div> 

              <div className=" flex px-10 my-4 py-3 w-auto h-auto bg-[#F4F6FF] text-[#10375C] rounded-2xl font-bold text-center content-center">
                <div className="flex justify-center items-center mr-2">
                  <MdAccessTime size={'1.5em'} />
                </div> 
                <div>
                  Full Time
                </div>
              </div> 

              <div className=" flex px-10 my-4 py-3 w-auto h-auto bg-[#F4F6FF] text-[#10375C] rounded-2xl font-bold text-center content-center">
                <div className="flex justify-center items-center mr-2">
                  <MdOutlineCalendarToday size={'1.5em'} />
                </div> 
                <div>
                  21 June
                </div>
              </div>  
              <hr  className=" mt-4 mb-6"/>
              <div className=" grid place-items-center pb-3">
                <Image src="/images/latestassets.png" width="131" height="43" alt="" />
              <p className=" text-[#787878] underline font-normal text-base">Muscat Gas Company</p>
              </div>
          </div> 



          <div className=" drop-shadow-xl px-5 mx-auto  py-3 w-auto h-auto bg-white rounded content-center border-2">
            <div className=" flex content-center items-center">
              <div className="mr-auto">  
                <h1 className=" text-[#111D5E] font-extrabold text-lg max-w-[9rem] mr-3">
                  Graphic &          Visual Designer
                </h1> 
              </div>
              <div className=" content-center items-center">
                <MdOutlineLocationOn size={'2.5em'} />
              </div>
            </div> 
            <hr className=" mt-4 mb-6"/>  
              <div className=" flex px-10 my-4 py-3 w-fit h-auto bg-[#F4F6FF] text-[#10375C] rounded-2xl font-bold text-center content-center">
                <div className="flex justify-center items-center mr-2">
                  <MdOutlineLocationOn size={'1.5em'} />
                </div> 
                <div>
                  Azaiba, Oman
                </div>
              </div> 

              <div className=" flex px-10 my-4 py-3 w-auto h-auto bg-[#F4F6FF] text-[#10375C] rounded-2xl font-bold text-center content-center">
                <div className="flex justify-center items-center mr-2">
                  <MdAccessTime size={'1.5em'} />
                </div> 
                <div>
                  Full Time
                </div>
              </div> 

              <div className=" flex px-10 my-4 py-3 w-auto h-auto bg-[#F4F6FF] text-[#10375C] rounded-2xl font-bold text-center content-center">
                <div className="flex justify-center items-center mr-2">
                  <MdOutlineCalendarToday size={'1.5em'} />
                </div> 
                <div>
                  21 June
                </div>
              </div>  
              <hr  className=" mt-4 mb-6"/>
              <div className=" grid place-items-center pb-3">
                <Image src="/images/latestassets.png" width="131" height="43" alt="" />
              <p className=" text-[#787878] underline font-normal text-base">Muscat Gas Company</p>
              </div>
          </div> 



          <div className=" drop-shadow-xl px-5 mx-auto py-3 w-auto h-auto bg-white rounded content-center border-2">
            <div className=" flex content-center items-center">
              <div className="mr-auto">  
                <h1 className=" text-[#111D5E] font-extrabold text-lg max-w-[9rem] mr-3">
                  Graphic &          Visual Designer
                </h1> 
              </div>
              <div className=" content-center items-center">
                <MdOutlineLocationOn size={'2.5em'} />
              </div>
            </div> 
            <hr className=" mt-4 mb-6"/>  
              <div className=" flex px-10 my-4 py-3 w-fit h-auto bg-[#F4F6FF] text-[#10375C] rounded-2xl font-bold text-center content-center">
                <div className="flex justify-center items-center mr-2">
                  <MdOutlineLocationOn size={'1.5em'} />
                </div> 
                <div>
                  Azaiba, Oman
                </div>
              </div> 

              <div className=" flex px-10 my-4 py-3 w-auto h-auto bg-[#F4F6FF] text-[#10375C] rounded-2xl font-bold text-center content-center">
                <div className="flex justify-center items-center mr-2">
                  <MdAccessTime size={'1.5em'} />
                </div> 
                <div>
                  Full Time
                </div>
              </div> 

              <div className=" flex px-10 my-4 py-3 w-auto h-auto bg-[#F4F6FF] text-[#10375C] rounded-2xl font-bold text-center content-center">
                <div className="flex justify-center items-center mr-2">
                  <MdOutlineCalendarToday size={'1.5em'} />
                </div> 
                <div>
                  21 June
                </div>
              </div>  
              <hr  className=" mt-4 mb-6"/>
              <div className=" grid place-items-center pb-3">
                <Image src="/images/latestassets.png" width="131" height="43" alt="" />
              <p className=" text-[#787878] underline font-normal text-base">Muscat Gas Company</p>
              </div>
          </div> 


 

           
        </div>

{/*         
        <div className="px-10 grid lg:grid-cols-4 "> 

        
          <div className="mx-3 drop-shadow-xl px-10 py-3 w-auto h-auto bg-white rounded content-center border-2">
            <div className=" flex content-center items-center">
              <div>  
                <h1 className=" text-[#111D5E] font-extrabold text-lg max-w-[9rem] mr-3">
                  Graphic &          Visual Designer
                </h1> 
              </div>
              <div className=" content-center items-center">
                <MdOutlineLocationOn size={'2.5em'} />
              </div>
            </div> 
            <hr className=" mt-4 mb-6"/>  
              <div className=" flex px-10 my-4 py-3 w-fit h-auto bg-[#F4F6FF] text-[#10375C] rounded-2xl font-bold text-center content-center">
                <div className="flex justify-center items-center mr-2">
                  <MdOutlineLocationOn size={'1.5em'} />
                </div> 
                <div>
                  Azaiba, Oman
                </div>
              </div> 

              <div className=" flex px-10 my-4 py-3 w-auto h-auto bg-[#F4F6FF] text-[#10375C] rounded-2xl font-bold text-center content-center">
                <div className="flex justify-center items-center mr-2">
                  <MdAccessTime size={'1.5em'} />
                </div> 
                <div>
                  Full Time
                </div>
              </div> 

              <div className=" flex px-10 my-4 py-3 w-auto h-auto bg-[#F4F6FF] text-[#10375C] rounded-2xl font-bold text-center content-center">
                <div className="flex justify-center items-center mr-2">
                  <MdOutlineCalendarToday size={'1.5em'} />
                </div> 
                <div>
                  21 June
                </div>
              </div>  
              <hr  className=" mt-4 mb-6"/>
              <div className=" grid place-items-center pb-3">
                <Image src="/images/latestassets.png" width="131" height="43" alt="" />
              <p className=" text-[#787878] underline font-normal text-base">Muscat Gas Company</p>
              </div>
          </div> 



          <div className="mx-3 drop-shadow-xl px-10 py-3 w-auto h-auto bg-white rounded content-center border-2">
            <div className=" flex content-center items-center">
              <div>  
                <h1 className=" text-[#111D5E] font-extrabold text-lg max-w-[9rem] mr-3">
                  Graphic &          Visual Designer
                </h1> 
              </div>
              <div className=" content-center items-center">
                <MdOutlineLocationOn size={'2.5em'} />
              </div>
            </div> 
            <hr className=" mt-4 mb-6"/>  
              <div className=" flex px-10 my-4 py-3 w-fit h-auto bg-[#F4F6FF] text-[#10375C] rounded-2xl font-bold text-center content-center">
                <div className="flex justify-center items-center mr-2">
                  <MdOutlineLocationOn size={'1.5em'} />
                </div> 
                <div>
                  Azaiba, Oman
                </div>
              </div> 

              <div className=" flex px-10 my-4 py-3 w-auto h-auto bg-[#F4F6FF] text-[#10375C] rounded-2xl font-bold text-center content-center">
                <div className="flex justify-center items-center mr-2">
                  <MdAccessTime size={'1.5em'} />
                </div> 
                <div>
                  Full Time
                </div>
              </div> 

              <div className=" flex px-10 my-4 py-3 w-auto h-auto bg-[#F4F6FF] text-[#10375C] rounded-2xl font-bold text-center content-center">
                <div className="flex justify-center items-center mr-2">
                  <MdOutlineCalendarToday size={'1.5em'} />
                </div> 
                <div>
                  21 June
                </div>
              </div>  
              <hr  className=" mt-4 mb-6"/>
              <div className=" grid place-items-center pb-3">
                <Image src="/images/latestassets.png" width="131" height="43" alt="" />
              <p className=" text-[#787878] underline font-normal text-base">Muscat Gas Company</p>
              </div>
          </div> 



          <div className="mx-3 drop-shadow-xl px-10 py-3 w-auto h-auto bg-white rounded content-center border-2">
            <div className=" flex content-center items-center">
              <div>  
                <h1 className=" text-[#111D5E] font-extrabold text-lg max-w-[9rem] mr-3">
                  Graphic &          Visual Designer
                </h1> 
              </div>
              <div className=" content-center items-center">
                <MdOutlineLocationOn size={'2.5em'} />
              </div>
            </div> 
            <hr className=" mt-4 mb-6"/>  
              <div className=" flex px-10 my-4 py-3 w-fit h-auto bg-[#F4F6FF] text-[#10375C] rounded-2xl font-bold text-center content-center">
                <div className="flex justify-center items-center mr-2">
                  <MdOutlineLocationOn size={'1.5em'} />
                </div> 
                <div>
                  Azaiba, Oman
                </div>
              </div> 

              <div className=" flex px-10 my-4 py-3 w-auto h-auto bg-[#F4F6FF] text-[#10375C] rounded-2xl font-bold text-center content-center">
                <div className="flex justify-center items-center mr-2">
                  <MdAccessTime size={'1.5em'} />
                </div> 
                <div>
                  Full Time
                </div>
              </div> 

              <div className=" flex px-10 my-4 py-3 w-auto h-auto bg-[#F4F6FF] text-[#10375C] rounded-2xl font-bold text-center content-center">
                <div className="flex justify-center items-center mr-2">
                  <MdOutlineCalendarToday size={'1.5em'} />
                </div> 
                <div>
                  21 June
                </div>
              </div>  
              <hr  className=" mt-4 mb-6"/>
              <div className=" grid place-items-center pb-3">
                <Image src="/images/latestassets.png" width="131" height="43" alt="" />
              <p className=" text-[#787878] underline font-normal text-base">Muscat Gas Company</p>
              </div>
          </div> 



          <div className="mx-3 drop-shadow-xl px-10 py-3 w-auto h-auto bg-white rounded content-center border-2">
            <div className=" flex content-center items-center">
              <div>  
                <h1 className=" text-[#111D5E] font-extrabold text-lg max-w-[9rem] mr-3">
                  Graphic &          Visual Designer
                </h1> 
              </div>
              <div className=" content-center items-center">
                <MdOutlineLocationOn size={'2.5em'} />
              </div>
            </div> 
            <hr className=" mt-4 mb-6"/>  
              <div className=" flex px-10 my-4 py-3 w-fit h-auto bg-[#F4F6FF] text-[#10375C] rounded-2xl font-bold text-center content-center">
                <div className="flex justify-center items-center mr-2">
                  <MdOutlineLocationOn size={'1.5em'} />
                </div> 
                <div>
                  Azaiba, Oman
                </div>
              </div> 

              <div className=" flex px-10 my-4 py-3 w-auto h-auto bg-[#F4F6FF] text-[#10375C] rounded-2xl font-bold text-center content-center">
                <div className="flex justify-center items-center mr-2">
                  <MdAccessTime size={'1.5em'} />
                </div> 
                <div>
                  Full Time
                </div>
              </div> 

              <div className=" flex px-10 my-4 py-3 w-auto h-auto bg-[#F4F6FF] text-[#10375C] rounded-2xl font-bold text-center content-center">
                <div className="flex justify-center items-center mr-2">
                  <MdOutlineCalendarToday size={'1.5em'} />
                </div> 
                <div>
                  21 June
                </div>
              </div>  
              <hr  className=" mt-4 mb-6"/>
              <div className=" grid place-items-center pb-3">
                <Image src="/images/latestassets.png" width="131" height="43" alt="" />
              <p className=" text-[#787878] underline font-normal text-base">Muscat Gas Company</p>
              </div>
          </div> 


 

           
        </div>
 */}








      </div>
    </section>
  )
}
