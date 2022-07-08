import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { Button, Row, Col, Card, CardBody, CardTitle } from 'reactstrap';
import { useSelector, useDispatch } from "react-redux";
import ChatText from './ChatText';

function ChatBtnIniciar(){

    const dispatch = useDispatch();
    const chatList = useSelector((state) => state.chatListReducer.chatList);
    const data = useSelector((state) => state.dataReducer);
    console.log(chatList)
    console.log(data)

    const [btnChatForm, setBtnChatForm] = useState(false);
    const [cardTitle, setCardTitle] = useState('¿Deseas guardar tus datos?');

    const setChatList = (component) =>{
        dispatch({
            type: 'ADD_CHAT',
            payload: component
        });
    };

    const onAddData = async(event) => {
      axios.post(`http://localhost:3001/user`, {
        'nombre': data.nombre,
        'segundo_nombre': data.segundoNombre,
        'apellido_paterno': data.apellidoPaterno,
        'apellido_materno': data.apellidoMaterno,
        'fecha_nacimiento': data.anio+'-'+data.mes+'-'+data.dia,
        'email': data.email,
        'telefono': data.telefono
      })
      .then(
        setChatList(
            <ChatText 
              key={"chatTextIniciar"} 
              text={
                [
                  "Nombre: "+data.nombre+" "+data.segundoNombre+" "+data.apellidoPaterno+" "+data.apellidoMaterno, 
                  <br></br>, 
                  "Fecha de nacimiento: "+data.dia+"/"+data.mes+"/"+data.anio,
                  <br></br>,
                  "Correo electronico: "+data.email,
                  <br></br>,
                  "Telefono celular: "+data.telefono
                ]
              } 
            />
        )
      )
      .then(setBtnChatForm(true))
      .then(setCardTitle('Datos guardados'))
    };
  
    return (
      <Row style={{margin:'10px'}}>
        <Col md={{offset:4, size: 4}} xs="10">
          <Card style={{backgroundColor:'#c7c1c6'}}>
            <CardBody>
              <CardTitle>{cardTitle}</CardTitle>
                <Row>
                  <Col md={{offset: 3, size: 6}} sm="12" className="text-center">
                    <Button onClick={onAddData} className={'btn-lg btn-block'} style={{backgroundColor: "#c9129f"}} hidden={btnChatForm}>
                      Iniciar
                    </Button>
                  </Col>
                </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>
    );
}

export default ChatBtnIniciar;