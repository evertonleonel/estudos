import imagemLogin from "../../assets/d0fd0920253927.5b16784a786fd.png";
import imagem3 from "../../assets/original-df77ef9f5e22d76a23238c665749ff46.webp";
import imagem4 from "../../assets/a3fa2d28373329.59d229ee0e889.jpg";
import empresa1 from "../../assets/empresa.avif";
import empresa2 from "../../assets/empresa2.avif";
import tecnology2 from "../../assets/tecnologia2.avif";

import { CheckIcon } from "@radix-ui/react-icons";
import { FingerPrint } from "../../assets/fingerPrint";
import NovaSenha from "./novaSenha";
import Email from "./email";
import Token from "./token";

const ForgotPassword = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full bg-white p-1 sm:p-2 md:p-4">
      <div className="w-4/5 flex flex-col h-full m-auto">
        <h1 className="text-2xl font-semibold">Recuperar Senha</h1>
        {/* <Email /> */}
        {/* <Token /> */}
        <NovaSenha />
        {/* <div className="m-auto text-lg">Ops, algo deu errado...</div> */}
        <div className="w-full flex justify-center gap-4 mb-4 ">
          <div className="w-6 h-6 rounded-full border  bg-green-700 text-white text-center opacity-50 flex items-center justify-center">
            <CheckIcon />
          </div>
          <div className="w-6 h-6 rounded-full border border-black text-xs flex  justify-center items-center">
            2
          </div>
          <div className="w-6 h-6 rounded-full border border-slate-300 flex  justify-center items-center opacity-50">
            3
          </div>
        </div>
      </div>
      <div className="relative hidden sm:block flex-1">
        <img className="w-full h-full object-cover" src={imagem4} />
        <img
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full p-2 sm:p-4 md:p-6 lg:p-10 blur object-cover"
          src={imagem4}
        />

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white  text-4xl  flex  rounded-md drop-shadow-md">
          GX2 Technology
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
