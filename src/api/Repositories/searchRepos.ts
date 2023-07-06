import { SearchReposResponse } from "@customTypes/index";
import axios from "axios";

export async function searchRepos(query: string, page: number = 1) {
  const response = await axios.get<SearchReposResponse>(
    `https://api.github.com/search/repositories?q=${query}&page=${page}`,
    {
      headers: {
        Authorization: "Bearer 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",
      },
    }
  );

  return response.data.items;
}