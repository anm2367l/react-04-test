import { useEffect } from "react";
// import { getGifs } from "../helpers/getGifs";
import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {

    const { images, isLoading } = useFetchGifs(category);

    // console.log(images);
    // console.log(isLoading);

    // const [images, setImages] = useState([]);
    // // downsized_medium
    // const setGifs = async (category) => {
    //     const imgs = await getGifs(category);
    //     setImages(imgs);
    //     // console.log(images);
    // };



    // useEffect(() => {
    //     setGifs(category);
    // }, []);

    return (
        <>
            <h3>{category}</h3>

            {
                isLoading
                    ? (<h2>Cargando...</h2>)
                    : null
            }

            <div className="card-grid">
                {images.map((img) => (
                    // <li key={img.id}>{img.title}</li>
                    <GifItem key={img.id} title={img.title} url={img.url} />
                ))}
            </div>
        </>
    )
}
