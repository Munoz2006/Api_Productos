import { useEffect, useState } from 'react';
import { Card } from '../../componest/Card/Card';
import './Home.css';

const URL = 'https://fakestoreapi.com/products';

export const Home = () => {
    const [characters, setCharacters] = useState([]);
    const [filteredCharacters, setFilteredCharacters] = useState([]); 
    const [input, setInput] = useState(''); 

    const handleGetCharacters = async () => {
        const response = await fetch(URL);
        const data = await response.json();
        setCharacters(data); 
        setFilteredCharacters(data); 
    };

    const handleInputChange = (e) => {
        setInput(e.target.value); 
    };

    
    useEffect(() => {
        handleGetCharacters();
    }, []); 

    
    useEffect(() => {
        const filtered = characters.filter((character) =>
            character.title.toLowerCase().includes(input.toLowerCase())
        );
        setFilteredCharacters(filtered); 
    }, [input, characters]); 

    return (
        <main>
            <input
                type="text"
                placeholder="Buscar productos..."
                value={input}
                onChange={handleInputChange}
                className="search-input"
            />
            <section>
                {filteredCharacters.map((character) => (
                    <Card key={character.id} {...character} />
                ))}
            </section>
        </main>
    );
};