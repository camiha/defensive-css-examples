import type { Meta, StoryObj } from "@storybook/react";
import { LongContent } from "./index";

const meta = {
  title: "DefensiveCSS/3-LongContent",
  component: LongContent,
  tags: ["autodocs"],
} satisfies Meta<typeof LongContent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    text: "long text long text long text long text long text long text long text ",
    textOverflow: false,
  },
};
