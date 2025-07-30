import { Card as HeroUICard, CardHeader, CardBody, CardFooter, CardProps } from '@heroui/react'
import { forwardRef } from 'react'

export interface CustomCardProps extends CardProps {
  variant?: 'elevated' | 'bordered' | 'light' | 'flat' | 'faded' | 'shadow'
}

export const Card = forwardRef<HTMLDivElement, CustomCardProps>(
  ({ children, ...props }, ref) => {
    return (
      <HeroUICard ref={ref} {...props}>
        {children}
      </HeroUICard>
    )
  }
)

Card.displayName = 'Card'

// Re-export card components
export { CardHeader, CardBody, CardFooter }