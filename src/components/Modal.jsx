import { Dialog } from "@headlessui/react";
import Icon from "./Icon";
import { GrFormClose } from "react-icons/gr";

const Modal = ({ children, isOpen, setIsOpen, className }) => {
  return (
    <Dialog
      onClick={setIsOpen}
      open={isOpen}
      onClose={setIsOpen}
      className="fixed inset-0 items-center justify-center lg:px-[20%] 2xl:px-[30%] px-4 z-50 bg-darkgray grid place-content-center bg-opacity-10"
    >
      <div
        className={`${
          className ? className : "max-w-md"
        } py-6 shadow-lg rounded overflow-y-auto relative bg-white`}
      >
        <div onClick={setIsOpen} className="absolute top-2 right-2 h-fit w-fit">
          <Icon
            icon={<GrFormClose size={20} />}
            iconStyle={"bg-darkblue/10 p-2 text-white shadow"}
          />
        </div>
        {children}
      </div>
    </Dialog>
  );
};

export default Modal;
