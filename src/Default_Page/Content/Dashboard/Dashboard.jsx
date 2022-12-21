import "./Dashboard.css"
import { Col, Input, Row, Checkbox , Typography, Radio, List, Avatar, Button, Collapse, Menu} from "antd"
import { Container_Dashboard } from "../../../Container_dashboard"
import {CaretDownOutlined } from "@ant-design/icons"
import { Layout } from "../../Layout"
import {useState} from "react"

const {Text} = Typography
export const Dashboard = ({children}) => {
    const [checked, setChecked] = useState(!true)
    function handleChange(){
        setChecked(!checked)
        if(checked == true){
            alert("CheckBox not checked")
        }else{
            alert("Checkbox good checked")
        }
    }
    const menu_open = [
        {
            label: "Leo" ,
            children: [
                {
                    key: "child",
                    label: "Children open"
                }
            ]
        }
    ]
    return(
        <Layout>
            <Container_Dashboard>
                <Row style={{paddingTop: "1rem"}} justify="space-between">
                    <Col className="col_dashboard">
                        <Checkbox onChange={handleChange}></Checkbox>
                        <Text > Antd Design </Text>
                        <Text>Patel Hiteshkumar</Text>
                        <Text>2022-11-05</Text>
                        <Text>2022-11-05</Text>
                        <Text>Amazon</Text>
                        <Text>LIT1 / Little Rock, AR</Text>
                        <Text>LIT1 / Little Rock, AR</Text> 
                        <Avatar style={{background: "#FF1A1A"}}></Avatar>
                        <Avatar style={{background: "#FF1A1A"}}></Avatar>
                        <Menu mode="inline" style={{width:"13%", border: "1px solid var(--oq)", borderRadius: "10px"}} items={menu_open}></Menu>
                    </Col>
                    {children}
                    <Col className="col_dashboard">
                        <Checkbox onChange={handleChange}></Checkbox>
                        <Text > Antd Design </Text>
                        <Text>Patel Hiteshkumar</Text>
                        <Text>2022-11-05</Text>
                        <Text>2022-11-05</Text>
                        <Text>Amazon</Text>
                        <Text>LIT1 / Little Rock, AR</Text>
                        <Text>LIT1 / Little Rock, AR</Text> 
                        <Avatar style={{background: "green"}}></Avatar>
                        <Avatar style={{background: "#FF1A1A"}}></Avatar>
                        <Menu mode="inline" style={{width:"13%", border: "1px solid var(--oq)", borderRadius: "10px"}} items={menu_open}></Menu>
                    </Col>
                    <Col className="col_dashboard">
                        <Checkbox onChange={handleChange}></Checkbox>
                        <Text > Antd Design </Text>
                        <Text>Patel Hiteshkumar</Text>
                        <Text>2022-11-05</Text>
                        <Text>2022-11-05</Text>
                        <Text>Amazon</Text>
                        <Text>LIT1 / Little Rock, AR</Text>
                        <Text>LIT1 / Little Rock, AR</Text> 
                        <Avatar style={{background: "#FF1A1A"}}></Avatar>
                        <Avatar style={{background: "#FF1A1A"}}></Avatar>
                        <Menu mode="inline" style={{width:"13%", border: "1px solid var(--oq)", borderRadius: "10px"}} items={menu_open}></Menu>
                    </Col>
                    <Col className="col_dashboard">
                        <Checkbox onChange={handleChange}></Checkbox>
                        <Text > Antd Design </Text>
                        <Text>Patel Hiteshkumar</Text>
                        <Text>2022-11-05</Text>
                        <Text>2022-11-05</Text>
                        <Text>Amazon</Text>
                        <Text>LIT1 / Little Rock, AR</Text>
                        <Text>LIT1 / Little Rock, AR</Text> 
                        <Avatar style={{background: "#FF1A1A"}}></Avatar>
                        <Avatar style={{background: "#FF1A1A"}}></Avatar>
                        <Menu mode="inline" style={{width:"13%", border: "1px solid var(--oq)", borderRadius: "10px"}} items={menu_open}></Menu>
                    </Col>
                    <Col className="col_dashboard">
                        <Checkbox onChange={handleChange}></Checkbox>
                        <Text > Antd Design </Text>
                        <Text>Patel Hiteshkumar</Text>
                        <Text>2022-11-05</Text>
                        <Text>2022-11-05</Text>
                        <Text>Amazon</Text>
                        <Text>LIT1 / Little Rock, AR</Text>
                        <Text>LIT1 / Little Rock, AR</Text> 
                        <Avatar style={{background: "#FF1A1A"}}></Avatar>
                        <Avatar style={{background: "#FF1A1A"}}></Avatar>
                        <Menu mode="inline" style={{width:"13%", border: "1px solid var(--oq)", borderRadius: "10px"}} items={menu_open}></Menu>
                    </Col>
                    <Col className="col_dashboard">
                        <Checkbox onChange={handleChange}></Checkbox>
                        <Text > Antd Design </Text>
                        <Text>Patel Hiteshkumar</Text>
                        <Text>2022-11-05</Text>
                        <Text>2022-11-05</Text>
                        <Text>Amazon</Text>
                        <Text>LIT1 / Little Rock, AR</Text>
                        <Text>LIT1 / Little Rock, AR</Text> 
                        <Avatar style={{background: "#FF1A1A"}}></Avatar>
                        <Avatar style={{background: "#FF1A1A"}}></Avatar>
                        <Menu mode="inline" style={{width:"13%", border: "1px solid var(--oq)", borderRadius: "10px"}} items={menu_open}></Menu>
                    </Col>
                    <Col className="col_dashboard">
                        <Checkbox onChange={handleChange}></Checkbox>
                        <Text > Antd Design </Text>
                        <Text>Patel Hiteshkumar</Text>
                        <Text>2022-11-05</Text>
                        <Text>2022-11-05</Text>
                        <Text>Amazon</Text>
                        <Text>LIT1 / Little Rock, AR</Text>
                        <Text>LIT1 / Little Rock, AR</Text> 
                        <Avatar style={{background: "#FF1A1A"}}></Avatar>
                        <Avatar style={{background: "#FF1A1A"}}></Avatar>
                        <Menu mode="inline" style={{width:"13%", border: "1px solid var(--oq)", borderRadius: "10px"}} items={menu_open}></Menu>
                    </Col>
                    <Col className="col_dashboard">
                        <Checkbox onChange={handleChange}></Checkbox>
                        <Text > Antd Design </Text>
                        <Text>Patel Hiteshkumar</Text>
                        <Text>2022-11-05</Text>
                        <Text>2022-11-05</Text>
                        <Text>Amazon</Text>
                        <Text>LIT1 / Little Rock, AR</Text>
                        <Text>LIT1 / Little Rock, AR</Text> 
                        <Avatar style={{background: "#FF1A1A"}}></Avatar>
                        <Avatar style={{background: "#FF1A1A"}}></Avatar>
                        <Menu mode="inline" style={{width:"13%", border: "1px solid var(--oq)", borderRadius: "10px"}} items={menu_open}></Menu>
                    </Col>
                    <Col className="col_dashboard">
                        <Checkbox onChange={handleChange}></Checkbox>
                        <Text > Antd Design </Text>
                        <Text>Patel Hiteshkumar</Text>
                        <Text>2022-11-05</Text>
                        <Text>2022-11-05</Text>
                        <Text>Amazon</Text>
                        <Text>LIT1 / Little Rock, AR</Text>
                        <Text>LIT1 / Little Rock, AR</Text> 
                        <Avatar style={{background: "#FF1A1A"}}></Avatar>
                        <Avatar style={{background: "#FF1A1A"}}></Avatar>
                        <Menu mode="inline" style={{width:"13%", border: "1px solid var(--oq)", borderRadius: "10px"}} items={menu_open}></Menu>
                    </Col>
                </Row>       
            </Container_Dashboard>
        </Layout>
    )
}