import React, {createContext, useState, useEffect} from 'react'
import axios from 'axios'

//Create context
export const ModalContext = createContext();

const ModalProvider = (props) => {
    //State de modalProvider is
    const [idRecetas, guardarIdReceta] = useState(null);
    const [receta, guardarReceta] = useState({});
    //una vez tenemos el id de la receta, podemos consultarla a la Api del
    useEffect(() => {
        const obtenerReceta = async () => {
            if(!idRecetas) return;
            const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idRecetas}`;
            const resultado = await axios.get(url);
            //console.log(resultado.data.drinks[0]);
            guardarReceta(resultado.data.drinks[0]);
        }
        obtenerReceta();
    }, [idRecetas]);

    return (  
        <ModalContext.Provider value={ { guardarIdReceta } }>
            {props.children}
        </ModalContext.Provider>
    );
}
 
export default ModalProvider;