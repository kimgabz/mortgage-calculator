import React from 'react';
import './App.css';
import { Header } from './component/header.component';
import Mortgage from './component/mortgage.component';

export default function App() {
  return (
    <div>
      <Header title="Mortgage Calculator"/>
      <Mortgage
        principal="200000"
        years="30"
        rate="5"
      />
    </div>
  )
}
