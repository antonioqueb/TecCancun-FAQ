import React, { useState } from 'react';
import Fuse from 'fuse.js';
import faqData from './../Data/faqData';
import AnswerModal from './../Answer/AnswerModal';
import './searchAnswer.css';

export default function SearchAnswer() {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [showModal, setShowModal] = useState(false);

    // Modificación aquí: Aplanar los datos incluyendo subcategorías
    let flattenedData = [];
    Object.entries(faqData).forEach(([category, contents]) => {
        if (Array.isArray(contents)) { // Maneja categorías sin subcategorías
            contents.forEach(faq => {
                flattenedData.push({ ...faq, categoria: category });
            });
        } else { // Maneja categorías con subcategorías
            Object.entries(contents).forEach(([subCategoria, faqs]) => {
                faqs.forEach(faq => {
                    flattenedData.push({ ...faq, categoria: category, subCategoria });
                });
            });
        }
    });

    // Ajustar Fuse.js para incluir categoría y subcategoría en la búsqueda
    const fuse = new Fuse(flattenedData, {
        keys: ['pregunta', 'respuesta', 'categoria', 'subCategoria'], // Incluye 'subCategoria'
        includeScore: true,
        threshold: 0.4
    });

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (searchTerm.trim()) {
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
                <button type="submit" disabled={!searchTerm.trim()}>Buscar</button>
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
