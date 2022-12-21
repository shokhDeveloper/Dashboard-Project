import { Layout } from "antd"
import {Header_Content} from "../Header_Content"
import { Header_Content_thue } from "../Header_Content_thue"
import { Header_tree } from "../Header_tree"
import { Dashboard } from "../Dashboard"
import { Active } from "../../Active_load/Active"
export const Home_Content = () => {
    return(
        <Layout>
            <Header_Content/>
            <Header_Content_thue/>
            <Header_tree/>   
            <Dashboard>
                <Active/>
            </Dashboard>
        </Layout>
    )
}