import { useEffect, useState } from "react";
import style from "./Card.module.scss";

export default function Card({ img, handleClick, bestScoreState, scoreState, numOfImages, isAllClicked, setIsAllClicked}) {
    const bestScore = bestScoreState[0];
    const setBestScore = bestScoreState[1];
    const score = scoreState[0];
    const setScore = scoreState[1];
    const [isClicked, setIsClicked] = useState(isAllClicked);
    function onClickFunc() {
        handleClick();
        if (isClicked === false) {
            setIsClicked(true);
            setScore(score + 1);
        }
        else {
            setScore(0);
            setIsClicked(false);
        }
        
    }

    useEffect(() => {
        bestScore < score && setBestScore(score);
    }, [score])

    useEffect(() => {
        console.log(score + " " + numOfImages);
        if (score == numOfImages) {
            setIsAllClicked(true);
            setScore(0);
        }
    }, [score]);

    useEffect(() => {
        if(isClicked === false) setIsAllClicked(true);
    }, [isClicked])

    useEffect(() => {
        if (isAllClicked) {
            console.log(isAllClicked);
            setIsClicked(false);
            setIsAllClicked(false);
        }
    }, [isAllClicked]);

    return (
        <div className={style.card + " " + isClicked} onClick={onClickFunc}>
            <img src={img.images["downsized_still"].url} alt={img.title} />
            <p>{img.title}</p>
        </div>
    )
}