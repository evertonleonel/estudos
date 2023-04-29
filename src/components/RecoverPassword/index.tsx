import imagemLogin from "../../assets/d0fd0920253927.5b16784a786fd.png";
import imagem1 from "../../assets/18fb3545a45772f7579841dec9ee34f5.webp";
import imagem3 from "../../assets/original-df77ef9f5e22d76a23238c665749ff46.webp";
import imagem4 from "../../assets/a3fa2d28373329.59d229ee0e889.jpg";

import empresa1 from "../../assets/empresa.avif";
import empresa2 from "../../assets/empresa2.avif";
import tecnology1 from "../../assets/tecnologia.avif";
import tecnology2 from "../../assets/tecnologia2.avif";

import { CheckIcon } from "@radix-ui/react-icons";
const RecoverPassword = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full bg-gray-100">
      <div className="relative sm:block">
        <img className="w-full h-full object-cover " src={imagem4} />

        <img
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full p-2 sm:p-4 md:p-6 lg:p-10 blur  object-cover"
          src={imagem4}
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white  text-4xl  flex  rounded-md drop-shadow-md">
          GX2 Technology
        </div>
      </div>
      <div className="bg-gray-100 flex flex-col justify-center m-2">
        <form className="max-w-[458px] w-full mx-auto rounded bg-white p-4 drop-shadow-md">
          <div className="w-full flex justify-end items-center gap-4 ">
            <div className="w-6 h-6 rounded-full border  bg-green-700 text-white text-center opacity-50 flex items-center justify-center">
              <CheckIcon />
            </div>
            <div className="w-6 h-6 rounded-full border border-black  text-center">
              2
            </div>
            <div className="w-6 h-6 rounded-full border border-slate-300 text-center opacity-50">
              3
            </div>
          </div>
          <h2 className="text-xl font-bold text-center p-6 leading-6">
            Definir nova Senha
          </h2>
          <p className="font-normal text-center leading-6">
            Sua senha deve ser diferente das senhas usadas anteriormente
          </p>
          <div className="flex flex-col py-2">
            <label>Senha</label>
            <input className="border p-2" />
          </div>
          <div className="flex flex-col py-2">
            <label>Confirmar Senha</label>
            <input className="border p-2" />
          </div>
          <div className="my-5 py-2 flex gap-4 justify-end">
            <button className="text-base text-white p-2 rounded bg-rose-500">
              Voltar
            </button>
            <button className="text-base text-white p-2 rounded bg-emerald-600">
              Avançar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RecoverPassword;
