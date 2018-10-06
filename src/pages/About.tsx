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
      <div className="about__text">
        <h2>About me</h2>
        <p>
          I am a software developer with a focus on Javascript-based
          technologies, ranging from frontend frameworks of the likes of React
          and Vue.js to Express.js services and vanilla Javascript tool
          development. Typescript is my to-go option as I prefer statically
          typed languages but I still, however, feel comfortable writing pure
          Javascript.
        </p>
        <p>
          For the last months, I have grown fond of React Native and its
          flexibility. I keep myself involved in its development process,
          contribute to the code base and give back to the community by
          open-sourcing some native modules.
        </p>
        <p>
          Outside of the Javascript realm, I also work with Kotlin paired with
          Spring Boot at my current company{" "}
          <a
            href="https://techdev.io/en/"
            target="_blank"
            rel="noopener noreferrer"
          >
            techdev Solutions
          </a>
          . I enjoy following industry best practices in our development
          pipeline such as proper Git flow, coding style enforcement and scrum
          planning. My current challenge is to make TDD second nature.
        </p>
      </div>
    </Container>
  </Page>
);
