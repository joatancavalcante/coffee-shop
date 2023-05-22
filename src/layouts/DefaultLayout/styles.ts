import { styled } from "styled-components";
import { motion } from "framer-motion";

export const LayoutContainer = styled(motion.div)`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 70rem;
    margin: 2rem auto;                    
`;