import ContentAnnouncement from "../../ModalsContent/ContentAnnouncement";
import SkeletonModalContainer from "../../SkeletonModals/skeletonContainer";
import SkeletonModalContent from "../../SkeletonModals/skeletonContent";
import { HomePageModalUI } from "../../constants";
import { SkeletonContentProps } from "../../types";

const ModalAnnouncement = ({ trigger }: SkeletonContentProps) => {
  return (
    <SkeletonModalContainer trigger={trigger}>
      <SkeletonModalContent
        size="large"
        triggerConfirm={
          <button className="bg-slate-500">
            {HomePageModalUI.announcement.textButton}
          </button>
        }
        titleModal={HomePageModalUI.announcement.title}
      >
        <ContentAnnouncement />
      </SkeletonModalContent>
    </SkeletonModalContainer>
  );
};

export default ModalAnnouncement;
