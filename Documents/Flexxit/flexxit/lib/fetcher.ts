import axios from "axios";


const fecher = (url: string) => axios.get(url).then((res) => res.data);

export default fecher;