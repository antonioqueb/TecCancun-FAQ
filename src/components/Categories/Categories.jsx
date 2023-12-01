//src/components/Categories/Categories.jsx
import './Categories.css';
import { useState } from 'react';
import CategoryReadMore from './../CategoryReadMore/CategoryReadMore'

const Categories = () => {
    const maxVisible = 6; // Máximo número de tarjetas visibles inicialmente
    const [visibleCount, setVisibleCount] = useState(maxVisible);
    const [selectedCategory, setSelectedCategory] = useState(null); // Estado para la categoría seleccionada

    const categoriesList = [
        { id: 1, name: 'Ubicaciones y Horarios', description: 'Información sobre la ubicación de nuestras instalaciones y los horarios de apertura.' },
        { id: 2, name: 'Trámites y Requisitos', description: 'Guía detallada de los procedimientos y requisitos para nuestros servicios.' },
        { id: 3, name: 'Recursos Académicos y Plataformas Virtuales', description: 'Acceso a recursos académicos y plataformas de aprendizaje en línea.' },
        { id: 4, name: 'Reglamentos y Personal Docente', description: 'Información sobre reglamentos institucionales y perfiles del personal docente.' },
        { id: 5, name: 'Extracurriculares', description: 'Actividades extracurriculares ofrecidas, incluyendo deportes, arte y clubes.' },
        { id: 6, name: 'Instalaciones', description: 'Información sobre nuestras instalaciones, incluyendo bibliotecas, laboratorios y áreas deportivas.' }
    ];
   
    const handleCloseModal = () => {
        setSelectedCategory(null); // Función para cerrar el modal
    };

    const handleCategoryClick = category => {
        setSelectedCategory(category); // Actualiza el estado con la categoría seleccionada
    };

    const showMore = () => {
        setVisibleCount(prevVisibleCount => prevVisibleCount + maxVisible);
    };

    return (
        <div>
            <div className='container-category'>
                {categoriesList.slice(0, visibleCount).map(category => (
                    <div className="card" key={category.id} onClick={() => handleCategoryClick(category)}>
                        <p className="card-title">{category.name}</p>
                        <p className="small-desc">
                            {category.description.length > 100 ? category.description.slice(0, 100) + '...' : category.description}
                        </p>
                        <div className="go-corner">
                            <div className="go-arrow">→</div>
                        </div>
                    </div>
                ))}
            </div>
            {visibleCount < categoriesList.length && (
                <div className="button-container">
                    <button onClick={showMore} className="show-more-button">Mostrar más</button>
                </div>
            )}

            {selectedCategory && <CategoryReadMore category={selectedCategory} onClose={handleCloseModal} />}
        </div>
    );
}

export default Categories;