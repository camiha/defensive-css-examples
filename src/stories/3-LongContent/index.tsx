import { cc, mc } from "../../styles/styleConfig";
import { css } from "@emotion/react";

const Item = ({
  text,
  textOverflow,
}: {
  text: string;
  textOverflow: boolean;
}) => {
  return (
    <div
      css={css`
        width: 50%;
        padding: ${mc.sm};
        background-color: ${cc.primary};
        display: flex;
        align-items: center;
        gap: ${mc.sm};
      `}
    >
      <span
        css={css`
          background-color: ${cc.tertiary};
          height: 3em;
          width: 3em;
          border-radius: 50%;
          display: block;
          flex-shrink: 0;
        `}
      ></span>
      <p
        css={css`
          color: ${cc.light};
          font-size: 1.5rem;
          ${textOverflow &&
          css`
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          `}
        `}
      >
        {text}
      </p>
    </div>
  );
};

export const LongContent = ({
  text,
  textOverflow,
}: {
  text: string;
  textOverflow: boolean;
}) => {
  return (
    <div
      css={css`
        padding: ${mc.sm};
        background-color: ${cc.quaternary};
        display: flex;
        gap: ${mc.sm};
        flex-direction: column;
      `}
    >
      <Item text={text} textOverflow={textOverflow} />
      <Item text={text} textOverflow={textOverflow} />
      <Item text={text} textOverflow={textOverflow} />
    </div>
  );
};
