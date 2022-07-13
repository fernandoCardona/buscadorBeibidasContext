import React, { useContext, useState } from 'react';
import { ModalContext } from '../context/ModalContext';



const Receta = ({receta}) => {

    

    // extraer los valores del context
    const { informacion, guardarIdReceta, guardarReceta } = useContext(ModalContext);

    // Muestra y formatea los ingredientes
    const mostrarIngredientes = informacion => {
        let ingredientes = [];
        for(let i = 1; i < 16; i++){
            if( informacion[`strIngredient${i}`] ) {
                ingredientes.push(
                    <li> { informacion[`strIngredient${i}`] }  { informacion[`strMeasure${i}`] }</li>
                )
            }
        }

        return ingredientes;
    }

    return ( 
        <div className="col-md-4 mb-3">
            <div className="card">
                 <h2 className="card-header">{receta.strDrink}</h2>

                 <img className="card-img-top" src={receta.strDrinkThumb} alt={`Imagen de ${receta.strDrink}`} />

                 <div className="card-body">
                     <button
                        type="button"
                        className="btn btn-block btn-primary"
                        onClick={() => {
                            guardarIdReceta(receta.idDrink);
                            
                        }}
                     >
                         Ver Receta
                     </button>


                 </div>
            </div>
        </div>
     );
}
 
export default Receta;