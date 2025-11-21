export default function Nav(props){

    return(
        <div id="navDiv">
            <div className="navSec">
                <p className="navText">Active Tasks</p>
                <p className="navNum">{props.activeTasks.length}</p>
            </div>

            <div className="navSec">
                <p className="navText">Completed Tasks</p>
                <p className="navNum">{props.checkedTasks}</p>
            </div>
        </div>

    )
}