import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, FormGroup, Input, Row, Col, Card, CardBody, CardTitle } from 'reactstrap';
import { useSelector, useDispatch } from "react-redux";
import ChatText from './ChatText';
import ChatFormDatos from './ChatFormDatos';

function ChatFormFecha(){
    const dispatch = useDispatch();
    const chatList = useSelector((state) => state.chatListReducer.chatList);
    const data = useSelector((state) => state.dataReducer);
    console.log(chatList)
    console.log(data)

    const [btnChatForm, setBtnChatForm] = useState(false);
    const [fecha, setFecha] = useState({
      dia: '',
      mes: '',
      anio: '',
    });
  
    const handleInputChange = (event) => {
      //console.log(event.target.name)
      //console.log(event.target.value)
      setFecha({
        ...fecha,
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

    const onAddFecha = (event) => {
      if(fecha.dia === '' || fecha.mes === '' || fecha.anio === ''){
        alert('Llena todos los campos del formulario');
        return;
      }
  
      if(isNaN(fecha.dia) || isNaN(fecha.mes) || isNaN(fecha.anio)){
        alert('Las fechas solo pueden ser numeros');
        return;
      }
  

      setChatList(<ChatText key={"chatFecha"} text={fecha.dia+"/"+fecha.mes+"/"+fecha.anio} />);
      setChatList(<ChatFormDatos key={"chatFormDatos"} />);
  
      setData(fecha);
  
      setBtnChatForm(true)
    };
  
    return (
      <Row style={{margin:'10px'}}>
        <Col md={{offset:4, size: 4}} xs="10">
          <Card style={{backgroundColor:'#c7c1c6'}}>
            <CardBody>
              <CardTitle>Fecha Nacimiento</CardTitle>
              <Form inline>
                <Row>
                  <Col>
                    <FormGroup>
                      <Input id="dia" name="dia" placeholder="Dia" onChange={handleInputChange} required disabled={btnChatForm}/>
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <FormGroup>
                      <Input id="mes" name="mes" placeholder="Mes" onChange={handleInputChange} required disabled={btnChatForm}/>
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <FormGroup>
                      <Input id="anio" name="anio" placeholder="Año" onChange={handleInputChange} required disabled={btnChatForm}/>
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col md={{offset: 3, size: 6}} sm="12" className="text-center">
                    <Button onClick={onAddFecha} className={'btn-lg btn-block'} style={{backgroundColor: "#c9129f"}} hidden={btnChatForm}>
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

  export default ChatFormFecha;