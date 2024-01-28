const checkToken = () => {
  const token = localStorage.getItem("token") // Get token from localStorage

  // If the token doesn't exist -> redirect to login page
  if (!token) {
    window.location.replace("/login")
  }
}

export default checkToken
