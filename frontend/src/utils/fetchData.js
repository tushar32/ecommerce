import axios from "axios";

let cache =  new Map();

export async function fetchData(url) {
    if (!cache.has(url)) {
      cache.set(url, getData(url));
    }
    return cache.get(url);
  }
  
export async function getData(url) {
    try {
      const res = await axios.get(url)
      if(res.status == 200) {
        return res.data.result
      }

    } catch (error) {
      throw Error(error);
    }
  }