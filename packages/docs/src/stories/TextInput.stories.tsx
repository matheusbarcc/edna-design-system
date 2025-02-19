import type { Meta, StoryObj } from '@storybook/react'
import { Text, TextInput, TextInputProps } from '@edna-ui/react'

export default {
  title: 'Form/Text Input',
  component: TextInput,
  args: {},
  decorators: [
    (Story) => {
      return (
        <>
          <Text size="sm">Price</Text>
          {Story()}
        </>
      )
    },
  ],
} as Meta<TextInputProps>

export const Primary: StoryObj<TextInputProps> = {
  args: {
    placeholder: 'Type the store name',
  },
}

export const WithPrefix: StoryObj<TextInputProps> = {
  args: {
    prefix: 'R$',
    placeholder: '00,00',
    css: { width: '201px' },
  },
}

export const WithSuffix: StoryObj<TextInputProps> = {
  args: {
    suffix: 'cm',
    placeholder: '00,00',
    css: { width: '201px' },
  },
}

export const Disabled: StoryObj<TextInputProps> = {
  args: {
    disabled: true,
  },
}
