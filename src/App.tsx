/**
 * Copyright (c) 2018-present, Matei Bogdan Radu <matei.radu.92@gmail.com>
 *
 * This source code is licensed under the MIT license found in the LICENSE
 * file in the root directory of this source tree.
 */

import { h } from "preact";
import { Router } from "preact-router";
import { Header, Footer } from "./components";
import { About, Contact, NotFound } from "./pages";

const styles = {
  wrapper: {
    display: "flex",
    minHeight: "100vh",
    flexDirection: "column"
  }
};

// Waiting for Fragment support in preact.
export default () => (
  <div style={styles.wrapper}>
    <Header />
    <Router>
      <About path="/" />
      <Contact path="/contact" />
      <NotFound default />
    </Router>
    <Footer />
  </div>
);
