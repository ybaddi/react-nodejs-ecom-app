import logo from '../../images/logo.avif';
import './Catalogue.css';
import HeaderCatalogueMenu from "../../components/HeaderCatalogueMenu";
import {useParams} from "react-router-dom";
import CatalogueCard from "../../components/CatalogueCard";


function Catalogue() {
  const { catalogueId } = useParams();
  // int varia =42;
  console.log(catalogueId);

  // TODO get this liste from server
  const catalogues =[
    {
      title:'catalogue 1 ',
      description: 'description 1',
      photo: {logo},
      lien: 'catalogue/1'
    },
    {
      title:'catalogue 2',
      description: 'description 2',
      photo: {logo},
      lien: 'catalogue/2'
    },
    {
      title:'catalogue 3 ',
      description: 'description 3',
      photo: {logo},
      lien: 'catalogue/3'
    }
  ]



  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        Catalogue {catalogueId}

        {
          catalogues.map((catalogue,index) => (
           <CatalogueCard
               key={`${catalogue.title}-${catalogue.index}`}
               descption={`${catalogue.description}`}
          title={`${catalogue.title}`}
          photo={logo}
          lien={`${catalogue.lien}`}
          />
          ))
        }

      </header>
    </div>
  );
}

export default Catalogue;
