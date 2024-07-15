import { useContext } from "react";
import style from "./GameInfo.module.scss";
import { UserContext } from "../../App";

export default function GameInfo() {
    const bestScoreState = useContext(UserContext)!.bestScoreState;
    const scoreState = useContext(UserContext)!.scoreState;
    return (
        <div className={style.info}>
            <p id="score">Score: {scoreState[0] as number}</p>
            <p id="bestScore">Best score: {bestScoreState[0] as number}</p>
        </div>
    )
}