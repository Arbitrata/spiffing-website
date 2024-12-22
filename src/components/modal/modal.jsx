import { Dialog } from "@headlessui/react";
import { GrFormClose } from "react-icons/gr";
import { Icon } from "../icons";

const Modal = ({
  children,
  isOpen,
  setIsOpen,
  className,
}) => {
  return (
    <Dialog
      open={isOpen}
      onClose={setIsOpen}
      className="fixed inset-0 items-center px-2 md:px-4 justify-center flex bg-rotorblack z-50 h-screen w-full"
    >
      <div
        className={`${
          className ? className : ""
        } bg-rotorwhite md:p-6 shadow-lg rounded overflow-y-auto relative`}
      >
        <div onClick={setIsOpen} className="absolute top-0 right-0 h-fit w-fit">
          <Icon icon={<GrFormClose size={20} />} iconStyle={"text-gray900"} />
        </div>
        {children}
      </div>
    </Dialog>
  );
};

export default Modal;
