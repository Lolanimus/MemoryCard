import { useEffect, useState } from "react";
import style from "./Card.module.scss";

export default function Card({ids, setIds}) {
    const [img, setImg] = useState(null);
    const [loading, setLoading] = useState(true);
    const fetchingImage = async () => {
        try {
            const response = await fetch("https://api.giphy.com/v1/gifs/translate?api_key=F25YrJWTElHcsQtfjKGE7LejK8EpNvYP&s=%22black%20and%20white%22");
            if (!response.ok)
                throw new Error("Something wrong with the connectcion");
            const data = await response.json();
            const result = data.data;
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
            {(!loading && img !== null) && (
                <>
                    <img src={img.images['downsized'].url} alt={img.alt_text} />
                    <p>{img.title}</p>
                </>
            )}
        </div>
    )
}