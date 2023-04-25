import type { Meta, StoryObj } from "@storybook/react";
import { BackgroundRepeat } from "./index";

const meta = {
  title: "DefensiveCSS/6-BackgroundRepeat",
  component: BackgroundRepeat,
  tags: ["autodocs"],
} satisfies Meta<typeof BackgroundRepeat>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    hasNoRepeat: false,
  },
};