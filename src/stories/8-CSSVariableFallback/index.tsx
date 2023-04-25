import { cc, mc } from "../../styles/styleConfig";
import { css } from "@emotion/react";

export const CSSVariableFallback = ({
  hasCSSVariable,
  hasFallback,
}: {
  hasCSSVariable: boolean;
  hasFallback: boolean;
}) => {
  return (
    <div
      css={css`
        padding: ${mc.sm};
        background-color: ${cc.quaternary};

        ${hasCSSVariable &&
        css`
          --cssVariable: ${cc.primary};
        `}
      `}
    >
      <p
        css={css`
          color: ${cc.light};
          padding: ${mc.sm};
          font-size: 2rem;
          background-color: ${hasFallback
            ? "var(--cssVariable)"
            : `var(--cssVariable, ${cc.secondary})`};
        `}
      >
        hello, CSSVariableFallback!
      </p>
    </div>
  );
};
