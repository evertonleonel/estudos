import React from "react";

const MyAccount = () => {
  return (
    <section className="flex flex-col items-center justify-center  bg-blue-300 w-full h-full">
      <h1 className="max-w-3xl w-full m-auto  bg-cyan-400">Minha Conta</h1>
      <div className="space-y-8 p-6 m-auto bg-white max-w-3xl w-full max-h-[760px] rounded-lg">
        <div className="bg-yellow-400 text-xl font-semibold tracking-normal">
          <h2>Dados Pessoais</h2>
        </div>
        <div className="bg-purple-400 h-[88px] w-[88px]">
          <p>Imagem</p>
        </div>

        <form className="bg-red-400 ">
          {/* User */}
          <div></div>

          <h2>Senha</h2>
          {/* Password */}
          <div></div>
        </form>
        <button className="px-[34px] py-3 font-semibold text-end bg-blue-400">
          Salvar
        </button>
      </div>
    </section>
  );
};

export default MyAccount;
