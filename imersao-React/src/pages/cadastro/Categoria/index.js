import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  }
  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(valoresIniciais);

 function setValue(chave, valor){
   //chave: nome, descrição ,blah
  setValues({
    ...values,
    [chave]: valor, //nome:'valor'
  })
 }
 function handleChange(infosDoEvento){
  setValue(
    infosDoEvento.target.getAttribute('name'),
     infosDoEvento.target.value
     );
  }

  useEffect( () => {
    console.log('Alo brazil');
    const URL_TOP = 'http://localhost:8080/categorias';
    fetch(URL_TOP)
    .then(async(respostaDoServidor) =>{
      const resposta = await respostaDoServidor.json();
      setCategorias([
        ...resposta, 
      ]);
    });

    // setTimeout(() => {
    //   setCategorias([
    //     ...categorias,
    //     {
    //       id: 1,
    //       nome: "Front End",
    //       descricao: "uma descrição boa",
    //       cor: "#cdb1ff"
    //     },
    //     {
    //       id: 2,
    //       nome: "Back End",
    //       descricao: "outra descrição boa",
    //       cor: "#cdb1ff"
    //     }
    //   ]);
    // },4 *1000);
  },[]);


  return (
    <PageDefault>
      <h1>Cadastro de Categoria: {values.nome}</h1>

      <form onSubmit={function handleSubmit(infosDoEvento) {
        infosDoEvento.preventDefault();
        setCategorias([
          ...categorias, values
        ]);

        setValues(valoresIniciais)

      }}>
       <FormField 
       label="Nome da Categoria: " 
       value={values.nome}
       type="text"
       name="nome"
       onChange={handleChange}
       />
       <FormField 
       label="Descrição: " 
       value={values.descricao}
       type="textarea"
       name="descricao"
       onChange={handleChange}
       />
        
        <FormField  
        label="Cor: " 
       value={values.cor}
       type="color"
       name="cor"
       onChange={handleChange}
       />
        
        <Button>Cadastrar</Button>

      </form>
      {categorias.length ===0 && (
      <div>

        Loanding...

      </div>
      )}
      <ul>
        {categorias.map((categoria) => {
          return (
            <li key={`${categoria.nome}`}>
              {categoria.nome}
            </li>
          )
        })}
      </ul>

      <Link to="/">
        Ir para Home
      </Link>
    </PageDefault>
  );
}
export default CadastroCategoria;