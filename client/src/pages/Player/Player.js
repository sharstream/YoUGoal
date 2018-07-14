import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import ReactDOM from 'react-dom';
import { Col, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import StarRatingComponent from '../../components/StarRatingComponent';
class Player extends Component {
  state = {
    player: [],
    manName: "",
    rating: 1,
    rating_custom_icon: 6,
    rating_half_star: 3.5,
    rating_empty_initial: 0
  };

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    API.findPlayersByPlayerID(this.props.match.params._id)
      .then(res => this.setState({ player: res.data }))
      .then(() => {
        this.setState({ manName: this.state.player[0].name });
      })
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  onStarClick(nextValue, prevValue, name) {
    console.log('name: %s, nextValue: %s, prevValue: %s', name, nextValue, prevValue);
    this.setState({ rating: nextValue });
  }

  onStarClickCustomIcon(nextValue, prevValue, name) {
    console.log('name: %s, nextValue: %s, prevValue: %s', name, nextValue, prevValue);
    this.setState({ rating_custom_icon: nextValue });
  }

  onStarClickHalfStar(nextValue, prevValue, name, e) {
    const xPos = (e.pageX - e.currentTarget.getBoundingClientRect().left) / e.currentTarget.offsetWidth;

    if (xPos <= 0.5) {
      nextValue -= 0.5;
    }

    console.log('name: %s, nextValue: %s, prevValue: %s', name, nextValue, prevValue);
    // console.log(e);
    this.setState({ rating_half_star: nextValue });
  }

  onStarClickEmptyInitial(nextValue, prevValue, name) {
    console.log('name: %s, nextValue: %s, prevValue: %s', name, nextValue, prevValue);
    this.setState({ rating_empty_initial: nextValue });
  }

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.title && this.state.author) {
      API.saveBook({
        title: this.state.title,
        author: this.state.author,
        synopsis: this.state.synopsis
      })
        .then(res => this.loadBooks())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <Col size="md-12 sm-12">
          <Jumbotron>
            <h1> {this.state.manName} </h1>
          </Jumbotron>
          {this.state.player.length ? (
            <List>
              {this.state.player.map(man => (
                <ListItem key={man._id}>
                  <strong>
                    Name: {man.name}
                    <br />
                    Position: {man.postion}
                    <br />
                    Nationality: {man.nationality}
                  </strong>
                </ListItem>
              ))}
            </List>
          ) : (
              <h3>No Results to Display</h3>
            )}

            <h3>Editable with handlers (Rating from state is {this.state.rating}):</h3>
            <div style={{ fontSize: 26 }}>
              <StarRatingComponent
                name="app2"
                starCount={8}
                value={this.state.rating}
                onStarClick={this.onStarClick.bind(this)} />
            </div>

            <h3>Editable (with custom icons):</h3>
            <div style={{ fontSize: 20 }}>
              <StarRatingComponent
                name="app3"
                starCount={10}
                value={this.state.rating_custom_icon}
                onStarClick={this.onStarClickCustomIcon.bind(this)}
                starColor="#f00"
                renderStarIcon={() => <span></span>} />
            </div>

            <h3>Non-Editable:</h3>
            <div style={{ fontSize: 18 }}>
              <StarRatingComponent
                name="app4"
                editing={false}
                starCount={10}
                value={8} />
            </div>

        </Col>
      </Container>
    
);
}}
export default Player;