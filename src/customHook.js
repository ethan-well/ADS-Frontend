import React, { useState, useEffect, useReducer } from 'react';
import Axios from 'axios';
import dataFetchReducer from './dateFetchReducer';

const useHackerNewsApi = (initialUrl, initialData) => {
  const [url, setUrl] = useState( initialUrl );

  const [state, dispatch] = useReducer(dataFetchReducer, {
    isLoading: false,
    isError: false,
    data: initialData,
  });

  useEffect(() => {
    let didCancel = false;

    const fetchData = async () => {
      dispatch({ type: 'FETCH_INIT' });

      try {
        const result = await Axios(url)

        if (!didCancel) {
          dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
        }
      } catch (error) {
        if (!didCancel) {
          dispatch({ type: 'FETCH_FAILURE' });
        }
      }
    };

    fetchData();

    return () => {
      didCancel = true;
    };
  }, [url]);

  return [state, setUrl];
}

export default useHackerNewsApi;