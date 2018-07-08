import React, { Component } from "react";
import API from "../../utils/API";
import { List, ListItem } from "../../components/List";
import { Grid, Row, Col, Thumbnail, Panel } from "react-bootstrap";
import players from "../../players.json";

export default class Players extends Component {
  state = {
    teamName: "",
    flagUrl: "",
    players: []
  };

  handlePlayers = () => {
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
          <Panel.Body>Select each player</Panel.Body>
            {!this.state.players.length ? (
              <h3 className="text-center">No Players to Display</h3>
            ) : (
              <List>
                {this.state.players.map(player => {
                  return (
                    <ListItem
                      key={player.name}
                      name={player.name}
                      nationality={player.nationality}
                      name1={player.France}
                    >
                    </ListItem>
                  );
                })}
              </List>
            )}
        </Panel>
      </div>
    );
  }
}