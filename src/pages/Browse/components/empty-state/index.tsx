// ** React Imports
import React from "react"

// ** Styles Imports
import styles from "./styles.module.css"

// ** Icons Imports
import { MdMusicOff } from "react-icons/md"

function EmptyState() {
  return (
    <div className={`${styles.container} shadowBox`}>
      <MdMusicOff />
      <span>No Result!</span>
    </div>
  )
}

export default EmptyState
