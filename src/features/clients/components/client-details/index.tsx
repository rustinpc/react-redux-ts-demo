import React from 'react';

import { Client } from '../../types';
import { ClientAvatar, ClientAvatarContainer, ClientDetailsContainer, ClientInfoText, ClientMainInfo, CloseButton } from './styles';

interface ComponentProps {
  client: Client;
  onCloseClient: () => void;
}

const ClientDetails: React.FC<ComponentProps> = ({
  client,
  onCloseClient
}) => {

  return (
    <ClientDetailsContainer>
      <ClientMainInfo>
        <ClientAvatarContainer><ClientAvatar src={client.avatar} /></ClientAvatarContainer>
        <ClientInfoText>
          <p><strong dangerouslySetInnerHTML={{ __html: client.name }} />, {client.title}</p>
          {client.quote && <p><strong>Quote:</strong> <em>{client.quote}</em></p>}
          {client.nationality && <p><strong>Nationality:</strong> {client.nationality}</p>}
        </ClientInfoText>
      </ClientMainInfo>
      <CloseButton onClick={onCloseClient}>X</CloseButton>
    </ClientDetailsContainer>
  );
}

export default ClientDetails;
