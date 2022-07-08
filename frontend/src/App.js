import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, FormGroup, Input, Row, Col, Card, CardBody, CardTitle } from 'reactstrap';
import axios from 'axios';

var data = {};

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

function ChatFormNombre() {

  const [chatList, setChatList] = useState([]);
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

  const onAddNombre = (event) => {
    if(datos.nombre === '' || datos.apellidoPaterno === '' || datos.apellidoMaterno === ''){
      alert('Llena todos los campos del formulario');
      return;
    }

    setChatList(
      prevState => ([...prevState,<ChatText key={"chatNombre"} text={datos.nombre+" "+datos.segundoNombre+" "+datos.apellidoPaterno+" "+datos.apellidoMaterno} />])
    );
    setChatList(
      prevState => ([...prevState,<ChatFormFecha key={"chatFormFecha"} setChatList={setChatList} />])
    );

    data.nombre = datos.nombre;
    data.segundoNombre = datos.segundoNombre;
    data.apellidoPaterno = datos.apellidoPaterno;
    data.apellidoMaterno = datos.apellidoMaterno;

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

function ChatFormFecha({setChatList}){

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

  const onAddFecha = (event) => {
    if(fecha.dia === '' || fecha.mes === '' || fecha.anio === ''){
      alert('Llena todos los campos del formulario');
      return;
    }

    if(isNaN(fecha.dia) || isNaN(fecha.mes) || isNaN(fecha.anio)){
      alert('Las fechas solo pueden ser numeros');
      return;
    }

    setChatList(
      prevState => ([...prevState,<ChatText key={"chatFecha"} text={fecha.dia+"/"+fecha.mes+"/"+fecha.anio} />])
    );
    setChatList(
      prevState => ([...prevState,<ChatFormDatos key={"chatFormContacto"} setChatList={setChatList} />])
    );

    data.dia = fecha.dia;
    data.mes = fecha.mes;
    data.anio = fecha.anio;

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

function ChatFormDatos({setChatList}){

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

  const onAddContacto = (event) => {
    if(contacto.email === '' || contacto.telefono === ''){
      alert('Llena todos los campos del formulario');
      return;
    }

    setChatList(
      prevState => ([...prevState,<ChatText key={"chatContactoText"} text={["Correo: "+contacto.email, <br></br>, "Telefono: "+contacto.telefono]} />])
    );

    setChatList(
      prevState => ([...prevState,<ChatBtnIniciar key={"chatBtnIniciar"} setChatList={setChatList}/>])
    );
    
    data.email = contacto.email;
    data.telefono = contacto.telefono;

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

function ChatBtnIniciar({setChatList}){

  const [btnChatForm, setBtnChatForm] = useState(false);
  const [cardTitle, setCardTitle] = useState('¿Deseas guardar tus datos?');

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
        prevState => ([
          ...prevState,
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
        ])
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

function App() {
  return (
    <div className="App">
      <header className="App-header" style={{marginTop:'20px'}}>
      </header>
      <ChatFormNombre/>
    </div>
  );
}

export default App;
