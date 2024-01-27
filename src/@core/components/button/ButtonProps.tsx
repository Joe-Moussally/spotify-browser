export interface ButtonProps extends React.ComponentProps<"button"> {
  /**
   * A boolean that determines whether the button should be disabled or not
   */
  disabled?: boolean
  /**
   * A boolean that determines if the button should be displayed as a loading state
   */
  loading?: boolean
  /**
   * An Icon that would be displayed before the button text
   */
  startIcon?: React.ReactNode
  /**
   * An Icon that would be displayed after the button text
   */
  endIcon?: React.ReactNode
}
