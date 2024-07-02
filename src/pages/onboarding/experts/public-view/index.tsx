import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { userAvatar2Image } from "@/assets/images";

function ExpertsPublicViewPage() {
  return (
    <div className="container bg-white rounded-xl p-3 md:p-20 ">
      <div className="flex  flex-col lg:flex-row    gap-3">
        <div className="flex w-full lg:w-[40%] lg:justify-end justify-center items-center lg:items-end content-end ">  
          <div className=" flex  flex-col md:flex-row gap-3 bg-[#F8F8F8] p-10 rounded-xl ">
            <div className="flex justify-center" >

            <Avatar image={userAvatar2Image} size="xxl" />
            </div>
            <div className="text-[10px] mt-3 text-center">
              <h1 className="font-bold">Jack Mans</h1>
              <h1>23 Apr 2024 11:22 </h1>
              <h1>Paris, France </h1>
              <span className="bg-[#6F6FEA] rounded-full px-2">
                Marketing Strategist
              </span>
            </div>
          </div>
        </div>
        <div className="flex w-full lg:w-[60%] flex-col gap-5  ">
          <div className="flex justify-center lg:justify-start">
            <Button variant="outline">Go back to Profile set up</Button>
          </div>
          <div className="bg-green-200/20 flex flex-col gap-5 rounded-xl p-3 md:p-5 w-full">
            <h1>
              Hi there,👋 I’m Jack <span className="font-bold">Mans,</span>
            </h1>
            <h1 className="text-sm">Your Marketing strategy specialist.</h1>
            <h1 className="text-sm">Here what I can do for you</h1>
            <div className="ml-10 font-bold text-sm">
              <ul style={{ listStyleType: "disc" }}>
                <li>
                  Build native software apps and AI models (mobile and web)
                </li>
                <li>Help startup founders launch products that people wants</li>
              </ul>
            </div>
            <h1 className="text-sm">
              In exchange for promise to hire i’m here to help you get best
              results!
            </h1>
            <div className="text-sm">
              <h1>My project onboarding process:</h1>
            </div>
            <div className="ml-10 text-sm">
              <ul style={{ listStyleType: "disc" }}>
                <li>Discovery сall </li>
                <li>Power-hour </li>
              </ul>
            </div>

            <div className="flex gap-2 mt-5 text-xs">
              <span className="bg-[#5EB650] text-[11px] rounded-full  px-2 py-1 text-white">
                Hourly basis
              </span>
              <span className="bg-[#5EB650]   text-[10px] rounded-full px-2 py-1 text-white">
                € (EUR)
              </span>
            </div>

            <div className="grid  grid-cols-1 lg:grid-cols-3 gap-3 ">
              <div className="bg-white flex flex-col justify-between h-32  px-5 py-3 rounded-xl">
                <h6 className="text-sm font-[500] text-muted-foreground">
                  Discovery call
                </h6>
                <h1 className="text-2xl font-bold">Free</h1>
              </div>
              <div className="bg-white flex flex-col justify-between h-32 px-5 py-3 rounded-xl">
                <h6 className="text-sm font-[500] text-muted-foreground">
                  Consultation
                </h6>
                <h1 className="text-3xl font-bold">€20</h1>
              </div>
              <div className="bg-white  flex flex-col justify-between px-5 py-3  h-32 rounded-xl">
                <h6 className="text-sm font-[500] text-muted-foreground">
                  Delivery
                </h6>
                <h1 className="text-3xl font-bold">€2,000</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExpertsPublicViewPage;
