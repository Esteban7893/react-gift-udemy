import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";


export const useFetchGifs = (category) => {
  const [gifs, setGifs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  console.log(isLoading);
  
  const getGifsList = async () => {
    const lista = await getGifs(category);
    console.log(lista);
    setIsLoading(false);
    setGifs(lista);
  };

  useEffect(() => {
    // const lista = getGifs(category);

    getGifsList();
  }, []);

  return{
    gifs: gifs,
    isLoading
  }

}
