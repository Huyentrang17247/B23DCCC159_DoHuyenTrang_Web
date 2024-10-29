import '../App.css';
function General(props){
    return(
        <div classname='General'>
            <input type='checkbox'/>
            <div className='content'>
                <p className ='title'>{props.title}</p>
                <p className='due'>{props.due}</p>
            </div>
        </div>
    )
}
export default General;