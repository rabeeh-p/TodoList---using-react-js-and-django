import React,{useState,useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {useNavigate} from 'react-router-dom'
import {ReactComponent as Arrow} from '../assets/arrow-left.svg'
// import {Link} from 'react-router-dom'


const SingleNote = () => {
   const {num}=useParams()
   let NoteId=num
  
    
    let [note,setNote]=useState(null)

    let history=useNavigate();

    useEffect(()=>{
        getNote()

    },[NoteId])


    let getNote= async()=>{
        if(NoteId === 'new') return
        let responce = await fetch(`/api/note/${NoteId}/`)
        let data=await responce.json()
        setNote(data)
    }

    // let creatNote= async()=>{
    //    fetch(`/api/notes/create/`,{
    //     method:"POST",
    //     header:{'Content-Type':'application/json'},
    //     body:JSON.stringify(note)
    //   })
      
    // }

    let createNote= async()=>{
      fetch(`/api/notes/create/`,{
        method:"POST",
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(note)

      })
    }

    let updateNote= async()=>{
      fetch(`/api/update/${NoteId}/`,{
        method:"PUT",
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(note)
      })
    }

    let DeleteNote= async()=>{
      fetch(`/api/delete/${NoteId}/`,{
        method:'DELETE',
        header:{'Content-Type':'application/json'}
      })
      history("/");
    }
  
    let handleSubmit=()=>{
      
      if(NoteId !== 'new' && note.body === ''){
        DeleteNote()
      }else if (NoteId !== 'new'){
        updateNote()
      }else if(NoteId === 'new' && note !== null){
        createNote()
      }
      history("/");
    }


  return (
    <div>
      {/* <h1>Single Note{samp}</h1> */}
      <div className='note-header'>
        <h3> 
          <Arrow onClick={handleSubmit} ></Arrow>
        </h3>
        {NoteId !== 'new'? (
            <button onClick={DeleteNote}>delete</button>
        ):(
          <button onClick={handleSubmit} >done</button>
        )} 
        
      </div>
      <div className='note'> 
        <textarea onChange={(e)=>{setNote({...note,'body':e.target.value})}} value={note?.body}></textarea>
      </div>
    </div>
  )
}

export default SingleNote
