import logo from './logo.svg';
import './App.css';
import Frist from './componate/Frist';

const name = 'My_web_name'
const addr = "This is my Frist web page in REACT"
const email = "monikaisotiya123@gmail.com"
// const addr = "This is my Frist web page in REACT"


function App() {
  return (
    <>
    <Frist myname={name} email={email} address={addr} />
    </>
  );
}

export default App;
