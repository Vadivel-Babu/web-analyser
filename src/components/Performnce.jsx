import { Card, CardBody, CardHeader, Text } from "@chakra-ui/react";
import React from "react";

const Performnce = ({ data }) => {
  return (
    <div
      style={{
        maxWidth: "1000px",
        margin: "10px auto",
        display: "flex",
        flexWrap: "wrap",
        padding: "20px",
        gap: "10px",
      }}
    >
      <Card>
        <CardHeader>
          <Text fontSize="lg">First Contentful Paint</Text>
        </CardHeader>
        <CardBody>
          <Text
            fontSize="2xl"
            color={
              data?.firstContentfulPaint.toFixed(2)[0] > 1 ? "red" : "green"
            }
            fontWeight={700}
          >
            {(data?.firstContentfulPaint / 1000).toFixed(2)}s
          </Text>
        </CardBody>
      </Card>
      <Card>
        <CardHeader>
          <Text fontSize="lg">Largest Contentful Paint</Text>
        </CardHeader>
        <CardBody>
          <Text
            fontSize="2xl"
            color={
              data?.largestContentfulPaint.toFixed(2)[0] > 1 ? "red" : "green"
            }
            fontWeight={700}
          >
            {(data?.largestContentfulPaint / 1000).toFixed(2)}s
          </Text>
        </CardBody>
      </Card>
      <Card>
        <CardHeader>
          <Text fontSize="lg">Speed Index</Text>
        </CardHeader>
        <CardBody>
          <Text
            fontSize="2xl"
            color={data?.speedIndex.toFixed(2)[0] > 1 ? "red" : "green"}
            fontWeight={700}
          >
            {(data?.speedIndex / 1000).toFixed(2)}s
          </Text>
        </CardBody>
      </Card>
      <Card>
        <CardHeader>
          <Text fontSize="lg">Time To Interactive</Text>
        </CardHeader>
        <CardBody>
          <Text
            fontSize="2xl"
            color={data?.timeToInteractive.toFixed(2)[0] > 1 ? "red" : "green"}
            fontWeight={700}
          >
            {(data?.timeToInteractive / 1000).toFixed(2)}s
          </Text>
        </CardBody>
      </Card>
      <Card>
        <CardHeader>
          <Text fontSize="lg">Total Blocking Time</Text>
        </CardHeader>
        <CardBody>
          <Text
            fontSize="2xl"
            color={data?.totalBlockingTime.toFixed(2)[0] > 1 ? "red" : "green"}
            fontWeight={700}
          >
            {(data?.totalBlockingTime / 1000).toFixed(2)}s
          </Text>
        </CardBody>
      </Card>
      <Card>
        <CardHeader>
          <Text fontSize="lg">Cumulative Layout Shift</Text>
        </CardHeader>
        <CardBody>
          <Text
            fontSize="2xl"
            color={
              data?.cumulativeLayoutShift.toFixed(2)[0] > 1 ? "red" : "green"
            }
            fontWeight={700}
          >
            {(data?.cumulativeLayoutShift / 1000).toFixed(2)}s
          </Text>
        </CardBody>
      </Card>
    </div>
  );
};

export default Performnce;
