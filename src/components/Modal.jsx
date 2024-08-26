import { createPortal } from 'react-dom';

import closeIcon from "../../images/icon-close.svg";

export default function Modal({onDone}) {
  const navButtons = ["home", "shop", "about", "contact"];

  function handleCloseModal() {
    onDone();
  }

  return createPortal(
    <>
      <dialog
        className="fixed top-0 left-0 w-full h-full font-spartan bg-primary-black bg-opacity-50 z-20"
        onClose={onDone}
        open
      >
        <div className="flex items-center justify-between w-full h-[110px] bg-primary-white px-6">
          <img
            src={closeIcon}
            alt="Close menu icon"
            className="h-[16px] object-contain cursor-pointer"
            onClick={handleCloseModal}
          />
          <div className="flex gap-8">
            <p className="cursor-pointer font-bold">home</p>
            <p className="cursor-pointer font-bold">shop</p>
            <p className="cursor-pointer font-bold">about</p>
            <p className="cursor-pointer font-bold">contact</p>
          </div>
        </div>
      </dialog>
    </>,
    document.getElementById('modal')
  );
}