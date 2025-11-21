import { useState, useEffect } from "react"
import { useRef } from "react";
export default function Add(props){

    const inp = useRef(null);
    const [message, setMessage] = useState("");

    useEffect(()=>{
        function handleKey(e){
            if(e.key === "Enter"){
                addNewTask();
            }
        }
        window.addEventListener('keydown', handleKey);
        return ()=> {
            window.removeEventListener('keydown', handleKey)
        }
    },[])

    const handleSortClick = () =>{
        if(props.sortType == 'Old-New'){
            props.setSortType('New-Old')
        }
        else if(props.sortType == 'New-Old'){
            props.setSortType('A-Z')
        }
        else if(props.sortType == 'A-Z'){
            props.setSortType('Z-A')
        }
        else if(props.sortType == 'Z-A'){
            props.setSortType('Old-New')
        }
        else{
            return
        }
    }

    const addNewTask = ()=> {
        const value = inp.current.value
        if(value === ""){
            setMessage("Enter a name for the task");
        }
        else if(value.length >40){
            setMessage("The name is too long!.")
        }
        else{
            setMessage("")
            props.setActiveTasks(prev=>[...prev, value])
            inp.current.value = "";
        }
    }


    return(
        <>
            <div id="addBtn">
                <input ref={inp} type="text" placeholder="Name your new task"/>
                <button onClick={() => addNewTask()}> <p>Add New Task</p></button>
                <button onClick={handleSortClick}>Sort: {props.sortType}</button>
            </div>

            <div id="errorP">
                <p>{message}</p>
            </div>

        
        </>


    )
} 