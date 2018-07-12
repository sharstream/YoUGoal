import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import API from "../../utils/API";
import { List, ListItem } from "../../components/List";

class Detail extends Component {
  state = {
    players: {},
    team: {}
  };

  // constructor() {
  //   super();

  //   this.state = {
  //     rating: 1
  //   };
  // }

  // onStarClick(nextValue, prevValue, name) {
  //   this.setState({rating: nextValue});
  // }


  componentDidMount() {
    API.findPlayersByTeamID(this.props.match.params.teamID)
    .then(res => this.setState({ players: res.data }))
    // .then(res => console.log(res.data))
    .then(() => {
      API.findTeamByID(this.props.match.params.teamID)
      .then(resp => { 
        this.setState({ team: resp.data[0] });
        console.log(JSON.stringify(this.state.team.name));
      })
      // .then(res => console.log(res.data))
      .catch(err => console.log(err));
    }).catch(err => console.log(err));
  }

  

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
          {/* const { rating } = this.state;         
      <div>
        <h2>Rating from state: {rating}</h2>
        <StarRatingComponent 
          name="rate1" 
          starCount={10}
          value={rating}
          onStarClick={this.onStarClick.bind(this)}
        />
      </div> */}
            <Jumbotron>
              <h1>{this.state.team.name}</h1>
            </Jumbotron>
            {this.state.players.length ? (
              <List>
                {this.state.players.map(player => (
                  <ListItem key={player._id}>
                    <Link to={"/player/" + player._id}>
                      <strong>
                        Player: {player.name}
                        <br />
                        Position: {player.postion}
                      </strong>
                    </Link>
                  </ListItem>
                ))}
              </List>
            ) : (
                <h3>No Results to Display</h3>
              )}
          </Col>
        </Row>
        <Row>
          <Col size="md-2">
            <Link to="/">← Back to Teams</Link>
          </Col>
        </Row>
      </Container >
    );
  }
}

export default Detail;
