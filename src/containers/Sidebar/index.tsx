import Avatar from "../../components/Avatar"
import Titulo from "../../components/Titulo"
import Paragrafo from "../../components/Paragrafo"

import { BotaoTema, Descricao , SidebarContainer } from './styles'

const Sidebar = () => (
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
        <BotaoTema>Trocar Tema</BotaoTema>
        </SidebarContainer>
    </aside>    
)

export default Sidebar