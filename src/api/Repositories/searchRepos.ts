import { SearchReposResponse } from "@customTypes/index";
import axios from "axios";

export async function searchRepos(query: string, page: number = 1) {
  const response = await axios.get<SearchReposResponse>(
    `https://api.github.com/search/repositories?q=${
      query || "open source"
    }&page=${page}`
  );

  return response.data.items;
}
