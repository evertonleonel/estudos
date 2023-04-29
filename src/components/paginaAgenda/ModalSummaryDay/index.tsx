import SkeletonModalContainer from "../../paginaPrincipal/SkeletonModals/skeletonContainer";
import SkeletonModalContent from "../../paginaPrincipal/SkeletonModals/skeletonContent";
import { SkeletonContentProps } from "../../paginaPrincipal/types";

const defaultStyleCard = `w-full h-10 px-4 py-2  flex justify-between items-center`;

const statusColor = {
  feedback:
    "bg-green-100 text-green-700 hover:bg-green-300 hover:text-green-700",
  fup: "bg-purple-100 text-purple-700 hover:bg-purple-300 hover:text-purple-700",
  checkpoint:
    "bg-orange-100 text-orange-700 hover:bg-orange-300 hover:text-orange-700",
};

const ModalSummaryDay = ({ trigger }: SkeletonContentProps) => {
  return (
    <SkeletonModalContainer trigger={trigger}>
      <SkeletonModalContent
        gap={true}
        size={"small"}
        titleModal={"Resumo do dia"}
      >
        <div className="flex flex-col gap-6">
          <h3 className="text-xs font-normal leading-6">
            Segunda-feira, 23 de janeiro
          </h3>

          <div className="flex flex-col gap-2 text-xs font-normal leading-6">
            <div className={`${defaultStyleCard} ${statusColor.feedback}`}>
              <p>Feedback-10:30h</p>
              <a href="#" className="font-medium text-blue-700">
                ver
              </a>
            </div>
            <div className={`${defaultStyleCard} ${statusColor.fup}`}>
              <p>Fup-14:15h</p>
              <a href="#" className="font-medium text-blue-700">
                ver
              </a>
            </div>
            <div className={`${defaultStyleCard} ${statusColor.feedback}`}>
              <p>Feedback-10:30h</p>
              <a href="#" className="font-medium text-blue-700">
                ver
              </a>
            </div>
            <div className={`${defaultStyleCard} ${statusColor.checkpoint}`}>
              <p>Feedback-10:30h</p>
              <a href="#" className="font-medium text-blue-700">
                ver
              </a>
            </div>
          </div>
        </div>
      </SkeletonModalContent>
    </SkeletonModalContainer>
  );
};

export default ModalSummaryDay;
