import { useEffect, useState } from "react";
import style from "./Card.module.scss";

export default function Card() {
    const [img, setImg] = useState(null);
    const [loading, setLoading] = useState(true);
    const fetchingImage = async () => {
        try {
            const response = await fetch("https://api.giphy.com/v1/gifs/search?q=black+and+white&api_key=uvn9u78oYla8YfLOBPBplJ6LbqCuQ8Bw&limit=1");
            if (!response.ok)
                throw new Error("Something wrong with the connectcion");
            const data = await response.json();
            const result = data.data[0];
            console.log(result);
            setImg(result);
            setLoading(false);
        } catch (error) {
            console.log("Catch error: " + error);
            setLoading(false);
        }
    }
    useEffect(() => {
        fetchingImage();
    }, [])
    return (
        <div className={style.card}>
            {!loading && (
                <>
                    <img src={img.images.original.url} alt={img.alt_text} />
                    <p>{img.user.display_name}</p>
                </>
            )}
        </div>
    )
}