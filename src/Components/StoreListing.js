
import { Container, Row, Col, Image } from "react-bootstrap"

export default function StoreListings () {
    return(
        <div>
            <h2>Browse stores in Houston</h2>
<Container style={{ marginTop: "40px", textAlign: "center" }}>
    <Row style={{ borderBottom: "1px solid #E8E9EB", display: "flex", justifyContent: "space-evenly"}} >
        <Row>
            <Col xs=".5" >
                <Image src="https://www.instacart.com/image-server/60x60/www.instacart.com/assets/domains/warehouse/logo/133/797e4d4c-4e74-4c2a-bde3-b525e71c4302.png" roundedCircle />
            </Col>
            <Col>
                <h5 style={{ fontWeight: "bold" }}>Food Lion</h5>
                <p>Delivery * Pickup</p>
            </Col>
        </Row>
        <Col sm="1"></Col>
        <Row >
            <Col xs=".5">
                <Image src="https://www.instacart.com/image-server/60x60/filters:fill(FFF,true):format(webp)/www.instacart.com/assets/domains/warehouse/logo/57/e5d4cdef-6615-4832-a8e2-9e1526b6783c.png" roundedCircle />
            </Col>
            <Col>
                <h5 style={{ fontWeight: "bold" }}>Publix</h5>
                <p>Delivery * Pickup</p>
            </Col>
        </Row>
        <Col sm="1"></Col>
        <Row >
            <Col xs=".5" >
                <Image src="https://www.instacart.com/image-server/60x60/filters:fill(FFF,true):format(webp)/www.instacart.com/assets/domains/warehouse/logo/246/62c95c4e-90b1-4e94-b3e3-49ec806ee5ad.png" roundedCircle />
            </Col>
            <Col >
                <h5 style={{ fontWeight: "bold" }}>Lowe's Foods</h5>
                <p>Delivery</p>
            </Col>
        </Row>
    </Row>
</Container>
        </div>
    )
}
