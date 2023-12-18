import axios from "axios";

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '80821de87edc4c57871077c54562e280'
  }
})