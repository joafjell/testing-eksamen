import { Link } from "react-router-dom";
import {mygames} from "./Games";
import GameTile from "./GameTile";

export default function MyGames(){
  return (
      <>
        <section className="my-games">
        <Link to="MyGames" className="link-text"><h2>MY GAMES</h2></Link>
        <u>
            {mygames?.map((game, index) => {
              const {title, released, genres, img, link} = game;
              return  <GameTile key={index} title={title} released={released} genres={genres} img={img} link={link} slug={game?.game?.label.replace(/\s/g, "-").toLowerCase()}/>
          })}
        </u>
        </section>
      </>
    );
}