import { Button as HeroUIButton, ButtonProps } from '@heroui/react'
import { forwardRef } from 'react'

export interface CustomButtonProps extends ButtonProps {
  variant?: 'solid' | 'bordered' | 'light' | 'flat' | 'faded' | 'shadow' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  color?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger'
}

export const Button = forwardRef<HTMLButtonElement, CustomButtonProps>(
  ({ children, ...props }, ref) => {
    return (
      <HeroUIButton ref={ref} {...props}>
        {children}
      </HeroUIButton>
    )
  }
)

Button.displayName = 'Button'