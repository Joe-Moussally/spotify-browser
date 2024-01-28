export interface ButtonProps extends React.ComponentProps<"button"> {
  /**
   * The style variation of the button
   * @default "neu"
   */
  variant?: "neu" | "flat"
  /**
   * The size of the button
   * @default "md"
   */
  size?: "sm" | "md"
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
  /**
   * The background color of the button
   */
  backgroundColor?: string
  /**
   * A boolean that determines if the button is icon only
   * @default false
   */
  iconButton?: boolean
}
