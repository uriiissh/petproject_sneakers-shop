import { useSelector } from "react-redux";



export const useFavorites = () => {
  const {favorites} = useSelector( (state: any) => state)

  return{favorites}
}