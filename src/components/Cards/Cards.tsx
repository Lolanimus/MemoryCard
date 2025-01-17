import style from "./Cards.module.scss";
import Card from "../Card/Card";
import { useState, useEffect, useContext } from "react";
import { UserContext } from "../../App";

interface dataInterface {
    data: {
        id: string;
    }
}[];

type dataType = dataInterface & [];

export default function Cards() {
    const numOfImages = 12;
    const [data, setData] = useState <dataType>([] as dataType);
    const [isAllClicked, setIsAllClicked] = useState(false);
    const bestScoreState = useContext(UserContext)!.bestScoreState;
    const scoreState = useContext(UserContext)!.scoreState;
    console.log(bestScoreState);
    useData(numOfImages, setData); 
    console.log(data);
    const handleClick = () => {
        const newData = data!.slice() as dataType; // slice() is very important here
        // ---------------
        // if it was const newData = data; then it means that we're just referencing the value of data,
        // so when we use it in setData() it perceives that newData as the reference to the old data array.
        // but if we use slice() on data, we're essentially creating a new array, a copy of data,
        // so it will work for us to use this newData array in setData() now.
        // ---------------
        shuffle(newData);
        setData(newData);
        console.log(data);
    }

    return (
        <div className={style.cardsDiv + " " + isAllClicked}>
            {data!.map((el: any) => <Card img={el.data} handleClick={() => handleClick()} bestScoreState={bestScoreState} scoreState={scoreState} numOfImages={numOfImages} isAllClicked={isAllClicked} setIsAllClicked={setIsAllClicked} key={el.data.id} />)}
        </div>
    )
}

function shuffle(array: dataType) {
  let currentIndex = array.length;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {

    // Pick a remaining element...
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
}

function useData(numOfImages: number, setData: React.Dispatch<React.SetStateAction<dataType>>) {
    const url = "https://api.giphy.com/v1/gifs/random?api_key=0aix9YKcsfm0NqfNMGeqilIerI0OK077&tag=%22black%20and%20white%22&rating=g";
    useEffect(() => {
        let ignore = false;
        console.log("start");
        const arrOfPromises: Promise<Response>[] = [];
        for (let i = 0; i < numOfImages; i++) {
            arrOfPromises.push(fetch(url));
        }
        async function getData() {
            const result = (
                await Promise.all(arrOfPromises)
            ).map((r) => r.json());
            const arrOfImgs = await Promise.all(result) as dataType;
            if(!ignore) {
                setData(arrOfImgs );
                console.log("end");
            }
        }
        getData();
    return () => { ignore = true; }
    }, []);
}