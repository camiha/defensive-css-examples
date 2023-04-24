---
name: 'component'
root: './src/stories'
output: '**/*'
ignore: []
questions:
  number: 'Please enter number.'
  name: 'Please enter name.'
  state: 'Please enter state.'
---

# `{{inputs.number}}-{{ inputs.name }}/index.tsx`

```tsx
import { cc, mc } from "../../styles/styleConfig";
import { css } from "@emotion/react";

export const {{ inputs.name }} = ({
  {{ inputs.state }},
}: {
  {{ inputs.state }} : boolean;
}) => {
  return (
    <div
      css={css`
        padding: ${mc.sm};
        background-color: ${cc.quaternary};
      `}
    >
      hello, {{ inputs.name }}!
      { {{ inputs.state }} && <div>{{ inputs.state }} is true</div> }
    </div>
  );
};
```


# `{{inputs.number}}-{{inputs.name}}/index.stories.tsx`

```tsx
import type { Meta, StoryObj } from "@storybook/react";
import { {{ inputs.name }} } from "./index";

const meta = {
  title: "DefensiveCSS/{{inputs.number}}-{{ inputs.name }}",
  component: {{ inputs.name }},
  tags: ["autodocs"],
} satisfies Meta<typeof {{ inputs.name }}>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    {{ inputs.state }}: false,
  },
};
```