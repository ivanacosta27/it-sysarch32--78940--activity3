import React, { useEffect, useState } from 'react';
import Pokemon from './Pokemon';

const Pokedex = () => {
    const [pokemonList, setPokemonList] = useState([]);
    const [language, setLanguage] = useState('english');

    useEffect(() => {
        fetch('https://us-central1-it-sysarch32.cloudfunctions.net/pokemon')
            .then(response => response.json())
            .then(data => setPokemonList(data));
    }, []);

    const handleLanguageChange = (lang) => {
        setLanguage(lang);
    };

    return (
        <div className="pokedex">
            <div className="language-filters">
                <button onClick={() => handleLanguageChange('english')}>English</button>
                <button onClick={() => handleLanguageChange('japanese')}>Japanese</button>
                <button onClick={() => handleLanguageChange('chinese')}>Chinese</button>
                <button onClick={() => handleLanguageChange('french')}>French</button>
            </div>
            {pokemonList.map(pokemon => (
                <Pokemon key={pokemon.id} pokemon={pokemon} language={language} />
            ))}
        </div>
    );
};

export default Pokedex;
