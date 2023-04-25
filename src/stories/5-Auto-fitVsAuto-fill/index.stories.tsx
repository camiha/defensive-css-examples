import type { Meta, StoryObj } from "@storybook/react";
import { Auto_fitVsAuto_fill } from "./index";

const meta = {
  title: "DefensiveCSS/5-Auto-fitVsAuto-fill",
  component: Auto_fitVsAuto_fill,
  tags: ["autodocs"],
} satisfies Meta<typeof Auto_fitVsAuto_fill>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    count: 2,
    isFit: false,
  },
};
