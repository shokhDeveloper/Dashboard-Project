import "./Drivers_Dashboard.css"
import { Button, Checkbox, Col, Row , Typography} from "antd"
import { useState } from "react"
import { CaretDownOutlined } from "@ant-design/icons"
const {Text} = Typography
export const Drivers_Dashboard = ({children}) => {
    const [checked, setChecked] = useState(!false)
    const handleChange = () => {
        setChecked((check) => !check)
        if(checked !== true){
            alert("Not checkeds")
        }else{
            alert("Checked")
        }
    }
    return(
        <>
        {children}
            <Row style={{paddingTop: "1rem"}}>
            <Col style={{border: "1px solid var(--oq)", borderRadius: "10px"}} className="cols_dash">
                <Checkbox onChange={handleChange}></Checkbox>
                <Text>Patel Hiteshkumar</Text>
                <Text>+998 99 999 99 99</Text>
                <Text>12334</Text>
                <Text>CO</Text>
                <Text>$0.75</Text>
                <Button>Open Source <CaretDownOutlined/></Button>
                <Button type="default" style={{border: "1px solid var(--kuk)", color:"var(--kuk)"}}>View statistics</Button>
            </Col>
            
            <Col style={{border: "1px solid var(--oq)", borderRadius: "10px"}} className="cols_dash">
                <Checkbox onChange={handleChange}></Checkbox>
                <Text>Patel Hiteshkumar</Text>
                <Text>+998 99 999 99 99</Text>
                <Text>12334</Text>
                <Text>CO</Text>
                <Text>$0.75</Text>
                <Button>Open Source <CaretDownOutlined/></Button>
                <Button type="default" style={{border: "1px solid var(--kuk)", color:"var(--kuk)"}}>View statistics</Button>
            </Col>
            <Col style={{border: "1px solid var(--oq)", borderRadius: "10px"}} className="cols_dash">
                <Checkbox onChange={handleChange}></Checkbox>
                <Text>Patel Hiteshkumar</Text>
                <Text>+998 99 999 99 99</Text>
                <Text>12334</Text>
                <Text>CO</Text>
                <Text>$0.75</Text>
                <Button>Open Source <CaretDownOutlined/></Button>
                <Button type="default" style={{border: "1px solid var(--kuk)", color:"var(--kuk)"}}>View statistics</Button>
            </Col>
            <Col style={{border: "1px solid var(--oq)", borderRadius: "10px"}} className="cols_dash">
                <Checkbox onChange={handleChange}></Checkbox>
                <Text>Patel Hiteshkumar</Text>
                <Text>+998 99 999 99 99</Text>
                <Text>12334</Text>
                <Text>CO</Text>
                <Text>$0.75</Text>
                <Button>Open Source <CaretDownOutlined/></Button>
                <Button type="default" style={{border: "1px solid var(--kuk)", color:"var(--kuk)"}}>View statistics</Button>
            </Col>
            
        </Row>
        </>
        
    )
}