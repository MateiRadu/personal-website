/**
 * Copyright (c) 2018-present, Matei Bogdan Radu <matei.radu.92@gmail.com>
 *
 * This source code is licensed under the MIT license found in the LICENSE
 * file in the root directory of this source tree.
 */

import { h, Component } from "preact";
import "./Email.scss";

interface EmailProps {
  address: string;
  centered?: boolean;
}

class Email extends Component<EmailProps, {}> {
  constructor(props: EmailProps) {
    super(props);

    this.onCopyHandler = this.onCopyHandler.bind(this);
  }

  reverse(str: string) {
    return str
      .split("")
      .reverse()
      .join("");
  }

  onCopyHandler(e: ClipboardEvent) {
    e.preventDefault();

    // Create invisible temporary field.
    const tempParagraph = document.createElement("p");
    tempParagraph.classList.add("email__temp-hidden");

    // Mount temp field with correct email address.
    tempParagraph.innerText = this.props.address;
    document.body.appendChild(tempParagraph);

    // Select text of temp field.
    const range = document.createRange();
    range.selectNodeContents(tempParagraph);
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);

    // Copy selection to clipboard.
    document.execCommand("copy");

    // Cleanup.
    selection.removeAllRanges();
    tempParagraph.remove();
  }

  render({ address, centered }: EmailProps) {
    const localReverse = this.reverse(address.split("@")[0]);
    const domainReverse = this.reverse(address.split("@")[1]);

    const invisiblePiece = <span style={{ display: "none" }}>nice try</span>;

    return (
      <div className={centered ? "email email--centered" : "email"}>
        <p onCopy={this.onCopyHandler}>
          {domainReverse}
          {invisiblePiece}
          {"@"}
          {localReverse}
        </p>
      </div>
    );
  }
}

export default Email;
