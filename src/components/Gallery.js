import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import booklist from "../ast/ast.js";

function Gallery() {
  return (
    <Row xs={1} md={4} className="g-4">
      {booklist.map((item, idx) => (
        <a href="/book" key={idx}>
          <Col>
            <Card>
              <Card.Img variant="top" src={require("./cover.png")} />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>{item.desc}</Card.Text>
                <h6>Author:</h6>
                <Card.Text>{item.author}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </a>
      ))}
    </Row>
  );
}

export default Gallery;
