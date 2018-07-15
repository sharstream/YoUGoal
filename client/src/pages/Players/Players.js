import React, { Component } from "react";
import { render } from "react-dom";
import { Link } from "react-router-dom";

import API from "../../utils/API";
import { Grid, Row, Col, Thumbnail, Panel } from "react-bootstrap";
// import players from "../../players.json";
import { stringify } from "querystring";

export default class Players extends Component {
  state = {
    players: [],
    team: {},
    teamName: "",
    flagUrl: ""
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
                  {this.state.players.map(player => {
                    return (
                      <Col md={2}
                        key={player.name}
                        teamName={player.name}
                        position={player.position}
                        img={player.plyrImg}
                        handleClick={this.handleClick}
                      >
                        <Link to={"/player/" + player._id}>
                          <Thumbnail alt={player.name} src={player.plyrImg} />
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