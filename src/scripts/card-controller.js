import React from 'react';

class Card extends React.Component{
  render(){
    return  (
      <div className="card-controller-wrapper">

        <div className="card-preview">
          card preview
        </div>
        <div className="card-controller">
          card controller
        </div>

      </div>
    ) 
  }
}

export default Card