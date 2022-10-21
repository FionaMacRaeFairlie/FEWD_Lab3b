import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import FilterableStudentTable from "./FilterableStudentTable";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function App() {
  return (
    <Container>
      <Row>
        <Col xs={12} md={8}>
          <FilterableStudentTable students={STUDENTS} />
        </Col>
        <Col xs={6} md={4}></Col>
      </Row>
    </Container>
  );
}

const STUDENTS = [
  {
    year: "fourth",
    final: true,
    third: false,
    second: false,
    first: false,
    firstName: "Ann",
    lastName: "Doe",
    number: "S190000001",
    session: "202223"
  },
  {
    year: "fourth",
    final: true,
    third: false,
    second: false,
    first: false,
    firstName: "Fred",
    lastName: "Jackson",
    number: "S190000002",
    session: "202223"
  },
  {
    year: "fourth",
    final: true,
    third: false,
    second: false,
    first: false,
    firstName: "Brian",
    lastName: "Bain",
    number: "S190000003",
    session: "202223"
  },
  {
    year: "fourth",
    final: true,
    third: false,
    second: false,
    first: false,
    firstName: "Kyle",
    lastName: "Timms",
    number: "S190000004",
    session: "202223",
  },
  {
    year: "second",
    final: false,
    third: false,
    second: true,
    first: false,
    firstName: "Eddie",
    lastName: "Brown",
    number: "S210000001",
    session: "202223",
  },
  {
    year: "third",
    final: false,
    third: true,
    second: false,
    first: false,
    firstName: "Allan",
    lastName: "Smith",
    number: "S200000001",
    session: "202223",
  },
  {
    year: "fourth",
    final: true,
    third: false,
    second: false,
    first: false,
    firstName: "Charles",
    lastName: "MacDonald",
    number: "S190000005",
    session: "202223",
  },
  {
    year: "first",
    final: false,
    third: false,
    second: false,
    first: true,
    firstName: "Gary",
    lastName: "Nelson",
    number: "S220000075",
    session: "202223",
  },
  {
    year: "first",
    final: false,
    third: false,
    second: false,
    first: true,
    firstName: "Kevin",
    lastName: "Ferrier",
    number: "S220000034",
    session: "202223",
  },
];

export default App;
