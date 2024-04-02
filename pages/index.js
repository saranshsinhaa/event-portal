// pages/index.js
import { useState, useEffect } from "react";
import Layout from "../components/Layout";
import EventCard from "../components/EventCard";
import Link from "next/link";

const Home = ({ events }) => {
  const [activeEvents, setActiveEvents] = useState([]);
  const [pastEvents, setPastEvents] = useState([]);

  useEffect(() => {
    console.log("Fetched events:", events);
    const now = new Date();

    if (Array.isArray(events)) {
      const active = events.filter((event) => new Date(event.date) > now);
      const past = events.filter((event) => new Date(event.date) <= now);
      setActiveEvents(active);
      setPastEvents(past);
    }
  }, [events]);

  return (
    <Layout>
      <div>
        <h2>Active Events</h2>
        <div className="grid grid-cols-3 gap-4">
          {activeEvents.map((event) => (
            <Link
              href={`/events/${encodeURIComponent(event.name)}`}
              key={event.id}
            >
              <EventCard event={event} />
            </Link>
          ))}
        </div>
      </div>
      <div>
        <h2>Past Events</h2>
        <div className="grid grid-cols-3 gap-4">
          {pastEvents.map((event) => (
            <Link
              href={`/events/${encodeURIComponent(event.name)}`}
              key={event.id}
            >
              <EventCard event={event} />
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export async function getServerSideProps() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/events`);
    if (!res.ok) {
      throw new Error("Failed to fetch events");
    }
    const events = await res.json();

    return {
      props: { events },
    };
  } catch (error) {
    console.error("Error fetching events:", error);
    return {
      props: { events: [] },
    };
  }
}

export default Home;
