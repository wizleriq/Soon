import Image from "next/image";
import iphone from '@/app/components/pics/iphone.png'
import { Users, Earth} from 'lucide-react'
import Lady from '@/app/components/pics/Lady.png'
import Girl from '@/app/components/pics/Girl.png'
import Boy from '@/app/components/pics/Boy.png'
import goggleone from '@/app/components/pics/goggleone.jpg'
import goggletwo from '@/app/components/pics/goggletwo.jpg'
import iphone2 from '@/app/components/pics/iphone2.png'
import iphone3 from '@/app/components/pics/iphone3.png'

export default function Home() {
  return (
    <section className="lg:w-full lg:h-[908px] lg:top-[-35268px]  lg:flex lg:flex-col lg:items-center 
    lg:pt-[34px] lg:pr-[0px]
   lg:pb-[0px] lg:pl-[0px] lg:gap-[0px] lg:bg-transparent w-full h-[1010px] top-[-87px] left-[1454px] gap-[0px] pt-[28px] pr-[0px]
      pb-[0px] pl-[0px] flex flex-col items-center bg-[#FEFAFC] ">
      {/* //  <div className="lg:w-[1440px] lg:h-[908px] lg:item-enter lg:flex lg:flex-col lg:pt-[34px] lg:pr-[0px]
   lg:pb-[0px] lg:pl-[0px] lg:gap-[0px] lg:bg-yellow-300 lg:bg-[#f04299]"> */}

      <div className="lg:w-full lg:h-[68px] lg:gap-[0px] lg:flex lg:flex-col lg:items-center
       w-full h-[68px] gap-[0px] flex flex-col items-center ">
        <h2 className="lg:text-[60px] lg:font-normal lg:leading-[67.56px] lg:text-left lg:text-[#CD1B78]
        text-[40px] font-normal leading-[67.56px] text-left text-[#CD1B78]"
          style={{ fontFamily: 'Poor Richard' }}>Coming Soon</h2>
      </div>

      {/* Phone Section */}

      <div className="lg:w-full lg:h-[853px]  lg:flex lg:flex-col
       lg:pt-[50px] lg:pr-[54px]
   lg:pb-[138px] lg:pl-[109px] lg:gap-[98.93px] lg:bg-[#fff] lg:items-center
   w-full h-[853px]  flex flex-col
       pt-[20px] pr-[50px]
   pb-[138px] pl-[50px] gap-[98.93px] bg-[#fff] items-center ">
     {/* Phone section */}

     <div className="lg:flex block lg:justify-between lg:w-full lg:h-[853px] ">
     <div className="lg:w-[232px] lg:h-[509px] 
      lg:gap-[139.76px] lg:bg-transparent 
      w-[232px] h-[379px] 
      gap-[139.76px] bg-[rgb(232,89,89)] justify-center flex-col items-center lg:mr-8">
      <Image src={iphone}  alt="" className="lg:w-[230px] lg:h-[444.12px] lg:gap-[0px] " /> 


      </div>

      {/* <div className="lg:w-[905px] lg:h-[789px] 
      lg:gap-[88px] lg:bg-[#499d5f] lg:flex  "> */}
       <div className="lg:w-[905px] lg:h-[789px] 
      lg:gap-[88px] lg:flex lg:bg-[#fff]">
    <div className="lg:flex block ">
      <div className="lg:w-[490.02px] lg:h-[549.5px] 
      lg:gap-[65.5px] ">
 <div className="lg:w-[490.02px] lg:h-[421px] 
      lg:gap-[65.5px] lg:bg-[#fff] lg:block ">
        
        {/* Text */}
        
 <div className="lg:w-[490.02px] lg:h-[86px] 
      lg:gap-[40px] lg:mb-16 lg:flex ">
        {/* Individual Text and Icons lg:bg-[#494d9d]  */}
 <div className="lg:w-[80px] lg:h-[80px] 
      lg:gap-[0px] lg:items-center justify-center lg:px-5 lg:py-6 lg:bg-[#FFF1F8] lg:rounded-full ">
        <Users  className="lg:w-[35px] lg:h-[35px]  lg:top-[3px] lg:gap-[0px] lg:text-[#CD1B78]" /> 
        </div>
 <div className="lg:w-[427.02px] lg:h-[86px] 
      lg:gap-[40px]  lg:mb-16 ">
        { /* Text One */}
        <div className="lg:block">
    <div className="lg:w-[343px] lg:h-[32px] 
      lg:gap-[0px] lg:flex lg:flex-col lg:items-center ">
         <h2 className="lg:text-[28px] lg:font-normal lg:leading-[31.53px] lg:text-left lg:text-[##474747]
        text-[40px] font-normal leading-[67.56px] text-left text-[#CD1B78]"
          style={{ fontFamily: 'Poor Richard' }}>One Platform for All Your Needs</h2>
         </div>
         <div className="lg:w-[375px] lg:h-[54px] 
      lg:gap-[0px] lg:bg-white lg:flex lg:flex-col lg:items-center ">
           <h3 className="lg:text-[20px] lg:font-normal lg:leading-[22.52px] lg:text-left lg:text-[#474747]
        text-[40px] font-normal leading-[67.56px] text-left text-[#CD1B78]"
          style={{ fontFamily: 'Poor Richard' }}>Effortlessly handle every step of your projects,
        from discovery to completion, all in one place.</h3> 
       

          </div>
        </div>

        </div>

        </div>

        {/* Individual Text Ends */}

        <div className="lg:w-[490.02px] lg:h-[109px] 
      lg:gap-[40px] lg:mb-16 lg:flex ">
        {/* Individual Text and Icons lg:bg-[#494d9d]  lg:bg-yellow-100 */}
 <div className="lg:w-[80px] lg:h-[80px] 
      lg:gap-[0px] lg:items-center justify-center lg:px-5 lg:my-3 lg:py-6 lg:bg-[#FFF1F8] lg:rounded-full ">
        <Earth className="lg:w-[35px] lg:h-[35px]  lg:top-[3px] lg:gap-[0px] lg:text-[#CD1B78]" /> 
        </div>
 <div className="lg:w-[427.02px] lg:h-[86px] 
      lg:gap-[40px]  lg:mb-16">
        { /* Text One */}
        <div className="lg:block">
        <div className="lg:w-[343px] lg:h-[32px] lg:gap-[0px] lg:flex lg:flex-col">
    <h2 className="lg:text-[28px] lg:font-normal lg:leading-[31.53px] lg:text-left text-[40px] font-normal leading-[67.56px] text-left text-[#CD1B78]"
      style={{ fontFamily: 'Poor Richard' }}>
      Connect Globally
    </h2>
  </div>
         <div className="lg:w-[375px] lg:h-[54px] 
      lg:gap-[0px] lg:bg-white lg:flex lg:flex-col lg:items-center ">
           <h3 className="lg:text-[20px] lg:font-normal lg:leading-[22.52px] lg:text-left lg:text-[#474747]
        text-[40px] font-normal leading-[67.56px] text-left text-[#CD1B78]"
          style={{ fontFamily: 'Poor Richard' }}>Reach clients from around the world looking for top talent 
          and get access to high-quality job listings tailored to your expertise.</h3> 
       

          </div>
        </div>

        </div>

        </div>

        {/* <div className="lg:w-[490.02px] lg:h-[98px] 
      lg:gap-[40px] lg:bg-red-400 lg:mb-16 lg:flex"> */}
<div className="lg:w-[490.02px] lg:h-[98px] 
      lg:gap-[40px] lg:mb-16 lg:flex">
          <div className="lg:w-[213.94px] lg:h-[76.65px] 
      lg:gap-[0px] lg:top-[9.5px] lg:left-[33px] lg:mb-16 lg:relative z-10">

        {/* Picture Starts */}
       <div className="lg:flex">
       <div className="lg:w-[76.65px] lg:h-[76.65px] 
      lg:gap-[0px] lg:bg-yellow-500 lg:rounded-full lg:border-[#E0E0E0] lg:absolute">
        <Image src={Lady} alt="" className="lg:w-[76.65px] lg:h-[76.65px] 
      lg:gap-[0px]  lg:rounded-full lg:border-[#E0E0E0] lg:object-fill" />

        </div>

        <div className="lg:w-[76.65px] lg:h-[76.65px] 
      lg:gap-[0px] lg:bg-red-500 lg:rounded-full lg:border-[#E0E0E0] lg:relative lg:left-[68px]">
          <Image src={Girl} alt="" className="lg:w-[76.65px] lg:h-[76.65px] 
      lg:gap-[0px]  lg:rounded-full lg:border lg:border-[#E0E0E0] lg:object-contain" />
        </div>

        <div className="lg:w-[76.65px] lg:h-[76.65px] 
      lg:gap-[0px] lg:bg-blue-500 lg:rounded-full  lg:border-[#E0E0E0] lg:relative  lg:left-[60px]">
          <Image src={Boy} alt="" className="lg:w-[76.65px] lg:h-[76.65px] 
      lg:gap-[0px]  lg:rounded-full lg:border-[#E0E0E0]" />

        </div>
        {/* Image Ends */}
           
        { /* side */}
 {/* <div className="lg:w-[257px] lg:h-[66px] lg:top-[15.25px] lg:left-[204.99px]
      lg:gap-[0px] lg:rounded-md lg:bg-yellow-500">
          h3ej
         </div> */}
         { /* side ends */}
       </div>
        </div>         
        <div className="lg:w-[257px] lg:h-[66px] lg:rounded-md bg-[#E0E0E0] lg:absolute lg:mt-[15px] lg:right-[414px] flex justify-center items-center">
        <div className="lg:w-[213px] lg:h-[45px] ">
        {/* Text */}
      <div className="lg:w-[213px] lg:h-[23px] lg:top-[25.25px] lg:left-[248.99px]
      lg:gap-[0px] flex items-center  ">
           <h3 className="lg:text-[15px] lg:font-normal lg:leading-[16.89px] lg:text-left lg:text-[#141416]
        text-[12px] font-normal leading-[14.00px] text-left text-[#CD1B78]"
          style={{ fontFamily: 'Poor Richard' }}>More than 100+ users worldwide </h3>
        </div>
      

        <div className="lg:w-[213px] lg:h-[23px] lg:top-[25.25px] lg:left-[248.99px]  flex items-center">
  <h3 className="lg:text-[12px] lg:font-normal lg:leading-[13.51px] text-center text-[#141416]"
      style={{ fontFamily: 'Poor Richard' }}>
    4.9 ratings in app store and playstore
  </h3>
</div>

  
         </div>
            {/* Text Ends */}
         </div>

        </div>
        
        <section className="lg:w-[417px] lg:h-[63px] lg:gap-[16px] lg:flex lg:justify-between lg:items-center
   gap-[16px] flex justify-between lg:mx-auto">
     <div className="lg:w-[209px] lg:h-[61px] lg:gap-[0px] w-[120px] h-[36.24px] gap-[0px] ">
   <Image src={goggleone} alt="" className="lg:rounded-md"/>
      </div>
     <div className="lg:w-[193px] lg:h-[63px] lg:gap-[0px] w-[120px] h-[36.24px] gap-[0px] ">
     <Image src={goggletwo} alt=""  className="lg:rounded-md"/>
      </div>
        </section>
    
        {/* Text Ends */}

     </div>
        </div>
        <section className="lg:w-[327px] lg:h-[789px] flex flex-col">
        <div className="lg:w-[343px] lg:h-[789px]  mt-auto">
          {/* phone section*/ }
          <div>
          <div className="lg:w-[200px] lg:h-[386.19px]  lg:gap-[0px] lg:absolute">
            <Image src={iphone2} alt="" />
            </div>
            <div className="lg:w-[211.15px] lg:h-[391.84px] lg:gap-[0px] transform lg:relative 
            lg:top-[115px] lg:left-[105px]"  style={{ transform: 'rotate(-340.22deg)' }}>
           <Image src={iphone3}alt="" />
            </div>
          </div>
    </div>

</section>
      
      </div> 

      {/*phone 2*/}


  {/*phone 2 Ends */}

      </div>
      </div>
</div>
  
    </section>
  );
}
