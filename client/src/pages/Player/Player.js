import React, { Component } from "react";

import  { Thumbnail } from "react-bootstrap";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Col, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import StarRatingComponent from '../../components/StarRatingComponent';

class Player extends Component {
  state = {
    player: [],
    manName: "",
    overallRating: 0,
    athletic: 0,
    offence: 0,
    defence: 0,
  };

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    API.findPlayersByPlayerID(this.props.match.params._id)
      .then(res => this.setState({ player: res.data }))
      .then(() => {
        this.setState({ manName: this.state.player[0].name });
      })
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  onOverallStarClick(nextValue, prevValue, name) {
    console.log('name: %s, nextValue: %s, prevValue: %s', name, nextValue, prevValue);
    this.setState({ overallRating: nextValue });
  }
  onAthleticStarClick(nextValue, prevValue, name) {
    console.log('name: %s, nextValue: %s, prevValue: %s', name, nextValue, prevValue);
    this.setState({ athletic: nextValue });
  }
  onOffenceStarClick(nextValue, prevValue, name) {
    console.log('name: %s, nextValue: %s, prevValue: %s', name, nextValue, prevValue);
    this.setState({ offence: nextValue });
  }
  onDefenceStarClick(nextValue, prevValue, name) {
    console.log('name: %s, nextValue: %s, prevValue: %s', name, nextValue, prevValue);
    this.setState({ defence: nextValue });
  }

  onStarClickCustomIcon(nextValue, prevValue, name) {
    console.log('name: %s, nextValue: %s, prevValue: %s', name, nextValue, prevValue);
    this.setState({ rating_custom_icon: nextValue });
  }

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
            <h1> {this.state.manName} </h1>
          </Jumbotron>
          {this.state.player.length ? (
            <List>
              {this.state.player.map(man => (
                <ListItem key={man._id}>
                  <div className="card text-white bg-primary mb-2" style={{maxWidth: "20rem"}}>
                    <div className="card-header">
                      <h4>
                        Name: {man.name}
                      </h4>
                    </div>
                    <div className="card-body">
                      <Thumbnail alt={man.name} src={man.plyrImg} />
                      <h6 className="card-title">Number: {man.jerseyNumber}</h6>
                      <p className="card-text">
                        Position: {man.postion}
                        <br />
                        Nationality: {man.nationality}
                      </p>
                      <strong>
                        {/* <h3>Editable with handlers (Rating from state is {this.state.rating}):</h3> */}
                        <br />
                          Overall: <StarRatingComponent
                            name="overall"
                            starCount={5}
                            value={this.state.overallRating}
                            onStarClick={this.onOverallStarClick.bind(this)} />
                        <br />
                          Athletic: <StarRatingComponent
                            name="Athletic"
                            starCount={5}
                            value={this.state.athletic}
                            onStarClick={this.onAthleticStarClick.bind(this)} />
                        <br />
                          Offence: <StarRatingComponent
                            name="Offence"
                            starCount={5}
                            value={this.state.offence}
                            onStarClick={this.onOffenceStarClick.bind(this)} />
                        <br />
                          Defence: <StarRatingComponent
                            name="Defence"
                            starCount={5}
                            value={this.state.defence}
                            onStarClick={this.onDefenceStarClick.bind(this)} />
                      </strong>
                    </div>
                  </div>
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