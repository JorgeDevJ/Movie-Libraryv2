import { useState, useEffect } from "react";
import { movieApi } from "../services/api/movieApi";
import { useRouter } from "next/router";
export const useGeneralData = (url, id, sort) => {
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(false);
  const { query } = useRouter();

  const getData = async () => {
    try {
      setLoader(true);
      const { data } = await movieApi.get(url, {
        params: {
          page: 1,
        },
      });
      const response = data.results;
      setData(response);
      setLoader(false);
    } catch (error) {
      console.log(error);
    }
  };
  const filterDataGenres = async () => {
    try {
      setLoader(true);
      const { data } = await movieApi.get(url, {
        params: {
          page: query.page_index,
          sort_by: query.sort,
          include_adult: true,
          with_genres: query.gen,
        },
      });
      const response = data.results;
      setData(response);
      setLoader(false);
    } catch (error) {
      console.log(error);
    }
  };
  const RecommendationMovie = async () => {
    try {
      setLoader(true);
      const { data } = await movieApi.get(url, {
        params: {
          page: 1,
          include_adult: true,
        },
      });
      const response = data.results;
      setData(response);
      setLoader(false);
    } catch (error) {
      
      console.log(error);
    }
  };
  const PersonData = async () => {
    try {
      setLoader(true);
      const { data } = await movieApi.get(url);
      const response = data.results;
      setData(response);
      setLoader(false);
    } catch (error) {
      
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  useEffect(() => {
    filterDataGenres();
  }, [query.sort, query.gen, query.page_index]);
  useEffect(() => {
    RecommendationMovie()
    PersonData()
  }, [id]);
  return[data, loader]
};
