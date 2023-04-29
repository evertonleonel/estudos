import { ReactNode, useEffect, useState } from "react";
import * as RadixDropdown from "@radix-ui/react-dropdown-menu";
import {
  HamburgerMenuIcon,
  DotFilledIcon,
  CheckIcon,
  ChevronRightIcon,
} from "@radix-ui/react-icons";

interface DropdownProps {
  trigger: ReactNode;
}

const DropdownMenuAccount = ({ trigger }: DropdownProps) => {
  return (
    <RadixDropdown.Root>
      <RadixDropdown.Trigger asChild className="relative">
        {trigger}
      </RadixDropdown.Trigger>

      <RadixDropdown.Portal>
        <RadixDropdown.Content
          className="w-[193px] bg-white rounded flex flex-col place-content-center shadow-[0_5px_20px_rgba(84,86,104,0.3)] overflow-auto "
          sideOffset={12}
          alignOffset={10}
          align="center"
        >
          <div className=" h-[0px] w-[0px] border-b-[21px] border-b-white border-r-[21px]  rounded border-r-white absolute top-[-5px] right-2 origin-center rotate-45  z-10">
            {""}
          </div>
          <RadixDropdown.Group>
            <RadixDropdown.Item className="flex justify-center items-center h-12 w-12 bg-slate-200  rounded-full mx-auto mt-4 mb-1">
              <span>icon</span>
            </RadixDropdown.Item>
            <RadixDropdown.Item className="mx-2 mb-3 text-base leading-6 font-semibold  text-center select-none outline-none hover:bg-slate-200 rounded">
              FULANO
            </RadixDropdown.Item>
          </RadixDropdown.Group>

          <RadixDropdown.Separator className="h-[1px] bg-slate-200 " />

          <RadixDropdown.Group className="py-4 px-2 flex flex-col gap-2">
            <RadixDropdown.Item className="text-base leading-6 font-normal  text-center select-none outline-none hover:bg-slate-200 rounded">
              Minha Conta
            </RadixDropdown.Item>
            <RadixDropdown.Item className="text-base leading-6 font-normal  text-center select-none outline-none hover:bg-slate-200 rounded">
              Sair
            </RadixDropdown.Item>
          </RadixDropdown.Group>
          <RadixDropdown.Separator />

          {/* <RadixDropdown.Arrow className=" h-2 fill-white" /> */}
        </RadixDropdown.Content>
      </RadixDropdown.Portal>
    </RadixDropdown.Root>
  );
};

export default DropdownMenuAccount;
