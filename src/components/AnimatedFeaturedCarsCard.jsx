"use client";
import React from "react";
import { motion } from "framer-motion";
import CarCard from "./CarCard";

const AnimatedFeaturedCarsCard = ({ car }) => {
  return (
    <>
      <motion.div
        key={car._id}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{
          duration: 0.5,
          delay: 0.15,
          ease: "easeOut",
        }}
      >
        <CarCard car={car} />
      </motion.div>
    </>
  );
};

export default AnimatedFeaturedCarsCard;
