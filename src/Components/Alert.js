import React from 'react'

function Alert(props) {
  return (
    props.alert && <div className='alert'>
      <p> {props.alert.type} : {props.alert.msg}</p>
    </div>
  )
}

export default Alert
