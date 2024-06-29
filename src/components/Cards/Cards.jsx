import style from "./Cards.module.scss";
import Card from "../Card/Card";
import { useState, useEffect } from "react";

export default function Cards() {
    const numOfImages = 12;
    const data = useData(numOfImages);
    return (
        <div className={style.cardsDiv}>
            {data.map((el) => <Card img={el.data} key={el.data.id} />)}
        </div>
    )
}

function useData(numOfImages) {
    const [data, setData] = useState([]);
    const url = "https://api.giphy.com/v1/gifs/random?api_key=K1AltFTsgxUc2CpV2SQp8F0myqKm5k6i&tag=%22black%20and%20white%22&rating=g";
    useEffect(() => {
        let ignore = false;
        async function getData() {
            for (let i = 0; i < numOfImages; i++) {
                const response = await fetch(url);
                const fetchedData = await response.json();
                !ignore && setData(prevState => {
                    return [...prevState, fetchedData]
                });
            }
        }
        getData();
        return () => ignore = true;
    }, []);
    return data;
}