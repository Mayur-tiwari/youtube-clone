import React from 'react';
import { useState,useEffect } from 'react';
import { Box,Stack,Typography } from '@mui/material';
import Sidebar from './Sidebar';
import Videos from './Videos';

import { FetchFromAPI } from '../utils/FetchFromAPI';
const Feed = () => {
    const [SelectedCategory,setSelectedCategory] = useState('New')
    const [videos,setVideos] = useState([])
    useEffect(()=>{
        FetchFromAPI(`search?part=snippet&q=${SelectedCategory}`).then((data)=>setVideos(data.items))
    },[SelectedCategory]);
  return (
   <Stack sx={{flexDirection:{sx:'column',md:'row'}}}>

    <Box sx={{height:{sx:'auto',md:'92vh'},borderRight:'1px solid #3d3d3d',px:{sx:0,md:2}}}>
     <Sidebar SelectedCategory = {SelectedCategory} setSelectedCategory = {setSelectedCategory} />
        <Typography className='copyright' variant='body2' sx={{mt:1.5,color:'#fff'}}>
            Copyright 2023 Mayur
        </Typography>
    </Box>
    <Box p = {2} sx = {{overflowY:'auto',height:'90vh',flex:2}}>
        <Typography variant='h4' fontWeight='bold' mb ={2} sx = {{color:'white'}}>
          {SelectedCategory} <span style={{color:'#F31503'}}>videos</span>
        </Typography>
       <Videos videos = {videos}/>
    </Box>

   </Stack>
  )
}

export default Feed;