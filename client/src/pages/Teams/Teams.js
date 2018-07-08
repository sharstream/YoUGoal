import React, { Component } from "react";
import API from "../../utils/API";
import { List, ListItem } from "../../components/List";
import teams from "../../team.json";
import { Grid, Row, Col, Thumbnail } from "react-bootstrap";
import { stringify } from "querystring";

export default class Teams extends Component {
  state = {
		teams: teams
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

  render() {
    return (
			<Grid fluid>
				<Row>
					<div className="col" />
					<Col size="md-9">
						<div className="panel panel-default">
							<div className="panel-heading">Teams</div>
							<div className="panel-body">
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
															>
																<Thumbnail alt={team.name} src={team.Flags} />
															</Col>
														);
													})}
												</Row>
											</Grid>
										)}
							</div>
						</div>
					</Col>
					<div className="col" />
				</Row>
			</Grid>
    );
  }
}