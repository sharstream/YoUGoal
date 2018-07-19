import React, { Component } from "react";
import { Thumbnail } from "react-bootstrap";
import API from "../../utils/API";
import { Col, Container } from "../../components/Grid";
import StarRatingComponent from "../../components/StarRatingComponent";
import {
  Card,
  Collapse,
  CardFooter,
  CardBody,
  CardTitle,
} from "reactstrap";
import { Modal } from "react-bootstrap";
import { withAuth } from "@okta/okta-react";

export default withAuth(
  class Player extends Component {
    state = {
      player: [],
      currentUserEmail: "",
      currentUserName: "",
      clientId: "",
      manName: "",
      manTeamID: "",
      overallRating: 0,
      pace: 0,
      dribbling: 0,
      passing: 0,
      shooting: 0,
      defense: 0,
      physicality: 0,
      collapse: false,
      modal: false
    };

    componentDidMount() {
      const client = JSON.parse(localStorage.getItem("okta-token-storage"));
      this.setState({
        currentUserEmail: client.idToken.claims.email,
        currentUserName: client.idToken.claims.name,
        clientId: client.idToken.clientId
      });
      this.loadPlayer(this.props.match.params._id);
      this.LoadRatingByPlayerID(this.props.match.params._id);
    }

    toggle = () => {
      this.setState({ collapse: !this.state.collapse });
    };

    LoadRatingByPlayerID = _id => {
      API.findRatingByPlayerID(_id)
      .then(res => console.log(res.data));
    }

    loadPlayer = _id => {
      API.findPlayersByPlayerID(_id)
        .then(res => this.setState({ player: res.data }))
        // .then(this.setState({ manTeamID: res.data[0].teamID }))
        .then(() => {
          this.setState({ manName: this.state.player[0].name });
        })
        .then(() => {
          this.setState({ manTeamID:  this.state.player[0].teamID });
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
      console.log(
        "name: %s, nextValue: %s, prevValue: %s",
        name,
        nextValue,
        prevValue
      );
      this.setState({ overallRating: nextValue });
    }
    onPaceStarClick(nextValue, prevValue, name) {
      console.log(
        "name: %s, nextValue: %s, prevValue: %s",
        name,
        nextValue,
        prevValue
      );
      this.setState({ pace: nextValue });
    }
    onDribblingStarClick(nextValue, prevValue, name) {
      console.log(
        "name: %s, nextValue: %s, prevValue: %s",
        name,
        nextValue,
        prevValue
      );
      this.setState({ dribbling: nextValue });
    }
    onShootingStarClick(nextValue, prevValue, name) {
      console.log(
        "name: %s, nextValue: %s, prevValue: %s",
        name,
        nextValue,
        prevValue
      );
      this.setState({ shooting: nextValue });
    }
    onDefenseStarClick(nextValue, prevValue, name) {
      console.log(
        "name: %s, nextValue: %s, prevValue: %s",
        name,
        nextValue,
        prevValue
      );
      this.setState({ defense: nextValue });
    }
    onPhysicalityStarClick(nextValue, prevValue, name) {
      console.log(
        "name: %s, nextValue: %s, prevValue: %s",
        name,
        nextValue,
        prevValue
      );
      this.setState({ physicality: nextValue });
    }
    onPassingStarClick(nextValue, prevValue, name) {
      console.log(
        "name: %s, nextValue: %s, prevValue: %s",
        name,
        nextValue,
        prevValue
      );
      this.setState({ passing: nextValue });
    }

    onStarClickCustomIcon(nextValue, prevValue, name) {
      console.log(
        "name: %s, nextValue: %s, prevValue: %s",
        name,
        nextValue,
        prevValue
      );
      this.setState({ rating_custom_icon: nextValue });
    }

    saveRanking = event => {
      event.preventDefault();
      console.log(event);
      API.saveRanking({
        playerID: this.props.match.params._id,
        playerTeamID: this.state.manTeamID,
        clientId: this.state.clientId,
        overall: this.state.overallRating,
        pace: this.state.pace,
        dribbling: this.state.dribbling,
        passing: this.state.passing,
        shooting: this.state.shooting,
        defense: this.state.defence,
        physicality: this.state.physicality
      }).catch(err => console.log(err));
      console.log(this.state);
    };

    handleClose = (e) => {
      e.preventDefault();
      this.setState({ modal: true });
    };

    render() {
      return (
        <Modal
          show={!this.state.modal}
          animation={this.state.modal}
          backdrop={!this.state.modal}
        >
          <Modal.Header>
            Player Rating Form
          </Modal.Header>
          <Modal.Body>
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
                          <h6 className="card-title">
                            Kit #: {man.jerseyNumber}
                          </h6>
                          <p className="card-text">
                            Position: {man.postion}
                            <br />
                            Nationality: {man.name1}
                          </p>
                        </CardBody>
                        <button
                          className = "btn btn-info btn-lg"
                          onClick={this.toggle}
                          style={{ marginBottom: "1rem" }}
                        >
                          Display
                        </button>
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
                                onStarClick={this.onOverallStarClick.bind(this)}
                              />
                              <br />
                              Pace:
                              <br />
                              <StarRatingComponent
                                name="pace"
                                starCount={5}
                                value={this.state.pace}
                                onStarClick={this.onPaceStarClick.bind(this)}
                              />
                              <br />
                              Dribbling:
                              <br />
                              <StarRatingComponent
                                name="dribbling"
                                starCount={5}
                                value={this.state.dribbling}
                                onStarClick={this.onDribblingStarClick.bind(
                                  this
                                )}
                              />
                              <br />
                              Passing:
                              <br />
                              <StarRatingComponent
                                name="passing"
                                starCount={5}
                                value={this.state.passing}
                                onStarClick={this.onPassingStarClick.bind(this)}
                              />
                              <br />
                              Shooting:
                              <br />
                              <StarRatingComponent
                                name="shooting"
                                starCount={5}
                                value={this.state.shooting}
                                onStarClick={this.onShootingStarClick.bind(
                                  this
                                )}
                              />
                              <br />
                              Defense:
                              <br />
                              <StarRatingComponent
                                name="defense"
                                starCount={5}
                                value={this.state.defense}
                                onStarClick={this.onDefenseStarClick.bind(this)}
                              />
                              <br />
                              Physical:
                              <br />
                              <StarRatingComponent
                                name="physicality"
                                starCount={5}
                                value={this.state.physicality}
                                onStarClick={this.onPhysicalityStarClick.bind(
                                  this
                                )}
                              />
                              <br />
                            </strong>
                            <br />
                          </CardBody>
                          <CardFooter className="text-muted" />
                        </Collapse>
                      </Card>
                    ))}
                  </div>
                ) : (
                  <h3>No Results to Display</h3>
                )}
              </Col>
            </Container>
          </Modal.Body>
          <Modal.Footer>
            <button className="btn btn-primary" onClick={e => this.handleClose(e)}>
              Close
            </button>
            <button className="btn btn-primary" onClick={e => this.saveRanking(e)}>
              Submit Ratings
            </button>
          </Modal.Footer>
        </Modal>
      );
    }
  }
);
