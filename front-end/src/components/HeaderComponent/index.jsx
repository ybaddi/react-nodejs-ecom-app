import Nav from 'react-bootstrap/Nav';

function HeaderCatalogueMenu(){
    return (
        <Nav defaultActiveKey="/" as="ul">
            <Nav.Item as="li">
                <Nav.Link href="/">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
                <Nav.Link href="/catalogue">Catalogue</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
                <Nav.Link href="/contactus">Contactus</Nav.Link>
            </Nav.Item>
        </Nav>
    )
}

export default HeaderCatalogueMenu;
