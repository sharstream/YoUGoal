import React, { Component } from "react";
import { Link } from "react-router-dom";

import API from "../../utils/API";
import { Grid, Row, Col, Thumbnail, Panel } from "react-bootstrap";
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
                          <Card body inverse color="primary">
                            <CardBody>
                              <CardTitle>{man.name}</CardTitle>
                            </CardBody>
                            <Thumbnail alt={man.name} src={man.plyrImg} />
                            <CardBody>
                              <h6 className="card-title">Number: {man.jerseyNumber}</h6>
                              <p className="card-text">
                                Position: {man.postion}
                                <br />
                                Nationality: {man.nationality}
                              </p>
                            </CardBody>
                            <Button color="primary" onClick={this.toggle} style={{ marginBottom: '1rem' }}>
                              Display
                            </Button>
                          </Card>
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