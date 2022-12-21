// import "./Content.css"
import { PlusOutlined, SearchOutlined } from "@ant-design/icons"
import {Row, Col, Typography, Button, Layout, Dropdown} from "antd"
import { Context } from "../../../Context"
import { useContext } from "react"
const {Header} = Layout
const {Title} = Typography
export const Drivers = () => {
    const {block_2, setBlock_2} = useContext(Context)
    const items = [ 
        {
            key: "Keys",
            label:  "Chilren"
        }
      ];
      const onMenuClick = () =>  {
        console.log('click');
      };
      function handleClick(){
            setBlock_2(!block_2)
      }
    return(
        <div>
        <Header style={{background: "white", display: "flex", alignItems: "center", justifyContent: "space-between"}} >
                     <Row align={"middle"} justify={"flex-start"} style={{width: "50%", alignItems:"center", paddingTop: "1rem"}}>
                         <Col className="title_col">
                             <Title level={3} style={{paddingTop:"1rem", color: "#484D8C"}}>
                                Drivers
                             </Title>                            
                         </Col>
                         <Col className="col_btn" style={{paddingTop: "0.5rem"}}>
                         <Button type="light" prefix={<PlusOutlined/>} style={{border: "1px solid blue"}}><PlusOutlined/> Add Filters</Button>
                             <Button type="light" style={{border: "1px solid blue"}}> <SearchOutlined/> Serach</Button>
                         </Col>
                         
                     </Row>
                     <Row justify={"space-between"} style={{paddingTop: "2rem"}} >
                         <Col style={{display: "flex", alignItems: "center" }}>
                         <Dropdown.Button onClick={handleClick} menu={{items}} type="primary">New Active Load</Dropdown.Button>
                         </Col>
                     </Row>
                </Header> 
     </div>
    )
}