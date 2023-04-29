import { useState, ReactNode } from "react";

interface ModalProps {
  content: ReactNode | string;
  size?: "small" | "medium" | "large";
}

const sizeContainer = {
  small: `w-64`,
  medium: `w-96`,
  large: `w-128`,
};

export const useModal = () => {
  const [visible, setVisible] = useState(false);

  const Modal = ({ content, size }: ModalProps) => {
    return (
      <div
        className={` ${
          size ? sizeContainer[size] : sizeContainer.large
        } p-4 bg-white text-black rounded-md`}
      >
        <section className="w-full  space-y-4 ">
          <header className=" w-full flex justify-between  items-center ">
            <h2>TEXTO</h2>
            <button onClick={() => setVisible(false)}>X</button>
          </header>
          <div className="bg-r break-words ">{content}</div>
          <div className="w-full flex justify-end  items-center gap-2 ">
            <button onClick={() => setVisible(false)} className="bg-red-600">
              Não
            </button>
            <button className="bg-emerald-600">Sim</button>
          </div>
        </section>
      </div>
    );
  };

  return {
    Modal: visible ? Modal : null,
    show: () => setVisible(true),
  };
};
