import style from "./Card.module.scss";

export default function Card({ img }) {
    console.log(img);
    return (
        <div className={style.card}>
            <img src={img.images["downsized_large"].url} alt={img.title} />
            <p>{img.title}</p>
        </div>
    )
}