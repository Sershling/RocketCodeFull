import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, FormGroup, Input, Row, Col, Card, CardBody, CardTitle } from 'reactstrap';
import { useSelector, useDispatch } from "react-redux";
import ChatText from './ChatText';
import ChatFormFecha from './ChatFormFecha';

function ChatFormNombre() {

    const dispatch = useDispatch();
    const chatList = useSelector((state) => state.chatListReducer.chatList);
    const data = useSelector((state) => state.dataReducer);
    console.log(chatList)
    console.log(data)

    const [btnChatForm, setBtnChatForm] = useState(false);
    const [datos, setDatos] = useState({
      nombre: '',
      segundoNombre: '',
      apellidoPaterno: '',
      apellidoMaterno: '',
    });
  
    const handleInputChange = (event) => {
      //console.log(event.target.name)
      //console.log(event.target.value)
      setDatos({
        ...datos,
        [event.target.name] : event.target.value
      })
    }

    const setChatList = (component) =>{
        dispatch({
            type: 'ADD_CHAT',
            payload: component
        });
    };

    const setData = (data) =>{
        dispatch({
            type: 'ADD_DATA',
            payload: data        
        });
        /*
        dispatch({
            type: 'UPDATE_NOMBRE',
            payload: data.nombre        
        });
        dispatch({
            type: 'UPDATE_SEGUNDO_NOMBRE',
            payload: data.segundoNombre        
        });
        dispatch({
            type: 'UPDATE_APELLIDO_PATERNO',
            payload: data.apellidoPaterno        
        });
        dispatch({
            type: 'UPDATE_APELLIDO_MATERNO',
            payload: data.apellidoMaterno        
        });
        */
    };

    const onAddNombre = (event) => {
      if(datos.nombre === '' || datos.apellidoPaterno === '' || datos.apellidoMaterno === ''){
        alert('Llena todos los campos del formulario');
        return;
      }
      setChatList(<ChatText key={"chatNombre"} text={datos.nombre+" "+datos.segundoNombre+" "+datos.apellidoPaterno+" "+ datos.apellidoMaterno} />);
      setChatList(<ChatFormFecha key={"chatFormFecha"} />);
  
      setData(datos);

      setBtnChatForm(true);
    };
  
    return (
      <div>
      <Row style={{margin:'10px'}}>
        <Col md={{offset:4, size: 4}} xs="10">
          <Card style={{backgroundColor:'#c7c1c6'}}>
            <CardBody>
              <CardTitle>Nombre</CardTitle>
              <Form inline>
                <Row>
                  <Col>
                    <FormGroup>
                      <Input id="nombre" name="nombre" placeholder="Nombre" onChange={handleInputChange} required disabled={btnChatForm}/>
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <FormGroup>
                      <Input id="segundoNombre" name="segundoNombre" placeholder="Segundo nombre" onChange={handleInputChange} required disabled={btnChatForm}/>
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <FormGroup>
                      <Input id="apellidoPaterno" name="apellidoPaterno" placeholder="Apellido paterno" onChange={handleInputChange} required disabled={btnChatForm}/>
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <FormGroup>
                      <Input id="apellidoMaterno" name="apellidoMaterno" placeholder="Apellido materno" onChange={handleInputChange} required disabled={btnChatForm}/>
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col md={{offset: 3, size: 6}} sm="12" className="text-center">
                    <Button onClick={onAddNombre} className={'btn-lg'} style={{backgroundColor: "#c9129f"}} hidden={btnChatForm}>
                      Enviar
                    </Button>
                  </Col>
                </Row>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
      {chatList}
      </div>
    );
}

export default ChatFormNombre;