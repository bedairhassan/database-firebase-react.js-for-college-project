import React from 'react';
import Student from './components/Student'

export default class App extends React.Component{

  constructor(props){

    super(props)
  }

  render(){

    return(

      <center>
        <div>
          <Student/>
        </div>
      </center>
    )
  }
}