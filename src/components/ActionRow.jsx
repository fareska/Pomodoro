import React from 'react'

function  ActionRow(props) {
    
    const activateAction = ()=> props.activateAction()
    const resetClicked = () => props.reset()

    return (
        <div>
          <h3>ActionRow component</h3>
          <span>the current actions prop which is start or pause</span> 
            <button onClick={activateAction}>{props.currentAction === true ?'true' : 'false'}</button>
          <span>the reset button</span> 
            <button onClick={resetClicked}>Reset</button>
        </div>
    )
}

export default ActionRow
