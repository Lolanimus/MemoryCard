import style from "./GameDesc.module.scss";

export default function GameDesc() {
    return (
        <div className={style.desc}>
            <h1 id="title">Lolan's Game</h1>
            <h2 id="desc">It's about the game bro</h2>
        </div>
    )
}