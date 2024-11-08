//componente react é uma função.
//jxs permite que usaemos códigos java script dentro dos componentes misturados com html. usando os {}.

// <> -> esse elemento dentro do reatc é o fragment. que vai fazer com que um elemento envolva todos os outros.

import {
  Container,
  Title,
  TopBackground,
  Form,
  ContainerInputs,
  Input,
  InputLabel,
  Button,
} from "./styles";

//maneira de importar imagens dentro de um arquivo react

import UsersImage from "../../assets/users.png";

function Home() {
  //componente react sempre com letra maiuscula
  return (
    <Container>
      <TopBackground>
        {/* esse vai ser o componet react da nossa imagem do topo da aplicação*/}
        <img src={UsersImage} alt="imagem-usuarios"/>
      </TopBackground>

      <Form>

        <Title>Cadastrar Usuários</Title>
        {" "}
        {/* Início do formulário.*/}
        {/* Criando o formulário já como um componente*/}
        <ContainerInputs>
          {" "}
          {/* Div principal como componete para abraçar todos os inputs*/}
            <div>
              {" "}
              {/* Div contendo o primeiro input e sua label*/}
              <InputLabel>
                Nome <span> *</span>
              </InputLabel>
              <Input type="text" placeholder="nome do usuário"></Input>
            </div>

            <div>
              {" "}
              {/* Div contendo o segundo input e sua label*/}
              <InputLabel>
                Idade <span> *</span>
              </InputLabel>
              <Input type="number" placeholder="Idade do Usuário"></Input>
            </div>
          
        </ContainerInputs>

        <div style={{width: '100%'}}>
            {" "}
            {/* Div contendo o terceiro input e sua label*/}
            <InputLabel>
              Email<span>*</span>
            </InputLabel>
            <Input type="email" placeholder="Email do usuário"></Input>
          </div>
        <Button>Cadastrar Usuário</Button>
      </Form>
    </Container>
  );
}

export default Home;

/*
Maneiras de exportar no react.

  Exportar "Padrão" -> exportar uma coisa só por página
  apenas Exportar -> export

*/
