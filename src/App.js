import React from 'react';
import Formulario from './componentes/Formulario';
import styled from 'styled-components';
import ListaContactos from './componentes/ListaContactos';
import Contacto from './componentes/Contacto';


const App = () => {
	return (
		<Contenedor>
			<Titulo>Lista de Contactos</Titulo>
			<Formulario />
            <ListaContactos />
            <Contacto />
			
		</Contenedor>
	);
}

const Contenedor = styled.div`
	margin: 40px;
	width: 90%;
	max-width: 400px;
	background: #fff;
	padding: 40px;
	border-radius: 5px;
	text-align: center;
`;

const Titulo = styled.h2`
	margin-bottom: 10px;
`;
 
export default App;