import type { Meta, StoryObj } from "@storybook/react";

import { FlexboxWrapping } from "./index";

const meta = {
  title: "DefensiveCSS/1-FlexboxWrapping",
  component: FlexboxWrapping,
  tags: ["autodocs"],
} satisfies Meta<typeof FlexboxWrapping>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    width: 60,
    count: 4,
    isWrap: false,
  },
};
