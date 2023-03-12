import React from "react";
import {
  Grid,
  Container,
  Row,
  Col,
  Spacer,
  Text,
  Link,
  Button,
  Badge,
} from "@nextui-org/react";
import "./ApplyPage.scss";

const ApplyPage = () => {
  return (
    /* header */
    /* Hero banner */
    <>
      <Container xl fluid responsive wrap="wrap" justify="center">
        <Row className="desk">
          <Spacer y={4}></Spacer>
        </Row>
      </Container>
      <Container
        className="hero-banner"
        fluid
        xl
        responsive
        wrap="wrap"
        justify="center"
      >
        <Row fluid justify="center" align="center">
          <Badge isSquared color="primary">
            Engineer
          </Badge>
        </Row>
        <Row
          fluid
          justify="center"
          align="center"
          css={{ maxWidth: "50%", width: "50%", margin: "auto" }}
        >
          <Text
            h1
            weight="bold"
            css={{
              textAlign: "center",
              fontSize: "2.25rem",
              lineHeight: "1.3",
              letterSpacing: "0.25px",
            }}
          >
            Growth Data Analyst <br></br>(APAC Remote/HCMC, relocation support
            available)
          </Text>
        </Row>
        <Row>
          <Spacer y={1}></Spacer>
        </Row>
        <Row
          fluid
          justify="center"
          align="center"
          css={{ maxWidth: "50%", width: "50%", margin: "auto" }}
        >
          <Text
            h6
            weight="300"
            css={{ textAlign: "center", fontSize: "16px", lineHeight: "1.3" }}
          >
            Vietnam , Ho Chi Minh City - Full-time
          </Text>
        </Row>
      </Container>
      <Container responsive wrap="wrap" css={{ maxWidth: "80%", width: "80%" }}>
        <Spacer y={2}></Spacer>
        <Row>
          <Link
            href="#"
            css={{
              fontSize: "0.8rem",
              fontWeight: "bold",
              color: "#777b7c",
            }}
          >
            BACK TO JOB DESCRIPTION
          </Link>
        </Row>
      </Container>
      <Grid.Container
        gap={2}
        justify="center"
        css={{ maxWidth: "80%", width: "80%", margin: "auto" }}
      >
        <Grid xl={11} lg={10} md={10} xs={10}>
          <Text h3 weight="bold">
            Personal Info
          </Text>
        </Grid>
        <Grid xl={1} lg={2} md={2} xs={2}>
          <Button light color="primary" type="reset" auto>
            Clear
          </Button>
        </Grid>
      </Grid.Container>
    </>
    /* footer */
  );
};

export default ApplyPage;
