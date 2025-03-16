import React from "react";
import { Card, Button } from "react-bootstrap";

const ArtistCard = ({ image, title, price, oldPrice }) => {
  return (
    <Card className="shadow-sm border-0">
      <Card.Img variant="top" src={image} alt={title} />
      <Card.Body className="text-center">
        <Card.Title>{title}</Card.Title>
        <div className="d-flex justify-content-center align-items-center">
          <span className="text-danger fw-bold me-2">${price}</span>
          <span className="text-muted text-decoration-line-through">${oldPrice}</span>
        </div>
        <Button variant="dark" className="mt-2 w-100">View Details</Button>
      </Card.Body>
    </Card>
  );
};

export default ArtistCard;
