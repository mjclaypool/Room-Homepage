import logo from "../../images/logo.svg";
import hamburger from "../../images/icon-hamburger.svg";

export default function Header() {
  return (
    <header>
      <div className="absolute top-12 left-[50%] translate-x-[-50%] lg:left-[62px] lg:translate-x-[0] z-10 flex gap-[54px] font-spartan text-primary-white">
        <img src={logo} alt="Room logo" className="object-contain" />
        <nav className="hidden lg:flex gap-8">
          <p>home</p>
          <p>shop</p>
          <p>about</p>
          <p>contact</p>
        </nav>
      </div>
      <img src={hamburger} alt="Hamburger menu icon" className="lg:hidden absolute top-12 left-6 z-10 object-contain cursor-pointer" />
    </header>
  )
}