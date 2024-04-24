import React from "react";
import Link from "next/link";
const Home = () => {
  return (
    <div>
      <section className="hero">
        <h1>Welcome to the Events Portal!</h1>
        <p>Discover amazing events near you.</p>
      </section>

      <section className="main">
        <h2>Explore More</h2>
        <p>Find exciting events happening in your area.</p>
        <Link href="/events">Explore More</Link>
      </section>
    </div>
  );
};

export default Home;
