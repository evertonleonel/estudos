import { titles } from "../constants";
import { SkeletonContentProps } from "../types";

import Alocacao from "../../ContentModals/Alocacao";
import SkeletonModalContainer from "../SkeletonModals/skeletonContainer";
import SkeletonModalContent from "../SkeletonModals/skeletonContent";

const ModalAlocacao = ({
  trigger,
  triggerConfirm,
  triggerCancel,
}: SkeletonContentProps) => {
  return (
    <SkeletonModalContainer trigger={trigger}>
      <SkeletonModalContent
        titleIcon={false}
        size={"medium"}
        triggerConfirm={triggerConfirm}
        triggerCancel={triggerCancel}
        titleModal={titles.modals.alocation}
      >
        <Alocacao />
      </SkeletonModalContent>
    </SkeletonModalContainer>
  );
};

export default ModalAlocacao;
