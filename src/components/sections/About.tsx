import Link from "next/link";
import { forwardRef, useContext } from "react";
import { AboutIcon } from "../icons";
import { tech } from "@/data";
import { InView } from "react-intersection-observer";
import { LocationContext } from "@/context/LocationContext";
import Tech from "../Tech";

const About = forwardRef((props: any, ref: any) => {
  const { setlocation } = useContext(LocationContext);
  const handleInView = (inView: boolean, entry: any) => {
    if (inView) {
      setlocation("about");
    }
  };
  return (
    <InView as='div' onChange={(inView, entry) => handleInView(inView, entry)}>
      <section className=' w-screen md:w-full h-fit flex items-center justify-center my-20 panel' ref={ref}>
        <div className='w-11/12 md:w-8/12 text-primary flex flex-col justify-center p-6 gap-y-4'>
          <h1 className='text-3xl font-bold text-white flex flex-row justify-center items-center gap-x-4'>
            <span>About Me</span>
            <AboutIcon stroke={"#8892b0"} size={"28"} />
          </h1>
          <p className='text-center text-base el'>
            Hello there! My name is Folarin Raphael, also known as{" "}
            <span className='text-secondary'>Suei</span>. I am a{" "}
            <span className='text-white font-medium'>FullStack Software Engineer</span>,{" "}
            <span className='text-white font-medium'>Smart Contract Developer</span> and a{" "}
            <span className='text-white font-medium'>Web 3.0 Enthusiast</span>.
          </p>
          <p className='text-center text-base el'>
            I may or may not have written my first line of code in 2019. Since then, I have explored some of
            the most pronounced tech niches before realizing my passion for building scalable web
            applications. I have had the privilege of working with some amazing teams and personalities and
            building some cool stuff.
          </p>
          <p className='text-center text-base el'>
            I am a self-taught developer with a strong passion for learning and bringing ideas to life. When I
            am not writing code, I am either binge watching a new netflix series or endlessly scrolling
            through{" "}
            <Link href={"https://daily.dev"} className='text-secondary'>
              daily.dev
            </Link>
            .
          </p>
          <h3 className='text-secondary text-center italic el'>
            Here&apos;s a list of some of the technologies I often use:
          </h3>
          <div className='md:w-9/12 md:mx-auto flex flex-row flex-wrap gap-x-3 gap-y-3 justify-center'>
            {Object.values(tech).map((item, index) => {
              return <Tech title={Object.keys(tech)[index]} items={item} key={index} />;
            })}
          </div>
        </div>
      </section>
    </InView>
  );
});

About.displayName = "About";

export default About;
