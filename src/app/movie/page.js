import React from 'react';
import MovieCard from '../Component/MovieCard/MovieCard';
import styles from '@/app/styles/common.module.css'

const Movie = async () => {

    await new Promise(resolve => setTimeout(resolve, 2000));


    const url = 'https://netflix54.p.rapidapi.com/search/?query=stranger&offset=0&limit_titles=50&limit_suggestions=20&lang=en';
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '5cb39b84cbmsh816600e050a8798p1dafedjsned1f5113ce2c',
    'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
  }
};
const res=await fetch(url,options);
const data=await res.json();
const mainData=data.titles

    return (
        <section className={styles.movieSection}>
            
            <div className={styles.container}>
                <h1>
                    Series & Movies
                </h1>
          <div className={styles.card_section}>
          {
            mainData.map((mdata,i)=><MovieCard mainData={mdata} key={i}></MovieCard>)
           }
          </div>
           
        </div>
            

        </section>
    );
};

export default Movie;