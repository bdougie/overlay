import React from "react";

import Layout from "../components/layout";

const verticalLeft = {
  color: "white",
  background: "black",
  padding: 40,
  textTransform: "uppercase",
  transform: "rotate(-180deg)",
  writingMode: "vertical-rl",
  letterSpacing: ".3em",
  textAlign: "center",
  width: 100,
  fontSize: 44,
  fontFamily: "Helvetica Neue",
  fontWeight: 500,
};

const layout = {margin: 0, height: 1200, width: 1920, display: "flex"};

const IndexPage = () => (
  <Layout>
    <section style={layout}>
      <div style={verticalLeft}>opensourcefriday.com</div>
      <p style={{width: "100%"}}></p>
    </section>
  </Layout>
);

export default IndexPage;
