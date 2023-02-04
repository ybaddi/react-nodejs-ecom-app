import logo from '../../images/logo.avif';
import './Catalogue.css';
import HeaderCatalogueMenu from "../../components/HeaderCatalogueMenu";
import {useParams} from "react-router-dom";

function Catalogue() {
  const { catalogueId } = useParams()
  console.log(catalogueId);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        Catalogue {catalogueId}
          <HeaderCatalogueMenu />
      </header>
    </div>
  );
}

export default Catalogue;
