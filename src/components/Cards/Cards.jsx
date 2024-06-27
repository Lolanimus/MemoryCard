import style from "./Cards.module.scss";
import Card from "../Card/Card";

export default function Cards() {
    return (
        <div className={style.cardsDiv}>
            <Card />
        </div>
    )
}