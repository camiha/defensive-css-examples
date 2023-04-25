import type { Meta, StoryObj } from "@storybook/react";
import { ImageDistortion } from "./index";

const meta = {
  title: "DefensiveCSS/2-ImageDistortion",
  component: ImageDistortion,
  tags: ["autodocs"],
} satisfies Meta<typeof ImageDistortion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    height: 10,
    hasObjectFit: false,
  },
};
