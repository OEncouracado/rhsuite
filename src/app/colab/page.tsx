'use client';

import React from 'react'
import TopBar from './../../components/topNavBar';
import {Container, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from '@mui/material';
import { useState } from 'react';


const employees = [
  {
    matricula: "001",
    colaborador: "Carlos Santos",
    cbo: "2521-10",
    area: "TI",
    cargo: "Desenvolvedor",
    salarioBase: 5000,
    dataAdmissao: "2023-01-15",
    horaExtra50: 0,
    horaExtra100: 0,
    insalubridadePerc: 10,
    insalubridadeValor: 500,
    periculosidadePerc: 3,
    periculosidadeValor: 0,
    salarioBruto: 6250,
    inss: 500,
    ir: 250,
    outrasDeducoes: 100,
    outrasReceitas: 200,
    salarioLiquido: 5600,
    mesReferencia: "Março",
    anoReferencia: 2025,
  },{
    matricula: "002",
    colaborador: "Teste",
    cbo: "2521-10",
    area: "TI",
    cargo: "Desenvolvedor",
    salarioBase: 6000,
    dataAdmissao: "2023-01-15",
    horaExtra50: 0,
    horaExtra100: 0,
    insalubridadePerc: 10,
    insalubridadeValor: 500,
    periculosidadePerc: 2,
    periculosidadeValor: 0,
    salarioBruto: 6250,
    inss: 500,
    ir: 250,
    outrasDeducoes: 100,
    outrasReceitas: 200,
    salarioLiquido: 5600,
    mesReferencia: "Março",
    anoReferencia: 2025,
  },
];
interface Employee {
  matricula: string;
  colaborador: string;
  cbo: string;
  area: string;
  cargo: string;
  salarioBase: number;
  dataAdmissao: string;
  horaExtra50: number;
  horaExtra100: number;
  insalubridadePerc: number;
  insalubridadeValor: number;
  periculosidadePerc: number;
  periculosidadeValor: number;
  salarioBruto: number;
  inss: number;
  ir: number;
  outrasDeducoes: number;
  outrasReceitas: number;
  salarioLiquido: number;
  mesReferencia: string;
  anoReferencia: number;
}

function Colab() {
const insalubridadeTotal = (employee: Employee): number => {
  const valorInsalubridade: number = (employee.salarioBase * employee.insalubridadePerc) / 100;
  return valorInsalubridade;
};
const PericulosidadeTotal = (employee: Employee): number => {
  const valorPericulosidade: number = (employee.salarioBase * employee.periculosidadePerc) / 100;
  return valorPericulosidade;
};

  const [horasExtras50t, setHorasExtras50t] = useState<{ [key: string]: number }>(
    employees.reduce((acc, employee) => {
      acc[employee.matricula] = employee.horaExtra50;
      return acc;
    }, {} as { [key: string]: number })
  );
  
  const handleHoraExtraChange50t = (matricula: string, value: string) => {
    setHorasExtras50t((prev) => ({
      ...prev,
      [matricula]: Number(value) || 0, // Garante que seja um número
    }));
  };
  const [horasExtras100t, setHorasExtras100t] = useState<{ [key: string]: number }>(
    employees.reduce((acc, employee) => {
      acc[employee.matricula] = employee.horaExtra50;
      return acc;
    }, {} as { [key: string]: number })
  );
  
  const handleHoraExtraChange100t = (matricula: string, value: string) => {
    setHorasExtras100t((prev) => ({
      ...prev,
      [matricula]: Number(value) || 0, // Garante que seja um número
    }));
  };

  const calcularValorHoraExtraTotal = (employee: Employee) => {
    const horas50 = horasExtras50t[employee.matricula] || 0;
    const horas100 = horasExtras100t[employee.matricula] || 0;
    
    const valorHoraExtra50 = (employee.salarioBase / 220) * 1.5;
    const valorHoraExtra100 = (employee.salarioBase / 220) * 2;
  
    return (valorHoraExtra50 * horas50) + (valorHoraExtra100 * horas100);
  };

const salarioBruto = (employee: Employee) => {
  const valorHoraExtraTotal = calcularValorHoraExtraTotal(employee);
  const valorInsalubridade = insalubridadeTotal(employee);
  const valorPericulosidade = PericulosidadeTotal(employee);
  const salarioBruto = employee.salarioBase + valorHoraExtraTotal + valorInsalubridade + valorPericulosidade;

  return salarioBruto;
};

const salarioLiquido = (employee: Employee) => {
  const salarioBruto = employee.salarioBruto;
  const inss = employee.inss;
  const ir = employee.ir;
  const outrasDeducoes = employee.outrasDeducoes;
  const outrasReceitas = employee.outrasReceitas;
  const salarioLiquido = salarioBruto - inss - ir - outrasDeducoes + outrasReceitas;
  return salarioLiquido;
}


  return (
    <>
      <TopBar />
      <Container maxWidth="lg">
        <TableContainer component={Paper} sx={{ p: 2 }}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Matrícula</TableCell>
                <TableCell>Colaborador</TableCell>
                <TableCell>CBO</TableCell>
                <TableCell>Área</TableCell>
                <TableCell>Cargo</TableCell>
                <TableCell>Salário Base</TableCell>
                <TableCell>Data Admissão</TableCell>
                <TableCell>Hora Extra 50%</TableCell>
                <TableCell>Hora Extra 100%</TableCell>
                <TableCell>Hora Extra Valor</TableCell>
                <TableCell>% Insalubridade</TableCell>
                <TableCell>Valor Insalubridade</TableCell>
                <TableCell>% Periculosidade</TableCell>
                <TableCell>Valor Periculosidade</TableCell>
                <TableCell>Salário Bruto</TableCell>
                <TableCell>INSS</TableCell>
                <TableCell>IR</TableCell>
                <TableCell>Outras Deduções</TableCell>
                <TableCell>Outras Receitas</TableCell>
                <TableCell>Salário Líquido</TableCell>
                <TableCell>Mês Referência</TableCell>
                <TableCell>Ano Referência</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
          {employees.map((employee, index) => (
            <TableRow key={index}>
              <TableCell>{employee.matricula}</TableCell>
              <TableCell>{employee.colaborador}</TableCell>
              <TableCell>{employee.cbo}</TableCell>
              <TableCell>{employee.area}</TableCell>
              <TableCell>{employee.cargo}</TableCell>
              <TableCell>{employee.salarioBase.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</TableCell>
              <TableCell>{employee.dataAdmissao}</TableCell>
              {/* <TableCell>{employee.horaExtra50}</TableCell>
              <TableCell>{employee.horaExtra100}</TableCell> */}
              <TableCell>
              <TextField
              sx={{ width: "4rem"  }}
                type="number"
                value={horasExtras50t[employee.matricula] || 0}
                onChange={(e) => handleHoraExtraChange50t(employee.matricula, e.target.value)}/>
              </TableCell>
              <TableCell>
              <TextField
                sx={{ width: "4rem" }}
                type="number"
                value={horasExtras100t[employee.matricula] || 0}
                onChange={(e) => handleHoraExtraChange100t(employee.matricula, e.target.value)}/>
              </TableCell>
              <TableCell>{calcularValorHoraExtraTotal(employee).toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</TableCell>
              <TableCell>{employee.insalubridadePerc}%</TableCell>
              <TableCell>{(insalubridadeTotal(employee)).toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</TableCell>
              <TableCell>{employee.periculosidadePerc}%</TableCell>
              <TableCell>{(PericulosidadeTotal(employee)).toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</TableCell>
              <TableCell>{(salarioBruto(employee)).toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</TableCell>
              <TableCell>{employee.inss.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</TableCell>
              <TableCell>{employee.ir.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</TableCell>
              <TableCell>{employee.outrasDeducoes.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</TableCell>
              <TableCell>{employee.outrasReceitas.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</TableCell>
              <TableCell>{(salarioLiquido(employee)).toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</TableCell>
              <TableCell>{employee.mesReferencia}</TableCell>
              <TableCell>{employee.anoReferencia}</TableCell>
            </TableRow>
          ))}
        </TableBody>
          </Table>
        </TableContainer>
          
      </Container>
    </>
  )
}

export default Colab
