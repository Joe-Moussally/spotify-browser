// ** React Imports
import { forwardRef, useState } from "react"

// ** Props Imports
import { ButtonProps } from "./ButtonProps"

// ** Styles Imports
import buttonStyles from "./buttonStyles.module.css"

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ disabled, loading, startIcon, endIcon, ...rest }, ref) => {
    // ** States
    const [isPressed, setIsPressed] = useState(false)

    // ** Handlers
    const handleMouseDown = () => setIsPressed(true)
    const handleMouseUp = () => setIsPressed(false)

    return (
      <button
        ref={ref}
        {...rest}
        className={`${buttonStyles.button} shadowBox ${
          isPressed ? "innerShadowBox" : ""
        } ${rest.className}`}
        disabled={disabled || loading}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
      >
        {startIcon}
        {rest.children}
        {endIcon}
      </button>
    )
  }
)

Button.displayName = "Button"

export default Button
