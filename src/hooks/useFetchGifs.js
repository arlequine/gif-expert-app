// el use en el archivo es nombre estandar para identificar el hook
import { useState, useEffect } from 'react';
import { getGifs } from '../helpers/GetGifs';
export const useFetchGifs = (category) => {
  const [state, setState] = useState({
    data: [],
    loading: true
  })

  useEffect(() => {
    getGifs(category)
      //pasa por automatico el argumento y hace el set de las iamgenes en el state
      /*
      .then(setState)
      */
      .then(imgs => {
        setTimeout(() => {
          console.log(imgs);
          setState({
            data: imgs,
            loading: false
          })
        }, 3000);
      });
  }, [category])

  return state // { data: [],loading: false}
}
