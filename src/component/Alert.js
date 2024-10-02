import React from 'react'

function Alert(props) {

  let setHeight = {
    height:'40px'
  }
  return (
    <div style={setHeight}>
      {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
      <div><strong>{props.alert.type}</strong>: {props.alert.msg}</div>
      <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>}
    </div>
  )
}

export default Alert
