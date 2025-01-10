import type { Meta, StoryObj } from '@storybook/react';
import { Contact } from './Contact';

const meta = {
  title: 'Example/Contact',
  component: Contact,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
} satisfies Meta<typeof Contact>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {};
