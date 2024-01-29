// ** Props Imports
import { ChipProps } from "./chipProps"

// ** Styles Imports
import chipStyles from "./chipStyles.module.css"

const Chip = ({ label, ...rest }: ChipProps) => {
  return (
    <div className={chipStyles.chip} {...rest}>
      {label}
    </div>
  )
}

Chip.displayName = "ArtistCard"

export default Chip
