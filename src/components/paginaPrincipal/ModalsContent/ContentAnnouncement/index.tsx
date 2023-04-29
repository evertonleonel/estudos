const ContentAnnouncement = () => {
  return (
    <div className="flex flex-col gap-6">
      <div className="w-full flex flex-col gap-2 text-sm font-semibold leading-6">
        <label className="truncate">Selecione um tipo de perfil</label>
        <input
          placeholder="Profissionais"
          className="py-3 px-4 font-normal rounded border-[1px] outline-none"
        />
      </div>
      <div className="w-full flex flex-col gap-2 text-sm font-semibold leading-6">
        <label className="truncate">Selecione um gestor</label>
        <input
          placeholder="Profissionais"
          className="py-3 px-4 font-normal rounded border-[1px] outline-none"
        />
      </div>
      <div className="w-full flex flex-col gap-2 text-sm font-semibold leading-6">
        <label className="truncate">Título do comunicado</label>
        <input
          placeholder="Profissionais"
          className="py-3 px-4 font-normal rounded border-[1px] outline-none"
        />
      </div>
      <div className="w-full flex flex-col gap-2 text-sm font-semibold leading-6">
        <label className="truncate">Comunicado</label>
        <textarea className="p-4 w-full h-[144px]  font-normal rounded border-[1px] outline-none resize-none">
          Escreva seu comunicado aqui...
        </textarea>
      </div>
    </div>
  );
};

export default ContentAnnouncement;
