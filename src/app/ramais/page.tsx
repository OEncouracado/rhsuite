'use client';

import TopBar from '@/components/topNavBar'
import React, { useEffect } from 'react'
import Papa from 'papaparse';
import { Button, Container } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';


const url = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSdRvSDqz8xz6om9fi37UVDM49LL7NXSdy938tRR7J4dsHXZmbPovCjVtx6fnZlHiemtQktZgqAW6ab/pub?output=csv";


const urlHtml = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSdRvSDqz8xz6om9fi37UVDM49LL7NXSdy938tRR7J4dsHXZmbPovCjVtx6fnZlHiemtQktZgqAW6ab/pubhtml";

function Ramais() {
  const [ramais, setRamais] = React.useState([])
  const handleEdit = (ramal)=> {window.alert(ramal.nome)}


    useEffect(() => {
      const response = 
      fetch(url)
      .then((res) => res.text())
      .then((data) => setRamais(Papa.parse(data, {header: true}).data))
    .catch((error) => {console.log('error :>> ', error);})
    console.log('response :>> ', response);
    },[])
    useEffect(() => {
      const response = 
      fetch(urlHtml)
      .then((res) => res.text())
      .then((data) => console.log(data, {header: true}))
    .catch((error) => {console.log('error :>> ', error);})
    console.log('response :>> ', response);
    },[])
  return (
    <>
    <TopBar />
      <h1>Ramais</h1>
      <Container style={{height: "85dvh", overflow: "auto", marginBottom:"1rem"}} className='flex justify-center'>
        <table className='text-left border-collapse border border-slate-400' style={{width: '80%'}}>
          <thead>
        <tr>
          <th className='border border-slate-300'>Nome</th>
          <th className='border border-slate-300'>Ramal</th>
          <th className='border border-slate-300'>Departamento</th>
          <th className='border border-slate-300'>Ações</th>

        </tr>
          </thead>
          <tbody>
        {ramais && ramais.map((ramal, index) => (
          <tr key={index}>
            <td className='border border-slate-300'>{ramal.nome}</td>
            <td className='border border-slate-300'>{ramal.ramal}</td>
            <td className='border border-slate-300'>{ramal.departamento}</td>
            <td className='border border-slate-300'><Button onClick={() => handleEdit(ramal)}><EditIcon/></Button> </td>
          </tr>
        ))}
          </tbody>
        </table>
      </Container>

    </>
  )
}

export default Ramais
