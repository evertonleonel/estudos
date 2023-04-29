import { ReactNode } from "react";

export interface SkeletonContentProps {
  trigger: ReactNode;
  triggerConfirm?: ReactNode;
  triggerCancel?: ReactNode;
  bottomButton?: ReactNode;
}

export type SkeletonContainerProps = {
  trigger: ReactNode;
  children: ReactNode;
};
