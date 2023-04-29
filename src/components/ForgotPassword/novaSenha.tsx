import React from "react";
import { FingerPrint } from "../../assets/fingerPrint";
import { EllipseHorizontal } from "../../assets/ellipseHorizontal";

const NovaSenha = () => {
  return (
    <form className="max-w-[458px] w-full m-auto p-4 drop-shadow-md">
      <div className="w-10 h-10 flex justify-center items-center rounded-lg border border-slate-200">
        <EllipseHorizontal />
      </div>
      <h2 className="text-2xl font-bold text-left py-6 leading-6">
        Definir nova senha
      </h2>
      <p className="font-normal text-base mb-4 text-slate-500 text-ellipsis overflow-hidden  sm:break-words leading-6">
        Sua senha deve ser diferente das senhas usadas anteriormente
      </p>
      <div className="flex flex-col py-2">
        <label className="font-semibold">Senha</label>
        <input className="border p-2" />
      </div>
      <div className="flex flex-col py-2">
        <label className="font-semibold">Confirmar Senha</label>
        <input className="border p-2" />
      </div>
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

export default NovaSenha;
