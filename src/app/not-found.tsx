"use client";

import { Fragment, useState, useEffect, useLayoutEffect } from "react";
import Loading from "@/components/sub-components/Loading";
import LeftNav from "@/components/nav/LeftNav";
import NotFound from "@/components/sub-components/NotFound";
import { gsap } from "gsap";

export default function Custom404() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setLoading(false);
    }, 1400);
    return () => clearTimeout(timerId);
  }, []);

  useLayoutEffect(() => {
    if (!loading) {
      gsap.to(".curr", {
        backgroundColor: "#2c3539",
        duration: 4,
        ease: "power2.out",
      });
    }
  }, [loading]);
  return (
    <Fragment>
      {loading ? (
        <Loading />
      ) : (
        <main className='w-screen flex flex-col box-border curr'>
          <div className='relative h-screen w-full box-border'>
            <LeftNav />
            <NotFound />
          </div>
        </main>
      )}
    </Fragment>
  );
}
