import React from "react";

const EtapasCandidatura = () => {
  return (
    <div className=" p-6 gap-8 rounded-lg  shadow-[0_5px_20px_rgba(134,136,161,0.15)] mt-6 overflow-auto">
      <div className="flex flex-col gap-6 w-full">
        <h3 className="text-base font-semibold leading-6 truncate">
          Etapas da candidatura
        </h3>
        <div className="grid grid-rows-3 gap-4 text-sm leading-6 overflow-y-auto">
          <div className="flex  flex-col justify-between items-center p-2 min-[420px]:flex-row min-[420px]:justify-between min-[420px]:items-center h-[72px]  sm:p-6 rounded-lg  bg-blue-400">
            <div className="flex gap-[18px]">
              <span>icon</span>
              <p className="font-semibold ">Entrevista</p>
            </div>
            <div className="flex gap-[22px] ">
              <p className="font-normal text-gray-500">Messsage</p>
              <span>icon</span>
            </div>
          </div>
          <div className="flex  flex-col justify-between items-center p-2 min-[420px]:flex-row min-[420px]:justify-between min-[420px]:items-center h-[72px]  sm:p-6 rounded-lg  bg-red-400">
            <div className="flex gap-[18px]">
              <span>icon</span>
              <p className="font-semibold ">Entrevista</p>
            </div>
            <div className="flex gap-[22px]">
              <p className="font-normal text-gray-500">Messsage</p>
              <span>icon</span>
            </div>
          </div>
          <div className="flex  flex-col justify-between items-center p-2 min-[420px]:flex-row min-[420px]:justify-between min-[420px]:items-center h-[72px]  sm:p-6 rounded-lg   bg-yellow-400">
            <div className="flex gap-[18px]">
              <span>icon</span>
              <p className="font-semibold ">Entrevista</p>
            </div>
            <div className="flex gap-[22px]">
              <p className="font-normal text-gray-500">Messsage</p>
              <span>icon</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EtapasCandidatura;
