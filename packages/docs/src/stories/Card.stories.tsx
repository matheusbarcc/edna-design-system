import type { Meta, StoryObj } from '@storybook/react'
import { Card, CardProps, Text } from '@edna-ui/react'

export default {
  title: 'Surfaces/Card',
  component: Card,
  args: {
    children: <Text>Testando o elemento Card</Text>,
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
} as Meta<CardProps>

export const Primary: StoryObj<CardProps> = {}
