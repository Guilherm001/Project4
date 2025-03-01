import Logo from "@/app/imagens-do-projeto/barbearia.png";
import Image from "next/image";

export default function Imagem(){
    return(
        <div>
            <Image src={Logo} alt="logo" width={200} height={200} />
        </div>
    )
}