import { Menu } from "@/components/Menu"

export default function Produto(
    { params }: { params: { id: string } }
) {
    return (
        <>
            <Menu />
            <h1>Produ {params.id}</h1>
        </>
    )
}