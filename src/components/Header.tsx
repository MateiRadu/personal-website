/**
 * Copyright (c) 2018-present, Matei Bogdan Radu <matei.radu.92@gmail.com>
 *
 * This source code is licensed under the MIT license found in the LICENSE
 * file in the root directory of this source tree.
 */

import { h } from "preact";
import { Container } from ".";
import "./Header.scss";

export default () => (
  <header>
    <Container>
      <h1>Matei Radu</h1>
      <nav>
        <a href="/">About</a>
      </nav>
    </Container>
  </header>
);
