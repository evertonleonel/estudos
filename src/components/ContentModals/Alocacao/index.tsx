const Alocacao = () => {
  return (
    <div>
      <h2 className="text-base font-normal mb-4 leading-6 tracking-tighter">
        Antes de continuar informe o tipo de alocação que gostaria de fazer:
      </h2>
      <div className=" flex flex-col gap-4">
        <div className="p-4 flex gap-4 rounded shadow-[0_5px_20px_rgba(134,136,161,0.15)]">
          <div className=" flex flex-col sm:flex-row gap-4">
            <div className="grid place-content-center h-14 w-14 rounded bg-purple-200">
              <p>ICON</p>
            </div>
            <div className="leading-6">
              <h3 className="text-base font-semibold ">Alocação similar</h3>
              <p className="text-sm font-normal tracking-tighter break-words">
                Utilize o perfil de outro profissional já alocado como base para
                nova alocação.
              </p>
            </div>
          </div>
        </div>
        <div className="p-4 flex gap-4 rounded shadow-[0_5px_20px_rgba(134,136,161,0.15)] ">
          <div className=" flex flex-col sm:flex-row gap-4 ">
            <div className="grid place-content-center h-14 w-14 rounded bg-green-200">
              <p>ICON</p>
            </div>
            <div className="leading-6">
              <h3 className="text-base font-semibold ">Nova Alocação</h3>
              <p className="text-sm font-normal tracking-tighter break-words">
                Utilize o perfil de outro profissional já alocado como base para
                nova alocação.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Alocacao;
