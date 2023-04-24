import type { Meta, StoryObj } from "@storybook/react";
import { ComponentSpacing } from "./index";

const meta = {
  title: "DefensiveCSS/4-ComponentSpacing",
  component: ComponentSpacing,
  tags: ["autodocs"],
} satisfies Meta<typeof ComponentSpacing>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    text: "titletitletitletitletitletitle",
    hasMargin: false,
  },
};
