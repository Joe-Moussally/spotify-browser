// ** React Imports
import { forwardRef, useState } from "react"

// ** Props Imports
import { ButtonProps } from "./ButtonProps"

// ** Icons Imports
import { LuLoader } from "react-icons/lu"

// ** Styles Imports
import buttonStyles from "./buttonStyles.module.css"

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "neu",
      size = "md",
      disabled,
      loading,
      startIcon,
      endIcon,
      backgroundColor,
      iconButton,
      ...rest
    },
    ref
  ) => {
    // ** States
    const [isPressed, setIsPressed] = useState(false)

    // ** Handlers
    const handleMouseDown = () => setIsPressed(true)
    const handleMouseUp = () => setIsPressed(false)

    return (
      <button
        ref={ref}
        {...rest}
        className={`${buttonStyles.button} ${variant === "neu" && "shadowBox"}
        ${size === "sm" && buttonStyles.small}
        ${iconButton && buttonStyles.iconButton}
        ${variant === "neu" && isPressed && !loading ? "innerShadowBox" : ""} ${
          variant === "flat" && buttonStyles.flat
        } ${loading ? buttonStyles.loading : ""} ${rest.className ?? ""}`}
        style={{
          backgroundColor
        }}
        disabled={disabled || loading}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
      >
        {startIcon}
        {rest.children}
        {endIcon}
        {loading && <LuLoader className={buttonStyles.loader} />}
      </button>
    )
  }
)

Button.displayName = "Button"

export default Button
