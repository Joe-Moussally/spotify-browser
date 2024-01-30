// ** React Imports
import React, { useEffect, useState } from "react"

// ** React Router Imports
import { useNavigate, useParams } from "react-router-dom"

// ** API Imports
import { _getArtistById } from "../../@core/APIs/getArtistById"
import { _getArtistTopTracks } from "../../@core/APIs/getArtistTopTracks"

// ** Styles Imports
import styles from "./styles.module.css"

// ** Interfaces Imports
import {
  getArtistByIdInterface,
  getArtistTopTracksInterface
} from "../../@core/interfaces/artists"

// ** Icons Imports
import { CiImageOff } from "react-icons/ci"
import { FaRegStar, FaSpotify, FaStar } from "react-icons/fa"
import { IoChevronBackSharp } from "react-icons/io5"

// ** Toast Imports
import toast from "react-hot-toast"

// ** Utils Imports
import toggleFavoriteArtist from "../../@core/utils/toggleFavoriteArtist"
import checkArtistIsFavorite from "../../@core/utils/checkArtistIsFavorite"

// ** Component Imports
import Button from "../../@core/components/button"
import Chip from "../../@core/components/chip"
import { capitalize } from "../../@core/utils/capitalize"
import { formatFollowers } from "../../@core/utils/formatFollowers"
import { MdLibraryMusic } from "react-icons/md"
import TrackCard from "../../@core/components/track-card"

function ViewArtist() {
  // ** Hooks
  const params = useParams()
  const navigate = useNavigate()

  // Artist ID from the URL path
  const artistId = params.artistId

  // ** States
  const [artistData, setArtistData] = useState<getArtistByIdInterface | null>(
    null
  )
  const [isFavorite, setIsFavorite] = useState<boolean>(false)
  const [tracksData, setTracksData] =
    useState<getArtistTopTracksInterface | null>(null)
  const [artistLoading, setArtistLoading] = useState<boolean>(false)
  const [tracksLoading, setTracksLoading] = useState<boolean>(false)

  // ** Handlers
  const fetchData = () => {
    // If no id was provided
    if (!artistId) {
      toast.error("Something went wrong")
      navigate("/")
      return
    }

    // Start loading states
    setTracksLoading(true)
    setArtistLoading(true)
    _getArtistById(
      { id: artistId },
      (data) => {
        setArtistData(data)
        setArtistLoading(false) // end loading
      },
      (err) => setArtistLoading(false) // end loading
    )
    _getArtistTopTracks(
      { id: artistId },
      (data) => {
        setTracksData(data)
        setTracksLoading(false) // end loading
      },
      (err) => setTracksLoading(false) // end loading
    )
  }

  const handleGoBack = () => navigate("/")

  const handleFavoriteClick = () => {
    if (!artistId) return
    setIsFavorite(toggleFavoriteArtist(artistId))
  }

  const handleSpotifyRedirect = () => {
    if (!artistData?.external_urls.spotify) return
    window.open(artistData?.external_urls.spotify, "_blank") // Open external URL in a new tab
  }

  // On page load -> check if artist is favorite
  useEffect(() => {
    if (!artistId) return
    setIsFavorite(checkArtistIsFavorite(artistId))
  }, [])

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className={`pageContainer`}>
      {artistLoading || tracksLoading ? (
        <span>LOADING</span>
      ) : (
        <>
          <div className={styles.header}>
            {/* Left Section */}
            <div className={styles.headerLeft}>
              {/* Title */}
              <div className={styles.titleContainer}>
                <Button
                  iconButton
                  startIcon={<IoChevronBackSharp size={20} />}
                  onClick={handleGoBack}
                />
                <h1>{artistData?.name}</h1>
                <Button
                  iconButton
                  startIcon={
                    isFavorite ? (
                      <FaStar color="var(--favorite-color)" />
                    ) : (
                      <FaRegStar color="var(--favorite-color)" />
                    )
                  }
                  onClick={handleFavoriteClick}
                />
              </div>

              {artistData?.images ? (
                <img
                  alt={artistData.name}
                  className={`${styles.artistImg} ${styles.mobileArtistImg}`}
                  src={artistData.images[0].url}
                />
              ) : (
                <CiImageOff className={styles.imgPlaceholder} />
              )}

              <div className={styles.statsContainer}>
                {/* Genres */}
                {artistData?.genres.length && (
                  <div className={styles.genreContainer}>
                    {artistData.genres.map((genre) => (
                      <Chip label={capitalize(genre)} key={genre} />
                    ))}
                  </div>
                )}

                {artistData?.followers.total && (
                  <div>
                    {formatFollowers(artistData?.followers.total)} Followers
                  </div>
                )}
                <Button
                  variant="flat"
                  onClick={handleSpotifyRedirect}
                  style={{ fontWeight: 300 }}
                  backgroundColor="var(--spotify-primary)"
                  endIcon={<FaSpotify color="white" size={22} />}
                >
                  View On Spotify
                </Button>
              </div>
            </div>

            {/* Header Right */}
            <div className={styles.headerRight}>
              {artistData?.images ? (
                <img
                  alt={artistData.name}
                  className={styles.artistImg}
                  src={artistData.images[0].url}
                />
              ) : (
                <CiImageOff className={styles.imgPlaceholder} />
              )}
            </div>
          </div>

          <div className={styles.pageBody}>
            <h2>
              <MdLibraryMusic size={35} />
              Top Tracks
            </h2>

            <div className={styles.tracksContainer}>
              <TrackCard
                id="s"
                key="s"
                albumImgUrl="https://i.scdn.co/image/ab6761610000e5eb989ed05e1f0570cc4726c2d3"
                link="https://open.spotify.com/track/1mea3bSkSGXuIRvnydlB5b"
                previewUrl="https://p.scdn.co/mp3-preview/fb9f4a9b0887326776b4fb7c6d331acd167a7778?cid=b7c735da46a64a0ab8c4789f307d8d9f"
                name="Viva La Vida"
              />
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default ViewArtist
