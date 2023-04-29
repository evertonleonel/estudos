import SkeletonModalContainer from "../../paginaPrincipal/SkeletonModals/skeletonContainer";
import SkeletonModalContent from "../../paginaPrincipal/SkeletonModals/skeletonContent";

import { SkeletonContentProps } from "../../paginaPrincipal/types";

const ModalAgendar = ({ trigger }: SkeletonContentProps) => {
  return (
    <SkeletonModalContainer trigger={trigger}>
      <SkeletonModalContent
        size="large"
        triggerConfirm={<button className="bg-slate-500">Salvar</button>}
        titleModal="Agendar"
      >
        <div className="w-full flex flex-col gap-6 truncate">
          <div className="w-full flex flex-col gap-2 font-normal leading-6">
            <label className="w-full font-semibold" htmlFor="">
              Título do agendamento
            </label>
            <input className="w-full px-4 py-3 bg-white rounded  border border-gray-300 outline-none" />
          </div>
          <div className="w-full flex flex-col gap-2 font-normal leading-6">
            <label className="w-full font-semibold" htmlFor="">
              Data - Hora
            </label>
            <input
              type="date"
              className="w-full px-4 py-3 bg-white rounded  border border-gray-300 outline-none"
            />
          </div>
          <div className="w-full flex flex-col gap-2 font-normal leading-6">
            <label className="w-full font-semibold" htmlFor="">
              Link de acesso
            </label>
            <input className="w-full px-4 py-3 bg-white rounded  border border-gray-300 outline-none" />
          </div>
        </div>
      </SkeletonModalContent>
    </SkeletonModalContainer>
  );
};

export default ModalAgendar;
