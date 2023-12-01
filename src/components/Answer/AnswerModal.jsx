import React from 'react';
import './Answer.css';

function AnswerModal({ searchResults, onClose }) {
    // Comprobar si searchResults es un arreglo y tiene al menos un elemento
    const hasResults = Array.isArray(searchResults) && searchResults.length > 0;

    // Si no hay resultados, mostrar un mensaje alternativo
    const noResultsContent = (
        <div>
            <strong>No hay resultados para mostrar</strong>
        </div>
    );

    // Contenido cuando hay resultados
    const resultsContent = hasResults ? (
        <div>
            <strong>Pregunta: </strong>{searchResults[0].pregunta}
            <br />
            <strong>Respuesta: </strong>{searchResults[0].respuesta}
        </div>
    ) : noResultsContent;

    return (
        <div className="modal" onClick={onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <span className="close" onClick={onClose}>&times;</span>
                <div className="modal-results">
                    {resultsContent}
                </div>
            </div>
        </div>
    );
}

export default AnswerModal;
