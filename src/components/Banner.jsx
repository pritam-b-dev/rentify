"use client";
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";

const Banner = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
  };

  return (
    <div className="relative w-full min-h-[80vh] flex items-center bg-linear-to-r from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-950 overflow-hidden px-4 md:px-12 lg:px-24 mb-5">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full max-w-7xl mx-auto z-10">
        <motion.div
          className="flex flex-col space-y-3 text-center lg:text-left justify-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.span
            variants={itemVariants}
            className="text-xs md:text-sm font-bold uppercase tracking-widest text-cyan-700  bg-blue-50 dark:bg-blue-950/50 px-3 rounded-full w-max mx-auto lg:mx-0"
          >
            Premium Car Rental
          </motion.span>
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-neutral-800 dark:text-white leading-tight"
          >
            Find, Book, and Rent a Car in{" "}
            <span className="text-cyan-700">Easy Steps</span>
          </motion.h1>
          <div className="flex flex-col sm:flex-row items-center gap-6 max-w-2xl mx-auto lg:mx-0">
            <motion.p
              variants={itemVariants}
              className="text-base md:text-md text-slate-600 dark:text-slate-400 max-w-xl mx-auto lg:mx-0"
            >
              Get access to a diverse fleet of luxury, sports, and economy cars.
              Experience the ultimate comfort and freedom of driving the perfect
              vehicle for any journey.
            </motion.p>
            <motion.div
              variants={itemVariants}
              className="shrink-0"
              animate={{
                scale: [1, 1.05, 1],
                boxShadow: [
                  "0 0 0 0 rgba(14, 116, 144, 0.4)",
                  "0px 0px 0px 15px rgba(37, 99, 235, 0)",
                  "0 0 0 0 rgba(14, 116, 144, 0)",
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Link href={"#available-cars"}>
                <Button
                  size="lg"
                  color="primary"
                  className="font-semibold bg-neutral-500 hover:bg-neutral-700 text-white shadow-lg shadow-blue-500/20 transform hover:-translate-y-0.5 transition-all duration-200 px-8 py-6 text-base rounded-xl w-full sm:w-auto"
                >
                  Available Cars
                </Button>
              </Link>
            </motion.div>
          </div>
        </motion.div>
        <motion.div
          className="relative flex justify-center items-center w-full h-[300px] sm:h-[400px] lg:h-[500px]"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            type: "spring",
            stiffness: 60,
            damping: 20,
            delay: 0.4,
          }}
        >
          <div className="absolute w-[80%] h-[80%] bg-blue-400/20 dark:bg-blue-600/10 blur-3xl rounded-full -z-10" />

          <Image
            src="https://cdn.pixabay.com/photo/2024/07/13/07/40/cars-8891625_1280.jpg"
            alt="Premium Rental Car"
            fill
            priority
            className="object-cover "
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Banner;
