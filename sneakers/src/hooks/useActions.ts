import { bindActionCreators } from '@reduxjs/toolkit';
import { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import {actions} from "../Redux/favorites/favorites.slice";
import {actions as goodsActions} from "../Redux/goods/goods.slice";

const rootActions = {
  ...actions,
  ...goodsActions
}


export const useActions = () => {

  const disapatch = useDispatch()


  return useMemo(() => bindActionCreators(rootActions, disapatch), [disapatch])
}