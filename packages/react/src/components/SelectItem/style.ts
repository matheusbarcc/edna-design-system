import * as SelectPrimitive from '@radix-ui/react-select'
import { styled } from '@stitches/react'

export const Item = styled(SelectPrimitive.Item, {
  padding: '$2 $4',
  fontSize: '$sm',
  cursor: 'pointer',

  '&:hover': {
    background: '$base500',
  },
})
