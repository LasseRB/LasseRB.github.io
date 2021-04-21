import React from 'react'
import './Modal.css'

function Modal(props) {
    return (
        <div className='modal container' 
                role='button'
                onClick={()=> this.props.history.goBack()}>
            <div className='modal inner'
                    onClick={e => e.stopPropagation()}>
             
                

            </div> 
            
        </div>
    )
}



export default Modal

