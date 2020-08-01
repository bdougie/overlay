import React from "react";

import Layout from "../components/layout";

const rotate = {
  transform: "rotate(-180deg)",
};

const vertical = {
  color: "white",
  background: "black",
  padding: 40,
  textTransform: "uppercase",
  writingMode: "vertical-rl",
  textAlign: "center",
  letterSpacing: ".3em",
  width: 100,
  fontSize: 44,
  fontFamily: "Helvetica Neue",
  fontWeight: 500,
};

const cameraStyle = {
  margin: 12,
  backgroundColor: "red",
  height: "40%",
  width: 400,
  borderRadius: 15,
};

const chatStyle = {
  margin: 12,
  backgroundColor: "purple",
  height: "60%",
  width: 400,
  borderRadius: 15,
};

const layout = {margin: 0, height: 1200, width: 1920, display: "flex"};

const IndexPage = () => (
  <Layout>
    <section style={layout}>
      <div style={{...vertical, ...rotate}}>bdougie.live</div>
      <p style={{width: "100%"}}></p>

      <div style={{height: 1200, display: "flex", flexDirection: "column"}}>
        <div style={chatStyle}>chatbox</div>
        <div style={cameraStyle}>camera</div>
      </div>
      <div style={vertical}>opensauced.pizza</div>
    </section>
  </Layout>
);

export default IndexPage;
