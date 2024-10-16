"use client";
import { useState, forwardRef, useContext } from "react";
import { Exp } from "../icons";
import { experience } from "@/data";
import { InView } from "react-intersection-observer";
import { LocationContext } from "@/context/LocationContext";

const Experience = forwardRef((props: any, ref: any) => {
  const [active, setActive] = useState(1);
  const { setlocation } = useContext(LocationContext);
  const handleInView = (inView: boolean, entry: any) => {
    if (inView) {
      setlocation("exp");
    }
  };

  return (
    <InView as='div' onChange={(inView, entry) => handleInView(inView, entry)}>
      <section
        className={`w-full h-fit md:h-screen py-10 flex flex-col gap-10 md:gap-20 items-center justify-center`}
        ref={ref}
      >
        <h1 className='text-3xl md:text-4xl font-bold text-center text-white flex flex-row gap-x-3 items-center'>
          <span>My Experience</span>
          <Exp size={"32"} stroke={"#8892b0"} />
        </h1>
        <main className='w-11/12 md:w-10/12 flex flex-row justify-center items-center h-2/6 gap-x-5 md:gap-x-7 md:gap-x-10 text-primary'>
          <div className='flex flex-col'>
            {experience.map((item, idx: number) => {
              return (
                <div key={idx} className='flex flex-col gap-y-0 items-center justify-center'>
                  <button
                    key={item.id}
                    onClick={() => {
                      animateOut();
                      setActive(item.id);
                    }}
                    className={`w-4 h-4 border border-primary mt-0 kite ${
                      active === item.id && "bg-primary"
                    }`}
                  ></button>
                  {item.id !== experience.length && <div className='w-0.5 h-8 bg-primary'></div>}
                </div>
              );
            })}
          </div>
          <div className='w-11/12 md:w-6/12'>
            {experience.map((item) => {
              return (
                <div
                  key={item.id}
                  className={`border border-primary p-4 relative flex flex-col gap-y-3 ${
                    active === item.id ? "block" : "hidden"
                  }`}
                >
                  <h1 className='text-secondary text-xl font-semibold'>{item.title}</h1>
                  <h3 className='text-sm'>{item.company}</h3>
                  <span className='flex flex-col gap-y-3 p-2'>
                    {item.description.map((i, idx: number) => {
                      return (
                        <p key={idx} className='text-sm'>
                          {i}
                        </p>
                      );
                    })}
                  </span>
                  <p className='w-full text-right text-xs'>{item.range.toUpperCase()}</p>
                </div>
              );
            })}
          </div>
        </main>
      </section>
    </InView>
  );
});

Experience.displayName = "Experience";

export default Experience;

function animateOut() {}
