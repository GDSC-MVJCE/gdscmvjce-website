import axios from "axios";

async function fetcher(url) {
  return axios
    .get(url, {
      headers: {
        "x-api-key": process.env.NEXT_PUBLIC_APIKEY
      }
    })
    .then((res) => res.data);
}

export default fetcher;
