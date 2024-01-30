// ** Props Imports
import { LoaderProps } from "./loaderProps"

// ** Styles Imports
import loaderStyles from "./loaderStyles.module.css"

// ** Icons Imports
import { FiLoader } from "react-icons/fi"

const Loader = ({ size = "25px", ...rest }: LoaderProps) => {
  return <FiLoader className={loaderStyles.loader} size={size} />
}

Loader.displayName = "Loader"

export default Loader
