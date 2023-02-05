import logo from '../../images/logo.avif';
import './CatalogueEdit.css';
import {Link, useParams, useNavigate} from "react-router-dom";

import { useEffect, useState } from "react";
import {Button, ButtonGroup, Container, Form, FormGroup, Table, Label, Input} from "reactstrap";


function CatalogueEdit() {
  const initialCatalogueForm ={
    title: '',
    description: '',
    photo: ''
  }


  const { catalogueId } = useParams();
  // int varia =42;
  console.log(catalogueId);

  const [catalogue, setCatalogue ] = useState(initialCatalogueForm);


  // useEffect(() =>{
  //   fetch('catalogues/${catalogueId}')
  //       .then(response => response.json())
  //       .then(data => setCatalogue(data))
  // }, [catalogueId,setCatalogue]);


  const handleChange =  (event) => {
    const { name, value } = event.target

    setCatalogue({...catalogue, [name]:value})
  }

  const navigate = useNavigate();

  // TODO
  const handleSubmit = async (event) => {
    event.preventDefault();

    await fetch(`/catalogues/${catalogueId}`, {
      method : 'PUT',
      headers:{
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({...catalogue, id:catalogueId})
    }). then(() =>{
      setCatalogue(initialCatalogueForm);
      navigate('/catalogues');
        }
    )
  }


    return (
    <div className="App">
      <Container fluid>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label for="title">title</Label>
          <Input type="text" name="title" id="title" value={catalogue.title || ''}
          onChange={handleChange}/>
        </FormGroup>
        <FormGroup>
          <Button color="primary" type="submit"> Save</Button>
          <Button color="secondary" tag={Link} to="/catalogues"> cancel</Button>
        </FormGroup>
      </Form>
      </Container>
    </div>








  );
}

export default CatalogueEdit;
