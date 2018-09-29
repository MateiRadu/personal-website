/**
 * Copyright (c) 2018-present, Matei Bogdan Radu <matei.radu.92@gmail.com>
 *
 * This source code is licensed under the MIT license found in the LICENSE
 * file in the root directory of this source tree.
 */

import { h } from "preact";
import { RoutableProps } from "preact-router";
import { Container, Page } from "../components";

export default (_: RoutableProps) => (
  <Page>
    <Container text>
      <p>About Page</p>
    </Container>
  </Page>
);
