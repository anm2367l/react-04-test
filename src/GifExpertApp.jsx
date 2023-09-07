import { useState } from 'react';
import { AddCategory, GifGrid } from './components';
// import { GifGrid } from './components/GifGrid';


// YZUt39mT7adbx80V3PWyJKiXZfUBTmTy

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Dragon ball']);
    
    // console.log(categorias);
    const add_categorie = (newCategorie) => {
        // console.log(newCategorie);

        if (categories.includes(newCategorie)) return;

        setCategories([newCategorie, ...categories]);
    };


    return (
        <>
            {/* ------------------------------------------------------------------ */}
            {/* Titulo */}
            <h1>GifExpertApp</h1>



            {/* ------------------------------------------------------------------ */}
            {/* Input */}
            <AddCategory
                // setCategories={setCategories}
                onNewValue={event => add_categorie(event)}
            />
            {/* <button onClick={add_categoria}> Agregar Categoria </button> */}



            {/* ------------------------------------------------------------------ */}
            {/* Listado de Gifs */}
            {
                categories.map((category) => (<GifGrid key={category} category={category} />))
            }

            {/* Gif Item */}

        </>
    )
}
