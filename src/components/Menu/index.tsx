import Link from "next/link"
import { LeftContainer, NavbarContainer, NavbarInnerContainer, NavbarLinkExtended, RightContainer } from "./styles"

export const Menu = () => {

    return(
        <NavbarContainer>
            <NavbarInnerContainer>
                <LeftContainer>
                    <NavbarLinkExtended href={'/voluntarios'}>
                        Teste
                    </NavbarLinkExtended>
                </LeftContainer>
                <RightContainer>

                </RightContainer>
            </NavbarInnerContainer>
            
        </NavbarContainer>
    )
}