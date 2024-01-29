// ** API Imports
import { _getProfile } from "../APIs/getProfile"

const checkToken = () => {
  // ** Fetch profile and validate token
  _getProfile()
}

export default checkToken
