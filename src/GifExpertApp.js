import { Fragment, useState } from "react"
import AddCategory from "./components/AddCategory";
import GifGrid from './components/GifGrid'

const GifExpertApp = () => {

    // const categorias = ['jaén', 'córdoba', 'granada', 'sevilla', 'málaga'];
    const [categorias, setCategorias] = useState(['jaén']);

    // const handleAdd = () => {
    //    // categorias.push('almería');
    //    //setCategorias([...categorias, 'almería'])
    //    //setCategorias(cats => [...categorias, inputValue])
    // }
     return (
        <Fragment>
            <h2>GifExpertApp</h2>
            <AddCategory setCategorias={setCategorias}/>
            <hr />
            <ol>
                {
                    categorias.map( categoria =>  (
                    <GifGrid  
                        key= {categoria}
                        categoria= {categoria}
                    />
                    ))
                }
            </ol>
        </Fragment>
    )
}

export default GifExpertApp