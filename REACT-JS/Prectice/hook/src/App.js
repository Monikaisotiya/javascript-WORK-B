import logo from './logo.svg';
import './App.css';
import Main from './Darkmode/Main';
import ChildA from './Hook2/ChildA';
import APIcall from './Hook3/APIcall';
import Json_api from './Json/Json_api';
import Data from './API/Data';
import GET_API from './Json/GET_API';
import GETP_API from './JsonP/GETP_API';
import Render from './Condistional_RENDER/Render';
import Demo from './Lifecycle/Demo';
import Lifecylce from './Lifecycle/Lifecylce';
import ToDolist from './Lifecycle/ToDolist';
import Crud from './CRUD/Crud';
import PropsType from './CRUD/PropsType';
import Forword from './ForwardRef-hook/Forword';
import Loder from './LAZY/Loder';
import A from './Hook-callback/A';
import ToDo from './Function-ToDo/ToDo';


const website = 'WebName'
const std = { name: 'moni', age: '25' }

function App() {
    return (
      <>
        <A />
        {/* <ToDo/> */}
        {/* <Crud /> */}
        {/* <PropsType site={website} list={std} /> */}
        {/* <ToDolist/> */}
        {/* <Lifecylce/> */}
        {/* <Demo/> */}
        {/* <Render/> */}
        {/* <GETP_API/> */}
        {/* <GET_API/> */}
        {/* <Data/> */}
        {/* <Main /> */}
        {/* <ChildA /> */}
        {/* <APIcall /> */}
        {/* <Json_api/> */}
        {/* <Forword/> */}
        {/* <Loder/> */}
      </>
    );
}


export default App;