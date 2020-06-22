import * as axios from 'axios';

const instance = axios.create({
    baseURL: 'https://www.cbr-xml-daily.ru/'
})

export const courseURL = async () => {
    return await instance.get('daily_json.js')
        .then(response => response.data);
        
}







 


