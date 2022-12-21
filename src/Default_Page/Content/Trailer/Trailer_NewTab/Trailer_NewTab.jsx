import {Row, Col, Typography, Button, Dropdown, Menu} from "antd"
import { PlusOutlined, SearchOutlined } from "@ant-design/icons"
import { Context } from "../../../../Context"
import { useContext } from "react"
const {Title} = Typography
export const Trailer_NewTab = () => {
    const new_trailer ={
        items: [
            {
                label: "leo"
            }
        ]
    }
    const {trailer,setTrailer} = useContext(Context)
    const handleClick = () => {
        setTrailer({
            display: !trailer.display
        })
    }
    return(
        <Row justify={"space-between"} align="middle" style={{minHeight: "10vh"}}>
        <Col style={{width: "35%",}}>
            <Row justify={"space-between"} align="middle" style={{width: "100%"}}>
                <Col>
                    <Title level={3} style={{fontSize: "30px", color:"#484D8C"}}>
                    Trailers
                    </Title>
                </Col>
                <Col>
                    <Button style={{color: "var(--kuk)", margin: "0rem 1rem", border:" 1px solid var(--kuk)"}}><PlusOutlined/> Add Filters</Button>
                    <Button style={{margin: "0rem 1rem", color: "var(--kuk)",border:" 1px solid var(--kuk)"}}><SearchOutlined/> Search</Button>
                </Col>
            </Row>
        </Col>
        <Col>
           <Dropdown.Button menu={new_trailer} onClick={handleClick}  type="primary">New trailer</Dropdown.Button>
        </Col>           
    </Row>   
    )
}