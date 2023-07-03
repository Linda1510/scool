import { useNavigate } from "react-router-dom";
import { AnimalType } from "./animal";
import animalPaw from "./../../assets/image/paw.png";
import imgDiet from "./../../assets/image/png-clipart-meat-computer-icons-primal-cut-food-meat-barbecue-food-thumbnail.png";
import imgHabitat from "./../../assets/image/habitat.png";
import Delete from "../../assets/icons/delete";

type AnimalCardProps = {
  animal: AnimalType;
  onDelete: (id: string) => void;
};

const AnimalCard = ({ animal, onDelete }: AnimalCardProps) => {
  //Na ovaj način raspakiramo objekt kako ne bismo stalno morali pisat "animal" kad ga mapiramo
  const { name, animalClass, diet, species, habitat, id } = animal;

  const navigate = useNavigate();

  return (
    <div className="card">
      <div className="card__header">
        <div className="card__header__img__wrapper">
          <img
            onClick={() => navigate(`./${id}`)}
            className="card__header__img"
            width={"100%"}
            src={`https://source.unsplash.com/random/500x500/?${animal.name.replace(
              " ",
              "-"
            )}`}
            alt={`Image of ${animal.name}`}
          />
        </div>
        <div>
          <div className="card__title">{name}</div>
          <div className="card__subtitle">{species}</div>
        </div>
      </div>
      <div className="card__row">
        <img src={animalPaw} alt="Animal class icon." />
        <span>{animalClass}</span>
      </div>
      <div className="card__row">
        <img src={imgDiet} alt="Icon for an animal's diet." />
        <span>{diet}</span>
      </div>
      <div className="card__row">
        <img src={imgHabitat} alt="Icon for an animal's habitat." />
        <span>{habitat}</span>
      </div>
      <div className="card__btn" onClick={() => onDelete(id)}></div>
      <Delete />
    </div>
  );
};

export default AnimalCard;
