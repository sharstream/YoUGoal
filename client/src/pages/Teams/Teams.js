import React, { Component } from "react";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import {
  Breadcrumb, Grid, Row, Col,
  Panel, PageHeader, ButtonToolbar,
  OverlayTrigger, Tooltip
} from "react-bootstrap";
import {
  Badge, Pagination, PaginationItem, PaginationLink
} from 'reactstrap';
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

  loadRatingAllTeams = () => {
    API.findAvgRatingByTeam()
    .then(res => {
      console.log(res.data)
      this.setState({avgRatings: res.data})
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
    API.findAllTeamsWithAvgRatings()
      .then(res => this.setState({ teams: res.data }))
      .catch(err => console.log(err));
  };

  render() {
    const tooltip = (
      <Tooltip id="tooltip">
        <strong>Overall rating</strong> Check this info.
      </Tooltip>
    );

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
                          <CardTitle>{team.shortName}
                          </CardTitle>
                          {(team.overallAvg !== 0) ? (
                            <StarRatingComponent
                            name={team._id}
                            starCount={5}
                            value = {
                              Math.round(team.overallAvg)
                            }
                            />
                          ) : (
                            <StarRatingComponent
                            name={team._id}
                            starCount={5}
                            value = {0}
                            />
                          )}
                          <br/>
                          <p>
                            <Badge color="light">Rating: </Badge>
                            <Badge color="warning">{team.overallAvg}</Badge>
                          </p>
                          <br/>
                          <Link to={"/teamsGet/" + team._id}>
                            <ButtonToolbar>
                              <OverlayTrigger placement="left" overlay={tooltip}>
                                <Button color="primary">Display Team</Button>
                              </OverlayTrigger>
                            </ButtonToolbar>
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
            <Pagination aria-label="Page navigation example">
              <PaginationItem disabled>
                <PaginationLink previous href="#" />
              </PaginationItem>
              <PaginationItem active>
                <PaginationLink href="#">
                  1
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">
                  2
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">
                  3
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">
                  4
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">
                  5
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink next href="#" />
              </PaginationItem>
            </Pagination>
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
