import React, { Component } from "react";
import API from "../../utils/API";
import { Grid, Row, Col, Thumbnail, Panel } from "react-bootstrap";
import players from "../../players.json";
import { stringify } from "querystring";

export default class Players extends Component {
  state = {
    teamName: "",
    flagUrl: "",
    players: []
  };

  handlePlayers = () => {
    console.log("players: " + JSON.stringify(players));
    this.setState({ players: players });
  };

  reloadPage() {
    this.setState({
      teamName: "",
      flagUrl: "",
      players: []
    })

    this.handlePlayers();
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
                      <Col md={1}
                        key={player.name}
                        teamName={player.name}
                        position={player.position}
                        img={player.plyrImg}
                        handleClick={this.handleClick}
                      >
                        <Thumbnail alt={player.name} src={player.plyrImg} />
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