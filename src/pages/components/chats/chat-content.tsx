import MessageImg from "@/assets/images/message-img.png";
// import MessageImg from "@/assets/images/message1.png";
export const ChatContent = () => {
  return (
  <div className="flex flex-col gap-2">
           <div className="border border-border rounded-xl w- p-5">
        <h1 className="text-2xl">initiatives.</h1>
        <h1 className="text-xl">1.Operational Risks</h1>
        <ul className="list-disc list-inside">
          <li>
            Risk: Disruptions to our operations, such as employee turnover,
            supply chain
          </li>
          <li>issues, or</li>
          <li>
            technical failures, could disrupt business continuity and impact
            customer
          </li>
          <li>satisfaction.</li>
          <li>
            Mitigation Strategy: We develop contingency plans and redundancies
            to mitigate
          </li>
          <li>the impact</li>
        </ul>
        <p>
          of potential disruptions, such as cross-training employees,
          diversifying suppliers, and implementing backup systems and processes.
          We also maintain open communication channels and foster a culture of
          resilience and adaptability within our team to respond effectively to
          unexpected challenges.
        </p>
          </div>

      <div className="border border-border  w-[80%] rounded-xl p-5">
        <h1>
          Hi! I want to share additional analytics on your case. You can find
          all the necessary files below. Please feel free to ask anything you
          don't understand.
        </h1>
      </div>
      <div className="w-[40%] border-border px-5 py-5 flex gap-2 border rounded-xl ">
        <img src={MessageImg} alt="" />
        <div className="flex flex-col  justify-center item-center">
          <h1>Presentation</h1>
          <h1>775.4 KB</h1>
        </div>
      </div>
      <div className="w-[30%] border-border px-5 py-5 flex gap-2 border rounded-xl ">
        <img src={MessageImg} alt="" />
        <div className="flex flex-col  justify-center item-center">
          <h1>Analysis</h1>
          <h1>129.2 KB</h1>
        </div>
      </div>
      <div className="w-[50%] rounded-xl ">
      </div>
      <div className="flex justify-end ">
        <div className="bg-primary w-[20%] p-2 h-10 rounded-xl">
          <h1>Thank You 😊</h1>
        </div>
      </div>
      <div className="border-t border-gray-300 my-4"></div>
      <div className="flex justify-end ">
        <div className="bg-primary w-[35%] p-2 h-10 rounded-xl">
          <h1>Hello Salama! How are you?</h1>
        </div>
      </div>
  </div>
  );
}
