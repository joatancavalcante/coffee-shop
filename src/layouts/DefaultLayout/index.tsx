import { Outlet } from "react-router-dom"
import { LayoutContainer } from "./styles"
import { Header } from "../../components/Header"

const CONTAINER_ANIMATION = {
    unMounted: {y: -10, opacity: 0},
    mounted: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1.5,
      },
    },
  };

export function DefaultLayout(){
    return (
        <>
        <LayoutContainer
            variants={CONTAINER_ANIMATION}
            initial="unMounted"
            animate="mounted"
            exit="unMounted"
        >  
            <Header />          
            <Outlet />
        </LayoutContainer>
        </>
    )
}