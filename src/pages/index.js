import React from "react";

import Layout from "../components/layout";

const verticalLeft = {
  color: "white",
  background: "black",
  padding: 40,
  textTransform: "uppercase",
  transform: "rotate(-180deg)",
  writingMode: "vertical-rl",
  fontKerning: "auto",
  // textOrientation: "upright",
  textAlign: "center",
  width: 100,
  fontSize: 44,
  fontFamily: "monospace",
  fontWeight: 800,
};

const horizontalRight = {
  color: "white",
  background: "black",
  padding: 40,
  writingMode: "vertical-rl",
  // textOrientation: "upright",
  textAlign: "center",
  width: 100,
  fontSize: 44,
  fontFamily: "monospace",
  fontWeight: 800,
};

const layout = {margin: 0, height: 1080, width: 1920, display: "flex"};

const IndexPage = () => (
  <Layout>
    <section style={layout}>
      <div style={verticalLeft}>bdougie.live</div>
      <p style={{width: "100%"}}></p>
        <div style={horizontalRight}><span style={{transform:"rotate(-180deg)"}}>🍕</span> opensauced.pizza</div>
    </section>
  </Layout>
);

export default IndexPage;
