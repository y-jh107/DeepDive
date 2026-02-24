/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export default function EmotionBox() {
  return (
    <div
      css={css`
        width: 100px;
        height: 100px;
        background-color: lightcoral;
      `}
    >
      Emotion Box
    </div>
  );
}
