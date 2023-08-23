import axios from "axios";

async function fetcher(url, header) {
  return axios.get(url, header).then((res) => res.data);
}

export default fetcher;
