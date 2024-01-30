// ** Props Imports
import { TrackCardProps } from "./trackCardProps"

// ** Icons Imports
import { FaSpotify } from "react-icons/fa"

// ** Component Imports
import Button from "../button"

// ** Styles Imports
import trackCardStyles from "./trackCardStyles.module.css"

const TrackCard = ({
  id,
  name,
  link,
  albumImgUrl,
  previewUrl,
  ...rest
}: TrackCardProps) => {
  // ** Handlers
  const handleSpotifyRedirect = () => {
    window.open(link, "_blank") // Open external URL in a new tab
  }
  return (
    <div className={`shadowBox ${trackCardStyles.card}`} {...rest}>
      <img src={albumImgUrl} className={trackCardStyles.albumImg} />

      <div className={trackCardStyles.infoContainer}>
        <h3>
          {name}{" "}
          <Button
            iconButton
            startIcon={
              <FaSpotify
                size={22.5}
                style={{ color: "var(--spotify-primary)" }}
              />
            }
            onClick={handleSpotifyRedirect}
          />
        </h3>
        <div>
          <audio controls>
            <source type="audio/mpeg" src={previewUrl} />
            Your browser does not support audio playback
          </audio>
        </div>
      </div>
    </div>
  )
}

TrackCard.displayName = "TrackCard"

export default TrackCard
