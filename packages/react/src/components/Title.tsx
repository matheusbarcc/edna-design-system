import { ComponentProps, ElementType } from 'react'
import { styled } from '../styles'

export const Title = styled('h3', {
  fontFamily: '$default',
  fontWeight: '$bold',
  lineHeight: '$base',
  margin: 0,
  color: '$base100',

  variants: {
    size: {
      xs: { fontSize: '$sm' },
      sm: { fontSize: '$lg' },
      md: { fontSize: '$2xl' },
      lg: { fontSize: '$3xl' },
    },
  },

  defaultVariants: {
    size: 'md',
  },
})

export interface TitleProps extends ComponentProps<typeof Title> {
  as?: ElementType
}

Title.displayName = 'Title'
