const ContentSummaryAgenda = () => {
  return (
    <div className="flex flex-col space-y-4 text-xs font-semibold lending-6  w-full">
      <div className="flex flex-col space-y-1">
        <h3>Sobre</h3>
        <p className="font-normal ">Feedback sobre o profissional X</p>
      </div>
      <div className="flex flex-col space-y-2">
        <h3>Participantes</h3>
        <div className="flex flex-wrap gap-2">
          <span>ICON</span>
          <span>ICON</span>
        </div>
      </div>
      <div className="flex flex-col space-y-1">
        <h3>Data - Hora</h3>
        <p className="font-normal ">
          Segunda-feira, 5 de janeiro - 10:00 até 11:15
        </p>
      </div>
      <div className="flex flex-col space-y-1">
        <h3>Link de acesso</h3>
        <a
          href="#"
          target="_blank"
          className=" break-words text-blue-400 hover:bg-blue-200"
        >
          https://meet.google.com/dzs-qshm-fyb?authuser=0
        </a>
      </div>
    </div>
  );
};

export default ContentSummaryAgenda;
