import { useState } from "react";
import Modal from "./Modal.jsx";

import logo from "../../images/logo.svg";
import hamburger from "../../images/icon-hamburger.svg";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  function handleShowModal() {
    setIsOpen(true);
  }

  function handleDone() {
    setIsOpen(false);
  }
  return (
    <header>
      {!isOpen ?
      <>
        <div className="absolute top-12 left-[50%] translate-x-[-50%] lg:left-[62px] lg:translate-x-[0] z-10 flex gap-[54px] font-spartan text-primary-white">
          <img src={logo} alt="Room logo" className="object-contain" />
          <nav className="hidden lg:flex gap-8">
            <p className="border-b-2 border-b-transparent hover:border-b-primary-white cursor-pointer">home</p>
            <p className="border-b-2 border-b-transparent hover:border-b-primary-white cursor-pointer">shop</p>
            <p className="border-b-2 border-b-transparent hover:border-b-primary-white cursor-pointer">about</p>
            <p className="border-b-2 border-b-transparent hover:border-b-primary-white cursor-pointer">contact</p>
          </nav>
        </div>
        <img
          src={hamburger}
          alt="Hamburger menu icon"
          className="lg:hidden absolute top-12 left-6 z-10 object-contain cursor-pointer"
          onClick={handleShowModal}
        />
      </>
      :
      <Modal onDone={handleDone}/>
      }
    </header>
  )
}