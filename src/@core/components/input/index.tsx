// ** Props Imports
import { inputProps } from "./inputProps"

// ** Styles Imports
import inputStyles from "./inputStyles.module.css"

const Input = ({ icon, ...rest }: inputProps) => {
  return (
    <div
      className="innerShadowBox"
      style={{
        width: "fit-content",
        padding: "11px 27px 10px 27px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "5px"
      }}
    >
      {icon}
      <input
        style={{
          border: "none",
          background: "none",

          opacity: "0.7"
        }}
        {...rest}
      />
    </div>
  )
}

Input.displayName = "Input"

export default Input
