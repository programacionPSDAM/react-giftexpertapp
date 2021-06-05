//import { useState, useEffect } from "react"
//import getGifs from "../helpers/getGifs"
import { useFetchGifs } from "../hooks/useFetchGifs"
import GifGridItem from "./GifGridItem"


const GifGrid = ( { categoria } ) => {
    const {data: images, loading} = useFetchGifs(categoria);
   // console.log(data)
    console.log(loading)

    
    // const [images, setImages] = useState ([])
    // useEffect ( () => {
    //     getGifs(categoria)
    //     .then(setImages)
    // }, [categoria])   //[] no tiene dependencias, se ejecuta solo una vez

    
  //  getGifs();
    return (
        <>
             <h3> { categoria } </h3>
             {loading && <p>Loading ....</p> }
            <div className="card-grid">
            
                <ol>
                { 
                        images.map((img) => (
                            <GifGridItem  
                                key={img.id}
                                {...img}
                                />
                        ))
                
                }
                </ol>
            </div>
        </>
       
    )
}

export default GifGrid