import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Aside } from './Aside';

export default {
  title: 'Aside',
  component: Aside,
  argTypes: {}
} as ComponentMeta<typeof Aside>;

const Template: ComponentStory<typeof Aside> = (args) => <Aside {...args} />;

export const Minimized = Template.bind({});
Minimized.args = {};
