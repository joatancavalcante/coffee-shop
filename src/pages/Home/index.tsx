import { LeftAndRightContainer, 
         LeftSide, 
         MainImage, 
         RightSide,
         TitleAndSubTitleContainer,
         Title,
         Subtitle, 
         InfosContainer,
         Menu,
         MenuTitle,
         MenuItemsContainer} from "./styles";


import MainImageSvg from '../../assets/MainImage.svg';
import ExpressoTradicionalImg from "../../assets/MenuImages/expresso-tradicional.png";
import ExpressoAmericanoImg from "../../assets/MenuImages/expresso-americano.png";
import ExpressoCremosoImg from "../../assets/MenuImages/expresso-cremoso.png";
import ExpressoGeladoImg from "../../assets/MenuImages/expresso-gelado.png";
import CafeComLeiteImg from "../../assets/MenuImages/cafe-com-leite.png";
import LatteImg from "../../assets/MenuImages/latte.png";
import CapuccinoImg from "../../assets/MenuImages/capuccino.png";
import MacchiatoImg from "../../assets/MenuImages/macchiato.png";
import MocaccinoImg from "../../assets/MenuImages/mocaccino.png";
import ChocolateQuenteImg from "../../assets/MenuImages/chocolate-quente.png";
import CubanoImg from "../../assets/MenuImages/cubano.png";
import HavaianoImg from "../../assets/MenuImages/havaiano.png";
import ArabeImg from "../../assets/MenuImages/arabe.png";
import IrlandesImg from "../../assets/MenuImages/irlandes.png";

import { BadgeInfo } from "../../components/BagdeInfo";
import { Fragment } from "react";
import { CardMenu } from "../../components/CardMenu";

export function Home(){

    const menu = [
        {
            id: '1',
            imagePath: ExpressoTradicionalImg,
            badgeInfo: "tradicional",
            description: "Expresso Tradicional",
            info: "O tradicional café feito com água quente e",
            value: 9.9
        },
        {
            id: '2',
            imagePath: ExpressoAmericanoImg,
            badgeInfo: "tradicional",
            description: "Expresso Americano",
            info: "Expresso diluído, menos intenso que o tradicional",
            value: 10
        },
        {
            id: '3',
            imagePath: ExpressoCremosoImg,
            badgeInfo: "tradicional",
            description: "Expresso Cremoso",
            info: "Café expresso tradicional com espuma cremosa",
            value: 6.9
        },
        {
            id: '4',
            imagePath: ExpressoGeladoImg,
            badgeInfo: "tradicional / gelado",
            description: "Expresso Gelado",
            info: "Bebida preparada com café expresso e cubos de gelo",
            value: 9
        },
        {
            id: '5',
            imagePath: CafeComLeiteImg,
            badgeInfo: "tradicional / com leite",
            description: "Café com Leite",
            info: "Meio a meio de expresso tradicional com leite vaporizado",
            value: 12.9
        },
        {
            id: '6',
            imagePath: LatteImg,
            badgeInfo: "tradicional / com leite",
            description: "Latte",
            info: "Uma dose de café expresso com o dobro de leite e espuma cremosa",
            value: 16.9
        },
        {
            id: '7',
            imagePath: CapuccinoImg,
            badgeInfo: "tradicional / com leite",
            description: "Capuccino",
            info: "Bebida com canela feita de doses iguais de café, leite e espuma",
            value: 9.9
        },
        {
            id: '8',
            imagePath: MacchiatoImg,
            badgeInfo: "tradicional / com leite",
            description: "Macchiato",
            info: "Café expresso misturado com um pouco de leite quente e espuma",
            value: 9.9
        },
        {
            id: '9',
            imagePath: MocaccinoImg,
            badgeInfo: "tradicional / com leite",
            description: "Mocaccino",
            info: "Café expresso com calda de chocolate, pouco leite e espuma",
            value: 9.9
        },
        {
            id: '10',
            imagePath: ChocolateQuenteImg,
            badgeInfo: "especoal / com leite",
            description: "Chocolate Quente",
            info: "Bebida feita com chocolate dissolvido no leite quente e café",
            value: 9.9
        },
        {
            id: '11',
            imagePath: CubanoImg,
            badgeInfo: "alcóolico / gelado",
            description: "Cubano",
            info: "Drink gelado de café expresso com rum, creme de leite e hortelã",
            value: 9.9
        },
        {
            id: '12',
            imagePath: HavaianoImg,
            badgeInfo: "especial",
            description: "Havaiano",
            info: "Bebida adocicada preparada com café e leite de coco",
            value: 9.9
        },
        {
            id: '13',
            imagePath: ArabeImg,
            badgeInfo: "especial",
            description: "Arabe",
            info: "Bebida preparada com grãos de café árabe e especiarias",
            value: 9.9
        },
        {
            id: '14',
            imagePath: IrlandesImg,
            badgeInfo: "especial / alcóolico",
            description: "Irlandês",
            info: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
            value: 9.9
        },
    ]

    return (
        <Fragment>
            <LeftAndRightContainer>
                <LeftSide>
                    <TitleAndSubTitleContainer>
                        <Title>
                            Encontre o café perfeito para qualquer hora do dia
                        </Title>
                        <Subtitle>
                            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora    
                        </Subtitle>
                    </TitleAndSubTitleContainer>
                    <InfosContainer>
                        <BadgeInfo iconName="shoppingcart" info="Compra simples e segura" />
                        <BadgeInfo iconName="package" info="Embalagem mantém o café intacto" />
                        <BadgeInfo iconName="timer" info="Entrega rápida e rastreada" />
                        <BadgeInfo iconName="coffee" info="O café chega fresquinho até você" />
                    </InfosContainer>
                </LeftSide>
                <RightSide>
                <MainImage src={MainImageSvg} />
                </RightSide>          
            </LeftAndRightContainer>   
            <Menu>
                <MenuTitle>
                    Nossos Cafés
                </MenuTitle>
                <MenuItemsContainer>
                    {menu.map(item => (
                        <CardMenu
                            key={item.id}
                            id={item.id}
                            imageCard={item.imagePath}
                            badgeInfo={item.badgeInfo}
                            description={item.description}
                            info={item.info}
                            value={item.value}
                        />
                    ))}
                </MenuItemsContainer>
            </Menu>    
        </Fragment>
    )
}