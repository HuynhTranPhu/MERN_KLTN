import axios from 'axios'


export const getData = async (url) => {
    const res = await axios.get(url)
    return res;
}