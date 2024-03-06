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
import Useref from './Useref';
import Todolist from './Todolist';
import Event from './Event';


// const name = 'My_web_name'
// const email = "monikaisotiya123@gmail.com"
// const addr = "b-1/401 shlok residancy utran,surat"

function App() {
  return (
    <>
      
      {/* <Todolist /> */}
      {/* <Head />
      <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum fugiat eveniet distinctio sunt deleniti dolorem temporibus animi. Aut, similique molestiae harum voluptatem quas eaque sunt quo omnis veritatis eveniet laboriosam.</h1> */}
      {/* <Header /> */}
      {/* <InDic />  */}
      {/* <Useref /> */}
      {/* <Contact myname={name} email={email} address={addr} /> */}
      <Event/>
    
     






      {/* <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/l' element={<Contact />} >
          <Route path='/l/profile' element={<Contact />}></Route>
        </Route> */}
      {/* <Route path='/log' element={<Login />} />
        <Route path='/new' element={<HeaderN />} />
        <Route path='/stroll' element={<HeaderN />} /> */}
      {/* </Routes > */}
    </>
  );
}


export default App;


