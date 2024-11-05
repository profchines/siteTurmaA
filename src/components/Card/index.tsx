import Image from "next/image"
import { Button, CardBody, TextButton, TextPromo, Title, TitlePreco } from "./style"
import { IProduto } from "@/interfaces"

export const Card = (props: IProduto) => {
    return (
        <CardBody>
            <img src={
                'https://raw.githubusercontent.com/profchines/Imagens/refs/heads/main/Imagens/' +
                props.imagemg
            }
            />
            <Image src={''} alt={props.nome} />
            <Title>{props.nome}</Title>
            <TitlePreco>{props.valor}</TitlePreco>
            <TextPromo>{props.promo}</TextPromo>
            <Button>
                <TextButton>Detalhes</TextButton>
            </Button>
        </CardBody>
    )
}