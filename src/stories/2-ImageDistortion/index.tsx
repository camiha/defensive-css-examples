import { cc, mc } from "../../styles/styleConfig";
import { css } from "@emotion/react";
import imageFile from "../../../public/img/image-distortion-img.png";

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
        <img src={imageFile} alt="" />
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
