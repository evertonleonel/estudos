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
              <RadixSelect.Icon>
                <ChevronDownIcon />
              </RadixSelect.Icon>
            </RadixSelect.Trigger>
          </RadixSelect.Root>
        </div>
      </div>
      <div className="grid sm:grid-cols-2 gap-3">
        <div className="text-sm leading-6 flex flex-col gap-2">
          <p className="font-semibold">Nível</p>
          <div className="max-w-[652px] h-[48px]">
            <RadixSelect.Root>
              <RadixSelect.Trigger className="inline-flex items-center justify-end px-[20px] rounded   w-full h-full bg-white font-normal hover:bg-slate-200 border border-zinc-400 outline-none">
                <RadixSelect.Icon>
                  <ChevronDownIcon />
                </RadixSelect.Icon>
              </RadixSelect.Trigger>
            </RadixSelect.Root>
          </div>
        </div>
        <div className="text-sm leading-6 flex flex-col gap-2">
          <p className="font-semibold">Prazo para contratação</p>
          <div className="max-w-[652px] h-[48px]">
            <RadixSelect.Root>
              <RadixSelect.Trigger className="inline-flex items-center justify-end px-[20px] rounded   w-full h-full bg-white font-normal hover:bg-slate-200 border border-zinc-400 outline-none">
                <RadixSelect.Icon>
                  <ChevronDownIcon />
                </RadixSelect.Icon>
              </RadixSelect.Trigger>
            </RadixSelect.Root>
          </div>
        </div>
        <div className="text-sm leading-6 flex flex-col gap-2">
          <p className="font-semibold">Valor do salário</p>
          <div className="max-w-[652px] h-[48px]">
            <input className="inline-flex items-center justify-end px-[20px] rounded   w-full h-full bg-white font-normal hover:bg-slate-200 border border-zinc-400 outline-none" />
          </div>
        </div>
        <div className="text-sm leading-6 flex flex-col gap-2">
          <p className="font-semibold">Tempo de experiência</p>
          <div className="max-w-[652px] h-[48px]">
            <RadixSelect.Root>
              <RadixSelect.Trigger className="inline-flex items-center justify-end px-[20px] rounded   w-full h-full bg-white font-normal hover:bg-slate-200 border border-zinc-400 outline-none">
                <RadixSelect.Icon>
                  <ChevronDownIcon />
                </RadixSelect.Icon>
              </RadixSelect.Trigger>
            </RadixSelect.Root>
          </div>
        </div>
      </div>
      <div className="text-sm leading-6 flex flex-col gap-2">
        <p className="font-semibold">
          Descrição de vaga (habilidades necessárias, atribuições, etc...)
        </p>

        <textarea className="w-full h-[144px] p-4 text-sm font-normal rounded border border-zinc-400 outline-none resize-none" />
      </div>
    </div>
  );
};

export default NewSimilarAlocation;
