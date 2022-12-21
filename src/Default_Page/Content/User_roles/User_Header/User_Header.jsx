import {Row, Col, Typography} from "antd";
const {Text} = Typography
export const User_Header = () => {
    return(
        <Row style={{borderRadius: "10px",border: "1px solid var(--oq)", padding: "1rem"}}>
            <Col style={{width: "40%",display: "flex", justifyContent: "space-between"}}>
                <Text style={{color: "#687791"}}>New user</Text>
                <Text style={{color: "#687791"}}>Username</Text>
                <Text style={{color: "#687791"}}>Role</Text>
            </Col>
        </Row>
    )
}