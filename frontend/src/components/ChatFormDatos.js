import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, FormGroup, Input, Row, Col, Card, CardBody, CardTitle } from 'reactstrap';
import { useSelector, useDispatch } from "react-redux";
import ChatText from './ChatText';
import ChatBtnIniciar from './ChatBtnIniciar';

function ChatFormDatos(){

    const dispatch = useDispatch();
    const chatList = useSelector((state) => state.chatListReducer.chatList);
    const data = useSelector((state) => state.dataReducer);
    console.log(chatList)
    console.log(data)

    const [btnChatForm, setBtnChatForm] = useState(false);
    const [contacto, setContacto] = useState({
      email: '',
      telefono: ''
    });
    
    const handleInputChange = (event) => {
      //console.log(event.target.name)
      //console.log(event.target.value)
      setContacto({
        ...contacto,
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
    }

    const onAddContacto = (event) => {
      if(contacto.email === '' || contacto.telefono === ''){
        alert('Llena todos los campos del formulario');
        return;
      }
  
      setChatList(<ChatText key={"chatDatos"} text={["Correo: "+contacto.email, <br></br>, "Telefono: "+contacto.telefono]} />);
      setChatList(<ChatBtnIniciar key={"chatBtnIniciar"} />);
  
      setData(contacto);
  
      setBtnChatForm(true);
    };
  
    return (
      <Row style={{margin:'10px'}}>
        <Col md={{offset:4, size: 4}} xs="10">
          <Card style={{backgroundColor:'#c7c1c6'}}>
            <CardBody>
              <CardTitle>Datos de contacto</CardTitle>
              <Form inline>
                <Row>
                  <Col>
                    <FormGroup>
                      <Input id="email" name="email" placeholder="Correo electronico" onChange={handleInputChange} required disabled={btnChatForm}/>
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <FormGroup>
                      <Input id="telefono" name="telefono" placeholder="Telefono Celular" onChange={handleInputChange} required disabled={btnChatForm}/>
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col md={{offset: 3, size: 6}} sm="12" className="text-center">
                    <Button onClick={onAddContacto} className={'btn-lg btn-block'} style={{backgroundColor: "#c9129f"}} hidden={btnChatForm}>
                      Enviar
                    </Button>
                  </Col>
                </Row>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    );
}

export default ChatFormDatos;