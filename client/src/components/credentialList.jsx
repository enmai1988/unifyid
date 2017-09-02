import React from 'react';
import { List } from 'semantic-ui-react';

const CredentialList = ({ credentials, handleCredentialSelect }) => (
  <List divided>
    {credentials.map((credential, index) => 
      <List.Item 
        as='a'
        key={index} 
        onClick={e => handleCredentialSelect(e, credential)}
      >
        <List.Content>
          <List.Header>{credential.website}</List.Header>
        </List.Content>
      </List.Item>
    )}
  </List>
);

export default CredentialList;