import React, { Component } from "react";
import  { Thumbnail } from "react-bootstrap";

import API from "../../utils/API";
import { Col, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import StarRatingComponent from '../../components/StarRatingComponent';
import {
  Card, Collapse, Button, CardFooter, CardBody, CardTitle,
  Modal, ModalHeader, ModalBody, ModalFooter
} from 'reactstrap';
import { Redirect } from "react-router-dom";
import { withAuth } from "@okta/okta-react";

export default withAuth(class Player extends Component {
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
    collapse: false,
    modal: false,
    backdrop: true
  };

  componentDidMount() {
    const client = JSON.parse(localStorage.getItem("okta-token-storage"));
    this.setState({
      currentUserEmail: client.idToken.claims.email,
      currentUserName: client.idToken.claims.name,
      clientId: client.idToken.clientId
    });
    this.loadPlayer(this.props.match.params._id);
  }

  toggle = () => {
    this.setState({ collapse: !this.state.collapse });
  }

  loadPlayer = (_id) => {
    API.findPlayersByPlayerID(_id)
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
      console.log(this.state);
  };

  toggleModal = () => {
    this.setState({
      modal: !this.state.modal
    });
  }

  handleClose = () => {
    this.setState({ modal: false });
  }


  changeBackdrop = e => {
    let value = e.target.value;
    if (value !== 'static') {
      value = JSON.parse(value);
    }
    this.setState({ backdrop: value });
  }


  render() {
    return (
      <Modal isOpen={this.toggleModal} fade={false} toggle={this.toggleModal} className={this.props.className} backdrop={this.state.backdrop}>
        <ModalHeader toggle={this.toggleModal}>Player Rating Form</ModalHeader>
          <ModalBody>
          <Container fluid>
            <Col size="md-12 sm-12">
              {this.state.player.length ? (
                <List>
                  {this.state.player.map(man => (
                    <ListItem key={man._id}>
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
                          ----
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
        </ModalBody>
        <ModalFooter>
          <Button bsStyle="success" onClick={() => this.handleClose}>Close</Button>
          <Button bsStyle="success" onClick={ e => this.saveRanking(e)}>Save changes</Button>
        </ModalFooter>
      </Modal>
    );
  }
});