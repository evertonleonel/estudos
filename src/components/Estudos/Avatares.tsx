import React from "react";
import * as Avatar from "@radix-ui/react-avatar";
import * as Tooltip from "@radix-ui/react-tooltip";

export const Avatares = ({ image, name }: { image: string; name: string }) => {
  return (
    <Tooltip.Provider>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <button className="text-violet11 shadow-blackA7 hover:bg-violet3 inline-flex h-[35px] w-[35px] items-center justify-center rounded-full bg-white shadow-[0_2px_10px] outline-none focus:shadow-[0_0_0_2px] focus:shadow-black">
            {!name ? (
              // <div className="flex gap-5">
              //   <Avatar.Root className="bg-blackA3 inline-flex h-[45px] w-[45px] select-none items-center justify-center overflow-hidden rounded-full align-middle">
              //     <Avatar.Image
              //       className="h-full w-full rounded-[inherit] object-cover"
              //       src={image}
              //       alt={name}
              //     />
              //     <Avatar.Fallback
              //       className="text-violet11 leading-1 flex h-full w-full items-center justify-center bg-white text-[15px] font-medium"
              //       delayMs={600}
              //     >
              //       Empety
              //     </Avatar.Fallback>
              //   </Avatar.Root>
              <Avatar.Root className="bg-blackA3 inline-flex h-[45px] w-[45px] select-none items-center justify-center overflow-hidden rounded-full align-middle">
                <Avatar.Image
                  className="h-full w-full rounded-[inherit] object-cover"
                  src="https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&w=128&h=128&dpr=2&q=80"
                  alt="Pedro Duarte"
                />
                <Avatar.Fallback
                  className="text-violet11 leading-1 flex h-full w-full items-center justify-center bg-white text-[15px] font-medium"
                  delayMs={600}
                >
                  JD
                </Avatar.Fallback>
              </Avatar.Root>
            ) : (
              "x"
            )}
          </button>
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content
            className="data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade text-violet11 select-none rounded-[4px] bg-white px-[15px] py-[10px] text-[15px] leading-none shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] will-change-[transform,opacity]"
            sideOffset={5}
          >
            Add to library
            <Tooltip.Arrow className="fill-white" />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
};
