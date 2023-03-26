import style from './UserInput.module.css'
import UserInputForm from './UserInputForm';




function UserInput(props){

    function addUser(user){
        props.onAddUser(user)
    }

    function errorMessageHandler(message){
        props.onErrorHandler(message);
    }

    return(
        <div className={style.userInputCard}>
            <UserInputForm onAddUser={addUser} onErrorHandler={errorMessageHandler}/>
        </div>
    );
}

export default UserInput;