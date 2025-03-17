import React, { useState } from "react";
import { Form, Button, Container, Alert, Spinner, Row, Col } from "react-bootstrap";
import axios from "axios";
import "./Contact.css"; // Importing external CSS

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time:"",
    message: "",
  });

  const [status, setStatus] = useState({ message: "", type: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ message: "Submitting...", type: "info" });

    if (formData.phone.length < 10) {
      setStatus({ message: "Please enter a valid phone number!", type: "danger" });
      setLoading(false);
      return;
    }

    if (!formData.date) {
      setStatus({ message: "Please select a valid date!", type: "danger" });
      setLoading(false);
      return;
    }

    if (formData.message.length < 10) {
      setStatus({ message: "Message should be at least 10 characters!", type: "danger" });
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post(`https://restaurant-api-lac.vercel.app/api/contact`, formData);
      setStatus({ message: response.data.message || "Form submitted successfully!", type: "success" });
      setFormData({ name: "", email: "", phone: "", date: "",time:"", message: "" });
    } catch (error) {
      setStatus({ message: "Error submitting form. Please try again later.", type: "danger" });
    }

    setLoading(false);
  };

  // Get today's date in YYYY-MM-DD format
  const today = new Date().toISOString().split("T")[0];

  return (
    <Container fluid className="contact-container">
      <Row className="contact-row">
        {/* Left side - Thought */}
        <Col md={6} className="thought-box">
          <div className="thought-content">
            <h2>“A Recipe Has No Soul.”</h2>
            <p>
              But a great chef brings it to life. At our restaurant, we craft dishes with passion
              and love to give you an unforgettable dining experience.
            </p>
          </div>
        </Col>

        {/* Right side - Form */}
        <Col md={6} className="form-box">
          <div className="form-content">
            <h2>Make A Reservation</h2>

            {status.message && <Alert variant={status.type}>{status.message}</Alert>}

            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" name="name" placeholder="Enter your name" value={formData.name} onChange={handleChange} required />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" name="email" placeholder="Enter your email" value={formData.email} onChange={handleChange} required />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Phone No</Form.Label>
                <Form.Control type="number" name="phone" placeholder="Enter your phone number" value={formData.phone} onChange={handleChange} required />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Reservation Date</Form.Label>
                <Form.Control type="date" name="date" value={formData.date} onChange={handleChange} min={today} required />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Time</Form.Label>
                <Form.Control type="time" name="time" value={formData.time} onChange={handleChange} required />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" name="message" rows={3} placeholder="Enter your message" value={formData.message} onChange={handleChange} required />
              </Form.Group>

              <Button variant="info" type="submit" className="submit-btn" disabled={loading}>
                {loading ? <Spinner as="span" animation="border" size="sm" /> : "Submit"}
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
