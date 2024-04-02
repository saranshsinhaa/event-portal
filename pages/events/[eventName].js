// pages/events/[eventName].js
import Layout from "../../components/Layout";

const EventPage = ({ event }) => {
  // Render event details here
  return (
    <Layout>
      <div>
        <h1>{event.name}</h1>
        <p>Date: {event.date}</p>
        <p>Location: {event.location}</p>
        {/* Render other event details */}
      </div>
    </Layout>
  );
};

export async function getServerSideProps({ params }) {
  const eventName = decodeURIComponent(params.eventName);
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/events`);
    if (!res.ok) {
      throw new Error("Failed to fetch events");
    }
    const events = await res.json();
    const event = events.find((event) => event.name === eventName);
    return {
      props: { event },
    };
  } catch (error) {
    console.error("Error fetching event:", error);
    return {
      props: { event: null },
    };
  }
}

export default EventPage;
