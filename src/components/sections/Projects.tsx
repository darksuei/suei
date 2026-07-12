"use client";
import Image from "next/image";
import { useState, forwardRef, useContext, useEffect } from "react";
import { Code, Github, Preview } from "../icons";
import { moreprojects, projects } from "@/data";
import Demo from "../icons/Demo";
import { InView } from "react-intersection-observer";
import { LocationContext } from "@/context/LocationContext";
import gsap from "gsap";
import { useWindowWidth } from "@/hooks/useWindowWidth";

const Projects = forwardRef((_props: any, ref: any) => {
  const width = useWindowWidth();
  const [viewMore, setViewMore] = useState(false);
  const [showcase, setShowcase] = useState(projects);
  const [viewChanged, setViewChanged] = useState(0);
  const { setlocation } = useContext(LocationContext);

  const handleInView = (inView: boolean, _entry: any) => {
    if (inView) {
      setlocation("proj");
    }
    setViewChanged(viewChanged + 1);
  };

  const handleViewMore = (e: any) => {
    e.preventDefault();
    setViewMore(!viewMore);

    setShowcase(showcase.length <= projects.length ? [...projects, ...moreprojects] : projects);
  };

  const getShowcase = () => {
    if (width > 768 && width < 991) {
      if (viewMore) {
        return showcase.slice(0, 4);
      }
      return showcase.slice(0, 2);
    }
    return showcase;
  };

  useEffect(() => {
    const ctx: any = gsap.context(() => {
      const tl = gsap.timeline();

      tl.fromTo(
        ".showcase_item",
        {
          opacity: 0,
          y: -20,
        },
        { opacity: 1, y: 0, duration: 0.75, ease: "power2.in", stagger: 0.2 }
      );
    }, ".showcase_wrapper");

    return () => {
      ctx.kill();
    };
  }, [viewMore, viewChanged]);

  return (
    <InView as='div' onChange={(inView, entry) => handleInView(inView, entry)}>
      <section
        className={`w-[90%] mx-auto min-h-screen flex flex-col items-center justify-center gap-y-10 mt-[100px] pt-[75px] md:mt-0 md:pt-0 showcase_wrapper`}
        ref={ref}
      >
        <h1 className='text-3xl md:text-4xl font-bold text-center text-white flex flex-row gap-x-3 items-center'>
          <span>Projects</span>
          <Code stroke={"#8892b0"} size={"30"} />
        </h1>
        <div className='w-full p-2 md:p-0 flex flex-row flex-wrap items-stretch gap-y-10 md:gap-x-5 md:justify-evenly'>
          {getShowcase().map((item: any) => {
            return (
              <div
                className={`p-4 rounded-lg ${
                  getShowcase().length % 3 === 0 ? "md:w-3/12" : "md:w-5/12"
                } border border-primary flex flex-col gap-y-4 relative items-center proj-card gradient-border showcase_item`}
                key={item.id}
              >
                {item.image && <Image src={item.image} alt={item.name} className='w-full' />}
                <div className={`${item.image && " w-full "} p-0 md:p-1 flex flex-col gap-y-3`}>
                  <h2 className='text-secondary font-black text-xl flex flex-row justify-between items-center'>
                    {item.name}
                    <div className='flex flex-row items-center justify-center gap-x-3'>
                      <Github link={item.git} />
                      {item.demo && <Demo link={item.demo} />}
                      <Preview link={item.link} />
                    </div>
                  </h2>
                  <p className='text-sm text-primary'>{item.description}</p>
                  <div className='flex flex-row flex-wrap gap-x-3 gap-y-3 justify-start'>
                    {item.tech.map((i: string, idx: number) => {
                      return (
                        <p
                          key={idx}
                          className='border text-white cursor-pointer border-primary py-1 px-3 text-xs'
                        >
                          {i}
                        </p>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className='relative w-fit h-fit mt-5 rounded-lg showcase_item'>
          <button
            className='py-2.5 rounded-sm px-14 border border-primary text-white main-btn'
            onClick={(e) => handleViewMore(e)}
          >
            View <span>{viewMore ? "less" : "more"}</span>
          </button>
        </div>
      </section>
    </InView>
  );
});

Projects.displayName = "Projects";

export default Projects;
