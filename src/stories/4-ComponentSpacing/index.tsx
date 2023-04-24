import { cc, mc } from "../../styles/styleConfig";
import { css } from "@emotion/react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";
export const ComponentSpacing = ({
  text,
  hasMargin,
}: {
  text: string;
  hasMargin: boolean;
}) => {
  return (
    <div
      css={css`
        padding: ${mc.sm};
        background-color: ${cc.quaternary};
      `}
    >
      <div
        css={css`
          background-color: ${cc.primary};
          width: 30rem;
          padding: ${mc.sm};
          color: ${cc.light};
        `}
      >
        <div
          css={css`
            position: relative;
          `}
        >
          <div
            css={css`
              ${hasMargin &&
              css`
                margin-right: 2rem;
              `}
            `}
          >
            <p
              css={css`
                font-size: 1.5rem;
                line-height: 1;
                color: ${cc.tertiary};

                ${hasMargin &&
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
          <FontAwesomeIcon
            css={css`
              font-size: 1.5em;
              position: absolute;
              right: 0;
              top: 0;
            `}
            icon={faGear}
          />
        </div>
        <div
          css={css`
            margin-top: ${mc.sm};
          `}
        >
          <p>
            text content here text content here text content here text content
            here text content here...
          </p>
        </div>
      </div>
    </div>
  );
};
