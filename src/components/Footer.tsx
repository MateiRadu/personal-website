/**
 * Copyright (c) 2018-present, Matei Bogdan Radu <matei.radu.92@gmail.com>
 *
 * This source code is licensed under the MIT license found in the LICENSE
 * file in the root directory of this source tree.
 */

import { h } from "preact";
import { Container } from ".";
import "./Footer.scss";

const projectRepo = "https://github.com/matt-block/personal-website";
const projectLincese =
  "https://github.com/matt-block/personal-website/blob/master/LICENSE";

export default () => (
  <footer>
    <Container>
      <p>Copyright © 2016-2018 Matei Bogdan Radu</p>
      <p>
        This website's source code is available on{" "}
        <a href={projectRepo}>GitHub</a> under the{" "}
        <a href={projectLincese}>MIT</a> license.
      </p>
    </Container>
  </footer>
);
