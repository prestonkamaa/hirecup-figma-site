import Image from "next/image";

export default function Blog() {
  return (


    <section className="container mx-auto mb-20 px-6"> 

       
        <h1 className="  px-6 mx-auto max-w-[40rem] text-center font-black text-4xl text-[#10375C]">Read our latest blog and 
        <span className=" text-[#127681]"> get update about job and employers</span></h1>

      
        <div className=" grid lg:grid-cols-2 pt-20"> 
        
          <div className=" justify-center px-6">
            <Image src="/images/blog.png" width="588" height="325" alt="" /> 
            <h1 className=" font-bold text-2xl text-black pt-3 max-w-lg">
              New Travel dolor sit amet, consectetur adipiscing elit. Ac natoque mi morbi 
            </h1> 
            <p className="pb-8 text-[rgba(0,0,0,0.6)] text-lg lg:max-w-[37rem] pt-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat non elementum facilisis tristique turpis. Ullamcorper sit risus porta conval sollicitudin. Condimentum non in sit pellentesque tristique. A nibh malesuada vitae interdum lectus nibh egestas aenean
            </p>  
            <button type="button" className=" drop-shadow-2xl space-x-2 items-center text-white bg-[#127681] hover:bg-[#0e5a63] focus:outline-none focus:ring-4 focus:ring-blue-300 font-bold rounded-full text-lg px-10 py-2.5 text-center mr-10 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex">
              Read Full Post
            </button> 
          </div> 

          <div className=" px-6"> 
            <div className=" flex content-center items-center">
              <div  className="pr-5">
                <Image src="/images/applynow.png" width="100" height="100" alt="" />  
              </div>
              <div>
                <h1 className=" font-bold text-2xl text-[#636363] max-w-[15rem] hover:text-black">
                  New Travel dolor sit amet, consectetur adipiscing elit 
                </h1> 
              </div>  
            </div>
            <hr className=" my-4"/>  

            <div className=" flex content-center items-center">
              <div  className="pr-5">
                <Image src="/images/applynow.png" width="100" height="100" alt="" />  
              </div>
              <div>
                <h1 className=" font-bold text-2xl text-[#636363] max-w-[15rem] hover:text-black">
                  New Travel dolor sit amet, consectetur adipiscing elit 
                </h1>  
              </div>
            </div>
            <hr className=" my-4" />

            <div className=" flex content-center items-center">
              <div  className="pr-5">
                <Image src="/images/applynow.png" width="100" height="100" alt="" />  
              </div>
              <div>
                <h1 className=" font-bold text-2xl text-[#636363] max-w-[15rem] hover:text-black">
                  New Travel dolor sit amet, consectetur adipiscing elit 
                </h1>  
              </div> 
            </div>
            <hr className=" my-4" />

            <div className=" flex content-center items-center">
              <div  className="pr-5">
                <Image src="/images/applynow.png" width="100" height="100" alt="" />  
              </div>
              <div>
                <h1 className=" font-bold text-2xl text-[#636363] max-w-[15rem] hover:text-black">
                  New Travel dolor sit amet, consectetur adipiscing elit 
                </h1>  
              </div>
            </div>
          </div>  

        </div> 



    </section> 


  )
}
