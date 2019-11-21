import React from "react";
import { Table, Button } from "react-bootstrap";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class HomePage extends React.Component{
  render(){
    return <h1> This is homePage </h1>
  }
}

class ShafeeqPage extends React.Component{
  render(){
    return <h1> This is Shafeeq </h1>
  }
}

class AboutUs extends React.Component{
  render(){
    return(
      <div>
        This is about us
      </div>
    )
  }
}

class Home extends React.Component{
  render(){
    return(
      <div>
        <h1> Routing Application </h1>
        <Router>
          <Link to="/home">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/home/shafeeq">Shafeeq</Link>
          <div>
            <Route exact path="/home" component={HomePage} />
            <Route exact path="/about" component={AboutUs} />
            <Route exact path="/home/shafeeq" component={ShafeeqPage} />
          </div>
        </Router>
      </div>
    )
  }
}

export default Home;

// export default class Home extends React.Component {
  
//   render() {

//     return (
//     );
//   }
// }
