import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";

class Player extends Component {
  state = {
    player: []
  };

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    API.findPlayersByPlayerID(this.props.match.params._id)
      .then(res => {
        this.setState({ player: res.data });
    console.log(this.state.player);
      })
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
            <h1> {this.state.player.name} </h1>
          </Jumbotron>
          {this.state.player.length ? (
            <List>
              {this.state.player.map(man => (
                <ListItem key={man._id}>
                  <strong>
                    Name: {man.name}
                    <br />
                    Position: {man.postion}
                    <br />
                    Nationality: {man.nationality}
                  </strong>
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

export default Player;
