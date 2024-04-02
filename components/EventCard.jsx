// components/EventCard.js
import Link from "next/link";

const EventCard = ({ event }) => {
  const { id, name, date, location } = event;

  return (
    <div className="border rounded p-4 cursor-pointer">
      <h3>{name}</h3>
      <p>Date: {date}</p>
      <p>Location: {location}</p>
    </div>
  );
};

export default EventCard;
