import { PropsWithChildren, ReactNode } from "react";
import { Cross1Icon, ArrowLeftIcon } from "@radix-ui/react-icons";
import * as RadixPopover from "@radix-ui/react-popover";
import * as RadixDialog from "@radix-ui/react-alert-dialog";

interface GenericComponentProps extends PropsWithChildren<{}> {}

const modalVariants = {
  title: {
    small: `text-sm font-semibold leading-6`,
    medium: `text-base min-[360px]:text-lg sm:text-xl font-semibold leading-6`,
    large: ` text-base min-[360px]:text-lg sm:text-xl font-semibold leading-6`,
  },
  width: {
    small: `max-w-[530px]`,
    medium: `max-w-[700px]`,
    large: `max-w-[819px]`,
  },
  gap: {
    small: `gap-4`,
    medium: `gap-6`,
    large: `gap-6`,
  },
  responsiveButton: {
    small: `max-[180px]:justify-center max-[180px]:gap-2`,
    medium: `max-[279px]:flex-col max-[180px]:gap-2 max-[279px]:items-center`,
    large: `max-[279px]:flex-col max-[180px]:gap-2 max-[279px]:items-center`,
  },
};

interface ModalProps {
  triggerCancel?: ReactNode;
  triggerConfirm: ReactNode;
  titleModal: string;
  titleIcon?: boolean;
  buttons?: ReactNode;
  size: "small" | "medium" | "large";
}

const SkeletonModalContent = ({
  children,
  titleIcon,
  titleModal,
  buttons,
  size,
  triggerConfirm,
  triggerCancel,
}: GenericComponentProps & ModalProps) => {
  const triggerButtonsExist = triggerCancel || triggerConfirm;
  const confirmButtonsExist = triggerConfirm || buttons;

  return (
    <div
      className={`flex flex-col bg-white p-6  ${modalVariants.width[size]} ${modalVariants.gap[size]} rounded-lg w-full `}
    >
      <header
        className={`flex justify-between w-full ${modalVariants.title[size]}`}
      >
        <div className="flex justify-center items-center gap-3 ">
          {titleIcon && size === "medium" && (
            <div className="hidden min-[300px]:block">
              <ArrowLeftIcon fontSize={16} />
            </div>
          )}

          <h1 className="text-left">{titleModal}</h1>
        </div>

        <RadixPopover.Root>
          <RadixDialog.Cancel asChild>
            <RadixPopover.Close
              className=" rounded-full h-[30px] w-[30px] inline-flex items-center justify-center text-gray-400  hover:bg-slate-200 hover:shadow-[0_0_0_2px] focus:shadow-slate-200 outline-none cursor-default"
              aria-label="Close"
            >
              <Cross1Icon />
            </RadixPopover.Close>
          </RadixDialog.Cancel>
        </RadixPopover.Root>
      </header>
      {size === "small" && <div className="w-full h-[1px] bg-slate-500"></div>}
      <div>{children}</div>

      {triggerButtonsExist && (
        <div
          className={`flex ${modalVariants.responsiveButton[size]} justify-end gap-4 mt-4`}
        >
          {triggerCancel && (
            <RadixDialog.Cancel asChild>{triggerCancel}</RadixDialog.Cancel>
          )}
          {confirmButtonsExist && (
            <RadixDialog.Action asChild>
              {confirmButtonsExist}
            </RadixDialog.Action>
          )}
        </div>
      )}
    </div>
  );
};

export default SkeletonModalContent;
