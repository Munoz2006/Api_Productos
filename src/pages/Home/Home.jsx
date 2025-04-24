import { useEffect, useState } from 'react';
import { Card } from '../../componest/Card/Card';
import './Home.css';

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
        <section>
        {
            characters.map( characters =>(
                <Card key={characters.id} {...characters} />
            ))
        }
        </section>
     </main>
    )
}