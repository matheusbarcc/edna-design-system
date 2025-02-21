import type { Meta, StoryObj } from '@storybook/react'
import { Text, TextProps } from '@edna-ui/react'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    size: 'md',
    children:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro reprehenderit est veniam? Rem recusandae sint perspiciatis debitis corrupti. Deserunt neque exercitationem illo voluptatum laudantium culpa suscipit accusantium blanditiis voluptas numquam.',
  },
  argTypes: {
    size: {
      options: ['xxs', 'xs', 'sm', 'md', 'lg'],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const Label: StoryObj<TextProps> = {
  args: {
    type: 'label',
    size: 'sm',
    children: 'Text',
  },
}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong text',
    as: 'strong',
  },
}
