import React from "react";
import styles from "@/app/styles/common.module.css";
import Image from "next/image";
import Link from "next/link";

const MovieCard = ({ mainData }) => {
  const { id, type, title, synopsis, backgroundImage, logoImage } =
    mainData.jawSummary;
 
  const img = backgroundImage.url;


  return (
    <div className={styles.card}>
      <div className={styles.card_img}>
        <Image
          src={backgroundImage.url ? backgroundImage.url : ""}
          width={260}
          height={200}
          alt={title}
        ></Image>
      </div>
      <div className={styles.card_data}>
        <h2>{title.substring(0,18)}</h2>
        <p>{synopsis.substring(0,66)}......</p>
        <Link href={`/movie/${id}`}>
          <button>Details</button>
        </Link>
      </div>
    </div>
  );
};

export default MovieCard;
