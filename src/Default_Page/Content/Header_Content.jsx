import "./Content.css"
import { PlusOutlined, SearchOutlined } from "@ant-design/icons"
import {Row, Col, Typography, Button, Layout, Dropdown} from "antd"
import { Context } from "../../Context"
import { useContext } from "react"
const {Header} = Layout
const {Title} = Typography
export const Header_Content = () => {
    const {block, setBlock} = useContext(Context)
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
            setBlock(!block)
      }
      return(
        <div>
           <Header style={{background: "white", display: "flex", alignItems: "center", justifyContent: "space-between"}} >
                        <Row align={"middle"} justify={"space-between"} style={{width: "50%"}}>
                            <Col className="title_col">
                                <Title level={3} style={{paddingTop:"1rem", color: "#484D8C"}}>
                                   Available Loads
                                </Title>                            
                            </Col>
                            <Col className="col_btn">
                            <Button type="light" prefix={<PlusOutlined/>} style={{border: "1px solid blue"}}><PlusOutlined/> Add Filters</Button>
                                <Button type="light" style={{border: "1px solid blue"}}> <SearchOutlined/> Serach</Button>
                            </Col>
                            
                        </Row>
                        <Row justify={"space-between"} >
                            <Col style={{display: "flex", alignItems: "center" }}>
                            <Dropdown.Button style={{margin: "1rem"}} menu={{ items, onClick: onMenuClick }}>Actions</Dropdown.Button>
                            <Dropdown.Button onClick={handleClick} menu={{items}} type="primary">New Active Load</Dropdown.Button>
                            </Col>
                        </Row>
                   </Header> 
        </div>
    )
}