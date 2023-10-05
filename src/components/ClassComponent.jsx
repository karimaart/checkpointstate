import React, { Component } from "react"; 

export default class ClassComponent extends Component {
   constructor() {     super();
    this.state = {
     counter: 0,
    }; 
     this.handleCounter = () => {
       this.setState({ counter: this.state.counter + 1 });
    };
    }
  //   componentWillUnmount() {
  //     alert("component will mout");
  //   }
    componentDidMount() {
      setInterval(() => {
        this.handleCounter();
      }, 1000);
    }

//   componentDidUpdate() {
//     console.log("child component did update");
//   }
  render() {
    return (
      <div className="sub-container">
        <h1>Karima Rtibi</h1>
        <h3>Hello everyone </h3>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3wGAvgGy6hktVrxPNA2Z8UTSg0APrbyAuIg&usqp=CAU"
          alt=""
          width="250px"
        />
        <h4>{this.state.counter}</h4>
        {/* <button>Increase</button> */}
      </div>
    );
  }
}
