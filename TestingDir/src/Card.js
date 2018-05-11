
import React from 'react'



export class PrimaryButton extends React.Component{
  constructor (name) {
    super ();
    this.name = name
  }
   render() {
      return(
        <div>
            <button type="button"  onClick = {() => this.show() }>Show</button>
        </div>
      )
    }

    show () {
      if(this.name.name) {
          console.log(this.name.name);
      } else {
        console.log("there is no name");
      }
    }


}
