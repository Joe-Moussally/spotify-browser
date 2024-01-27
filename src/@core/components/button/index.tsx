// ** React Imports
import { forwardRef, useState } from "react"

// ** Props Imports
import { ButtonProps } from "./ButtonProps"

// ** Styles Imports
import buttonStyles from "./buttonStyles.module.css"

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ disabled, loading, ...rest }, ref) => {
    // ** States
    const [isPressed, setIsPressed] = useState(false)

    // ** Handlers
    const handleMouseDown = () => setIsPressed(true)
    const handleMouseUp = () => setIsPressed(false)

    return (
      <button
        ref={ref}
        {...rest}
        className={`${buttonStyles.button} ${
          isPressed ? buttonStyles.pressed : ""
        } ${rest.className}`}
        disabled={disabled || loading}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
      />
    )
  }
)

Button.displayName = "Button"

export default Button
