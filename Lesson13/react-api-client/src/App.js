import { useEffect, useState } from 'react';
import './App.css';
import CreateUser from './components/CreateUser';
import ListCategories from './components/ListCategories';
import ListUserLocal from './components/ListUserLocal';
import ListUserServer from './components/ListUserServer';
import EditUser from './components/EditUser';

function App() {
  const [user, setUser] = useState({})
  const handleEdit = (item) =>{
    setUser(item);
  }
  const handleUpdate = (item) =>{
    setUser(item);
  }

  return (
    <div className="container border">
      <div className='row'>
        <h1> Call api local</h1>
        <ListUserLocal/>

      </div>
      <div className='row'>
        <h1> Call api Api</h1>
        <ListUserServer onEdit = {handleEdit} user={user}/>
        {/* <CreateUser/> */}
        <EditUser user ={user} onUpdate ={handleUpdate}/>
      </div>
      <div className='row'>
        <h1> Call api MX</h1>
        <ListCategories/>

      </div>
      
    </div>
  );
}

export default App;
