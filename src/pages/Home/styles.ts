import { styled } from "styled-components";

export const LeftAndRightContainer = styled.div`
    display: flex;
    flex-direction: row;
    height: 32rem;
    top: 6.5rem;
    padding: 2.875rem 0rem 0rem 0rem;
`;

export const LeftSide = styled.div`
    flex: 1;
`;

export const RightSide = styled.div`
    
`;

export const MainImage = styled.img`
    
`;

export const TitleAndSubTitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 1rem;
    width: 36.75rem;
    height: 12rem;
    margin-bottom: 4.125rem;
`;

export const Title = styled.strong`
    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 800;
    font-size: 3rem;
    line-height: 130%;
    color: ${(props) => props.theme['title']}; 
    align-self: stretch;
`;

export const Subtitle = styled.span`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 1.25rem;
    line-height: 130%;
    color: ${(props) => props.theme['subtitle']};
    font-stretch: 100;
    align-self: stretch;   
`;

export const InfosContainer = styled.div`
    width: 35.4375rem;
    height: 5.25rem;
    display: grid;
    grid-template-columns: 15.625rem 18.75rem;
    row-gap: 1.25rem;
`;

export const Menu = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

export const MenuTitle = styled.span`
    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 800;
    font-size: 32px;
    line-height: 130%;
    display: flex;
    align-items: center;
    color: ${(props) => props.theme['subtitle']};
    margin-bottom: 2.375rem;
`;

export const MenuItemsContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 2rem;
`;