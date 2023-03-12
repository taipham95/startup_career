import React from "react";
import {
  Container,
  Row,
  Col,
  Spacer,
  Text,
  Button,
  Badge,
} from "@nextui-org/react";

const ApplyForm = () => {
  return (
    <>
      <form>
        <label>
          Essay:
          <textarea value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </>
  );
};

export default ApplyForm;
