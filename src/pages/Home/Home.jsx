import { useEffect, useState } from 'react';

const URL = 'https://fakestoreapi.com/products';

export const Home = () => {
    const [characters, setCharacters] = useState([]);

    const handleGetCharacters = async () => {
        const response = await fetch(URL);
        const data = await response.json();
        setCharacters(data);
    }
    useEffect(() => {
        handleGetCharacters();
    });

    return (
     <main>
        <h1>Home</h1>
        {
            characters.map((character) => {
                const {id, title, price, description, category, image} = character;
                return (
                    <div key={id} className="card">
                        <img src={image} alt={title} />
                        <h2>{title}</h2>
                        <p>{description}</p>
                        <p>{category}</p>
                        <p>${price}</p>
                    </div>
                )
            })
        }
     </main>
    )
}