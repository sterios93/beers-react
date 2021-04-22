import React from 'react'
import styles from './Card.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-regular-svg-icons';

const Card = ({ data, toggleFav, beerSound }) => {
  return (
    <div className={styles.card}>
        <div className={styles.imageContainer}>
          <img src={data.image_url} alt="beer" onClick={() => beerSound.play()}/>
        </div>

        <div className={styles.description}>
            <FontAwesomeIcon
              onClick={() => toggleFav(data)}
              className={styles.star} 
              icon={faStar} />
            <p className={styles.title}>{data.name}</p>
            <p className={styles.info}>{data.description}</p>
        </div>
    </div>
  )
}

export default Card;