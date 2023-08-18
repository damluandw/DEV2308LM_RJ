import React, { Component } from 'react'
import Member from './Member'

export default class MemberList extends Component {
  render() {
    return (
      <div>
        <h2>MemberList</h2>
        <Member name= "Nguyễn Văn A" age ="26"/>
        <Member name= "Nguyễn Văn B" age ="26"/>
        <Member name= "Nguyễn Văn C" age ="26"/>
        <Member name= "Nguyễn Văn D" age ="26"/>
        <Member name= "Nguyễn Văn E" age ="26"/>
      </div>
    )
  }
}
