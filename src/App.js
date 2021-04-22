import { Switch, Route } from 'react-router-dom';
import { useState, useEffect, useCallback, useMemo  } from 'react';
import Navbar from './components/navbar/Navbar.jsx';
import Search from './components/search/Search.jsx';
import CardList from './components/cardList/CardList.jsx';
import { Howl } from 'howler';

function App() {
  const [beers, setBeers] = useState([]);
  const [favourites, setFavourites] = useState([]);

  useEffect(async () => {
    const data = await fetch('https://api.punkapi.com/v2/beers?page=1&per_page=6');
    const beers = await data.json();
    setBeers(beers);
  }, []);

  const toggleFavourite = item => {
    const included = favourites.includes(item);
    if (included) {
      let result = favourites.filter(i => i !== item);
      setFavourites(result);
    } else {
      setFavourites(prev => ([...prev, item ]));
    }
  }

  const updateBeersBySearch = useCallback(data => {
    setBeers(data);
  }, [setBeers]);

  const sound = new Howl({ src: ["/beer.wav"] });

  console.log(sound);

  return (
      <div className="App">
        <header className="App-header">
          <Navbar />
        </header>
        <main>
          <Switch>
            <Route exact path='/'>
              <Search updateBeers={updateBeersBySearch} />
              <CardList
                  data={beers}
                  toggleFav={toggleFavourite}
                  beerSound={sound}
                />
            </Route>
            <Route path='/favourites' component={() => (
              <>
                {favourites.length ? <CardList data={favourites} toggleFav={toggleFavourite} beerSound={sound} /> : <p>No Favourites</p>}
              </>
            )} />
          </Switch>
        </main>
      </div>
  );
}

export default App;
