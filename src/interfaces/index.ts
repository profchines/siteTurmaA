import { ReactNode } from "react";

export interface IProduto {
    "id": string,
    "id_categoria": number,
    "nome": string,
    "valor": string,
    "promo": string,
    "imagemg": string,
    "imagemp": string,
    button: () => ReactNode
}