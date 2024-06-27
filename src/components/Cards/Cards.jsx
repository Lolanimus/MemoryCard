import style from "./Cards.module.scss";
import Card from "../Card/Card";
import { useState } from "react";

export default function Cards() {
    const [ids, setIds] = useState([]);
    return (
        <div className={style.cardsDiv}>
            <Card ids={ids} setTitles={setIds} />
        </div>
    )
}