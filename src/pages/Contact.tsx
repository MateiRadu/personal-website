/**
 * Copyright (c) 2018-present, Matei Bogdan Radu <matei.radu.92@gmail.com>
 *
 * This source code is licensed under the MIT license found in the LICENSE
 * file in the root directory of this source tree.
 */

import { h } from "preact";
import { RoutableProps } from "preact-router";
import { Container, Page, Email } from "../components";
import "./Contact.scss";

export default (_: RoutableProps) => (
  <Page>
    <Container text>
      <h2>How to reach me</h2>
      <Email address="matei.radu.92@gmail.com" />
      <p>You can find me on other networks.</p>
      <table className="contact__list">
        <tbody>
          <tr>
            <td>GitHub</td>
            <td>
              <a href="https://github.com/matt-block">matt-block</a>
            </td>
          </tr>
          <tr>
            <td>Stack Overflow</td>
            <td>
              <a href="https://stackoverflow.com/u/1887860">Profile</a>
            </td>
          </tr>
          <tr>
            <td>Twitter</td>
            <td>
              <a href="https://twitter.com/matt__block">@matt__block</a>
            </td>
          </tr>
          <tr>
            <td>LinkedIn</td>
            <td>
              <a href="https://www.linkedin.com/in/mateibogdanradu/">Profile</a>
            </td>
          </tr>
          <tr>
            <td />
            <td />
          </tr>
        </tbody>
      </table>
    </Container>
  </Page>
);
