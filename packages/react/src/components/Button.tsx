import { ComponentProps, ElementType } from 'react'
import { styled } from '../styles'

export const Button = styled('button', {
  all: 'unset',
  borderRadius: '$sm',
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
    boxShadow: '0 0 0 2px $colors$cornsilk100',
  },

  variants: {
    variant: {
      primary: {
        color: '$white',
        background: '$cornsilk100',
        border: '2px solid $cornsilk500',

        '&:not(:disabled):hover': {
          background: '$cornsilk200',
          transition: 'background 200ms',
        },

        '&:disabled': {
          opacity: '.5',
        },
      },

      secondary: {
        color: '$cornsilk100',
        background: '$cornsilk500',

        '&:not(:disabled):hover': {
          background: '$cornsilk400',
          color: '$white',
          transition: 'background 200ms, color 200ms',
        },

        '&:disabled': {
          opacity: '.5',
        },
      },

      tertiary: {
        color: '$cornsilk100',

        '&:not(:disabled):hover': {
          color: '$cornsilk300',
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
        height: 46,
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
