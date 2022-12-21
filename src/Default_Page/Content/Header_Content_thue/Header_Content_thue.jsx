import { Row , Col, Typography, Button, Layout} from "antd"
import { Container } from "../../../Container"
const {Title} = Typography
export const Header_Content_thue = () => {
    return(
        <div style={{background: "#fff", padding: "1rem"}}>
        <Row justify={"space-around"}  style={{width: "30%",padding: "0rem 1rem", background: "#fff"}}>
            <Col>
                <Button type="primary">Open Sourse</Button>
            </Col>
            <Col>
                <Button type="light" style={{border: "1px solid grey",color: "grey", fontWeight: "500", fontSize: "16px"}}>Delivered/Completed Loads</Button>
            </Col>
        </Row>
        </div>
    )
}