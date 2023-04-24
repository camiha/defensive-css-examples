import { cc, mc } from "../../styles/styleConfig";
import { css } from "@emotion/react";

export const ImageDistortion = ({
  hasObjectFit,
}: {
  hasObjectFit: boolean;
}) => {
  return (
    <div
      css={css`
        background-color: ${cc.primary};
        width: 20rem;
        padding: ${mc.sm};
      `}
    >
      <div
        css={css`
          > img {
            height: 20rem;
            width: 100%;

            ${hasObjectFit &&
            css`
              object-fit: cover;
            `};
          }
        `}
      >
        <img src="/public/img/image-distortion-img.png" alt="" />
      </div>
      <p
        css={css`
          color: ${cc.light};
        `}
      >
        text text text text
      </p>
    </div>
  );
};
