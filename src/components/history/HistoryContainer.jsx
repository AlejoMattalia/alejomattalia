import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { technologies } from "../../apis/technologies";
import { History } from "./History";

export function HistoryContainer() {

  //Guarda la tecnologia en la variable technology
  const [technology, setTechnology] = useState({});
  const { id } = useParams();

  useEffect(() => {
    let productSelect = technologies.find((el) => el.id === +id);

    new Promise((res) => res(productSelect)).then((response) =>
      setTechnology(response)
    );
  }, [id]);
 
  return <History technology={technology}/>;
}
