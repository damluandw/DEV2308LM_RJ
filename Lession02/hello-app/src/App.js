import React, { Component } from 'react'
import FunctionCOmpDemo from './components/FunctionCOmpDemo'
import ClassCompDemo from './components/ClassCompDemo'
import Member from './components/Member'
import MemberList from './components/MemberList'
import MemberInfo from './components/MemberInfo'
import CompState from './components/CompState'

export default class App extends Component {
  
  render() {
    var member ={
      path: 'imgs/avatar.jpg',
      name: 'Dam Luan',
      age : '23'
    }
    return (      
      <div className='container my-5 border'>
        <h1 className='text-center'>Demo Function/class Component; props, statte;</h1>
        <hr/>
          {/* sử dụng function Component */}
          <FunctionCOmpDemo name="Dam Luan" adress ="DevMaster"/>
          <hr/>
          <FunctionCOmpDemo name="Dam Luan 2" adress ="DevMaster 2" company ="DevMaster"/>
          {/* sử dụng class component */}
          <ClassCompDemo/>
          <ClassCompDemo name ="Dam Luan" age ="27" company="Devmaster"/>
          <Member name= "Dam Luan" age ="26"/>
          <MemberList/>
          <hr/>
          {/* Sử dụng member info với props là info = member */}
          <MemberInfo info ={member}/>
          {/* Demo Component State */}
          <CompState/>
      </div>
    )
  }
}
