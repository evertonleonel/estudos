import { HTMLAttributes, ReactNode, forwardRef } from "react";
import * as RadixSelect from "@radix-ui/react-select";

import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@radix-ui/react-icons";

interface SelectItemProps extends HTMLAttributes<HTMLDivElement> {
  value?: string;
}

const NewSimilarAlocation = () => {
  return (
    <div className="grid grid-row-3 gap-6 overflow-x-auto">
      <div className="text-sm leading-6 flex flex-col gap-2">
        <p className="font-semibold">Cargo buscado</p>
        <div className="max-w-[652px] h-[48px]">
          <RadixSelect.Root>
            <RadixSelect.Trigger className="inline-flex items-center justify-end px-[20px] rounded   w-full h-full bg-white font-normal hover:bg-slate-200 border border-zinc-400 outline-none">
              <RadixSelect.Value placeholder="Buscar" />
              <RadixSelect.Icon className="text-violet11">
                <ChevronDownIcon />
              </RadixSelect.Icon>
            </RadixSelect.Trigger>

            <RadixSelect.Portal>
              <RadixSelect.Content className="overflow-hidden bg-white rounded-md shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)]">
                <RadixSelect.ScrollUpButton className="flex items-center justify-center h-[400px] bg-red-400 text-blue-900 cursor-default">
                  <ChevronUpIcon />
                </RadixSelect.ScrollUpButton>
                <RadixSelect.Viewport className="p-[5px]">
                  <RadixSelect.Group>
                    <RadixSelect.Label className="px-[25px] text-normal leading-[25px]">
                      Nome do profissional - Área de atuação
                    </RadixSelect.Label>
                    <RadixSelect.Item value="item 1">
                      <RadixSelect.ItemText>Item 1</RadixSelect.ItemText>
                      <RadixSelect.ItemIndicator className="bg-slate-500 hover:bg-yellow-300 absolute left-0 w-[25px] inline-flex items-center justify-center">
                        <CheckIcon />
                      </RadixSelect.ItemIndicator>
                    </RadixSelect.Item>
                    <RadixSelect.Item value="item 2">
                      <RadixSelect.ItemText>Item 2</RadixSelect.ItemText>
                      <RadixSelect.ItemIndicator className="bg-slate-500 absolute left-0 w-[25px] inline-flex items-center justify-center">
                        <CheckIcon />
                      </RadixSelect.ItemIndicator>
                    </RadixSelect.Item>
                    <RadixSelect.Item value="item 3">
                      <RadixSelect.ItemText>Item 3</RadixSelect.ItemText>
                      <RadixSelect.ItemIndicator className="bg-slate-500 absolute left-0 w-[25px] inline-flex items-center justify-center">
                        <CheckIcon />
                      </RadixSelect.ItemIndicator>
                    </RadixSelect.Item>
                  </RadixSelect.Group>

                  <RadixSelect.Separator className="h-[1px] bg-purple-300 m-[5px]" />
                </RadixSelect.Viewport>
                <RadixSelect.ScrollDownButton className="flex items-center justify-center h-[25px] bg-white text-red-600 cursor-default">
                  <ChevronDownIcon />
                </RadixSelect.ScrollDownButton>
              </RadixSelect.Content>
            </RadixSelect.Portal>
          </RadixSelect.Root>
        </div>
      </div>
    </div>
  );
};

export default NewSimilarAlocation;
