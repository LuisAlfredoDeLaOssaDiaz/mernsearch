import React, { useState } from 'react';
import { Tab, Button } from "semantic-ui-react";
import { BasicModal } from '../../../components/Shared';
import { UserForm } from '../../../components/Admin/Users';

import './Users.scss'

export function Users() {
  const [showModal, setShowModal] = useState(false);
  
  const onOpenCloseModal = () => setShowModal((prevState) => !prevState);

  const panes = [
    {
      menuItem: "Usuarios Activos",
      render: () => (
        <Tab.Pane attached={false}>
          <h2>Usuarios Activos. </h2>
        </Tab.Pane>
      )
    },
    {
      menuItem: "Usuarios Inactivos",
      render: () => (
        <Tab.Pane attached={false}>
          <h2>Usuarios Inactivos. </h2>
        </Tab.Pane>
      )
    }
  ]
  return (
    <>
      <div className='users-page'>
        <Button className='users-page__add' primary onClick={onOpenCloseModal} >
          Nuevo Usuario.
        </Button>
        <Tab menu={{ secondary: true}} panes={panes} />
      </div>

    <BasicModal show={showModal} close={onOpenCloseModal} title="Crear nuevo Usuario." >
      <UserForm close={onOpenCloseModal} 
      // user={{name:1}}
      />
    </BasicModal>
    </>
  )
}
