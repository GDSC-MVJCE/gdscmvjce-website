import axios from "axios";

async function fetcher(url) {
	return axios.get(url).then((res) => res.data);
}

export default fetcher;
