import style from './ErrorMoodle.module.css'
import ErrorMoodleContent from './ErrorMoodleContent';

function ErrorMoodle(props){
    function closeErrorMoodle(){
        props.onReadErrorHandler();
      }

    return(
        <div className={style.errorContainer} onClick={closeErrorMoodle}>
            <ErrorMoodleContent onReadErrorHandler={closeErrorMoodle} errorMessage={props.children}/>
        </div>
    );
}

export default ErrorMoodle;