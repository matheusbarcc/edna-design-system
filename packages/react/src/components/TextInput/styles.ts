import { styled } from '../../styles'

export const TextInputContainer = styled('div', {
  backgroundColor: '$base600',
  borderRadius: '$sm',
  boxSizing: 'border-box',
  border: '2px solid $base500',
  display: 'flex',
  alignItems: 'center',

  '&:has(span) input': {
    textAlign: 'center',
  },

  '&:has(input:focus)': {
    boxShadow: '0 0 0 2px $colors$base100',
  },

  '&:has(input:disabled)': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },
})

export const Prefix = styled('span', {
  fontFamily: '$default',
  fontSize: '$sm',
  color: '$base400',
  fontWeight: 'regular',
  padding: '$4',
  borderRight: '2px solid $base500',
})

export const Suffix = styled('span', {
  fontFamily: '$default',
  fontSize: '$sm',
  color: '$base400',
  fontWeight: 'regular',
  padding: '$4',
  borderLeft: '2px solid $base500',
})

export const Input = styled('input', {
  fontFamily: '$default',
  fontSize: '$sm',
  color: '$base100',
  fontWeight: 'regular',
  background: 'transparent',
  border: 0,
  width: '100%',
  padding: '$4',

  '&:focus': {
    outline: 0,
  },

  '&:disabled': {
    cursor: 'not-allowed',
  },

  '&::placeholder': {
    color: '$base400',
  },
})
