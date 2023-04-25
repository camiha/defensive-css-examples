import { cc, mc } from "../../styles/styleConfig";
import { css } from "@emotion/react";

const Card = () => {
  return (
    <div
      css={css`
        padding: ${mc.sm};
        display: flex;
        flex-direction: column;
        background-color: ${cc.primary};
        color: ${cc.light};
        gap: ${mc.xs};
        width: 100%;
      `}
    >
      <p
        css={css`
          font-size: 1.8rem;
        `}
      >
        card title
      </p>
      <p>text text text text text text text text </p>
    </div>
  );
};

export const Auto_fitVsAuto_fill = ({ isFit }: { isFit: boolean }) => {
  return (
    <div
      css={css`
        padding: ${mc.sm};
        background-color: ${cc.quaternary};
      `}
    >
      <div
        css={css`
          display: grid;
          grid-gap: ${mc.sm};

          ${isFit
            ? css`
                grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
              `
            : css`
                grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
              `}
        `}
      >
        <Card />
        <Card />
        <Card />
      </div>
      <div
        css={css`
          display: grid;
          grid-gap: ${mc.sm};
          margin-top: ${mc.md};

          ${isFit
            ? css`
                grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
              `
            : css`
                grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
              `}
        `}
      >
        <Card />
      </div>
    </div>
  );
};
