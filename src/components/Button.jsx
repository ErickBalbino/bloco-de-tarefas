import React from "react";

import * as styles from "./css/Button.css";

export default function Button({ btnText, onClick }) {
  return (
    <div>
      <styles.Container onClick={onClick}>{btnText}</styles.Container>
    </div>
  );
}
