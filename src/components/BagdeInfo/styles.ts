import { styled } from "styled-components";

export const BadgeInfoContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 2rem;
    gap: 0.75rem;
    padding: 8px 0px;
`;

const IMAGE_COLORS = {
    shoppingcart: 'yellowDark',
    package: 'text',
    timer: 'yellow',
    coffee: 'purple',
  } as const
  
interface ImageProps {
    imagecolor: keyof typeof IMAGE_COLORS
}

export const ImageContainer = styled.div<ImageProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5rem;

    width: 2rem;
    height: 2rem;
    border-radius: 62.5rem;
    background-color: ${(props) => props.theme[IMAGE_COLORS[props.imagecolor]]};
`;

export const Info = styled.span`
    display: flex;
    flex: 1;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 130%;
    color: ${(props) => props.theme['text']};
`;