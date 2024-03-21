/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React, {useState} from "react";
import styled from "styled-components";
import db from "../firebase/firebaseConfig";
import {doc, deleteDoc, updateDoc} from "firebase/firestore";


const Contacto = ({id, nombre, correo}) => {
    const [editandoTarea, setEditandoTarea] =useState(false);
    const [nuevoNombre, setNuevoNombre] = useState(nombre);
    const [nuevoCorreo, setNuevoCorreo] = useState(correo);

    const actualizarContactos = async (e) => {
        e.preventDefault();

        try {
            await updateDoc(doc(db, 'usuarios', id), {
                nombre: nuevoNombre,
                correo: nuevoCorreo
            });
        }
        catch (error){
            console.log('Hubo un error al actualizar el usuario');
            console.log(error);
        }
        setEditandoTarea(false);
    }

    const eliminarContacto = async (id) => {
        try {
            await deleteDoc(doc(db, 'usuarios', id));
        }
        catch (error){
            console.log('Hubo un error al eliminar el usuario');
            console.log(error);
        }
    }    

    return (
        <ContenedorContacto>
            {editandoTarea ? 
                <form action="" onSubmit={actualizarContactos}> 
                    <Input 
                    type="text"
                    name="nombre"
                    value={nuevoNombre}
                    onChange={(e) => setNuevoNombre(e.target.value)}
                    placeholder="Nombre"
                    />
                     <Input 
                    type="text"
                    name="correo"
                    value={nuevoCorreo}
                    onChange={(e) => setNuevoCorreo(e.target.value)}
                    placeholder="Correo"
                    />                    
                    <Boton type="submit">Actualizawr</Boton>
                </form>
            :
                <>
                <Nombre>{nombre}</Nombre>
                <Correo>{correo}</Correo>
                <Boton onClick={() => {setEditandoTarea(!editandoTarea)}}> Editar</Boton>
                <Boton onClick={() => {eliminarContacto(id)}}> Eliminar</Boton>
                </>
             }
        </ContenedorContacto>
    );
}

const ContenedorContacto = styled.div`
	padding: 10px 0;
	border-bottom: 1px solid rgba(0,0,0,.2);
`;

const Nombre = styled.p`
	font-weight: bold;
`;
 
const Correo = styled.p`
	font-style: italic;
	color: #6B6B6B;
	margin: 5px 0;
`;

const Boton = styled.button`
	padding: 5px 20px;
	border: none;
	cursor: pointer;
	border-radius: 3px;
	margin: 0px 2px;
	margin-bottom: 10px;
	transition: .3s ease all;
	outline: none;
	background: #C4C4C4;
	color: #fff;
	font-size: 12px;

	&:hover {
		background: #3D76E9;
	}
`;

const Input = styled.input`
	padding: 10px;
	border: 2px solid rgba(0,0,0,.2);
	border-radius: 3px;
	width: 100%;
	margin-bottom: 10px;
	transition: .2s ease all;
	outline: none;
	text-align: center;
	
	&:focus {
		border: 2px solid #3D76E9;
	}
`;

export default Contacto;