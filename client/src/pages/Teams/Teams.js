import React, { Component } from "react";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Breadcrumb, Grid, Row, Col, Panel, PageHeader } from "react-bootstrap";
import StarRatingComponent from "../../components/StarRatingComponent";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  Button
} from "reactstrap";

export default class Teams extends Component {
  constructor(props) {
    super(props);

    this.state = {
      teams: [],
      newTeams: [],
      players: [],
      teamName: "",
      overallRating: 0,
      athletic: 0,
      offence: 0,
      defence: 0,
      avgRatings: []
    };
  }

  componentDidMount() {
    this.loadTeams();
    this.loadRatingAllTeams();
  }

  loadRatingTeamArray = () => {
    let array = []
    this.state.teams.forEach(function(team){
      console.log("team: " + team + "\n")
      this.state.avgRatings.forEach(function(rating){
        console.log("rating: " + rating + "\n")
        if(rating._id === team._id){
          team = {
            _id: team._id,
            shortName: team.shortName,
            teamImg: team.teamImg,
            name: team.name,
            overallAvg: rating.overallAvg
          }
          array.push(team)
        }
      })
    })
    console.log(array)
    this.setState({ newTeams: array })
  }

  LoadRatingAllTeams = () => {
    API.findAvgRatingByTeam()
    .then(res => {
      console.log(res.data)
      this.setState({avgRatings: res.data})
    })
  }

  loadRatingsPerTeam = team => {
    this.state.avgRatings.forEach(function(rating) {
      if(team._id === rating._id){
        this.setState({ overallRating: rating.overallAvg });
      }
    })
  }

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
    console.log({[name] : nextValue});
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
          FIFA World Cup Teams <small>2018</small>
        </PageHeader>
        <Breadcrumb>
          <Breadcrumb.Item href="/">
            Home
          </Breadcrumb.Item>
          <Breadcrumb.Item active>
            Teams
          </Breadcrumb.Item>
        </Breadcrumb>
        <Panel bsStyle="primary">
          <Panel.Heading>Select a National Team</Panel.Heading>
          {!this.state.teams.length ? (
            <h3 className="text-center">No Team to Display</h3>
          ) : (
            <Grid >
              <Row>
                {this.state.teams.map(team => {
                  console.log(team._id)
                  return (
                    <Col style={{ margin: '15px' }}
										md={2}
										key={team.name}
										name={team.name}
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
                          {(this.state.avgRatings[1]._id === team._id) ? (
                            <StarRatingComponent
                              name={team._id}
                              starCount={5}
                              value = {
                                Math.round(this.state.avgRatings[1].overallAvg)
                              }
                            />
                          ) : (
                            <StarRatingComponent
                              name={team._id}
                              starCount={5}
                              value = {0}
                            />
                          )}
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
          <Panel.Footer>
            <Breadcrumb>
              <Breadcrumb.Item href="/">
                Home
              </Breadcrumb.Item>
              <Breadcrumb.Item active>
                Teams
              </Breadcrumb.Item>
            </Breadcrumb>
          </Panel.Footer>

        </Panel>
      </div>
    );
  }
}
