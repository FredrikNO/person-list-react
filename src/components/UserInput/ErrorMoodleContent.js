import style from './ErrorMoodleContent.module.css'

function ErrorMoodleContent(props){
    function closeErrorMoodle(){
        props.onReadErrorHandler();
      }

    return(
        <div className={style.errorMessageContainer}>
                <div className={style.errorMessageHeader}>
                    <h2>Invalid input</h2>
                </div>
                <div className={style.errorMessageContent}>
                    <p>{props.errorMessage}</p>
                    <button onClick={closeErrorMoodle}>Okay</button>
                </div>
            </div>
    );
}

export default ErrorMoodleContent;