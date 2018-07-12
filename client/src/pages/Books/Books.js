import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";

class Books extends Component {
  state = {
    teams: []
  };

  componentDidMount() {
    this.loadBooks();
    console.log(this.state.teams);
  }

  loadBooks = () => {
    API.getTeams()
      .then(res => this.setState({teams : res.data}))
      .catch(err => console.log(err));
      console.log(this.state.teams);
  };

  deleteBook = id => {
    API.deleteBook(id)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.title && this.state.author) {
      API.saveBook({
        title: this.state.title,
        author: this.state.author,
        synopsis: this.state.synopsis
      })
        .then(res => this.loadBooks())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
          <Col size="md-12 sm-12">
            <Jumbotron>
              <h1>My Teams</h1>
            </Jumbotron>
            {this.state.teams.length ? (
              <List>
                {this.state.teams.map(team => (
                  <ListItem key={team.shortName}>
                    <Link to={"/teamsGet/" + team._id}>
                      <strong>
                       Team: {team.shortName}
                       <br />
                        Stadium: {team.venue}
                      </strong>
                    </Link>
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
      </Container>
    );
  }
}

export default Books;
