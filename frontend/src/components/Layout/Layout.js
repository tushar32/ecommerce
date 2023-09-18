import React, { Suspense } from "react";
import Container from 'react-bootstrap/Container';
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import SideBar from "./SideBar";
import { Content } from "../../assets/styles/Global.style";
import { Spinner } from "react-bootstrap";

const Layout = () => {
    return (
        <>
            <NavBar />
            <Container fluid className="container">
                <SideBar/>
                <Content>
                    <Suspense fallback={<Spinner animation="border" role="status"></Spinner>}>
                        <Outlet/>
                    </Suspense>
                </Content>
            </Container>
        </>
  
    );
  };
  
  export default Layout;
  