import style from "./Card.module.scss";

export default function Card({ img, handleClick }) {
    console.log();
    return (
        <div className={style.card} onClick={handleClick}>
            <img src={img.images["downsized_large"].url} alt={img.title} />
            <p>{img.title}</p>
        </div>
    )
}