import React, { Component } from "react";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Grid, Row, Col, Panel, PageHeader } from "react-bootstrap";
import StarRatingComponent from "../../components/StarRatingComponent";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";

export default class Teams extends Component {
  state = {
    teams: [],
    players: [],
    teamName: "",
    overallRating: 0,
    athletic: 0,
    offence: 0,
    defence: 0
  };

  componentDidMount() {
    this.loadTeams();
  }

  loadRoster = _id => {
    API.findPlayersByTeamID(_id)
      .then(res => this.setState({ players: res.data }))
      // .then(res => console.log(res.data))
      .then(() => {
        API.findTeamByID(_id)
          .then(resp => {
            this.setState({ team: resp.data[0] });
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
			[name]: nextValue
    });
  }

  loadTeams = () => {
    API.getTeams()
      .then(res => this.setState({ teams: res.data }))
      .catch(err => console.log(err));
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
            <Grid >
              <Row>
                {this.state.teams.map(team => {
                  return (
                    <Col style={{ margin: '15px' }}
										md={2}
										key={team.name}
										name={team.name}
										founded={team.founded}
										url={team.teamImg}
                    >
                      <Card>
                        <CardImg
                          height="100px"
                          src={team.teamImg}
                          alt={team.name}
                        />
                        <CardBody>
                          <CardTitle>{team.shortName}</CardTitle>
                          <StarRatingComponent
													 name={team._id}
													 starCount={5}
													 value={this.nextValue}
													 onStarClick={this.onOverallStarClick.bind(this)}
                          />
                          <Link to={"/teamsGet/" + team._id}>
                            <Button color="primary">Display Team</Button>
                          </Link>
                        </CardBody>
                      </Card>
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
