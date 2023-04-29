import { SkeletonContentProps } from "../types";
import { titles } from "../constants";

import DadosDoCandidato from "../../ContentModals/Candidatura/DadosCanditato";
import EtapasCandidatura from "../../ContentModals/Candidatura/EtapasdaCandidatura";
import SkeletonModalContainer from "../SkeletonModals/skeletonContainer";
import SkeletonModalContent from "../SkeletonModals/skeletonContent";

const ModalCandidatura = ({
  trigger,
  triggerCancel,
  triggerConfirm,
}: SkeletonContentProps) => {
  return (
    <SkeletonModalContainer trigger={trigger}>
      <SkeletonModalContent
        titleIcon={false}
        size={"large"}
        titleModal={titles.modals.apllication}
        triggerCancel={triggerCancel}
        triggerConfirm={triggerConfirm}
      >
        <DadosDoCandidato />
        <EtapasCandidatura />
      </SkeletonModalContent>
    </SkeletonModalContainer>
  );
};

export default ModalCandidatura;
