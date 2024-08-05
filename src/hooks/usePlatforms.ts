import platforms from "../data/platforms";
import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";
import { FetchResponse } from "../services/api-client";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () =>
  useQuery({
    queryKey: ['platforms'],
    queryFn: () =>
      apiClient.get<FetchResponse<Platform>>("/platforms/lists/parents")
        .then(res => res.data),
    staleTime: 1 * 60 * 60 * 1000, //1hr
    initialData: {
      count: platforms.length,
      results: platforms
    }
  });

export default usePlatforms;
// function FetchResponse<T>(arg0: string) {
//   throw new Error("Function not implemented.");
// }

