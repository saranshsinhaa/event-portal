// components/EventCard.js
import Link from "next/link";
import Image from "next/image";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  ButtonGroup,
  Button,
} from "@chakra-ui/react";

const EventCard = ({ event }) => {
  const { id, name, date, location } = event;

  return (
    <div className="border rounded p-4 cursor-pointer">
      {/* <h3>{name}</h3>
      <p>Date: {date}</p>
      <p>Location: {location}</p> */}
      <Card maxW="sm">
        <CardBody>
          <img
            src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            alt="Green double couch with wooden legs"
            borderRadius="lg"
          />
          {/* <Stack mt="6" spacing="3"> */}
          <h3>{name}</h3>
          <p>Date: {date}</p>
          <p>Location: {location}</p>

          {/* </Stack> */}
        </CardBody>
        <Divider />{" "}
        <div className="flex justify-center items-center">
          <CardFooter>
            <Link
              href={`/events/${encodeURIComponent(event.name)}`}
              key={event.id}
            >
              <Button variant="solid" colorScheme="blue">
                View Details
              </Button>
            </Link>
          </CardFooter>{" "}
        </div>
      </Card>
    </div>
  );
};

export default EventCard;
