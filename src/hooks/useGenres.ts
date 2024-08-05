import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres";
import APICLIENT from "../services/api-client";
import { FetchResponse } from "../services/api-client";
const apiClient = new APICLIENT<Genre>('/genres')

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = () => useQuery({
  queryKey: ['genres'],
  queryFn: apiClient.getAll,
  staleTime: 1 * 60 * 60 * 1000, //1hr
  initialData: {
    count: genres.length,
    results: genres
  }
})

export default useGenres;