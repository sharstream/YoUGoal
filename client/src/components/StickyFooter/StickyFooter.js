import React from 'react';
import { Col, Container, Row, Footer } from 'mdbreact';
import "mdbreact/dist/css/mdb.css";
import 'font-awesome/css/font-awesome.min.css';
import "./page-footer.css";

class FooterPage extends React.Component {
  render(){
    return(
      <Footer color="blue" className="font-small pt-0">
          <Container fluid className="text-center text-md-left">
            <Row className="my-4">
              <Col md="4" lg="4">
                <h5 className="text-uppercase mb-4 font-weight-bold">You Goal Content</h5>
                <p>YoUGoal is a soccer player and team rating app toolkit used to look through and
                   rate different famous and important soccer players and teams from around the world.
                   Users ratings of individual players and teams will be compared to the current FIFA
                   ratings of the players and teams. </p>
              </Col>
              <hr className="clearfix w-100 d-md-none"/>
              <Col md="2" lg="2" className="ml-auto">
                <h5 className="text-uppercase mb-4 font-weight-bold">About</h5>
                <ul className="list-unstyled">
                  <p><a href="#!">PROJECTS</a></p>
                  <p><a href="#!">ABOUT US</a></p>
                  <p><a href="#!">BLOG</a></p>
                  <p><a href="#!">AWARDS</a></p>
                </ul>
              </Col>
              <hr className="clearfix w-100 d-md-none"/>
              <Col md="5" lg="3">
                <h5 className="text-uppercase mb-4 font-weight-bold">Address</h5>
                <p><i className="fa fa-home mr-3"></i> Atlanta, GA 30021, US</p>
                <p><i className="fa fa-envelope mr-3"></i> admin@example.com</p>
                <p><i className="fa fa-phone mr-3"></i> + 01 813 952 6965</p>
                <p><i className="fa fa-print mr-3"></i> + 01 404 345 5220</p>
              </Col>
            </Row>
            <Row>
              <Col md="12">
                <div className="mb-5 flex-center">
                  <a className="fb-ic"><i className="fa fa-facebook fa-lg white-text mr-md-5 mr-3 fa-2x"> </i></a>
                  <a className="tw-ic"><i className="fa fa-twitter fa-lg white-text mr-md-5 mr-3 fa-2x"> </i></a>
                  <a className="gplus-ic"><i className="fa fa-google-plus fa-lg white-text mr-md-5 mr-3 fa-2x"> </i></a>
                  <a className="li-ic"><i className="fa fa-linkedin fa-lg white-text mr-md-5 mr-3 fa-2x"> </i></a>
                  <a className="ins-ic"><i className="fa fa-instagram fa-lg white-text mr-md-5 mr-3 fa-2x"> </i></a>
                  <a className="pin-ic"><i className="fa fa-pinterest fa-lg white-text fa-2x"> </i></a>
                </div>
              </Col>
            </Row>
          </Container>
          <div className="footer-copyright text-center py-3">
            <Container fluid>
              &copy; {(new Date().getFullYear())} Copyright: <a href="https://yougoal.herokuapp.com/"> yougoal.com </a>
            </Container>
          </div>
      </Footer>
    );
  }
}

export default FooterPage;