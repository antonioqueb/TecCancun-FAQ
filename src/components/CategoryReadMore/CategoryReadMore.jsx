import React, { useState } from 'react';
import './CategoryReadMore.css';
import faqData from './../Data/faqData';
import NavBar from './../NavBar/NavBar';

export default function CategoryReadMore({ category, onClose }) {
    const [visibleItems, setVisibleItems] = useState(3);
    const categoryData = faqData[category.name] || [];
    const isExpandable = Array.isArray(categoryData) ? categoryData.length > 5 : Object.values(categoryData).flat().length > 5;

    const showMore = () => {
        setVisibleItems(Array.isArray(categoryData) ? categoryData.length : Object.values(categoryData).flat().length);
    };

    const showLess = () => {
        setVisibleItems(3);
    };

    const renderAnswer = (answer) => {
        if (Array.isArray(answer)) {
            return answer.map((item, index) => <li key={index}>{item}</li>);
        }
        return answer;
    };

    const renderItem = (item, index) => (
        <li key={index}>
            <strong>Pregunta: </strong>{item.pregunta}
            <br />
            <strong>Respuesta: </strong>
            {renderAnswer(item.respuesta)}
        </li>
    );

    const renderCategoryData = () => {
        if (Array.isArray(categoryData)) {
            return categoryData.slice(0, visibleItems).map(renderItem);
        } else {
            return Object.entries(categoryData).map(([subCategory, items], index) => (
                <div key={index}>
                    <strong><h3 className='subcategory'>{subCategory}</h3></strong>
                    <ul>
                        {items.slice(0, visibleItems).map(renderItem)}
                    </ul>
                </div>
            ));
        }
    };

    return (
        <div className="category-read-more">
            <div className="category-read-more-content">
                <h2>{category.name}</h2>
                <p>{category.description}</p>
                {renderCategoryData()}
                {isExpandable && (
                    visibleItems < (Array.isArray(categoryData) ? categoryData.length : Object.values(categoryData).flat().length) ?
                    <button onClick={showMore}>Ver más</button> :
                    <button onClick={showLess}>Ver menos</button>
                )}
                <button onClick={onClose}>Cerrar</button>
            </div>
        </div>
    );
}
