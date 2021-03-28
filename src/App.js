import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import List from './Listing';
import React, { useState } from 'react';


let surveyList = [
  { 'name': 'Survey 1', 'id': 1 },
  { 'name': 'Survey 2', 'id': 2 },
  { 'name': 'Survey 3', 'id': 3 },
  { 'name': 'Survey 4', 'id': 4 }
];
let assignedList = [
];


function App() {

  function addSurvey(idOfEle) {
    let filteredSurvey = surveyList.filter((item) => item.id !== idOfEle.id);
    setSurveyInfo(surveyList = filteredSurvey);
    assignedList.push(idOfEle);
    setAssignedList(assignedList = assignedList);
  }
  
  function removeSurvey(idOfEle) {
    let filteredSurvey = assignedList.filter((item) => item.id !== idOfEle.id);
    surveyList.push(idOfEle);
    setSurveyInfo(surveyList = surveyList);
    setAssignedList(assignedList = filteredSurvey);
  }
  
  function employeeChange() {
    console.log("this");
  }

  
  let [employeeInfo, setEmployee] = useState([]);
  fetch("http://localhost:9001/getEmployee")
    .then(res => res.json())
    .then(
      (result) => {
        if (result.employeeInfo !== undefined && employeeInfo.length <= 0) {
          setEmployee(employeeInfo = result.employeeInfo);
        }
  
      },
      (error) => {
        console.log(error);
      }
    )
    

  let [surveyList, setSurveyInfo] = useState([]);
  fetch("http://localhost:9001/getSurveys")
    .then(res => res.json())
    .then(
      (result) => {
        if (result.survey !== undefined && surveyList.length <= 0) {
          setSurveyInfo(surveyList = result.survey);
        }
  
      },
      (error) => {
        console.log(error);
      }
    )
    
    

  let [assignedList, setAssignedList] = useState([]);
    
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-sm-12">
            <Form>
              <Form.Group controlId="exampleForm.SelectCustomSizeLg" className="col-md-6 col-sm-6">
                <Form.Label>Select Employee</Form.Label>
                <Form.Control as="select" size="lg" custom onChange={(e) => { employeeChange() }}>
                  {employeeInfo.map(function (item) {
                    return <option key={item.id}>{item.name}</option>
                  })}
                </Form.Control>
              </Form.Group>
            </Form>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 col-sm-12">
            <h1>Survey List</h1>
            <List data={surveyList} addMethod={addSurvey} removeMethod={removeSurvey} showRemove="0"></List>
          </div>
          <div className="col-md-6 col-sm-12">
            <h1>Assigned List</h1>
            <List data={assignedList} addMethod={addSurvey} removeMethod={removeSurvey} showRemove="1"></List>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 col-sm-12">
            <Button variant="btn btn-success" type="button" className="col-sm-2 col-md-1">
              Done
        </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
