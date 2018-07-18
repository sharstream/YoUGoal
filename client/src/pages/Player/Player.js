import React, { Component } from "react";

import { Thumbnail } from "react-bootstrap";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Col, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import StarRatingComponent from '../../components/StarRatingComponent';
import {
  Card,
  Collapse,
  Button,
  CardHeader,
  CardFooter,
  CardBody,
  CardTitle,
  CardText
} from 'reactstrap';

class Player extends Component {
  state = {
    player: [],
    manName: "",
    overallRating: 0,
    athletic: 0,
    offence: 0,
    defence: 0,
    collapse: false,
    pace: 0,
    dribbling: 0,
    passing: 0,
    shooting: 0,
    defense: 0,
    physicality: 0
  };

  componentDidMount() {
    this.loadBooks();
  }

  toggle = () => {
    this.setState({ collapse: !this.state.collapse });
  }

  loadBooks = () => {
    API.findPlayersByPlayerID(this.props.match.params._id)
      .then(res => this.setState({ player: res.data }))
      .then(() => {
        this.setState({ manName: this.state.player[0].name });
      })
      .catch(err => console.log(err));
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  onOverallStarClick(nextValue, prevValue, name) {
    console.log('name: %s, nextValue: %s, prevValue: %s', name, nextValue, prevValue);
    this.setState({ overallRating: nextValue });
  }
  onPaceStarClick(nextValue, prevValue, name) {
    console.log('name: %s, nextValue: %s, prevValue: %s', name, nextValue, prevValue);
    this.setState({ pace: nextValue });
  }
  onDribblingStarClick(nextValue, prevValue, name) {
    console.log('name: %s, nextValue: %s, prevValue: %s', name, nextValue, prevValue);
    this.setState({ dribbling: nextValue });
  }
  onShootingStarClick(nextValue, prevValue, name) {
    console.log('name: %s, nextValue: %s, prevValue: %s', name, nextValue, prevValue);
    this.setState({ shooting: nextValue });
  }
  onDefenseStarClick(nextValue, prevValue, name) {
    console.log('name: %s, nextValue: %s, prevValue: %s', name, nextValue, prevValue);
    this.setState({ defense: nextValue });
  }
  onPhysicalityStarClick(nextValue, prevValue, name) {
    console.log('name: %s, nextValue: %s, prevValue: %s', name, nextValue, prevValue);
    this.setState({ physicality: nextValue });
  }
  onPassingStarClick(nextValue, prevValue, name) {
    console.log('name: %s, nextValue: %s, prevValue: %s', name, nextValue, prevValue);
    this.setState({ passing: nextValue });
  }

  onStarClickCustomIcon(nextValue, prevValue, name) {
    console.log('name: %s, nextValue: %s, prevValue: %s', name, nextValue, prevValue);
    this.setState({ rating_custom_icon: nextValue });
  }

  saveRanking = event => {
    event.preventDefault();
    console.log(event)
    API.saveRanking({
      playerID: this.props.match.params._id,
      ClientID: "0oafq5xga3MOGlArd0h7",
      overall: this.state.overallRating,
      pace: this.state.pace,
      dribbling: this.state.dribbling,
      passing: this.state.passing,
      shooting: this.state.shooting,
      defense: this.state.defence,
      physicality: this.state.physicality
    })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Container fluid>
        <Col size="md-12 sm-12">
          {this.state.player.length ? (
            <List>
              {this.state.player.map(man => (
                <ListItem key={man._id}>
                  <button type="button" class="close" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                  <Card>
                    <CardBody>
                      <CardTitle>{man.name}</CardTitle>
                    </CardBody>
                    <Thumbnail alt={man.name} src={man.plyrImg} />
                    <CardBody>
                      <h6 className="card-title">Number: {man.jerseyNumber}</h6>
                      <p className="card-text">
                        Position: {man.postion}
                        <br />
                        Nationality: {man.name1}
                      </p>
                    </CardBody>
                    <Button color="primary" onClick={this.toggle} style={{ marginBottom: '1rem' }}>
                      Display
                    </Button>
                    <Collapse isOpen={this.state.collapse}>
                      <CardBody>
                        <strong>
                          <br />
                          Overall: <StarRatingComponent
                            name="overall"
                            starCount={5}
                            value={this.state.overallRating}
                            onStarClick={this.onOverallStarClick.bind(this)} />
                          <br />
                          pace: <StarRatingComponent
                            name="pace"
                            starCount={5}
                            value={this.state.pace}
                            onStarClick={this.onPaceStarClick.bind(this)} />
                          <br />
                          dribbling:
                        <StarRatingComponent
                            name="dribbling"
                            starCount={5}
                            value={this.state.dribbling}
                            onStarClick={this.onDribblingStarClick.bind(this)} />
                          <br />
                          passing:
                      <StarRatingComponent
                            name="passing"
                            starCount={5}
                            value={this.state.passing}
                            onStarClick={this.onPassingStarClick.bind(this)} />
                          <br />

                          shooting:
                      <StarRatingComponent
                            name="shooting"
                            starCount={5}
                            value={this.state.shooting}
                            onStarClick={this.onShootingStarClick.bind(this)} />
                          <br />

                          defense:
                      <StarRatingComponent
                            name="defense"
                            starCount={5}
                            value={this.state.defense}
                            onStarClick={this.onDefenseStarClick.bind(this)} />
                          <br />
                          physicality:
                      <StarRatingComponent
                            name="physicality"
                            starCount={5}
                            value={this.state.physicality}
                            onStarClick={this.onPhysicalityStarClick.bind(this)} />
                          <br />

                        </strong>
                        <br />
                        <button
                          onClick={(event) => {
                            this.saveRanking(event);
                          }}
                          className="btn btn-primary"> Submit Ranking </button>
                      </CardBody>
                      <CardFooter className="text-muted"></CardFooter>
                    </Collapse>
                  </Card>
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