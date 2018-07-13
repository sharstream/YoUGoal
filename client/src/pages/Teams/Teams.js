import React, { Component } from "react";
import ReactDOM, { render } from 'react-dom';
// import teams from "../../team.json";
// import players from "../../players.json";
import API from "../../utils/API";
import { Grid, Row, Col, Thumbnail, Panel, PageHeader } from "react-bootstrap";
import { stringify } from "querystring";
import Players from "../Players/Players";

export default class Teams extends Component {
  state = {
		teams: []
	};

	componentDidMount() {
		this.handleTeams();
		console.log(this.state.teams);
	}

	handleTeams = () => {
		API.getTeams()
      .then(res => this.setState({teams : res.data}))
      .catch(err => console.log(err));
      console.log("teams" + this.state.teams);
  };

  render() {
    return (
			<div>
				<PageHeader>
					FIFA Teams <small>2018</small>
				</PageHeader>
				<Panel bsStyle="primary">
					<Panel.Heading>Select a Team</Panel.Heading>
					{!this.state.teams.length ? (
					<h3 className="text-center">No Team to Display</h3>
					) : (
						<Grid>
							<Row>
								{this.state.teams.map(team => {
									return (
										<Col md={3}
											key={team.id}
											teamName={team.name}
											founded={team.founded}
											url={team.Flags}
											handleClick={ id => this.handleClick(id)}
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