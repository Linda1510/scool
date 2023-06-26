import { useEffect, useState } from "react";
import Container from "../../components/container";
import AnimalCard from "./animal-card";
import Devider from "../../components/devider";
import Pagination from "../../components/pagination";
export type AnimalsType = {
  name: string;
  species: string;
  animalClass: string;
};
const rpp = 8;
const noOfItems = 20;
const numberofPages = Math.ceil(20 / 8);

const Animals = () => {
  const [animals, setAnimals] = useState<AnimalsType[]>([]);
  const [page, setPage] = useState<number>(1);
  const getAnimals = () => {
    fetch(`http://localhost:3000/animals?_page=${page}&_limit=${rpp}`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((data) => {
        console.log(data);
        setAnimals(data);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getAnimals();
  }, [page]);
  return (
    <Container>
      <div>Animals</div>
      <Devider />

      <div className="grid grid--primary">
        {animals.map((animals: AnimalsType) => {
          return <AnimalCard animal={animals} />;
        })}
      </div>
      <Pagination onPaginate={(activePage) => console.log("active page:")} />
    </Container>
  );
};
export default Animals;
