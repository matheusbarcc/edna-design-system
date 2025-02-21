import type { Meta, StoryObj } from '@storybook/react'
import {
  Card,
  Text,
  SelectInput,
  SelectInputProps,
  SelectItem,
} from '@edna-ui/react'

export default {
  title: 'Form/Select Input',
  component: SelectInput,
  args: {},
  decorators: [
    (Story) => {
      return (
        <>
          <Card
            as="label"
            css={{
              display: 'flex',
              flexDirection: 'column',
              gap: '$2',
              width: '250px',
            }}
          >
            <Text size="sm" as="strong" css={{ color: '$base300' }}>
              Category
            </Text>
            {Story()}
          </Card>
        </>
      )
    },
  ],
} as Meta<SelectInputProps>

export const Primary: StoryObj<SelectInputProps> = {
  args: {
    placeholder: 'Select the category',
    children: Array.from({ length: 3 }).map((_, i) => {
      return (
        <SelectItem key={i} value={i.toString()}>
          {'category ' + (i + 1)}
        </SelectItem>
      )
    }),
  },
}

export const Disabled: StoryObj<SelectInputProps> = {
  args: {
    disabled: true,
  },
}
