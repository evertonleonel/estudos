import * as RadixDialog from "@radix-ui/react-alert-dialog";
import { SkeletonContainerProps } from "../../types";

const SkeletonModalContainer = ({
  trigger,
  children,
}: SkeletonContainerProps) => {
  return (
    <RadixDialog.Root>
      <RadixDialog.Trigger asChild>{trigger}</RadixDialog.Trigger>
      <RadixDialog.Portal>
        <RadixDialog.Content className="p-4 fixed  top-0 left-0 right-0 bottom-0 flex items-start justify-center overflow-auto  focus:outline-none box-border">
          {children}
        </RadixDialog.Content>
      </RadixDialog.Portal>
    </RadixDialog.Root>
  );
};

export default SkeletonModalContainer;
