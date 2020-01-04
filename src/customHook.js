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
    const fetchData = async () => {
      dispatch({ type: 'FETCH_INIT' });

      try {
        const result = await Axios(url)

        dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
      } catch (error) {
        dispatch({ type: 'FETCH_FAILURE' });
      }
    };

    fetchData();
  }, [url])

  return [state, setUrl]
}

export default useHackerNewsApi;