const getGifs = async (categoria) => {
    const url =`https://api.giphy.com/v1/gifs/search?api_key=bMso0lvlIrnO3090x7bfVlSSPIIkiNYh&q=${encodeURI(categoria) }&limit=10`
    const res = await fetch(url)
    const { data } = await res.json()
    const gifs = data.map (img => {
        return {
            id: img.id,
            title: img.title,
            url : img.images?.downsized_medium.url  //? por sin no vienen imagenes
        }
    })
    return gifs;
    
}
export default getGifs