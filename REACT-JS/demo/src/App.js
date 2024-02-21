import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Head from './Head';
import Header from './Header';
import Home from './Home';

import Contact from './Contact';
import Login from './Login';
import HeaderN from './HeaderN';
import InDic from './InDic';


function App() {
  return (
    <>
      {/* <Head />
      <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum fugiat eveniet distinctio sunt deleniti dolorem temporibus animi. Aut, similique molestiae harum voluptatem quas eaque sunt quo omnis veritatis eveniet laboriosam.</h1> */}
      <Header />
      <InDic />




      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/l' element={<Contact />} >
          <Route path='/l/profile' element={<Contact />}></Route>
        </Route>
        {/* <Route path='/log' element={<Login />} />
        <Route path='/new' element={<HeaderN />} />
        <Route path='/stroll' element={<HeaderN />} /> */}



      </Routes>



    </>
  );
}


export default App;


