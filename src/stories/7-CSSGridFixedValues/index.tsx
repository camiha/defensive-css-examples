import { cc, mc } from "../../styles/styleConfig";
import { css } from "@emotion/react";

const Card = ({ title }: { title: string }) => {
  return (
    <div
      css={css`
        padding: ${mc.sm};
        display: flex;
        flex-direction: column;
        background-color: ${cc.primary};
        color: ${cc.light};
        gap: ${mc.xs};
      `}
    >
      <p
        css={css`
          font-size: 1.8rem;
        `}
      >
        {title}
      </p>
      <p>text text text text text text text text </p>
    </div>
  );
};
export const CSSGridFixedValues = ({ hasMQ }: { hasMQ: boolean }) => {
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
          gap: 1rem;

          ${hasMQ
            ? css`
                @media (min-width: 600px) {
                  grid-template-columns: 250px 1fr;
                }
              `
            : css`
                grid-template-columns: 250px 1fr;
              `}
        `}
      >
        <Card title="main" />
        <Card title="aside with fixed width" />
      </div>
      {/* hello, CSSGridFixedValues!
      {hasMQ && <div>hasMQ is true</div>} */}
    </div>
  );
};
