import './index.css'

const EventItem = props => {
  const {Details, setActiveEventId, isActive} = props
  const {imageUrl, name, location, id} = Details
  const onselect = () => {
    setActiveEventId(id)
  }
  const eventImageClassName = isActive ? 'event-image active' : 'event-image'
  return (
    <li className="event-container">
      <button type="button" className="button" onClick={onselect}>
        <img src={imageUrl} alt="event" className={eventImageClassName} />
      </button>
      <p className="head">{name}</p>
      <p className="para">{location}</p>
    </li>
  )
}

export default EventItem
