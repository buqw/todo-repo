import { useState, useEffect } from "react"
import { useRef } from "react";

export default function Add(props){

    const inp = useRef(null);
    const [message, setMessage] = useState("");
    const [inputText, setInputText] = useState("");

    const handleChange = (e)=>{
        setInputText(e.target.value)
    }
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

    useEffect(()=>{
        if(inputText.length >35){
            setMessage("Task's name shouldn't be long")
        }
        else{
            setMessage("")
        }
    },[inputText])
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
        else if(value.length >35){
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
                <input onChange={handleChange} ref={inp} type="text" placeholder="Type something to do..."/>
                <button onClick={() => addNewTask()}> <p>Add New Task</p></button>
                <button onClick={handleSortClick}><p>Sort: {props.sortType}</p></button>
            </div>

            <div id="errorP">
                <p>{message}</p>
            </div>

        
        </>


    )
} 