import React, { useState } from "react";
import styles from "../styles/Feature.module.css";
import Image from "next/image";

function Feature() {
  const [imgIndex, setImgIndex] = useState(0);
  const features = [
    "/img/featured.jpg",
    "/img/featured2.jpg",
    "/img/featured3.jpg",
  ];

  const handleClick = (direction) => {
    if (direction === "left") {
      setImgIndex(imgIndex === 0 ? 2 : imgIndex - 1);
    }

    if (direction === "right") {
      setImgIndex(imgIndex === 2 ? 0 : imgIndex + 1);
    }
  };
  return (
    <div className={styles.container}>
      <div
        className={styles.arrowContainer}
        style={{ left: 0 }}
        onClick={() => handleClick("left")}
      >
        <Image src="/img/arrowl.png" alt="" layout="fill" />
      </div>
      <div
        className={styles.wrapper}
        style={{ transform: `translateX(-${imgIndex * 100}vw)` }}
      >
        {features.map((item, index) => {
          return (
            <div key={index} className={styles.imageContainer}>
              <Image src={item} alt="" layout="fill"></Image>
            </div>
          );
        })}
      </div>
      <div
        className={styles.arrowContainer}
        style={{ right: 0 }}
        onClick={() => handleClick("right")}
      >
        <Image src="/img/arrowr.png" alt="" layout="fill" />
      </div>
    </div>
  );
}

export default Feature;
