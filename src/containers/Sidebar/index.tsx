import Avatar from "../../components/Avatar"
import Titulo from "../../components/Titulo"
import Paragrafo from "../../components/Paragrafo"

import { BotaoTema, Descricao , SidebarContainer } from './styles'

type Props = {
    trocaTema: () => void;
}

const Sidebar = (props: Props ) => (
    <aside>
        <SidebarContainer>
        <Avatar/>
        <Titulo  fontSize={19}>Tunae Santos</Titulo>
        <Paragrafo tipo="secundario" fontSize={16}>
            tunaesantos
        </Paragrafo>
        <Descricao tipo="principal" fontSize={12}>
            Engenheiro Front-End
        </Descricao>
        <BotaoTema onClick={props.trocaTema}>Trocar Tema</BotaoTema>
        </SidebarContainer>
    </aside>    
)

export default Sidebar