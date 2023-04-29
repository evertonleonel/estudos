import NewSimilarAlocation from "../../ContentModals/NewSimilarAlocation";
import SkeletonModalContainer from "../SkeletonModals/skeletonContainer";
import SkeletonModalContent from "../SkeletonModals/skeletonContent";
import { titles } from "../constants";
import { SkeletonContentProps } from "../types";

const ModalNewSimilarAlocation = ({
  trigger,
  triggerCancel,
  triggerConfirm,
}: SkeletonContentProps) => {
  return (
    <SkeletonModalContainer trigger={trigger}>
      <SkeletonModalContent
        titleIcon={true}
        size={"medium"}
        triggerCancel={triggerCancel}
        triggerConfirm={triggerConfirm}
        titleModal={titles.modals.similarAlocation}
      >
        <NewSimilarAlocation />
      </SkeletonModalContent>
    </SkeletonModalContainer>
  );
};

export default ModalNewSimilarAlocation;
