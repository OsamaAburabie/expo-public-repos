import { LocationData } from "@stores/types";
import axios from "axios";

export const getLocation = async () => {
  const res = await axios.get<LocationData>("https://ipapi.co/json/");
  return res.data;
};
