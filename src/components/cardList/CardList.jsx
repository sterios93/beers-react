import React from 'react'
import Card from '../card/Card.jsx';
import styles from './CardList.module.scss';

const CardList = ({ data, toggleFav, beerSound}) => {
    return (
        <div className={styles.cardListWrapper}>
            <div className={styles.cardList}>
                {data.map((item) => <Card key={item.id} data={item} toggleFav={toggleFav} beerSound={beerSound}/>)}
            </div>
        </div>
    )
}

export default CardList;