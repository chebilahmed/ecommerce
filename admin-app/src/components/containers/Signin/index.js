import React from "react";
import Layout from "../../layout";
import Input from "./../../UI/input/index";

import { Container, Form, Row, Col, Button } from "react-bootstrap";

export default function Signin() {
  return (
    <div>
      <Layout>
        <Container>
          <Row style={{ marginTop: "50px" }}>
            <Col md={{ span: 6, offset: 3 }}>
              <Form>
                <Input
                  label="Email address"
                  type="email"
                  placeHolder="Enter email"
                  value=""
                  onChange={() => {}}
                />
                <Input
                  label="Password"
                  type="password"
                  placeHolder="Password"
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
