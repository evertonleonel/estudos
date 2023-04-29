import { Cross1Icon } from "@radix-ui/react-icons";
import SkeletonModalContainer from "../../SkeletonModals/skeletonContainer";
import SkeletonModalContent from "../../SkeletonModals/skeletonContent";
import { HomePageModalUI } from "../../constants";
import { SkeletonContentProps } from "../../types";

const ModalHumor = ({ trigger }: SkeletonContentProps) => {
  const existe = "random";
  return (
    <SkeletonModalContainer trigger={trigger}>
      <SkeletonModalContent
        size="medium"
        triggerConfirm={
          <button className="bg-slate-500">
            {HomePageModalUI.humor.textButton}
          </button>
        }
        titleModal={HomePageModalUI.humor.title}
      >
        <div className="space-y-8">
          <div className="w-full flex gap-4 max-[360px]:justify-center  justify-around sm:justify-between items-center  flex-wrap">
            <div className="h-14 w-14 flex items-center  justify-center  bg-blue-400">
              <Cross1Icon />
            </div>
            <div className="h-14 w-14 flex items-center  justify-center  bg-blue-400">
              <Cross1Icon />
            </div>
            <div className="h-14 w-14 flex items-center  justify-center  bg-blue-400">
              <Cross1Icon />
            </div>
            <div className="h-14 w-14 flex items-center  justify-center  bg-blue-400">
              <Cross1Icon />
            </div>
            <div className="h-14 w-14 flex items-center  justify-center  bg-blue-400">
              <Cross1Icon />
            </div>
          </div>

          <div className="w-full">
            <textarea
              className="p-4 w-full text-sm font-normal leading-6 border border-gray-100 rounded bg-[#F8F9FA] resize-none outline-none break-words"
              placeholder={HomePageModalUI.humor.placeholder}
            />
          </div>
        </div>
      </SkeletonModalContent>
    </SkeletonModalContainer>
  );
};

export default ModalHumor;
