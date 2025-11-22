export default function Nav(props){

    return(
        <div id="navDiv">
            <div className="navSec" id="leftNav">
                <p className="navText">Active Tasks</p>
                <p className="navNum">{props.activeTasks.length}</p>
            </div>

            <div className="navSec" id="rightNav">
                <p className="navText">Completed Tasks</p>
                <p className="navNum">{props.checkedTasks}</p>
            </div>
        </div>

    )
}