import * as SelectPrimitive from '@radix-ui/react-select'
import { styled } from '../../styles'

export const SelectInputTrigger = styled(SelectPrimitive.Trigger, {
  fontFamily: '$default',

  backgroundColor: '$base700',
  color: '$base100',
  borderRadius: '$sm',
  boxSizing: 'border-box',
  border: '1px solid $base500',
  padding: '$3 $4',
  userSelect: 'none',

  fontSize: '$sm',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  cursor: 'pointer',

  '&:has(input:focus)': {
    boxShadow: '0 0 0 2px $colors$black',
  },

  '&:has(input:disabled)': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },

  '&::placeholder': {
    color: '$base300',
  },
})

export const SelectInputContent = styled(SelectPrimitive.Content, {
  display: 'flex',
  flexDirection: 'column',
  gap: '$2',

  fontFamily: '$default',
  color: '$base100',
  background: '$base700',
  border: '1px solid $base500',
  borderRadius: '$sm',

  marginTop: '$20',
})
