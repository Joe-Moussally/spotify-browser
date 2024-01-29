// ** React Imports
import React from "react"

// ** Styles Imports
import styles from "./styles.module.css"

// ** Icons Imports
import { FiLoader } from "react-icons/fi"

function LoadingState() {
  return (
    <div className={`${styles.container}`}>
      <FiLoader />
    </div>
  )
}

export default LoadingState
