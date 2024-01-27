export interface ButtonProps extends React.ComponentProps<"button"> {
  /**
   * A boolean that determines whether the button should be disabled or not
   */
  disabled?: boolean
  /**
   * A boolean that determines if the button should be displayed as a loading state
   */
  loading?: boolean
}
