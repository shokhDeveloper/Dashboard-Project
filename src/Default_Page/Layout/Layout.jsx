import { Layout as AntdLayouts } from "antd"
export const Layout = ({children}) => {
    return(
        <AntdLayouts style={{background: "#fff"}}>
            {children}  
        </AntdLayouts>
    )
}