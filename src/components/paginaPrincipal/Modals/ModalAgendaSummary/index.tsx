import { SkeletonContentProps } from "../../types";
import SkeletonModalContainer from "../../SkeletonModals/skeletonContainer";
import SkeletonModalContent from "../../SkeletonModals/skeletonContent";
import { HomePageModalUI } from "../../constants";
import ContentSummaryAgenda from "../../ModalsContent/ContentAgendaSummary";

const ModalSummaryAgenda = ({ trigger }: SkeletonContentProps) => {
  return (
    <SkeletonModalContainer trigger={trigger}>
      <SkeletonModalContent
        size={"small"}
        titleModal={HomePageModalUI.agendaSummary.title}
      >
        <ContentSummaryAgenda />
      </SkeletonModalContent>
    </SkeletonModalContainer>
  );
};

export default ModalSummaryAgenda;
