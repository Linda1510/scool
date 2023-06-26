import { AnimalsType } from "./animal";
import imgpaw from "./../../assets/image/paw.png";
type animalCardProps = {
  animal: AnimalsType;
};

const AnimalCard = ({ animal }: animalCardProps) => {
  const { name, species, animalClass } = animal;
  return (
    <div className="card">
      <div className="card__header">
        <img
          className="card__header__img"
          src={`https://source.unsplash.com/random/500x500/?${animal.name.replace(
            " ",
            "-"
          )}`}
          alt=""
        />
      </div>
      <div>
        <div className="card__title">{name}</div>

        <div className="card__subtitle">{species}</div>
      </div>
      <div className="card__row">
        <img src={imgpaw} alt="" />
        <span>{animalClass}</span>
      </div>
    </div>
  );
};
export default AnimalCard;
