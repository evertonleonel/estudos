import { Cross1Icon, ArrowLeftIcon } from "@radix-ui/react-icons";

const DadosDoCandidato = () => {
  return (
    <div className=" p-6 gap-8 rounded-lg  shadow-[0_5px_20px_rgba(134,136,161,0.15)] overflow-auto">
      <div className="flex flex-col gap-6 w-full">
        <h3 className="text-base font-semibold leading-6 truncate">
          Dados do candidato
        </h3>
        <div className=" grid gap-6 sm:flex  w-full" aria-label="Fechar modal">
          <div className="min-w-[128px] min-h-[128px] bg-slate-400 flex items-center justify-around  rounded-full ">
            x
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6  flex-1  ">
            <div className="flex flex-col gap-1 mx-auto  w-full ">
              <h3 className="text-sm font-semibold leading-6 truncate">Nome</h3>
              <p className=" text-sm font-normal leading-6 text-gray-400  truncate">
                Nome do Candidato
              </p>
            </div>
            <div className="flex flex-col gap-1  mx-auto  w-full">
              <h3 className="text-sm font-semibold leading-6 truncate">
                Tempo de experiência
              </h3>
              <p className=" text-sm font-normal leading-6 truncate text-gray-400">
                3 anos
              </p>
            </div>
            <div className="flex flex-col gap-1 mx-auto  w-full">
              <h3 className="text-sm font-semibold leading-6 truncate">
                Última empresa
              </h3>
              <p className=" text-sm font-normal leading-6  text-gray-400 truncate">
                Nome da Empresa
              </p>
            </div>
            <div className="flex flex-col gap-1  mx-auto  w-full">
              <h3 className="text-sm font-semibold leading-6 truncate">
                Idade
              </h3>
              <p className=" text-sm font-normal leading-6  text-gray-400 truncate">
                26 anos
              </p>
            </div>
            <div className="flex flex-col gap-1 mx-auto  w-full">
              <h3 className="text-sm font-semibold leading-6 truncate">
                Último cargo
              </h3>
              <p className=" text-sm font-normal leading-6 truncate text-gray-400">
                Desenvolvedor Java
              </p>
            </div>
            <div className="flex flex-col gap-1 mx-auto  w-full ">
              <h3 className="text-sm font-semibold leading-6 truncate">
                Currículo
              </h3>
              <a
                href="#"
                className=" text-sm font-normal leading-6  text-gray-400 truncate"
              >
                Ver currículo
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="my-8 h-full w-full">
        <h3 className="text-base font-semibold leading-6 truncate mb-3 ">
          Apresentação
        </h3>
        <p className="text-sm max-[260px]:truncate font-normal  leading-6  break-words">
          Apresentação aqui... Lorem ipsum dolor sit amet, con ectetur
          adipiscing elit, sed doeiusmo dtemporincid id ut labore et dolore
          magna aliqua eiusmod tempor incidid ut. Lorem ipsum dolor sit amet,
          con ect etura dipiscing elit, sed do eiusmodtemp orincidid ut labore
          et dolore magna aliqua eiusmod Lorem
        </p>
      </div>
    </div>
  );
};

export default DadosDoCandidato;
