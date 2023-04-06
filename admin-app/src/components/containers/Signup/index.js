import React from "react";
import Layout from '../../layout'
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import Input from './../../UI/input/index'
export default function Signup() {
  return (
    <div>
      <Layout>
        up
        <Container>
          <Row style={{ marginTop: "50px" }}>
            <Col md={{ span: 6, offset: 3 }}>
              <Form>
                <Row>
                  <Col md={6}>
                    <Input
                      label="First Name"
                      type="text"
                      placeHolder="First Name"
                      value=""
                      onChange={() => {}}
                    />
                  </Col>
                  <Col md={6}>
                    <Input
                      label="Last Name"
                      type="text"
                      placeHolder="Last Name"
                      value=""
                      onChange={() => {}}
                    />
                  </Col>
                </Row>
                <Input
                  label="Email address"
                  type="email"
                  placeHolder="Last Name"
                  value=""
                  onChange={() => {}}
                />
                <Input
                  label="password"
                  type="password"
                  placeHolder="password"
                  value=""
                  onChange={() => {}}
                />

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </Layout>
    </div>
  );
}
