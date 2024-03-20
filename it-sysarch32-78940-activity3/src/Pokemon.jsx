import React from 'react';

const Pokemon = ({ pokemon, language }) => {
    const { id, name, type, base, image } = pokemon;

    const getNameByLanguage = (lang) => {
        switch (lang) {
            case 'japanese':
                return name.japanese;
            case 'chinese':
                return name.chinese;
            case 'french':
                return name.french;
            default:
                return name.english;
        }
    };

    return (
        <div className="card">
            <img src={image} alt={getNameByLanguage(language)} />
            <div className="card-content">
                <div className="card-title">{getNameByLanguage(language)}</div>
                <div className="card-details">
                    {type.map((t, index) => (
                        <span key={index} className="type-badge">{t}</span>
                    ))}
                </div>
                <div className="base-stats-container">
                    <div>
                        <div>HP: {base.HP}</div>
                        <div>Attack: {base.Attack}</div>
                        <div>Defense: {base.Defense}</div>
                    </div>
                    <div>
                        <div>Sp. Attack: {base["Sp. Attack"]}</div>
                        <div>Sp. Defense: {base["Sp. Defense"]}</div>
                        <div>Speed: {base.Speed}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pokemon;
