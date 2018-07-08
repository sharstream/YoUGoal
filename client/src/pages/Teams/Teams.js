import React, { Component } from "react";
import ReactDOM, { render } from 'react-dom';
import API from "../../utils/API";
import teams from "../../team.json";
import players from "../../players.json";
import { Grid, Row, Col, Thumbnail, Panel } from "react-bootstrap";
import { stringify } from "querystring";
import Players from "../Players/Players";

export default class Teams extends Component {
  state = {
		teams: teams,
		clicked: []
	};

	handleTeams = () => {
		console.log("teams: " + JSON.stringify(teams));
    this.setState({ teams: teams });
  };

  reloadPage() {
    this.setState({
      teams: []
    })

    this.handleTeams();
	}

	 handleClick = id => {
    // e.preventDefault();
    if (this.state.clicked.indexOf(id) === -1) {
      this.displayPlayers();
      this.setState({ clicked: this.state.clicked.concat(id) });
    }
	};

	displayPlayers = ({ match, children }) => {
		children.map(player => {
			<Players />
		})
	};

  render() {
    return (
			<div>
				<Panel bsStyle="primary">
					<Panel.Heading>Teams</Panel.Heading>
					{!this.state.teams.length ? (
					<h3 className="text-center">No Team to Display</h3>
					) : (
						<Grid>
							<Row>
								{this.state.teams.map(team => {
									return (
										<Col md={1}
											key={team.id}
											teamName={team.name}
											founded={team.founded}
											url={team.Flags}
											handleClick={this.handleClick}
										>
											<Thumbnail alt={team.name} src={team.Flags} />
										</Col>
									);
								})}
							</Row>
						</Grid>
					)}
					<Panel.Footer>Click to display a team</Panel.Footer>
				</Panel>
			</div>
    );
  }
}