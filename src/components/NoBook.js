import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

// no books?

function NoBook() {
  return (
    <Card className="nobooks">
      <Card.Body>
        <Card.Text>Your library is empty!</Card.Text>
        <Button variant="primary">Add a book</Button>
      </Card.Body>
    </Card>
  );
}
export default NoBook;
