import { Row, Col, Card, CardBody } from 'reactstrap';

function ChatText(props){
    //console.log(props)
    return (
      <Row id={props.id} style={{margin:'10px'}}>
        <Col md={{offset:5, size: 4}} xs={{offset:2, size: 10}}>
          <Card style={{backgroundColor:'#ed93ec'}}>
            <CardBody>
                <Row>
                  <Col>
                    <span>{props.text}</span>
                  </Col>
                </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>
    );
  }
export default ChatText;