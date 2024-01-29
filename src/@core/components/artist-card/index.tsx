// ** React Router vImports
import { Link } from "react-router-dom"

// ** Props Imports
import { ArtistCardProps } from "./artistCardProp"

// ** Icons Imports
import { CiImageOff } from "react-icons/ci"
import { FaEye, FaRegStar, FaSpotify, FaStar } from "react-icons/fa"

// ** Styles Imports
import artistCardStyles from "./artistCardStyles.module.css"

// ** Utils Imports
import { formatFollowers } from "../../utils/formatFollowers"

// ** Component Imports
import Chip from "../chip"
import Button from "../button"

const ArtistCard = ({
  artistId,
  name,
  imgURL,
  externalURL,
  followers,
  genres,
  ...rest
}: ArtistCardProps) => {
  // ** Handlers
  const handleSpotifyRedirect = () => {
    window.open(externalURL, "_blank") // Open external URL in a new tab
  }

  return (
    <div
      id={artistId}
      className={`shadowBox ${artistCardStyles.card}`}
      {...rest}
    >
      {/* Header */}
      <div className={artistCardStyles.header}>
        {/* Left Section */}
        <div className={artistCardStyles.headerLeft}>
          <span className={artistCardStyles.name}>{name}</span>
          <span className={artistCardStyles.followers}>
            {formatFollowers(followers)} followers
          </span>
        </div>

        <Button
          iconButton
          startIcon={<FaRegStar color="var(--favorite-color)" />}
        ></Button>
      </div>

      {/* Artist Image */}
      {imgURL ? (
        <img alt={name} className={artistCardStyles.img} src={imgURL} />
      ) : (
        <CiImageOff className={artistCardStyles.imgPlaceholder} />
      )}

      {/* Genres */}
      {genres && (
        <div className={artistCardStyles.genresContainer}>
          {genres.map((genre) => (
            <Chip label={genre} />
          ))}
        </div>
      )}

      {/* Footer */}
      <div className={artistCardStyles.footerContainer}>
        <Link to={`/artists/${artistId}`} style={{ height: "100%" }}>
          <Button
            variant="flat"
            backgroundColor="var(--text-opacity)"
            className={artistCardStyles.footerButton}
            endIcon={<FaEye color="white" size={22} />}
          >
            View
          </Button>
        </Link>
        <Button
          variant="flat"
          onClick={handleSpotifyRedirect}
          backgroundColor="var(--spotify-primary)"
          className={artistCardStyles.footerButton}
          endIcon={<FaSpotify color="white" size={22} />}
        >
          Spotify
        </Button>
      </div>
    </div>
  )
}

ArtistCard.displayName = "ArtistCard"

export default ArtistCard
