// ** Props Imports
import { inputProps } from "./inputProps"

// ** Styles Imports
import inputStyles from "./inputStyles.module.css"

const Input = ({ icon, ...rest }: inputProps) => {
  return (
    <div className={`innerShadowBox ${inputStyles.container}`}>
      {icon}
      <input {...rest} />
    </div>
  )
}

Input.displayName = "Input"

export default Input
