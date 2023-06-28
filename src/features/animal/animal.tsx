import { useEffect, useState } from "react";
import Container from "../../components/container";
import AnimalCard from "./animal-card";
import Devider from "../../components/devider";
import Pagination from "../../components/pagination";
import Loader from "../../components/loader";
import FloatingButton from "../../components/floatingbutton";

export type AnimalsType = {
  name: string;
  species: string;
  animalClass: string;
};
const rpp = 8;
const noOfItems = 20;
const numberOfPages = Math.ceil(noOfItems / 8);

const Animals = () => {
  const [animals, setAnimals] = useState<AnimalsType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [page, setPage] = useState<number>(1);
  const getAnimals = () => {
    setLoading(true);
    fetch(`http://localhost:3000/animals?_page=${page}&_limit=${rpp}`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((data) => {
        setTimeout(() => {
          setAnimals(data);
          setLoading(false);
        }, 2000);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getAnimals();
  }, [page]);
  return (
    <Container>
      <Loader isActive={loading} />
      <div>Animals</div>
      <Devider />
      <div>Imamo itema: {animals.length}</div>
      <div className="grid grid--primary">
        {animals.map((animals: AnimalsType) => {
          return <AnimalCard animal={animals} />;
        })}
      </div>
      <Pagination
        activePage={page}
        numberOfPages={numberOfPages}
        onPaginate={(activePage) => setPage(activePage)}
      />
      <FloatingButton />
    </Container>
  );
};
export default Animals;
