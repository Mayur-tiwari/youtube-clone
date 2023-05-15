import React from 'react';
import { useState,useEffect } from 'react';
import { Link,useParams } from 'react-router-dom';
import ReactPlayer from'react-player';
import {Typography,Box,Stack} from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import Videos from './Videos';
import { FetchFromAPI } from '../utils/FetchFromAPI';
import { ClassNames } from '@emotion/react';

const VideoDetail = () => {
  const {id} = useParams();
  const[videoDetail,setvideoDetail]= useState(null);
  const[videos,setvideos]= useState(null);
  useEffect(()=>{
    FetchFromAPI(`videos?part=snippet,statistics&id=${id}`).then((data)=>setvideoDetail(data.items[0]));
    FetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`).then((data)=>setvideos(data.items))
  },[id])
  console.log(videoDetail);

  return (
   <Box minHeight='95vh'>
    <Stack direction={{xs:'column',md:'row'}}>
      <Box flex={1}>
        <Box sx={{width:'100%',position:'sticky',top:'86px'}}>
          <ReactPlayer url = {`https://www.youtube.com/watch?v=${id}`} className='react-player' controls/>&&
          {videoDetail && <Typography color = '#fff' variant='h5' fontWeight='bold' p={2}>
            {videoDetail.snippet.title}
            
          </Typography>}
          

        </Box>
      </Box>
      <Box px = {2} py = {{md:1,xs:5}} justifyContent='center' alignItems='center'>
      <Videos videos = {videos} direction = 'column'/>

    </Box>
    </Stack>
  
    </Box>
  )
}

export default VideoDetail