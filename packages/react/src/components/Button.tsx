import { ComponentProps, ElementType } from 'react'
import { styled } from '../styles'

export const Button = styled('button', {
  all: 'unset',
  borderRadius: '$md',
  fontSize: '$sm',
  fontWeight: '$regular',
  fontFamily: '$default',
  textAlign: 'center',
  minWidth: 56,
  boxSizing: 'border-box',
  padding: '$4 $4',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$2',

  cursor: 'pointer',

  svg: {
    width: '$4',
    height: '$4',
  },

  '&:disabled': {
    cursor: 'not-allowed',
  },

  '&:focus': {
    boxShadow: '0 0 0 2px $colors$black',
  },

  transition: 'background 200ms, color 200ms',

  variants: {
    variant: {
      primary: {
        color: '$white',
        background: '$base100',

        '&:not(:disabled):hover': {
          background: '$base200',
        },

        '&:disabled': {
          opacity: '.5',
        },
      },

      secondary: {
        color: '$base100',
        background: '$base500',

        '&:not(:disabled):hover': {
          background: '$base400',
          color: '$white',
        },

        '&:disabled': {
          opacity: '.5',
        },
      },

      tertiary: {
        color: '$base100',

        '&:not(:disabled):hover': {
          color: '$base300',
        },

        '&:disabled': {
          opacity: '.5',
        },
      },
    },

    size: {
      sm: {
        height: 38,
      },
      md: {
        height: 53,
      },
    },
  },

  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
})

export interface ButtonProps extends ComponentProps<typeof Button> {
  as?: ElementType
}

Button.displayName = 'Button'
