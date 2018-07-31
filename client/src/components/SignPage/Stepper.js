import React from "react";
import {
  Container, Stepper, Step,
  Row, Col, Input, Button
} from "mdbreact";
import {
  FormGroup, Label, FormText
} from "reactstrap";

export default class StepperExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formActivePanel1: 1,
      formActivePanel1Changed: false,
    }
  }

  swapFormActive = (a) => (param) => (e) => {
    this.setState({
      ['formActivePanel' + a]: param,
      ['formActivePanel' + a + 'Changed']: true
      });
  }

  handleNextPrevClick = (a) => (param) => (e) => {
    this.setState({
      ['formActivePanel' + a] : param,
      ['formActivePanel' + a + 'Changed']: true
  });
  }

  handleSubmission = () => {
    alert('Form submitted!');
  }

  calculateAutofocus = (a) => {
    if (this.state['formActivePanel'+a+'Changed']) {
      return true
    }
  }

  render() {
    return(
        <Container>
          <h2 className="text-center font-weight-bold pt-4 pb-5 mb-2"><strong>Registration form</strong></h2>
          <Stepper icon>
            <Step icon="folder-open-o" stepName="Basic Information" onClick={this.swapFormActive(1)(1)}></Step>
            <Step icon="pencil" stepName="Personal Data" onClick={this.swapFormActive(1)(2)}></Step>
            <Step icon="photo" stepName="Terms and Conditions" onClick={this.swapFormActive(1)(3)}></Step>
            <Step icon="check" stepName="Finish" onClick={this.swapFormActive(1)(4)}></Step>
          </Stepper>

          <form role="form" action="" method="post">
            <Row>
              { this.state.formActivePanel1 === 1  &&
              (<Col md="12">
                <h3 className="font-weight-bold pl-0 my-4">
                  <strong>Basic Information</strong></h3>
                <Input label="Email" className="mt-4"
                autoFocus={this.calculateAutofocus(1)}/>
                <Input label="Username" className="mt-4"/>
                <Input label="Password" className="mt-4"/>
                <Input label="Repeat Password" className="mt-4"/>
                <Button color="mdb-color" rounded className="float-right" onClick={this.handleNextPrevClick(1)(2)}>next</Button>
                <br />
                <FormGroup>
                  <Label for="exampleFile">File</Label>
                  <Input type="file" name="file" id="exampleFile" />
                  <FormText color="muted">
                    Upload your images or avatar.
                  </FormText>
                </FormGroup>
              </Col>)}

              { this.state.formActivePanel1 === 2  &&
              (<Col md="12">
                <h3 className="font-weight-bold pl-0 my-4"><strong>Personal Data</strong></h3>
                <Input label="First Name" className="mt-3"
                autoFocus={this.calculateAutofocus(1)}/>
                <Input label="Second Name" className="mt-3"/>
                <Input label="Surname" className="mt-3"/>
                <Input  label="Address" type="textarea" rows="2"/>
                <Button color="mdb-color" rounded className="float-left" onClick={this.handleNextPrevClick(1)(1)}>previous</Button>
                <Button color="mdb-color" rounded className="float-right" onClick={this.handleNextPrevClick(1)(3)}>next</Button>
              </Col>)}

              { this.state.formActivePanel1 === 3  &&
              (<Col md="12">
                <h3 className="font-weight-bold pl-0 my-4"><strong>Terms and conditions</strong></h3>
                <Input label="I agreee to the terms and conditions" type="checkbox" id="checkbox" autoFocus={this.calculateAutofocus(1)}/>
                <Input label="I want to receive newsletter" type="checkbox" id="checkbox2" />
                <Button color="mdb-color" rounded className="float-left" onClick={this.handleNextPrevClick(1)(2)}>previous</Button>
                <Button color="mdb-color" rounded className="float-right" onClick={this.handleNextPrevClick(1)(4)}>next</Button>
              </Col>)}

              { this.state.formActivePanel1 === 4  &&
              (<Col md="12">
                <h3 className="font-weight-bold pl-0 my-4"><strong>Finish</strong></h3>
                <h2 className="text-center font-weight-bold my-4">Registration completed!</h2>
                <Button color="mdb-color" rounded className="float-left" onClick={this.handleNextPrevClick(1)(3)}>previous</Button>
                <Button color="success" rounded className="float-right" onClick={this.handleSubmission}>submit</Button>
              </Col>)}
          </Row>
        </form>
      </Container>
    );
  };
}