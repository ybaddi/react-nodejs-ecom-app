import Nav from 'react-bootstrap/Nav';
import {Card} from "react-bootstrap";

function HeaderCatalogueMenu({ title, descption,photo, lien }){
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={photo} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {descption}
                </Card.Text>
                <a href={lien} variant="primary">More information</a>
            </Card.Body>
        </Card>
    )
}

export default HeaderCatalogueMenu;
