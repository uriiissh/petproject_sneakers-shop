import { bindActionCreators } from '@reduxjs/toolkit';
import { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import {actions} from "../Redux/favorites/favorites.slice";

const rootActions = {
  ...actions
}


export const useActions = () => {

  const disapatch = useDispatch()
  

  return useMemo(() => bindActionCreators(rootActions, disapatch), [disapatch])
}