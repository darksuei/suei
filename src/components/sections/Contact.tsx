"use client";
import Link from "next/link";
import { forwardRef, useContext, useEffect, useState } from "react";
import { Paperplane } from "../icons";
import { InView } from "react-intersection-observer";
import { LocationContext } from "@/context/LocationContext";
import gsap from "gsap";

const Contact = forwardRef((_props: any, ref: any) => {
  const [viewChanged, setViewChanged] = useState(0);
  const { setlocation } = useContext(LocationContext);

  const handleInView = (inView: boolean, _entry: any) => {
    if (inView) {
      setlocation("contact");
    }
    setViewChanged(viewChanged + 1);
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      tl.fromTo(
        ".animate_element",
        {
          y: 15,
          opacity: 0,
        },
        {
          y: 0,
          duration: 0.5,
          opacity: 1,
          ease: "power2.inOut",
          stagger: 0.15,
        }
      );
    });

    return () => {
      ctx.kill();
    };
  }, [viewChanged]);

  return (
    <InView as='div' onChange={(inView, entry) => handleInView(inView, entry)}>
      <section
        className={`w-11/12 mx-auto flex h-screen md:h-screen items-center justify-center text-primary`}
        ref={ref}
      >
        <div className='flex flex-col gap-y-6 items-center justify-center p-6 text-sm'>
          <Paperplane />
          <h1 className='w-fit text-5xl font-black text-white text-center'>Get in Touch</h1>
          <div className='flex flex-col justify-center items-center gap-1'>
            <p className='w-10/12 md:w-9/12 text-center animate_element'>
              Have an idea for a project? Need my expertise? or just want to chat?
            </p>
            <p className='hidden md:block animate_element'>Feel free to shoot me an email!</p>
          </div>
          <div className='animate_element'>
            <Link
              target='_blank'
              className='w-fit h-fit relative mt-2'
              href='mailto:folarinraphael@outlook.com'
            >
              <div className='py-2.5 rounded-sm px-14 border-2 border-secondary text-secondary main-btn text-base'>
                Say Hi
              </div>
            </Link>
          </div>
        </div>
      </section>
    </InView>
  );
});

Contact.displayName = "Contact";

export default Contact;
