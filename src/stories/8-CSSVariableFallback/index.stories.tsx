import type { Meta, StoryObj } from "@storybook/react";
import { CSSVariableFallback } from "./index";

const meta = {
  title: "DefensiveCSS/8-CSSVariableFallback",
  component: CSSVariableFallback,
  tags: ["autodocs"],
} satisfies Meta<typeof CSSVariableFallback>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    hasCSSVariable: false,
    hasFallback: false,
  },
};
