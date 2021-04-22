import React, { useState} from 'react';
import styles from './Search.module.scss';

const Search = ({ updateBeers }) => {
  const [value, setValue] = useState('');

  const onInput = async (e) => {
    const name = e.target.value;
    setValue(name);

    if (!name) return;
    
    const data = await fetch(`https://api.punkapi.com/v2/beers?beer_name=${name}`);
    const beers = await data.json();

    updateBeers(beers);
  }

  return (
    <>
        <div className={styles.inputContainer}>
            <input 
              type="text"
              onChange={onInput}
              placeholder="Search for beer..."
              value={value}
              />
            <a
              href="#" 
              className={styles.searchButton}>
                Search
            </a>
        </div>
    </>
  )
}

export default Search;