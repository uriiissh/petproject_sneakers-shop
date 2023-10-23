import { useSelector } from "react-redux";



export const useGoods = () => {
  const {goods} = useSelector( (state: any) => state)

  return{goods}
}