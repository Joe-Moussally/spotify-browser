// ** React Imports
import React from "react"

// ** Styles Imports
import styles from "./styles.module.css"

// ** Icons Imports
import { MdLibraryMusic } from "react-icons/md"

function InitialState() {
  return (
    <div className={`${styles.container}`}>
      <MdLibraryMusic size={140} />
      <span>Search Your Favorite Artist</span>
    </div>
  )
}

export default InitialState
