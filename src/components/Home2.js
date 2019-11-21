import React from "react";

export default class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            No1: 0,
            No2: 0,
            Operation: "",
            start: 1,
            end: 9,
            times: 2,
            firstRender: true
        };
    }

  Math() {
    var No1 = parseFloat(this.state.No1);
    var No2 = parseFloat(this.state.No2);
    if (this.state.Operation === "+") {
      this.setState({
        No1: No1 + No2
      });
    } else if (this.state.Operation === "-") {
      this.setState({
        No1: No1 - No2
      });
    } else if (this.state.Operation === "/") {
      this.setState({
        No1: No1 / No2
      });
    } else if (this.state.Operation === "x") {
      this.setState({
        No1: No1 * No2
      });
    }
    this.setState({
        No2: 0,
        Operation: ""
    })
    // this.state.No2 = 0;
    // this.state.Operation = "";
  }

  Operation = event => {
    console.log(event.target.id);
    if (event.target.id === "=") {

      this.setState({
        No2: document.getElementById("input").value
      }, () => 
        {
          this.Math()
        }
      );
    //   this.state.No2 = document.getElementById("input").value;
    //   this.Math();
    } else {
      this.setState({
        Operation: event.target.id
      });
    }
  };

  TheTable() {
      let Table = []
        try{
            
          var start = parseFloat(document.getElementById("Start").value);
          var end = parseFloat(document.getElementById("End").value);
          var times = parseFloat(document.getElementById("Times").value);
          var result = 0
          
          
          for (var i = start; i <= end; i++) {
              result = i * times
              Table.push(<div>{i + " x "  + times + " = " + result}</div>)
            }
        }
        catch {
            Table.push(<div></div>)
        }
    return Table
  }

  TimesTables = () => {
    console.log("Hello!")
    this.setState({
        start: document.getElementById("Start").value,
        end: document.getElementById("End").value,
        times: document.getElementById("Times").value,
        firstRender: true
    })
    // console.log(this.state.end)
    this.forceUpdate()
  }

  render() {
    if (this.state.firstRender === true) {
        this.setState({
            firstRender: false
        })
      }
    return (
      <div>
        <div>
          <div>
            {" "}
            {this.state.No1} {this.state.Operation}{" "}
          </div>
          <button id="+" onClick={this.Operation}>
            {" "}
            +{" "}
          </button>
          <button id="-" onClick={this.Operation}>
            {" "}
            -{" "}
          </button>
          <button id="/" onClick={this.Operation}>
            {" "}
            /{" "}
          </button>
          <button id="x" onClick={this.Operation}>
            {" "}
            x{" "}
          </button>
          <input id="input"></input>
          <button id="=" onClick={this.Operation}>
            {" "}
            ={" "}
          </button>
        </div>
        <div>
          <div> Times Tables!</div>
          <a>Start </a>
          <input id="Start" onChange={this.TimesTables} value={this.state.start}></input>
          <br></br>
          <a>End </a>
          <input id="End" onChange={this.TimesTables} value={this.state.end}></input>
          <br></br>
          <a>Times </a>
          <input id="Times" onChange={this.TimesTables} value={this.state.times}></input>
          <div>
              {this.TheTable()}
          </div>
        </div>
      </div>
    );
  }
}
