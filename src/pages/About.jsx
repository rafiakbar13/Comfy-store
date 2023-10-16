import React from "react";

const About = () => {
  return (
    <>
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-x-6">
        <h1 className="text-4xl font-bold leading-none tracking-tight sm:text-6xl">
          We love
        </h1>
        <div className="shadow stats bg-primary">
          <div className="stat">
            <div className="text-4xl font-bold tracking-widest stat-title text-primary-content">
              Comfy
            </div>
          </div>
        </div>
      </div>
      <p className="max-w-2xl mx-auto mt-6 text-lg leading-8">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
        perferendis fugiat labore pariatur praesentium perspiciatis, magni
        corrupti saepe, dolorem eius quam ipsam. Neque error iure ipsum itaque,
        tempore odit voluptate optio iste, beatae quia veniam aperiam eligendi,
        fugiat ad enim?
      </p>
    </>
  );
};

export default About;
