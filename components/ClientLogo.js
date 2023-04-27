import Image from "next/image"

export default function ClientLogo() {
  return (
    <section className=" container mx-auto pt-20 px-6"> 
        <div className=" grid lg:grid-cols-5 md:grid-cols-3 xs:grid-cols-2 sm:grid-cols-2  justify-center lg:max-w-5xl mx-auto"> 
            <div className=" ">
                <Image src="/images/client1.png" alt="" width="175" height="72" />
            </div> 
            <div className=" ">
                <Image src="/images/client2.png" alt="" width="175" height="72" />
            </div> 
            <div className=" ">
                <Image src="/images/client3.png" alt="" width="175" height="72" />
            </div> 
            <div className=" ">
                <Image src="/images/client4.png" alt="" width="175" height="72" />
            </div> 
            <div className=" ">
                <Image src="/images/client5.png" alt="" width="175" height="72" />
            </div> 
        </div>
    </section>
  )
}
