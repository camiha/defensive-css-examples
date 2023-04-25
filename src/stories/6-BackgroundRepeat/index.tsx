import { cc, mc } from "../../styles/styleConfig";
import { css } from "@emotion/react";
import imageFile from "../../../public/img/image-distortion-img.png";

export const BackgroundRepeat = ({ hasNoRepeat }: { hasNoRepeat: boolean }) => {
  return (
    <div
      css={css`
        background-color: ${cc.primary};
        width: 100%;
        height: 28rem;
        padding: ${mc.sm};
        display: flex;
      `}
    >
      <div
        css={css`
          background-image: url(${imageFile});
          background-repeat: ${hasNoRepeat ? "no-repeat" : "repeat"};
          width: 100%;
          height: 100%;
        `}
      ></div>
    </div>
  );
};
