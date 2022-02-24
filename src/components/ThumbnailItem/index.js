// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {imageDetails, updateImage, isActive} = props
  const {id, thumbnailUrl, thumbnailAltText} = imageDetails

  const onClickThumbnail = () => {
    updateImage(id)
  }

  const selectedThumbnailClass = isActive
    ? 'active-btn unselected-btn'
    : 'unselected-btn'

  return (
    <li className="list-item">
      <button
        type="button"
        className="thumbnail-btn"
        onClick={onClickThumbnail}
      >
        <img
          alt={thumbnailAltText}
          className={selectedThumbnailClass}
          src={thumbnailUrl}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
