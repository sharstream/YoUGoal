import React, { Component } from "react";
import SaveBtn from "../../components/SaveBtn";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, FormBtn } from "../../components/Form";
import teams from "../../../../team.json";
import players from "../../../../players.json";

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
        <Container fluid>
          <Row>
            <div className="col" />
            <Col size="md-6">
              <div className="panel panel-default">
                <div className="panel-heading">Players by Team</div>
                <div className="panel-body">
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
                </div>
              </div>
            </Col>
            <div className="col" />
          </Row>
        </Container>
      </div>
    );
  }
}