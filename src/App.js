import './App.css';
import UserInput from './components/UserInput/UserInput';
import React,{useState} from 'react';
import UserList from './components/UserOutput/UserList';
import ErrorMoodle from './components/UserInput/ErrorMoodle';

function App() {
  // let users=[
  //   {id:0,username:'Fred',age:'24'},
  // ];
  
  const [validInput,setValidInput]=useState(true);
  const [usersArr, setUsersArr]=useState([]);
  const [errorMessage,setUserMessage]=useState('');

  function errorMessageHandler(message){
    setValidInput(false);
    setUserMessage(message);
  }

  function updateUsersHandler(user){
    setUsersArr(preUsers=>[...preUsers,user]);
  }

  function closeErrorMoodle(){
    setValidInput(true);
  }

  return (
    <div className="App">
      <UserInput onAddUser={updateUsersHandler} onErrorHandler={errorMessageHandler}/>
      {usersArr.length===0 ?'': <UserList data={usersArr}/>}
      
      {!validInput&&<ErrorMoodle onReadErrorHandler={closeErrorMoodle}>{errorMessage}</ErrorMoodle>}
      
    </div>
  );
}

export default App;
