import { useState } from "react"

export default function Tasks(props){
    const [checkedNum, setCheckedNum] = useState(0)
    
    const handleDelete = (index)=>{
        props.setActiveTasks(prev => prev.filter((_,i) => i !== index))
    }

    const tempTasks = props.activeTasks.map((task,index) => {
        return(
            <div className="taskDiv" key={index}>
                    <input type="radio" onChange={()=>{
                     props.setChecked(checkedNum+1)
                     setCheckedNum(checkedNum+1)}}
                     className="taskCheck"/>
                    <p>{task}</p>
            </div>
        )
    })
    const printBySortType = () => {
        if(props.sortType == 'Old-New'){
            return tempTasks;
        }
        else if(props.sortType == 'New-Old'){
            return tempTasks.reverse();
        }
        else if(props.sortType == 'A-Z'){
            return tempTasks.sort();
        }
        else if(props.sortType == 'Z-A'){
            return tempTasks.sort().reverse();
        }

    }


    return(
        <div id="cont">
            {props.activeTasks.length == 0 ? <div id="blankCont">
                <div id="bigText">
                    <p>No Tasks!</p>
                </div>
                <div id="smallText">
                    <p>New tasks will be displayed here.</p>
                </div>
            </div>: printBySortType()}
        </div>
    )
}