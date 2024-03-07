import { useCallback, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Event(props) {
  const navigate = useNavigate();
  const [event, setEvent] = useState(props.event);
  const src =
    event.nbTickets === 0 ? " images/sold_out.png" : `images/${event.img}`;
  const msg = event.like ? "Dislike" : "Like";

  const handleLike = useCallback(() => {
    setEvent({ ...event, like: !event.like });
  }, [event.like]);

  const handleDelete = async () => {
    if (props.onDelete) {
      await props.onDelete();
    }
  };
  return (
    <Card>
      <Card.Img variant="top" src={src} height={250} />
      <Card.Body>
        <Card.Title>{event.name}</Card.Title>
        <Card.Text>Price : {event.price}</Card.Text>
        <Card.Text>Number of tickets : {event.nbTickets}</Card.Text>
        <Card.Text>Number of participants : {event.nbParticipants}</Card.Text>
        <div>
          <Button variant="primary" onClick={handleLike}>
            {msg}
          </Button>
          <Button
            variant="primary"
            onClick={() => props.Buy(event)}
            disabled={event.nbTickets == 0 ? true : false}
          >
            Book an event
          </Button>
        </div>
        <br></br>
        <Button
          variant="primary"
          className="btn btn-success"
          onClick={() => navigate("/events/update", { state: { event } })}
        >
          Update
        </Button>
        <Button
          variant="primary"
          className="btn btn-danger"
          onClick={handleDelete}
        >
          Delete
        </Button>
      </Card.Body>
    </Card>
  );
}

export default Event;
