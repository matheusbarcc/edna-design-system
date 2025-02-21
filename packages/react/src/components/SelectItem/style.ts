import * as SelectPrimitive from '@radix-ui/react-select'
import { styled } from '../../styles'

export const Item = styled(SelectPrimitive.Item, {
  fontFamily: '$default',
  padding: '$2 $3',
  fontSize: '$sm',
  cursor: 'pointer',
  borderRadius: '$xs',

  '&[data-highlighted]': {
    backgroundColor: '$base500',
    outline: 'none',
  },
})

export const ItemText = styled(SelectPrimitive.ItemText, {
  color: '$base100',
})
