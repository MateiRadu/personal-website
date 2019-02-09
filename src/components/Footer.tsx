/**
 * Copyright (c) 2018-present, Matei Bogdan Radu <matei.radu.92@gmail.com>
 *
 * This source code is licensed under the MIT license found in the LICENSE
 * file in the root directory of this source tree.
 */

import { h } from "preact";
import { Container } from ".";
import logo from "../assets/logo.svg";
import "./Footer.scss";

const projectRepo = "https://github.com/matt-block/personal-website";
const projectLincese =
  "https://github.com/matt-block/personal-website/blob/master/LICENSE";

export default () => (
  <footer>
    <Container>
      <div className="footer__content-wrapper">
        <div>
          <p>Copyright © 2016-2019 Matei Bogdan Radu.</p>
          <p>
            This website's source code is available on{" "}
            <a href={projectRepo} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>{" "}
            under the{" "}
            <a href={projectLincese} target="_blank" rel="noopener noreferrer">
              MIT
            </a>{" "}
            license.
          </p>
        </div>
        <img
          src={logo}
          alt="Gray brick, logo of MattBlock"
          title="Fear the Block"
        />
      </div>
    </Container>
  </footer>
);
