import { forwardRef, useContext } from "react";
import Intro from "../sub-components/Intro";
import Me from "../sub-components/Me";
import TopNav from "../nav/TopNav";
import { InView } from "react-intersection-observer";
import { LocationContext } from "@/context/LocationContext";

const Main = forwardRef((_props: any, ref: any) => {
  const { setlocation } = useContext(LocationContext);

  const handleInView = (inView: boolean, _entry: any) => {
    if (inView) {
      setlocation("home");
    }
  };

  return (
    <InView as='div' onChange={(inView, entry) => handleInView(inView, entry)}>
      <section className='w-11/12 md:mx-auto h-[100dvh] box-border relative' ref={ref}>
        <TopNav />
        <Me />
        <Intro />
      </section>
    </InView>
  );
});

Main.displayName = "Main";

export default Main;
