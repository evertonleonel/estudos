import SimilarAlocation from "../../ContentModals/SimilarAlocation";
import SkeletonModalContainer from "../SkeletonModals/skeletonContainer";
import SkeletonModalContent from "../SkeletonModals/skeletonContent";
import { titles } from "../constants";
import { SkeletonContentProps } from "../types";

const ModalSimilarAlocation = ({
  trigger,
  triggerConfirm,
}: SkeletonContentProps) => {
  return (
    <SkeletonModalContainer trigger={trigger}>
      <SkeletonModalContent
        titleIcon={true}
        size={"medium"}
        triggerConfirm={triggerConfirm}
        titleModal={titles.modals.similarAlocation}
      >
        <SimilarAlocation />
      </SkeletonModalContent>
    </SkeletonModalContainer>
  );
};

export default ModalSimilarAlocation;
