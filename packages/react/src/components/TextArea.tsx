import { ComponentProps } from 'react'
import { styled } from '../styles'

export const TextArea = styled('textarea', {
  backgroundColor: '$cornsilk600',
  padding: '$3 $4',
  borderRadius: '$sm',
  boxSizing: 'border-box',
  border: '2px solid $cornsilk500',

  fontFamily: '$default',
  fontSize: '$sm',
  color: '$cornsilk100',
  fontWeight: '$regular',
  resize: 'none',
  minHeight: 80,

  '&:focus': {
    outline: 0,
    boxShadow: '0 0 0 2px $colors$cornsilk100',
  },

  '&:disabled': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },

  '&:placeholder': {
    color: '$cornsilk400',
  },
})

export type TextAreaProps = ComponentProps<typeof TextArea>

TextArea.displayName = 'TextArea'
