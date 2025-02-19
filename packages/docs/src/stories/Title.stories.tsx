import type { Meta, StoryObj } from '@storybook/react'
import { Title, TitleProps } from '@edna-ui/react'

export default {
  title: 'Typography/ Title',
  component: Title,
  args: {
    size: 'md',
    children: 'Custom title',
  },
  argTypes: {
    size: {
      options: ['xs', 'sm', 'md', 'lg'],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<TitleProps>

export const Primary: StoryObj<TitleProps> = {}

export const CustomTag: StoryObj<TitleProps> = {
  args: {
    children: 'H2 Title',
    as: 'h2',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Por padrão o  title sempre será um `h3`, mas podemos alterar isso com a propriedade `as`.',
      },
    },
  },
}
