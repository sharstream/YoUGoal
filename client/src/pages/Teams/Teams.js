import React, { Component } from "react";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Grid, Row, Col, Thumbnail, Panel, PageHeader } from "react-bootstrap";

export default class Teams extends Component {
  state = {
		teams: []
	};


	handleTeams = () => {
    API.getTeams()
    .then(res => this.setState({teams : res.data}))
    .catch(err => console.log(err));
    console.log("teams" + this.state.teams);
  };

  componentDidMount() {
    this.handleTeams();
    console.log(this.state.teams);
  }
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
										<Col md={2}
											key={team.name}
											name={team.name}
											founded={team.founded}
											url={team.Flags}
										>
											<Link to={"/teamsGet/" + team._id}>
												<Thumbnail alt={team.name} src={team.Flags} />
											</Link>
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