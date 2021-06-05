import { useState } from "react"
import PropTypes from 'prop-types';

const AddCategory = ( { setCategorias } ) => {
    const [inputValue, setInputvalue] = useState('')

    const handleInputChange = (e) =>  {
        setInputvalue(e.target.value)
    }

    const hadlSubmit = (e) => {
        e.preventDefault(); //previene el refresco del navegador, hay que hacerlo SI o SI
        if (inputValue.trim().length > 2){
            setCategorias(cats => [inputValue,...cats])
            setInputvalue('');

        }
        //console.log('hecho.')
    }
    
    return (
        <form onSubmit = {hadlSubmit}>
            
            <input 
            
                type="text"
                value={ inputValue }
                onChange= {handleInputChange}
            />
        </form> 
    )
}

AddCategory.propTypes = {
    setCategorias: PropTypes.func.isRequired
}
export default AddCategory