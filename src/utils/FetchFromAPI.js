import axios from 'axios'


const Base_Url = 'https://youtube-v31.p.rapidapi.com';

const options = {
    
   
    params: {
        maxResults:'50'
    
    },


    headers: {
      'X-RapidAPI-Key': 'd691343680mshc8a650b9b8400cbp1249a5jsn968a844590c6',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };

  export const FetchFromAPI = async (url)=>{
    const {data} = await axios.get(`${Base_Url}/${url}`,options);
    return data;
  }