import React from 'react';
import { Menu, List, Icon, Form, Input, Select, Button } from 'semantic-ui-react';

const CredentialDetails = ({ credential }) => (
  <div className='ui grid container'>
    <div className='row'>
      <Menu text fluid>
        <Menu.Item position='left' header>{credential.website}</Menu.Item>
        <Menu.Item position='right'><Icon name='trash outline' size='large'/></Menu.Item>
      </Menu>
    </div>
    <div className='row'>
      <div className='six wide column'>
        <List>
          <List.Item>
            <List.Header>URL</List.Header>
            {credential.website}
          </List.Item>
          <List.Item>
            <List.Header>User Name</List.Header>
            {credential.username}
          </List.Item>
          <List.Item>
            <List.Header>Password</List.Header>
            {credential.password_id}
          </List.Item>
        </List>
      </div>
      <div className='eight wide column'>
        <h4>Sharing</h4>
        <Form>
          <Form.Field id='form-textarea-control-opinion' control={Input} label='email' placeholder='Email' />
          <Form.Group widths='equal'>
            <Form.Field id='form-input-control-name' control={Input} label='Name' />
            <Form.Field id='form-input-control-group' control={Input} label='Group' />
          </Form.Group>
          <Form.Group widths='equal'>
            <Form.Field id='form-input-control-start-date' control={Input} label='Start Date' placeholder='from' />
            <Form.Field id='form-input-control-end-date' control={Input} label='End Date' placeholder='to' />
          </Form.Group>
          <Form.Group widths='equal'>
            <Select label='Access Type' options={[{key: 0, text: 'View-only'}]}/>
            <Form.Field id='form-button-control-public' control={Button} content='Send invitation' />
          </Form.Group>
        </Form>
      </div>
    </div>
  </div>
);

export default CredentialDetails;