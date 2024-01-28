// ** React Imports
import { useState } from "react"

// ** Props Imports
import { ArtistCardProps } from "./artistCardProp"

// ** Icons Imports
import { CiImageOff } from "react-icons/ci"

// ** Styles Imports
import artistCardStyles from "./artistCardStyles.module.css"
import { formatFollowers } from "../../utils/formatFollowers"
import Chip from "../chip"

const ArtistCard = ({
  artistId,
  name,
  imgURL,
  externalURL,
  followers,
  genres,
  ...rest
}: ArtistCardProps) => {
  return (
    <div
      id={artistId}
      className={`shadowBox ${artistCardStyles.card}`}
      {...rest}
    >
      {/* Header */}
      <div className={artistCardStyles.header}>
        <span className={artistCardStyles.name}>{name}</span>
        <span className={artistCardStyles.followers}>
          {formatFollowers(followers)} followers
        </span>
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
      <div className={artistCardStyles.footerContainer}></div>
    </div>
  )
}

ArtistCard.displayName = "ArtistCard"

export default ArtistCard
