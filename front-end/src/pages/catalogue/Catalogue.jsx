import logo from '../../images/logo.avif';
import './Catalogue.css';
import {useParams} from "react-router-dom";

import { useEffect, useState } from "react";
import {Button, ButtonGroup, Container, Table} from "reactstrap";
import { Link } from 'react-router-dom';


function Catalogue() {
  const { catalogueId } = useParams();
  // int varia =42;
  console.log(catalogueId);

  const [catalogues, setCatalogues ] = useState([]);


  useEffect(() =>{

    fetch('catalogues')
        .then(response => response.json())
        .then(data => setCatalogues(data))
  }, []);



  const remove = async (id) => {
    await fetch(`catalogues/${id}`, {
      method : 'DELETE',
      headers:{
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }). then(() =>{
      let updatedCatalogue = [...catalogues].filter(item => item.id !== id);
      setCatalogues(updatedCatalogue);
        }
    )
  }

  const catalogueList =catalogues.map((catalogue,index) => {
      return (
          <tr>
            <td>{`${catalogue.id}`}</td>
            <td>{`${catalogue.title}`}</td>
            <td>{`${catalogue.description}`}</td>
            <td>{`${catalogue.photo}`}</td>
            <td>
              <ButtonGroup>
                <Button color="primary" tag={Link} to={"/catalogues/" + catalogue.id}>Edit</Button>
                <Button color="danger" onClick={() => remove(catalogue.id)}>Remove</Button>
              </ButtonGroup>
            </td>
          </tr>)
});

    return (
    <div className="App">
      <Container fluid>
        <div className="float-end">
          <button color="success">Add Catalogue</button>
        </div>
        <Table>
          <thead>
          <tr>
            <th>id</th>
            <th>title</th>
            <th>description</th>
            <th>phot</th>
            <th>Actions</th>
          </tr>
          </thead>
          <tbody>
          {catalogueList}
          </tbody>
        </Table>
      </Container>
    </div>
  );
}

export default Catalogue;
