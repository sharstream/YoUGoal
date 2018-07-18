import React, { Component } from "react";
import  { Thumbnail } from "react-bootstrap";

import API from "../../utils/API";
import { Col, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import StarRatingComponent from '../../components/StarRatingComponent';
import {
  Card,
  Collapse,
  Button,
  CardFooter,
  CardBody,
  CardTitle
} from 'reactstrap';

class Player extends Component {
  state = {
    player: [],
    currentUserEmail: "",
    currentUserName: "",
    clientId: "",
    manName: "",
    overallRating: 0,
    pace: 0,
    dribbling: 0,
    passing: 0,
    shooting: 0,
    defense: 0,
    physicality: 0,
    collapse: false
  };

  componentDidMount() {
    const client = JSON.parse(localStorage.getItem("okta-token-storage"));
    this.setState({
      currentUserEmail: client.idToken.claims.email,
      currentUserName: client.idToken.claims.name,
      clientId: client.idToken.clientId
    });
    this.loadTeams();
  }

  toggle = () => {
    this.setState({ collapse: !this.state.collapse });
  }

  loadTeams = () => {
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
      clientId: this.state.clientId,
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
            <div>
                  {this.state.player.map(man => (
            <Card key={man._id}>
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
                          Overall: 
                          <br />
                          <StarRatingComponent
                            name="overall"
                            starCount={5}
                            value={this.state.overallRating}
                            onStarClick={this.onOverallStarClick.bind(this)} />
                          <br />
                          pace:
                          <br />
                           <StarRatingComponent
                            name="pace"
                            starCount={5}
                            value={this.state.pace}
                            onStarClick={this.onPaceStarClick.bind(this)} />
                          <br />
                          dribbling:
                          <br />
                        <StarRatingComponent
                            name="dribbling"
                            starCount={5}
                            value={this.state.dribbling}
                            onStarClick={this.onDribblingStarClick.bind(this)} />
                          <br />
                          passing:
                          <br />
                      <StarRatingComponent
                            name="passing"
                            starCount={5}
                            value={this.state.passing}
                            onStarClick={this.onPassingStarClick.bind(this)} />
                          <br />

                          shooting:
                          <br />
                      <StarRatingComponent
                            name="shooting"
                            starCount={5}
                            value={this.state.shooting}
                            onStarClick={this.onShootingStarClick.bind(this)} />
                          <br />

                          defense:
                          <br />
                      <StarRatingComponent
                            name="defense"
                            starCount={5}
                            value={this.state.defense}
                            onStarClick={this.onDefenseStarClick.bind(this)} />
                          <br />
                          physicality:
                          <br />
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
                    ))}
                    </div>
          ) : (
            <h3>No Results to Display</h3>
          )}
        </Col>
      </Container>
    );
  }
}
export default Player;