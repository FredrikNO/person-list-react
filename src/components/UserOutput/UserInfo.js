import style from './UserInfo.module.css'

function UserInfo(props){
    return (
        <div className={style.userInfoContainer}>
            <p>{props.username}</p>
            <p>({props.age} years old)</p>
        </div>
    );
}

export default UserInfo;