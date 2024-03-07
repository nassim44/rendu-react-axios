import { useFormik } from "formik";
import { Button, Form } from "react-bootstrap";
import { add, update } from "../services/eventServices";
import { useLocation, useNavigate } from "react-router-dom";

function UpdateEvent() {
  const navigate = useNavigate();
  const location = useLocation();
  const event = location.state.event;
  const f = useFormik({
    initialValues: {
      name: event.name,
      description: event.description,
      price: event.price,
      nbTickets: event.nbTickets,
      img: event.img,
      nbParticipants: event.nbParticipants,
      like: event.like,
    },
    onSubmit: async (values) => {
      await update(event.id, values);
      navigate("/events");
    },
  });
  return (
    <>
      <h1>Modify {event.name}</h1>
      <Form onSubmit={f.handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={f.values.name}
            onChange={f.handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            type="text"
            name="description"
            value={f.values.description}
            onChange={f.handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Price</Form.Label>
          <Form.Control
            type="number"
            name="price"
            value={f.values.price}
            onChange={f.handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Number of Tickets</Form.Label>
          <Form.Control
            type="number"
            name="nbTickets"
            value={f.values.nbTickets}
            onChange={f.handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Image</Form.Label>
          <Form.Control
            type="text"
            name="img"
            value={f.values.img}
            onChange={f.handleChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Update
        </Button>
      </Form>
    </>
  );
}
export default UpdateEvent;
