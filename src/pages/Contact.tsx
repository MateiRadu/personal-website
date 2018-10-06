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
      <p>My preferred way of being reached is though email at</p>
      <Email address="hello@mattblock.tech" centered />
      <p>You can also find me on other networks</p>
      <table className="contact__list">
        <tbody>
          <tr>
            <td>GitHub</td>
            <td>
              <a href="https://github.com/matt-block" target="_blank">
                matt-block
              </a>
            </td>
          </tr>
          <tr>
            <td>Stack Overflow</td>
            <td>
              <a href="https://stackoverflow.com/u/1887860" target="_blank">
                Profile
              </a>
            </td>
          </tr>
          <tr>
            <td>Twitter</td>
            <td>
              <a href="https://twitter.com/matt__block" target="_blank">
                @matt__block
              </a>
            </td>
          </tr>
          <tr>
            <td>LinkedIn</td>
            <td>
              <a
                href="https://www.linkedin.com/in/mateibogdanradu/"
                target="_blank"
              >
                Profile
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </Container>
  </Page>
);
