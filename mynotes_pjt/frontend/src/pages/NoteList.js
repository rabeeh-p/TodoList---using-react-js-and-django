import React,{useState,useEffect} from 'react'
import ListItem from '../components/ListItem'
import AddButton from '../components/AddButton'


const NoteList = () => {

    let [note,setnote]=useState([])

    // useEffect
    useEffect(()=>{
        getNote()
    },[])

    let getNote= async()=>{
        let responce= await fetch('/api/notes/')
        let data=await responce.json()
        // console.log(data)
        setnote(data)
    }
    
  return (
    <div className='notes'>
        <div className='notes-header'>
            <h3 className='notes-title'>&#9782; Notes</h3>
            <p className='notes-count'>{note.length}</p>

        </div>
        <div className='notes-list'>
            {/* <h1> NOTE LIST</h1> */}
            {note.map((obj,index)=>(
                // <h3 key={index}>{obj.body}</h3>
                <ListItem key={index} props={obj}/>
                
            )
            )}
            
        </div>
        <AddButton/>
    </div>
  )
}

export default NoteList
