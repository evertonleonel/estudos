import React from "react";
import { Envelope } from "../../assets/envelope";

const Token = () => {
  return (
    <form className="max-w-[458px] w-full m-auto p-4 drop-shadow-md">
      <div className="w-10 h-10 flex justify-center items-center rounded-lg border border-slate-200">
        <Envelope />
      </div>
      <h2 className="text-2xl font-bold text-left py-6 leading-6">
        Código de validação
      </h2>
      <p className="font-normal text-base mb-4 text-slate-500 text-ellipsis overflow-hidden  sm:break-words leading-6">
        Insira o código recebido por e-mail
      </p>
      <div className="flex flex-col py-2">
        <label className="font-semibold">Código</label>
        <div className="flex justify-between gap-2">
          <input className="border p-2 w-3/5" />
        </div>
      </div>
      <button className="p-2 rounded border">Reenviar</button>
      <div className="my-5 py-2 flex gap-4 justify-end max-[240px]:justify-center">
        <button className="text-base text-white p-2 rounded bg-rose-500">
          Voltar
        </button>
        <button className="text-base text-white p-2 rounded bg-emerald-600">
          Avançar
        </button>
      </div>
    </form>
  );
};

export default Token;
