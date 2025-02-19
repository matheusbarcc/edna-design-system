import { ComponentProps } from 'react'
import { styled } from '../styles'

export const TextArea = styled('textarea', {
  backgroundColor: '$base600',
  padding: '$3 $4',
  borderRadius: '$sm',
  boxSizing: 'border-box',
  border: '2px solid $base500',

  fontFamily: '$default',
  fontSize: '$sm',
  color: '$base100',
  fontWeight: '$regular',
  resize: 'vertical',
  minHeight: 80,

  '&:focus': {
    outline: 0,
    boxShadow: '0 0 0 2px $colors$base100',
  },

  '&:disabled': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },

  '&:placeholder': {
    color: '$base400',
  },
})

export type TextAreaProps = ComponentProps<typeof TextArea>

TextArea.displayName = 'TextArea'
