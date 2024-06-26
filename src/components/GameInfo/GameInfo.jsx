import style from "./GameInfo.module.scss";

export default function GameInfo() {
    return (
        <div className={style.info}>
            <p id="score">Score: </p>
            <p id="bestScore">Best score: </p>
        </div>
    )
}