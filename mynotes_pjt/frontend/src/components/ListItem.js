import React from 'react'
import {Link} from 'react-router-dom'

// title setting
let getTitle=(props)=>{
  let title= props.body.split('\n')[0]
  if (title.length > 45){
    return title.slice(0,45)
  } 
  return title
}

// time setting
let getTime= (props)=>{
  return new Date(props.updated).toLocaleDateString()
}

// letest updations
let getContent= (props)=>{
  let title= getTitle(props)
  
  let content= props.body.replaceAll('\n',' ')
  content=content.replaceAll(title, '')
  if(content.length > 45){
    return content.slice(0,45) + '...'
  }else{
    return content
  }
}

const ListItem = ({props}) => {
  return (
    <Link to={`notes/${props.id}`}>
      <div className='notes-list-item'>
        {/* <h4>{props.body}</h4> */}
        <h4>{getTitle(props)}</h4>
        <p><span>{getTime(props)}</span>{getContent(props)}</p>
      </div>
    </Link>
  )
}

export default ListItem
