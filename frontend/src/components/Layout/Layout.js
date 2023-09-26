"use client";
import React, { Suspense, useEffect } from "react";
import Container from 'react-bootstrap/Container';
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import SideBar from "./SideBar";
import { Content } from "../../assets/styles/Global.style";
import { Spinner } from "react-bootstrap";
import { fallbackRender } from "../fallbackRender";
import { ErrorBoundary, useErrorBoundary } from "react-error-boundary";

const Layout = () => {
//     const { showBoundary } = useErrorBoundary();

//   useEffect(() => {
//     console.log('sdswd')
//       showBoundary('dsfdsdfarfas')
//   },[])

    return (
        <>
            <NavBar />
            <Container fluid className="container">
                <SideBar/>
                <Content>
                    <ErrorBoundary fallbackRender={fallbackRender}>
                        <Suspense fallback={<Spinner animation="border" role="status"></Spinner>}>
                            <Outlet/>
                        </Suspense>
                    </ErrorBoundary>
                </Content>
            </Container>
        </>
  
    );
  };
  
  export default Layout;
  