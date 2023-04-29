import SkeletonModalContainer from "../SkeletonModals/skeletonContainer";
import SkeletonModalContent from "../SkeletonModals/skeletonContent";
import { titles } from "../constants";
import { SkeletonContentProps } from "../types";

const ModalConfirmAction = ({
  trigger,
  triggerCancel,
  triggerConfirm,
}: SkeletonContentProps) => {
  return (
    <SkeletonModalContainer trigger={trigger}>
      <SkeletonModalContent
        titleIcon={false}
        size={"small"}
        triggerCancel={triggerCancel}
        triggerConfirm={triggerConfirm}
        titleModal={titles.modals.confirmAction}
      >
        <p className="text-sm leading-6 mb-4 break-words truncate">
          Está ação não poderá ser desfeita! Tem certeza que deseja continuar?
        </p>
      </SkeletonModalContent>
    </SkeletonModalContainer>
  );
};

export default ModalConfirmAction;
