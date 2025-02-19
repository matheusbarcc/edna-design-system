import type { Meta, StoryObj } from '@storybook/react'
import { SpecialTitle, SpecialTitleProps } from '@edna-ui/react'

export default {
  title: 'Typography/Special Title',
  component: SpecialTitle,
  args: {
    size: 'md',
    children: 'Custom title',
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg', 'xl'],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<SpecialTitleProps>

export const Primary: StoryObj<SpecialTitleProps> = {}

export const CustomTag: StoryObj<SpecialTitleProps> = {
  args: {
    children: 'H1 SpecialTitle',
    as: 'h1',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Por padrão o special title sempre será um `h2`, mas podemos alterar isso com a propriedade `as`.',
      },
    },
  },
}
