import { styled } from '../../styles'

export const TextInputContainer = styled('div', {
  backgroundColor: '$base700',
  borderRadius: '$sm',
  boxSizing: 'border-box',
  border: '1px solid $base500',
  display: 'flex',
  alignItems: 'center',

  '&:has(span) input': {
    textAlign: 'center',
  },

  '&:has(input:focus)': {
    boxShadow: '0 0 0 2px $colors$black',
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
  padding: '$3 $4',
  borderRight: '1px solid $base500',
})

export const Suffix = styled('span', {
  fontFamily: '$default',
  fontSize: '$sm',
  color: '$base400',
  fontWeight: 'regular',
  padding: '$3 $4',
  borderLeft: '1px solid $base500',
})

export const ShowPasswordButton = styled('button', {
  all: 'unset',
  display: 'flex',
  flexDirection: 'center',
  color: '$base400',
  marginRight: '$4',
  cursor: 'pointer',
})

export const Input = styled('input', {
  fontFamily: '$default',
  fontSize: '$sm',
  color: '$base100',
  fontWeight: 'regular',
  background: 'transparent',
  border: 0,
  width: '100%',
  padding: '$3 $4',

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
