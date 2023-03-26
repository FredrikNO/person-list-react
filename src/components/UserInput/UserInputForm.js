import style from './UserInputForm.module.css'
import React,{useState} from 'react';

function UserInputForm(props){
    const [userId, setUserId]=useState(1);
    const [username, setUsername]=useState('');
    const [age,setAge]=useState('');

    function buttonClickHandler(event){
        event.preventDefault();
        if(age<0){
            props.onErrorHandler('invalid age, try again');
            return;
        }
        else if(username.trim().length<=0||age.trim().length<=0){
            props.onErrorHandler('fill in info, try again');
            return;
        }
        setUserId(prevId=>prevId+1);
        props.onAddUser({id:userId,username:username,age:age});
        resetInputs();      
    }

    function usernameInputHandler(event){
        setUsername(prevUser=> prevUser=event.target.value);
    }

    function ageInputHandler(event){
        setAge(event.target.value);
    }

    function resetInputs(){
        setAge('');
        setUsername('');
    }

    return(
        <form className={style.container} >
            <label>Username</label>
            <input type='text' value={username} onChange={usernameInputHandler}/>
            <label>Age (Years)</label>
            <input type='text' value={age} onChange={ageInputHandler}/>
            <button type='submit' onClick={buttonClickHandler}>Add User</button>
        </form>
    );
}

export default UserInputForm;