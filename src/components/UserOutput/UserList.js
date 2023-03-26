import UserInfo from "./UserInfo";
import style from './UserList.module.css'

function UserList(props){
    return (
        <div className={style.UserListComponent}>
            {props.data.map(data=> <UserInfo key={data.id} username={data.username} age={data.age}/>)}
        </div>
    );
}

export default UserList;