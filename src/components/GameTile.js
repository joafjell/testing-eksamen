import { Link } from "react-router-dom";

/*har brukt https://github.com/joafjell/uin23ak4_moviesearch_fjell/blob/main/src/components/MovieCards.js som inspirasjon*/

export default function GameTile({title, released, genres, link, img}){
    return (
        <>
        <article className="game-tile">
            <Link to={link} className="link-text">
            <img src={img} alt={title} className="game-image"></img>
            <h2 className="game-title">{title}</h2>
            </Link>
            <p>Genres: <span>{genres}</span></p>
            <p>Releasedate: {released}</p> 
        </article>
        </>
    )
}