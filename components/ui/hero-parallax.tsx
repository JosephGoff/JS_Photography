"use client";
import React from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export const HeroParallax = ({
  products,
}: {
  products: {
    title: string;
    link: string;
    thumbnail: string;
  }[];
}) => {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX1 = useSpring(
    useTransform(scrollYProgress, [0, 1], [-100, 1000]),
    springConfig
  );
  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [-140, -1000]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY1 = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-410, 0]),
    springConfig
  );
  const translateY2 = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, -250]),
    springConfig
  );
  const { scrollY } = useScroll();
  const headerOpacity = useSpring(
    useTransform(scrollY, [0, 300], [1, 0]),  
    { stiffness: 300, damping: 30, bounce: 100 }
  );

  return (
    <div
      ref={ref}
      className="h-[1375px] md:h-[1380px] overflow-hidden  antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      <Header opacity={headerOpacity} />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY: translateY1,
          opacity,
        }}
        className="block md:hidden"
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-16" style={{marginBottom: "60px"}}>
          {firstRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row space-x-16" style={{marginBottom: "60px"}}>
          {secondRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-16">
          {thirdRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY: translateY2,
          opacity,
        }}
        className="hidden md:block"
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-16" style={{marginBottom: "60px"}}>
          {firstRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX1}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row space-x-16" style={{marginBottom: "60px"}}>
          {secondRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-16">
          {thirdRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const Header = ({ opacity }: { opacity: MotionValue<number> }) => {
  return (
    <motion.div
      style={{ opacity }}  
      className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full left-0 top-0"
    >
      <h1 className="text-2xl md:text-7xl font-bold dark:text-white">
        The Ultimate <br /> development studio
      </h1>
      <p className="max-w-2xl text-base md:text-xl mt-8 dark:text-neutral-200">
        We build beautiful products with the latest technologies and frameworks.
        We are a team of passionate developers and designers that love to build
        amazing products.
      </p>
    </motion.div>
  );
};

export const ProductCard = ({
  product,
  translate,
}: {
  product: {
    title: string;
    link: string;
    thumbnail: string;
  };
  translate: MotionValue<number>;
}) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={product.title}
      className="group/product h-72 w-[30rem] relative flex-shrink-0"
    >
      <Link
        href={product.link}
        className="block group-hover/product:shadow-2xl "
      >
        <Image
          src={product.thumbnail}
          height="600"
          width="600"
          className="object-cover object-left-top absolute h-full w-full inset-0"
          alt={product.title}
        />
      </Link>
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none"></div>
      <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white">
        {product.title}
      </h2>
    </motion.div>
  );
};
