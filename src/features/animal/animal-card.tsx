import Button from "../../components/button";
import { AnimalType } from "./animal";

type AnimalCardProps = {
  animal: AnimalType;
};

const AnimalCard = ({ animal, onDelete }: AnimalCardProps) => {
  const { name, species, id } = animal;

  return (
    <div className="card">
      <div className="card__header">
        <img
          className="card__header__img"
          width={"100%"}
          src={`https://source.unsplash.com/random/500x500/?${animal.name.replace(
            " ",
            "-"
          )}`}
          alt="Image of an animal"
        />
        <div>
          <div className="card__title">{name}</div>
          <div className="card__subtitle">{species}</div>
        </div>
      </div>
      <Button text="delete" color="red" onClick={() => onDelete(id)} />
    </div>
  );
};

export default AnimalCard;
