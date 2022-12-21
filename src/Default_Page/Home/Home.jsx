import { Layout } from "../Layout"
import { Header } from "../Header/Header"
import { SideBar } from "../Sidebar"
import { Container } from "../../Container"
export const Home = ({children}) => {
    return(
        <Layout>
            <SideBar/>
            <Layout>
            <Header>
            </Header>
            <Container>
            {children}
            </Container>
            </Layout>
        </Layout>
    )
}