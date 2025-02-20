import type { Meta, StoryObj } from '@storybook/react'
import { Card, Text, TextInput, TextInputProps } from '@edna-ui/react'

export default {
  title: 'Form/Text Input',
  component: TextInput,
  args: {},
  decorators: [
    (Story) => {
      return (
        <Card
          css={{
            display: 'flex',
            flexDirection: 'column',
            gap: '$1',
          }}
        >
          <Text size="sm" as="strong" css={{ color: '$base300' }}>
            Text
          </Text>
          {Story()}
        </Card>
      )
    },
  ],
} as Meta<TextInputProps>

export const Primary: StoryObj<TextInputProps> = {
  args: {
    placeholder: 'Type the store name',
  },
}

export const Password: StoryObj<TextInputProps> = {
  args: {
    placeholder: 'Type your password',
    isPassword: true,
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
