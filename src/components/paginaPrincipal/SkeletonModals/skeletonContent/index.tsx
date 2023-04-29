import { PropsWithChildren, ReactNode } from "react";
import { Cross1Icon, ArrowLeftIcon } from "@radix-ui/react-icons";
import * as RadixPopover from "@radix-ui/react-popover";
import * as RadixDialog from "@radix-ui/react-alert-dialog";

interface GenericComponentProps extends PropsWithChildren<{}> {}

const modalVariants = {
  title: {
    small: `text-sm sm:text-base font-semibold leading-6`,
    medium: `text-sm sm:text-base font-semibold leading-6`,
    large: `text-base sm:text-lg md:text-xl lg:text-2xl font-semibold leading-6`,
  },
  width: {
    small: `max-w-[356px]`,
    medium: `max-w-[504px]`,
    large: `max-w-[548px]`,
  },
  gap: {
    small: `gap-6`,
    medium: `gap-6`,
    large: `gap-8`,
  },
  shadow: {
    small: `shadow-[0px_5px_20px_rgba(84,86,104,0.3)]`,
    medium: `shadow-[0px_5px_20px_rgba(84,86,104,0.3)]`,
    large: ``,
  },
  padding: {
    small: `p-6`,
    medium: `p-6 sm:p-8`,
    large: `p-6`,
  },
};

interface ModalProps {
  triggerConfirm?: ReactNode;
  titleModal: string;
  buttons?: ReactNode;
  size: "small" | "medium" | "large";
  gap?: boolean;
}

const SkeletonModalContent = ({
  children,
  titleModal,
  triggerConfirm,
  size,
  gap,
}: GenericComponentProps & ModalProps) => {
  return (
    <div
      className={`flex flex-col  bg-white ${modalVariants.padding[size]}  ${
        modalVariants.width[size]
      } ${gap ? "gap-1" : modalVariants.gap[size]} ${
        modalVariants.shadow[size]
      }  rounded-lg w-full relative`}
    >
      <header
        className={`flex justify-between items-center w-full ${modalVariants.title[size]} gap-1 box-border`}
      >
        <h2 className="text-left truncate">{titleModal}</h2>

        <RadixPopover.Root>
          <RadixDialog.Cancel asChild>
            <RadixPopover.Close
              className="rounded-full h-[30px] w-[30px] inline-flex items-center justify-center text-gray-400 hover:bg-slate-200 hover:shadow-[0_0_0_2px] focus:shadow-slate-200 outline-none cursor-default"
              aria-label="Close"
            >
              <Cross1Icon />
            </RadixPopover.Close>
          </RadixDialog.Cancel>
        </RadixPopover.Root>
      </header>
      <div>{children}</div>
      {triggerConfirm && (
        <div className="flex justify-end">
          <RadixDialog.Action asChild>{triggerConfirm}</RadixDialog.Action>
        </div>
      )}
    </div>
  );
};

export default SkeletonModalContent;
