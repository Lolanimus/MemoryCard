import { useEffect, useState } from "react";
import style from "./Card.module.scss";
interface Props {
    img: {
        title: string,
        images: {
            downsized_still: {
                url: string;
            }
        }
    },
    handleClick: () => void,
    bestScoreState: (number | React.Dispatch<React.SetStateAction<number>>)[],
    scoreState: (number | React.Dispatch<React.SetStateAction<number>>)[],
    numOfImages: number,
    isAllClicked: boolean,
    setIsAllClicked: React.Dispatch<React.SetStateAction<boolean>>
}
export default function Card({ img, handleClick, bestScoreState, scoreState, numOfImages, isAllClicked, setIsAllClicked}: Props) {
    const bestScore = bestScoreState[0] as number;
    const setBestScore = bestScoreState[1] as React.Dispatch<React.SetStateAction<number>>;
    const score = scoreState[0] as number;
    const setScore = scoreState[1] as React.Dispatch<React.SetStateAction<number>>;
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