import { useEffect, useState } from "react";
import style from "./Card.module.scss";

export default function Card() {
    const [img, setImg] = useState("");
    useEffect(() => {
        fetch("https://api.giphy.com/v1/gifs/search?q=black+and+white&api_key=F25YrJWTElHcsQtfjKGE7LejK8EpNvYP&limit=1")
            .then(response => response.json())
            .then(data => {
                () => setImg(data.data[0]);
            })
            .catch(error => console.log(error));
    }, [img])
    return (
        <div className={style.card}>
            <img src={img.url} alt={img.alt_text} />
        </div>
    )
}