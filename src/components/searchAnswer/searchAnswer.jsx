import React, { useState } from 'react';
import Fuse from 'fuse.js';
import faqData from './../Data/faqData';
import AnswerModal from './../Answer/AnswerModal';
import './searchAnswer.css';

export default function SearchAnswer() {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [showModal, setShowModal] = useState(false);

    const flattenedData = Object.values(faqData).flat(2);

    const fuse = new Fuse(flattenedData, {
        keys: ['pregunta', 'respuesta'],
        includeScore: true,
        threshold: 0.4
    });

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (searchTerm.trim()) { // Asegurarse de que searchTerm no esté vacío
            const results = fuse.search(searchTerm).map(result => result.item);
            setSearchResults(results);
            setShowModal(true);
        }
    };

    return (
        <div className='container-search'>
            <form className="search" onSubmit={handleSubmit}>
                <input 
                    placeholder="Describe tu asunto..." 
                    type="text" 
                    value={searchTerm} 
                    onChange={handleSearch}
                />
                <button type="submit" disabled={!searchTerm.trim()}>Buscar</button> {/* Botón deshabilitado si searchTerm está vacío */}
            </form>
            {showModal && 
                <AnswerModal 
                    searchResults={searchResults} 
                    onClose={() => setShowModal(false)} 
                />
            }
        </div>
    );
}
