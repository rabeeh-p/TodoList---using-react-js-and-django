import React from 'react'
import {ReactComponent as AddIcon} from '../assets/add.svg'
import {Link} from 'react-router-dom'

const AddButton = () => {
  return (
    <div>
        <Link to='/notes/new' className='floating-button'>
            <AddIcon></AddIcon>

        </Link>
      
    </div>
  )
}

export default AddButton
