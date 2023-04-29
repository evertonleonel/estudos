// import SkeletonModal from "../SkeletonModals/skeletonContent";
// import * as RadixPopover from "@radix-ui/react-popover";
// import * as RadixDialog from "@radix-ui/react-alert-dialog";
// import DadosDoCandidato from "../../ContentModals/Candidatura/DadosCanditato";
// import EtapasCandidatura from "../../ContentModals/Candidatura/EtapasdaCandidatura";
// import { ModalApplicationsProps } from "../types";
// import { titles } from "../constants";

// const ModalCandidatura = ({
//   trigger,
//   size,
//   bottomButton,
//   titleIcon,
// }: ModalApplicationsProps) => {
//   return (
//     <RadixDialog.Root>
//       <RadixDialog.Trigger asChild>{trigger}</RadixDialog.Trigger>

//       <RadixDialog.Portal>
//         <RadixDialog.Content className="p-4 fixed top-0 left-0 right-0 bottom-0 flex items-start justify-center overflow-auto  focus:outline-none">
//           <SkeletonModal
//             titleIcon={titleIcon}
//             size={size}
//             buttons={bottomButton}
//             titleModal={titles.modals.apllication}
//           >
//             <DadosDoCandidato />
//             <EtapasCandidatura />
//           </SkeletonModal>
//         </RadixDialog.Content>
//       </RadixDialog.Portal>
//     </RadixDialog.Root>
//   );
// };

// export default ModalCandidatura;
