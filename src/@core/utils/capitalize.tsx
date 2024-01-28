export const capitalize = (input: string): string => {
  return input
    .split("-") // Split hyphenated words
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize each word
    .join("-") // Join the words back with hyphen
}
