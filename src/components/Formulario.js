import React, { useContext, useState } from 'react'
import { CategoriasContext } from '../context/CategoriasContext';
import { RecetasContext } from '../context/RecetasContext';

const Formulario = () => {

    const [busqueda, guardarBusqueda] = useState({
        nombre: '',
        categoria: ''
    });
    
    const { categorias } = useContext(CategoriasContext);
    const { buscarRecetas, guardarConsultar } = useContext(RecetasContext);
    //console.log(categoria);
    //Funcion para leer contenido de los form y select 
    const obtenerDatosReceta = e => {
        guardarBusqueda({
            ...busqueda,
            [e.target.name]: e.target.value
        })
    }
    //Cuando el usuario presiona el boton

    return ( 
        <form 
            className="col-md-12"
            onSubmit={e => {
                e.preventDefault();
                buscarRecetas(busqueda);
                guardarConsultar(true);
            }}
        >
            <fieldset className="text-center">
                <legend>Busca bebidas por categoria o Ingrediente</legend>
            </fieldset>
       
            <div className="row mt-4">
                <div className="col-md-4">
                    <input 
                    type="text" 
                    className="form-control"
                    name="nombre"
                    placeholder="Busca por ingrediente"
                    onChange={obtenerDatosReceta}
                    />
                </div>
                <div className="col-md-4">
                    <select 
                    className="form-control"
                    name="categoria" 
                    onChange={obtenerDatosReceta}    
                    >
                        <option value="">-- Selecciona Categoría --</option>
                        {categorias.map(categoria => (
                            <option 
                                key={categoria.strCategory} 
                                value={categoria.strCategory} 
                            >{categoria.strCategory}</option>
                        ))}
                    </select>
                </div>
                <div className="col-md-4">
                    <input
                    type="submit"
                    className="btn btn-block btn-primary"
                    value="Buscar Bebidas"
                    />
                </div>
            </div>

        </form>
     );
}
 
export default Formulario;