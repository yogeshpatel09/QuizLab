import React from "react";

function Chat() {
  return (
    <div className="flex w-full min-h-screen flex-col gap-8 py-10 px-4 md:py-20 md:px-16 lg:px-32">
    <div>
      <h1 className="font-semibold text-xl md:text-2xl">
        What is the capital of France?
      </h1>
    </div>
  
    <div className="flex gap-1 flex-col">
      <div className="flex gap-2">
        <p className="font-bold">You</p>
        <span className="text-base md:text-lg  text-cyan-500">12:01 PM</span>
      </div>
      <p className="text-lg md:text-xl">What is capital of France?</p>
    </div>
  
    <div className="flex flex-col gap-2">
      <div className="md:px-14">
        <p className="text-cyan-500">AI</p>
      </div>
      <div className="flex gap-2">
        <img className="h-8 md:h-12 " src="/logoai.png" alt="" />
        <p className="text-sm md:text-lg py-2 px-4 bg-[#e8edf3] rounded-lg">
          The capital of France is Paris.
        </p>
      </div>
    </div>
  
    <div className="flex gap-1 flex-col">
      <div className="flex gap-2">
        <p className="font-bold">You</p>
        <span className="   text-base     md:text-lg  text-cyan-500">12:02 PM</span>
      </div>
      <p className="text-lg md:text-xl">Thank You</p>
    </div>
  
    <div className="flex flex-col gap-2">
      <div className="md:px-14">
        <p className="text-cyan-500">AI</p>
      </div>
      <div className="flex gap-2">
        <img className="h-8 md:h-12" src="/logo2.png" alt="" />
        <p className="text-sm md:text-lg py-2 px-4 bg-[#e8edf3] rounded-lg">
          You're Welcome
        </p>
      </div>
    </div>
  
    <div>
      <button className="w-full md:w-auto font-semibold bg-[#e8edf3] px-10 md:px-40 py-2 rounded-lg">
        Download audio
      </button>
    </div>
  </div>
  
  );
}

export default Chat;
