import darkImg from "../../images/image-about-dark.jpg";
import lightImg from "../../images/image-about-light.jpg";

export default function About() {
  return (
    <div className="flex flex-col lg:flex-row w-full font-spartan">
      <img src={darkImg} alt="About images of a showroom" className="lg:w-[29%] object-cover" />
      <div className="lg:w-[40.5%] px-7 lg:px-9 py-12 lg:py-4 my-auto">
        <h2 className="text-md lg:text-xl font-bold text-primary-black mb-3 tracking-[0.25em]">ABOUT OUR FURNITURE</h2>
        <p className="text-primary-dark-grey leading-snug">Our multifunctional collection blends design and function to suit your individual taste. Make each room unique, or pick a cohesive theme that best express your interests and what inspires you. Find the furniture pieces you need, from traditional to contemporary styles or anything in between. Product specialists are available to help you create your dream space.</p>
      </div>
      <img src={lightImg} alt="About images of a single chair" className="lg:w-[30.5%] object-cover" />
    </div>
  )
}