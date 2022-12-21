import {Row, Col, Typography } from "antd"
import { Container_Dashboard } from "../../../../Container_dashboard"
const {Title} = Typography
export const User_title = () => {
    return(
            <Row>
            <Col style={{padding: "1rem 0rem"}}>
                <Title level={3} style={{color: "var(--kuk)", fontSize: "25px"}}>User roles</Title>
            </Col>
            </Row>
        
    )
}