import React, { Component } from "react";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Grid, Row, Col, Thumbnail, Panel, PageHeader } from "react-bootstrap";
import StarRatingComponent from '../../components/StarRatingComponent';
import {
  Card,
  CardImg,
  CardBody,
	CardTitle,
	CardSubtitle,
	Button
} from 'reactstrap';

export default class Teams extends Component {
  state = {
		teams: [],
		players: [],
		teamName: "",
		overallRating: 0,
		athletic: 0,
		offence: 0,
		defence: 0,
		renderTeams: true,
		renderRoster: false
	};

	componentDidMount() {
		this.loadTeams();
		console.log(this.state.teams);
	};

	loadRoster = _id => {
    API.findPlayersByTeamID(_id)
      .then(res => this.setState({ players: res.data }))
      // .then(res => console.log(res.data))
      .then(() => {
        API.findTeamByID(_id)
          .then(resp => {
            this.setState({ team: resp.data[0] });
            this.setState({ renderTeams: false });
            this.setState({ renderRoster: true });

            console.log(JSON.stringify(this.state.team.name));
          })
          // .then(res => console.log(res.data))
          .catch(err => console.log(err));
      })
      .catch(err => console.log(err));
  };

	onOverallStarClick(nextValue, prevValue, name) {
		console.log(
			"name: %s, nextValue: %s, prevValue: %s",
			name,
			nextValue,
			prevValue
		);
		this.setState({
			overallRating: nextValue
		});
	};

	loadTeams = () => {
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
										<Col md={2}
											key={team.name}
											name={team.name}
											founded={team.founded}
											url={team.teamImg}
										>
											<Link to={"/teamsGet/" + team._id}>
												<Card>
													<CardImg top width="100%" src={team.teamImg} alt={team.name} />
													<CardBody>
														<CardTitle>{team.shortName}</CardTitle>
														<CardSubtitle>{team.website}</CardSubtitle>
														<StarRatingComponent
															name="overall"
															starCount={5}
															value={this.state.overallRating}
															onStarClick={this.onOverallStarClick.bind(this)}
														/>
														<Button color="primary">Display Team</Button>
													</CardBody>
												</Card>
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