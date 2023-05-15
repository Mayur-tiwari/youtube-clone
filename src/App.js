import {BrowserRouter,Routes,Route} from 'react-router-dom';
import {Box} from '@mui/material';
import Feed from './components/Feed';
import Navbar from './components/Navbar';
import SearchFeed from './components/SearchFeed';
import VideoDetail from './components/VideoDetail';
import ChannelDetails from './components/ChannelDetails';




const App = () =>  (
   <BrowserRouter>
   <Box sx ={{backgroundColor:'#000'}}>
    <Navbar></Navbar>
    <Routes>
      <Route exact path='/'  element = {<Feed/>}></Route>    
      <Route path='/video/:id' exact element = {<VideoDetail/>}></Route>    
      <Route path='/channel/:id' exact element = {<ChannelDetails/>}></Route>    
      <Route path='/search/:searchTerm' exact element = {<SearchFeed/>}></Route>    
    </Routes>

   </Box>
   
    </BrowserRouter>
  );


export default App;
