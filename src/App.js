import './App.css';
import {createTheme,ThemeProvider} from '@mui/material'
import { useEffect } from 'react';
import Cookies from 'js-cookie';
import Navbar from './components/Layout.jsx'
import { Routes ,Route} from 'react-router-dom';
import Home from './pages/Home';
import Category from './pages/Category';
import Categories from './pages/Categories';
import SingleCourse from './pages/SingleCourse';
import SingleLesson from './pages/SingleLesson';
import Login from './pages/Login';
import Register from './pages/Register';
import Terms from './pages/Terms';
import FAQ from './pages/FAQ';
import Policy from './pages/policy';

const theme = createTheme({
  direction:"rtl",
  palette:{
    primary:{
      main:"#222831",
      contrastText:"#fff"
    },
    secondary:{
      main:"#f7ca18",
      contrastText:"#fff"
    }
  }
})

function App() {

  useEffect(()=>{
      document.body.dir="rtl"
  },[])

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path='' element={<Home/>}/>
          <Route path='/category/:categoryId' element={<Category/>}/>
          <Route path='/categories' element={<Categories/>}/>
          <Route path='/course/:courseId' element={<SingleCourse/>}/>
          <Route path='/lessons/:lessonId/:lessonTitle' element={<SingleLesson/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/terms' element={<Terms/>}/>
          <Route path='/faq' element={<FAQ/>}/>
          <Route path='/privacy-policy' element={<Policy/>}/>
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
