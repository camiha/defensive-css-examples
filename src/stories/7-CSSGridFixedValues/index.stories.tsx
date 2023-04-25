import type { Meta, StoryObj } from "@storybook/react";
import { CSSGridFixedValues } from "./index";

const meta = {
  title: "DefensiveCSS/7-CSSGridFixedValues",
  component: CSSGridFixedValues,
  tags: ["autodocs"],
} satisfies Meta<typeof CSSGridFixedValues>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    hasMediaQuery: false,
  },
};
