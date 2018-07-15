import React, { Component } from "react";
import { Link } from "react-router-dom";

import API from "../../utils/API";
import { Grid, Row, Col, Thumbnail, Panel } from "react-bootstrap";
import StarRatingComponent from '../../components/StarRatingComponent';

export default class Players extends Component {
  state = {
    players: [],
    team: {},
    teamName: "",
    flagUrl: "",
    overallRating: 0,
    athletic: 0,
    offence: 0,
    defence: 0,
  };

  componentDidMount() {
    API.findPlayersByTeamID(this.props.match.params.teamID)
      .then(res => this.setState({ players: res.data }))
      // .then(res => console.log(res.data))
      .then(() => {
        API.findTeamByID(this.props.match.params.teamID)
          .then(resp => {
            this.setState({ team: resp.data[0] });
            console.log(JSON.stringify(this.state.team.name));
          })
          // .then(res => console.log(res.data))
          .catch(err => console.log(err));
      }).catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <Panel bsStyle="success">
          <Panel.Heading>
            <Panel.Title componentClass="h3">Players</Panel.Title>
          </Panel.Heading>
            {!this.state.players.length ? (
              <h3 className="text-center">No Players to Display</h3>
            ) : (
              <Grid>
                <Row>
                  {this.state.players.map(man => {
                    return (
                      <Col md={2}
                        key={man.name}
                        name={man.name}
                        position={man.position}
                        img={man.plyrImg}
                      >
                        <Link to={"/player/" + man._id}>
                          <div className="card text-white bg-primary mb-2" style={{maxWidth: "20rem"}}>
                            <div className="card-header">
                              <h4>
                                {man.name}
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
                                  />
                                <br />
                                  Athletic: <StarRatingComponent
                                    name="Athletic"
                                    starCount={5}
                                    value={this.state.athletic}
                                  />
                                <br />
                                  Offence: <StarRatingComponent
                                    name="Offence"
                                    starCount={5}
                                    value={this.state.offence}
                                  />
                                <br />
                                  Defence: <StarRatingComponent
                                    name="Defence"
                                    starCount={5}
                                    value={this.state.defence}
                                  />
                              </strong>
                            </div>
                          </div>
                        </Link>
                      </Col>
                    );
                  })}
                </Row>
						  </Grid>
            )}
          <Panel.Footer>Expand or collapse to see the player</Panel.Footer>
        </Panel>
      </div>
    );
  }
}