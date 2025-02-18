import { ComponentProps, ElementType } from 'react'
import { styled } from '../styles'

export const Card = styled('div', {
  padding: '$6',
  borderRadius: '$md',
  backgroundColor: '$base600',
  border: '2px solid $base500',
})

export interface CardProps extends ComponentProps<typeof Card> {
  as?: ElementType
}

Card.displayName = 'Card'
