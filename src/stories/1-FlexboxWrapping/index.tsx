import { cc, mc } from "../../styles/styleConfig";
import { css } from "@emotion/react";

const Card = () => {
  return (
    <div
      css={css`
        padding: 1rem;
        display: flex;
        flex-direction: column;
        background-color: ${cc.primary};
        color: ${cc.light};
        gap: 0.5rem;
        max-width: 20rem;
        min-width: 15rem;
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

export const FlexboxWrapping = ({
  width,
  count,
  isWrap,
}: {
  width: number;
  count: number;
  isWrap: boolean;
}) => {
  return (
    <div
      css={css`
        padding: ${mc.sm};
        background-color: ${cc.quaternary};
        display: flex;
        width: ${width}rem;
        gap: ${mc.sm};
        flex-wrap: ${isWrap ? "wrap" : "nowrap"};
      `}
    >
      {[...Array(count)].map(() => (
        <Card />
      ))}
    </div>
  );
};
