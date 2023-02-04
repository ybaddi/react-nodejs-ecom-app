import Nav from 'react-bootstrap/Nav';

function HeaderCatalogueMenu(){
    return (
        <Nav defaultActiveKey="/" as="ul">
            <Nav.Item as="li">
                <Nav.Link href="/catalogue/1">Catalogue 1</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
                <Nav.Link href="/catalogue/2">Catalogue 2</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
                <Nav.Link href="/catalogue/3">Catalogue 3</Nav.Link>
            </Nav.Item>
        </Nav>
    )
}

export default HeaderCatalogueMenu;
