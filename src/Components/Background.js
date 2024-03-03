import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'

export default function Background() {
    return (
        <div style={{ 
            minHeight: "300px", 
            width: "100vw", 
            backgroundImage: "url(https://www.instacart.com/image-server/x428/www.instacart.com/assets/homepage/homepage_background_full_m3_cropped-8d2d286263821da7decd7c61fb1db1eb0e3dec13e0c356277d6d3cb7484c024a.jpg)", 
            backgroundRepeat: "no-repeat", 
            backgroundPosition: "center right",
            backgroundColor: "#DEEDD6", 
            display: "flex", 
            flexDirection: "row", 
            justifyContent: "center", 
            alignItems: "center", 
            position: "relative"}}>
                {/* order matters with css styles */}
            <div>
                <Card style={{ width: "70%", height: "100%", marginBottom: "50px", backgroundColor: "#DEEDD6"}} className="text-black">
                    <div style={{ justifyContent: "center", alignItmes: "center"}}>
                        <Card.Text style={{ fontSize: "2.0em", fontWeight: "bold" }}>
                            Order groceries for delivery <br /> or pickup today
                        </Card.Text>
                        <Card.Text >
                            Whatever you want from local stores, brought right to your door.
                        </Card.Text>
                        <Form>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Control size="lg" type="text" placeholder="   Enter your address                                         ->" />
                            </Form.Group>
                        </Form>
                    </div>
                   
                </Card>
              
            </div>
            </div>
    )
}