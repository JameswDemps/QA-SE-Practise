import React from "react";
import { Table, Button } from "react-bootstrap";

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      records: [
        {
          Regno: 1,
          name: "Jake",
          marks: 42
        },
        {
          Regno: 2,
          name: "James",
          marks: 34
        }
      ],

      searchValue: "",

      Category: {
        Strategy_and_architecture: {
          Name: "Strategy and architecture",
          Information_strategy: {
            Name: "Information strategy",
            GOVN: {
              Name: "Enterprise IT governance",
              Levels: [5, 6, 7]
            },
            ITSP: {
              Name: "Strategic planning",
              Levels: [5, 6, 7]
            }
          },
          Advice_and_guidance: {}
        }
      }
    };
  }

  filterSearch = () => {
    var searchValue = document.getElementById("searchBarValue").value;
    this.setState({
      searchValue: searchValue
    });
  };

  addUser = () => {
    var RegNo = parseInt(document.getElementById("RegNo").value);
    var Name = document.getElementById("Name").value;
    var Marks = parseInt(document.getElementById("Marks").value);

    var User = {
      Regno: RegNo,
      name: Name,
      marks: Marks
    };

    this.setState({
      records: [...this.state.records, User]
    });
  };

  deleteItem(id) {
    var Records = this.state.records;
    for (var item in Records) {
      if (Records[item].Regno == id) {
        Records.splice(item, 1);
      }
    }
    this.setState({
      records: Records
    });
  }

  PassedMarks(users) {
    console.log(users.marks);
    return parseInt(users.marks) >= 10;
  }

  render() {
    var users = this.state.records;

    return (
      <div>
        <div>
          <div> New User Details </div>
          <a>RegNo </a>
          <input id="RegNo" value={this.state.start}></input>
          <br></br>
          <a>Name </a>
          <input id="Name" value={this.state.end}></input>
          <br></br>
          <a> Marks </a>
          <input id="Marks" value={this.state.times}></input>
          <Button id="addUser" onClick={this.addUser}>
            Add User
          </Button>
        </div>
        <div>
          <div>SearchBar</div>
          <input
            id="searchBarValue"
            type="search"
            placeholder="What're you searching for?"
            aria-describedby="button-addon1"
            class="form-control border-0 bg-light"
            onChange={this.filterSearch}
          />
        </div>
        <div>
          <div>Current Users</div>
          <Table id="basic-table" striped bordered hover>
            <thead>
              <tr>
                <th>RegNo</th>
                <th>Name</th>
                <th>Marks</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {users.filter(this.PassedMarks).map(user => {
                if (
                  this.state.searchValue == "" ||
                  user.name
                    .toLowerCase()
                    .includes(this.state.searchValue.toLowerCase())
                ) {
                  return (
                    <tr key={user.id}>
                      <td>{user.Regno}</td>
                      <td>{user.name}</td>
                      <td>{user.marks}</td>
                      <td className="buttonCell">
                        <button
                          type="button"
                          class="btn btn-light btn-lg close"
                          aria-label="Close"
                          onClick={() => this.deleteItem(user.Regno)}
                        >
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </td>
                    </tr>
                  );
                }
              })}
            </tbody>
          </Table>
        </div>
      </div>
    );
  }
}
