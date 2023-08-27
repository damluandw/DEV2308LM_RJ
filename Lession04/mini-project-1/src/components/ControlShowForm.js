import React from 'react'
import Form from './Form';

export default function ControlShowForm(props) {
    const {isShow,objStudent }= props;
    if (isShow) {
      return <Form objStudent  = {objStudent}/>;
    } else {
      return <></>;
    }
}
