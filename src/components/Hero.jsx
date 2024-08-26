import { useState } from "react";

import heroImgD1 from "../../images/desktop-image-hero-1.jpg";
import heroImgD2 from "../../images/desktop-image-hero-2.jpg";
import heroImgD3 from "../../images/desktop-image-hero-3.jpg";
import heroImgM1 from "../../images/mobile-image-hero-1.jpg";
import heroImgM2 from "../../images/mobile-image-hero-2.jpg";
import heroImgM3 from "../../images/mobile-image-hero-3.jpg";

import arrowR from "../../images/icon-angle-right.svg";
import arrowL from "../../images/icon-angle-left.svg";
import arrowIcon from "../../images/icon-arrow.svg";

export default function Hero() {
  const [index, setIndex] = useState(0);
  const heroDetails = [
    {
      title: "Discover innovative ways to decorate",
      description: "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
      imageD: heroImgD1,
      imageM: heroImgM1,
      altText: "Hero image featuring four white chairs and a table",
    },
    {
      title: "We are available all across the globe",
      description: "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we're in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
      imageD: heroImgD2,
      imageM: heroImgM2,
      altText: "Hero image featuring three chairs of different colors",
    },
    {
      title: "Manufactured with the best materials",
      description: "Our modern furniture stores provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
      imageD: heroImgD3,
      imageM: heroImgM3,
      altText: "Hero image featuring a black, folding chair",
    },
  ];

  function handleToggle(val) {
    if (val == "left") {
      if (index == 0) {
        setIndex(2);
      } else {
        setIndex(index - 1);
      }
    } else if (val == "right") {
      if (index == 2) {
        setIndex(0);
      } else {
        setIndex(index + 1);
      }
    }
  }

  return (
    <div className="flex flex-col lg:flex-row lg:max-h-[530px] w-full font-spartan">
      <div className="relative w-full lg:w-[58%]">
        <img src={heroDetails[index].imageD} alt={heroDetails[index].altText} className="hidden lg:block w-full h-[530px] object-cover" />
        <img src={heroDetails[index].imageM} alt={heroDetails[index].altText} className="lg:hidden w-full max-h-[600px] object-cover object-bottom" />
        <div className="absolute bottom-0 right-0 lg:-right-[20%] w-[20%] flex">
          <button type="button" className="bg-primary-black py-4 lg:py-7 w-1/2 flex justify-center hover:bg-opacity-70" onClick = {() => handleToggle("left")}>
            <img src={arrowL} alt="Arror left" />
          </button>
          <button type="button" className="bg-primary-black py-4 lg:py-7 w-1/2 flex justify-center hover:bg-opacity-70" onClick = {() => handleToggle("right")}>
            <img src={arrowR} alt="Arror right" />
          </button>
        </div>
      </div>
      <div className="w-full lg:w-[42%] flex flex-col items-start justify-center px-7 lg:px-12 xl:px-20 py-16">
        <h1 className="font-semibold text-4xl lg:text-5xl mb-5 tracking-tight">{heroDetails[index].title}</h1>
        <p className="text-primary-dark-grey leading-snug">{heroDetails[index].description}</p>
        <div className="cursor-pointer mt-5 hover:text-primary-dark-grey">
          <span className="pr-6 tracking-[0.7em]">SHOP NOW</span>
          <img src={arrowIcon} alt="Arrow Icon" className="inline-block object-contain" />
        </div>
      </div>
    </div>
  )
}