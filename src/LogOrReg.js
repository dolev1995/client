// import React, {Component} from 'react'
// import './App.css';
// import {Link} from 'react-router-dom'
// import {getUsers} from './actions'

// class LogOrReg extends Component{
//     constructor() {
// 		super();
//         this.state = {
//            val: 0
//         }
     
// 	}
    
//     // async countOfStudents(){
//     //     const res = await getUsers() ;
//     //         console.log('res',res) ;   
//     //         if(res)
//     //         {
//     //             console.log( res.data.data);
//     //             this.val = res.data.data.length;
//     //             console.log("val222222222 is= " + this.val);

//     //            //  return res.data.data.length;
//     //         }
        
    
//     // }
//     async  countOfStudents() {
//         console.log('rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr');
//         const res = await getUsers();
//         console.log('res', res);
//         let val;
//         if (res) {
//             console.log(res.data.data);
//             val = res.data.data.length;
//             console.log("val222222222 is = " + val);
//         }
//         console.log("val5555555555555 is = " + val);

//     }

// render(){
// //     let x;
// //    this.countOfStudents().then(res => x = 5);
//  let x =  this.countOfStudents();
//     console.log("x is= " + x);
//     console.log("val11 is= " + this.val);
// return(
// <div className="login_register">
//     <div className='choose'>
//     <h2> בחר:</h2>
//     </div>
// {

// //     console.log("val is= " + this.state.val);
// //   console.log("x is= " + x);
// }
// <Link to="/Register">
// <button type="button" className='btn_logorreg' >  הירשם </button></Link>
// <Link to="/Login">
// <button type="button" className='btn_logorreg'>התחבר </button></Link>



// <div className='info'>
//   מספר הרשומים לאתר הוא:
//         <output>{this.state.val}</output>  
// </div>
// </div>



// );
// }
// }

// export default LogOrReg;

import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import { getUsers } from './actions';

class LogOrReg extends Component {
  constructor() {
    super();
    this.state = {
      val: 0
    };
  }

  async componentDidMount() {
    console.log('rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr');
    const res = await getUsers();
    console.log('res', res);
    let val = 0;
    if (res) {
      console.log(res.data.data);
      val = res.data.data.length;
      console.log("val222222222 is = " + val);
    }
    console.log("val5555555555555 is = " + val);
    this.setState({ val });
  }

  render() {
    return (
      <div className="login_register">
        <div className='choose'>
          <h2> בחר:</h2>
        </div>
        <Link to="/Register">
          <button type="button" className='btn_logorreg'>הירשם</button>
        </Link>
        <Link to="/Login">
          <button type="button" className='btn_logorreg'>התחבר</button>
        </Link>
        <div className='info'>
          מספר הרשומים לאתר הוא:
          <output>{this.state.val}</output>
        </div>
      </div>
    );
  }
}

export default LogOrReg;

