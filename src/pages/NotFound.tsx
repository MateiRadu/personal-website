/**
 * Copyright (c) 2018-present, Matei Bogdan Radu <matei.radu.92@gmail.com>
 *
 * This source code is licensed under the MIT license found in the LICENSE
 * file in the root directory of this source tree.
 */

import { h } from "preact";
import { RoutableProps } from "preact-router";
import "./NotFound.scss";

export default (_: RoutableProps) => (
  <main>
    <div className="not-found">
      <h2>Wait, what?</h2>
      <p>Page not found.</p>
      <div className="not-found__redirect-btn-wrapper">
        <a className="btn" href="/">
          Back to main page
        </a>
      </div>
    </div>
  </main>
);
