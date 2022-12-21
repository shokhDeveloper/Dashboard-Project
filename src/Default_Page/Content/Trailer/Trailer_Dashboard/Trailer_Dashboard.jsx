import {Row, Col, Typography, Checkbox, Menu, Button} from "antd"
import {EditOutlined, DeleteOutlined} from "@ant-design/icons"
const {Text} = Typography
export const Trailer_Dashboard = ({children}) => {
    const empty = [
        {
            label: <Text style={{color: "#fff",fontSize: "17px"}}>Empty</Text>,
            children: [
                {
                    label: "C 17:00"
                }
            ]
        }
    ]
    return(
        <>
        <Row>
            {children}
                <Col style={{width: "100%", display: "flex", justifyContent: "space-evenly", alignItems: "center", borderRadius: "10px", border: "1px solid var(--oq)", marginTop: "0.6rem"}}>
                    <Checkbox checked></Checkbox>
                    <Text>Crane Truck</Text>
                    <Text>DF2141241GF</Text>
                    <Text>01.09.2002</Text>
                    <Text>01.09.2002</Text>
                    <Menu items={empty} mode="inline" style={{border: "1px solid transparent",width: "15%", background: "#13CA5C", borderRadius: "20px", color: "#fff"}}></Menu>
                    <Row>
                        <Col>
                        <Button style={{border: "1px solid transparent"}}><EditOutlined style={{fontSize: "25px", color: "#3461FF"}}/></Button>
                        <Button style={{border: "1px solid transparent"}}><DeleteOutlined style={{fontSize: "25px",color: "#FF1A1A"}}/></Button>    
                        </Col>
                    </Row>
                </Col>
                <Col style={{width: "100%", display: "flex", justifyContent: "space-evenly", alignItems: "center", borderRadius: "10px", border: "1px solid var(--oq)", marginTop: "0.6rem"}}>
                    <Checkbox checked></Checkbox>
                    <Text>Crane Truck</Text>
                    <Text>DF2141241GF</Text>
                    <Text>01.09.2002</Text>
                    <Text>01.09.2002</Text>
                    <Menu items={empty} mode="inline" style={{border: "1px solid transparent",width: "15%", background: "#FF1A1A", borderRadius: "20px", color: "#fff"}}></Menu>
                    <Row>
                        <Col>
                        <Button style={{border: "1px solid transparent"}}><EditOutlined style={{fontSize: "25px", color: "#3461FF"}}/></Button>
                        <Button style={{border: "1px solid transparent"}}><DeleteOutlined style={{fontSize: "25px",color: "#FF1A1A"}}/></Button>    
                        </Col>
                    </Row>
                </Col>
                
                <Col style={{width: "100%", display: "flex", justifyContent: "space-evenly", alignItems: "center", borderRadius: "10px", border: "1px solid var(--oq)", marginTop: "0.6rem"}}>
                    <Checkbox checked></Checkbox>
                    <Text>Crane Truck</Text>
                    <Text>DF2141241GF</Text>
                    <Text>01.09.2002</Text>
                    <Text>01.09.2002</Text>
                    <Menu items={empty} mode="inline" style={{border: "1px solid transparent",width: "15%", background: "#E2E719", borderRadius: "20px", color: "#fff"}}></Menu>
                    <Row>
                        <Col>
                        <Button style={{border: "1px solid transparent"}}><EditOutlined style={{fontSize: "25px", color: "#3461FF"}}/></Button>
                        <Button style={{border: "1px solid transparent"}}><DeleteOutlined style={{fontSize: "25px",color: "#FF1A1A"}}/></Button>    
                        </Col>
                    </Row>
                </Col>
                <Col style={{width: "100%", display: "flex", justifyContent: "space-evenly", alignItems: "center", borderRadius: "10px", border: "1px solid var(--oq)", marginTop: "0.6rem"}}>
                    <Checkbox checked></Checkbox>
                    <Text>Crane Truck</Text>
                    <Text>DF2141241GF</Text>
                    <Text>01.09.2002</Text>
                    <Text>01.09.2002</Text>
                    <Menu items={empty} mode="inline" style={{border: "1px solid transparent",width: "15%", background: "#E2E719", borderRadius: "20px", color: "#fff"}}></Menu>
                    <Row>
                        <Col>
                        <Button style={{border: "1px solid transparent"}}><EditOutlined style={{fontSize: "25px", color: "#3461FF"}}/></Button>
                        <Button style={{border: "1px solid transparent"}}><DeleteOutlined style={{fontSize: "25px",color: "#FF1A1A"}}/></Button>    
                        </Col>
                    </Row>
                </Col>
                <Col style={{width: "100%", display: "flex", justifyContent: "space-evenly", alignItems: "center", borderRadius: "10px", border: "1px solid var(--oq)", marginTop: "0.6rem"}}>
                    <Checkbox checked></Checkbox>
                    <Text>Crane Truck</Text>
                    <Text>DF2141241GF</Text>
                    <Text>01.09.2002</Text>
                    <Text>01.09.2002</Text>
                    <Menu items={empty} mode="inline" style={{border: "1px solid transparent",width: "15%", background: "#698AFF", borderRadius: "20px", color: "#fff"}}></Menu>
                    <Row>
                        <Col>
                        <Button style={{border: "1px solid transparent"}}><EditOutlined style={{fontSize: "25px", color: "#3461FF"}}/></Button>
                        <Button style={{border: "1px solid transparent"}}><DeleteOutlined style={{fontSize: "25px",color: "#FF1A1A"}}/></Button>    
                        </Col>
                    </Row>
                </Col>
                <Col style={{width: "100%", display: "flex", justifyContent: "space-evenly", alignItems: "center", borderRadius: "10px", border: "1px solid var(--oq)", marginTop: "0.6rem"}}>
                    <Checkbox checked></Checkbox>
                    <Text>Crane Truck</Text>
                    <Text>DF2141241GF</Text>
                    <Text>01.09.2002</Text>
                    <Text>01.09.2002</Text>
                    <Menu items={empty} mode="inline" style={{border: "1px solid transparent",width: "15%", background: "#698AFF", borderRadius: "20px", color: "#fff"}}></Menu>
                    <Row>
                        <Col>
                        <Button style={{border: "1px solid transparent"}}><EditOutlined style={{fontSize: "25px", color: "#3461FF"}}/></Button>
                        <Button style={{border: "1px solid transparent"}}><DeleteOutlined style={{fontSize: "25px",color: "#FF1A1A"}}/></Button>    
                        </Col>
                    </Row>
                </Col>
                <Col style={{width: "100%", display: "flex", justifyContent: "space-evenly", alignItems: "center", borderRadius: "10px", border: "1px solid var(--oq)", marginTop: "0.6rem"}}>
                    <Checkbox checked></Checkbox>
                    <Text>Crane Truck</Text>
                    <Text>DF2141241GF</Text>
                    <Text>01.09.2002</Text>
                    <Text>01.09.2002</Text>
                    <Menu items={empty} mode="inline" style={{border: "1px solid transparent",width: "15%", background: "#FEAA07", borderRadius: "20px", color: "#fff"}}></Menu>
                    <Row>
                        <Col>
                        <Button style={{border: "1px solid transparent"}}><EditOutlined style={{fontSize: "25px", color: "#3461FF"}}/></Button>
                        <Button style={{border: "1px solid transparent"}}><DeleteOutlined style={{fontSize: "25px",color: "#FF1A1A"}}/></Button>    
                        </Col>
                    </Row>
                </Col>
            </Row>
        </>
    )
}