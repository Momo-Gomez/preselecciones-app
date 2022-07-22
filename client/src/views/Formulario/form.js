import "./form.css";
import { React, useContext, useState } from "react";
import { Context } from "../../context/Context";
import axios from "axios";


export default function Formulario() {

  const { user } = useContext(Context);     //Usuario actual logeado

  const [cedulaForm, setCedulaForm] = useState(null);     //Var de Recepcion de documentos
  const [certNacForm, setCertNac] = useState(null);
  const [certCivil, setCertCivil] = useState(null);
  const [libAhForm, setLibAh] = useState(null);
  const [certRSH, setCertRSH] = useState(null);
  const [RepMun, setRepMun] = useState(null);
  const [certAvaluo, setCertAvaluo] = useState(null);
  const [Escritura, setEscritura] = useState(null);

  async function fileUpload(file, idformulario){      //Funcion para subir el documento a local insertarlo a la sql

    const data = new FormData();        //El data almacenara la info del archivo
    const filename = Date.now() + file.name;
    const rut = user.rut;
    const ruta = "./documentos/"+rut+"/"+idformulario;      //la ruta donde se guarda el documento para la sql
    
    data.append("name", filename);
    data.append("file", file);
    try {
      await axios.post("/upload", data);      //Llama al upload para cargar el documento en ruta local en index.js
      const res = await axios.post("http://localhost:5000/api/files/upload/", {
        filename,   //nombre archivo guardado
        ruta,               //ruta local de guardado del archivo
        idformulario,       //id del formulario correspondiente
      });
    } catch (error) {
      
    }
  }

  const handleFormulario = async (e) => {
    e.preventDefault();

    //CONTROL DE NOMBRES ARCHIVOS
    const data = new FormData();
    const filename = Date.now() + cedulaForm.name;
      
    try {
      const res = await axios.post("http://localhost:5000/api/files/createForm/", { //Se crea el formulario correspondiente
        rut: user.rut,
      })    //Se comienzan a verificar los documentos que se subieron
      if (cedulaForm !== null){
        fileUpload(cedulaForm, res.data.idformulario);
      }
      if (certNacForm !== null){
        fileUpload(certNacForm, res.data.idformulario);
      }
      if (certRSH !== null){
        fileUpload(certRSH, res.data.idformulario);
      }
      if (certCivil !== null){
        fileUpload(certCivil, res.data.idformulario);
      }
      if (libAhForm !== null){
        fileUpload(libAhForm, res.data.idformulario);
      }
      if (RepMun!== null){
        fileUpload(RepMun, res.data.idformulario);
      }
      if (certAvaluo !== null){
        fileUpload(certAvaluo, res.data.idformulario);
      }
      if (Escritura !== null){
        fileUpload(Escritura, res.data.idformulario);
      }

    } catch (error) {
      console.log(error);

    }
};

  return (
    <div class="">
      <form class="form" onSubmit={handleFormulario}>
        <h1 class="text-center p-5"></h1>

        <div class="form-card card mt-3 ml-5">
          <span class="form-title text-center">Formulario</span>

          <div class="mb-3">
          <div class="file-group">
            <label for="formFile" className="form-req">Fotocopia de Cédula de Identidad</label>
            <input class="form-control" type="file" onChange={e=>setCedulaForm(e.target.value)}/>
          </div>

          <div class="file-group">
            <label for="formFile" className="form-req">Certificado nacimiento</label>
            <input class="form-control" type="file" onChange={e=>setCertNac(e.target.value)}/>
          </div>

          <div class="file-group">
            <label for="formFile" className="form-req">Certificado Estado Civil</label>
            <input class="form-control" type="file"onChange={e=>setCertCivil(e.target.value)}/>
          </div>

          <div class="file-group">
            <label for="formFile" className="form-req">Libreta de ahorro</label>
            <input class="form-control" type="file" onChange={e=>setLibAh(e.target.value)}/>
          </div>

          <div class="file-group">
            <label for="formFile" className="form-req">Certificado Registro Social de Hogares</label>
            <input class="form-control" type="file" onChange={e=>setCertRSH(e.target.value)}/>
          </div>

          <div class="file-group">
            <label for="formFile" className="form-req">Recepcion Municipal</label>
            <input class="form-control" type="file" onChange={e=>setRepMun(e.target.value)}/>
          </div>

          <div class="file-group">
            <label for="formFile" className="form-req">Certificado Avaluo Fiscal</label>
            <input class="form-control" type="file" onChange={e=>setCertAvaluo(e.target.value)}/>
          </div>

          <div class="file-group">
            <label for="formFile" className="form-req">Escritura Vivienda</label>
            <input class="form-control" type="file" onChange={e=>setEscritura(e.target.value)}/>
          </div>

          </div>

          {/*
          <button class="upload-area">
            <span class="upload-icon">
            <svg width="15" height="15" viewBox="0 0 20 20"><path d="M19.35,10.04C18.67,6.59 15.64,4 12,4C9.11,4 6.6,5.64 5.35,8.04C2.34,8.36 0,10.91 0,14A6,6 0 0,0 6,20H19A5,5 0 0,0 24,15C24,12.36 21.95,10.22 19.35,10.04M19,18H6A4,4 0 0,1 2,14C2,11.95 3.53,10.24 5.56,10.03L6.63,9.92L7.13,8.97C8.08,7.14 9.94,6 12,6C14.62,6 16.88,7.86 17.39,10.43L17.69,11.93L19.22,12.04C20.78,12.14 22,13.45 22,15A3,3 0 0,1 19,18M8,13H10.55V16H13.45V13H16L12,9L8,13Z" /></svg>
            </span>

            {/*<span class="upload-title">
              Arrastre y suelte aquí para cargar el archivo
            </span>

            <span class="upload-desc">
              O, puedes seleccionar un archivo haciendo click <strong>aquí</strong>
          </span>
          </button>*/}

          <div class="form-footer">
            <button class="close-btn btn">Atrás</button>
            <button class="submit-btn btn btn-primary" type="submit">Enviar</button>
          </div>

        </div>
      </form>
    </div>
  );
}
