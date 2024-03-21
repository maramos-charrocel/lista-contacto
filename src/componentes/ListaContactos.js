/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import db from "../firebase/firebaseConfig";
import { collection, onSnapshot } from "firebase/firestore";
import Contacto from "./Contacto";

const ListaContactos = () => {
  const [contactos, setContactos] = useState([]);

  // obtinen de la base de datos un snapshot de los documentos de la coleccion usuarios
  // crea un nuevo arreglo con su id, y setcontactos lo actualiza con el nuevo arreglo
  useEffect(() => {
    onSnapshot(collection(db, "usuarios"), (snapshot) => {
      //console.log(snapshot.docs[0].data());
      const arregloUsuarios = snapshot.docs.map((documento) => {
        return { ...documento.data(), id: documento.id };
      });
      setContactos(arregloUsuarios);
    },
    (error) => {
        console.log("Ocurrio un error al obtener los contactos");
        console.log(error);
    }
    );
  }, []);

  return (
    contactos.length > 0 && (
        //crea un componente por cada contacto
      <ContenedorContactos>
        {contactos.map((contacto) => {
          return (
            <Contacto
              key={contacto.id}
              id={contacto.id}
              nombre={contacto.nombre}
              correo={contacto.correo}
            />
          );
        })}
      </ContenedorContactos>
    )
  );
};

const ContenedorContactos = styled.div`
  margin-top: 40px;
`;

export default ListaContactos;
