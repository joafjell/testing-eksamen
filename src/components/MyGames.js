import GameCard from "./GameCard";
import {mygames} from "./Games";

export default function MyGames(){
  return (
      <>
        <section className="my-games">
            {mygames?.map((game, index) => {
              const {title, released, genres, img, link} = game;
              return  <GameCard key={index} title={title} released={released} genres={genres} img={img} link={link} slug={game?.game?.label.replace(/\s/g, "-").toLowerCase()}/>
          })}
        </section>
      </>
    );
}