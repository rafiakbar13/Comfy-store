import { Link } from "react-router-dom";

import hero1 from "../assets/hero1.webp";
import hero2 from "../assets/hero2.webp";
import hero3 from "../assets/hero3.webp";
import hero4 from "../assets/hero4.webp";

const carouselImages = [hero1, hero2, hero3, hero4];
const Hero = () => {
  return (
    <div className="grid items-center grid-cols-1 gap-24 lg:grid-cols-2">
      <div className="">
        <h1 className="max-w-2xl text-4xl font-bold tracking-tight sm:text-6xl ">
          We’re changing the way people shop.
        </h1>

        <p className="max-w-xl mt-8 text-lg leading-8">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem sunt
          perspiciatis corrupti, iusto aperiam non minus vero dicta. Aperiam,
          commodi? Repellat nulla necessitatibus illo placeat. Officiis
          consectetur ab est pariatur!
        </p>
        <div className="mt-10 ">
          <Link to="products" className="btn btn-primary ">
            Our Products
          </Link>
        </div>
      </div>
      <div className="hidden  h-[28rem] lg:carousel carousel-center p-4 space-x-4 bg-neutral rounded-box">
        {carouselImages.map((image, index) => {
          return (
            <div key={image} className="carousel-item">
              <img
                src={image}
                className="object-cover h-full rounded-box w-80"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Hero;
