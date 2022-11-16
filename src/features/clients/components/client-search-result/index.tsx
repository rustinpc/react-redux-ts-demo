import React from 'react';

import { Client } from '../../types';
import { ClientAvatar, ClientAvatarContainer, ClientInfoText, ClientMainInfo, ClientSearchResultButton, ClientSearchResultContainer } from './styles';

interface ComponentProps {
  client: Client;
  onSelectClient: () => void;
}

const ClientSearchResult: React.FC<ComponentProps> = ({
  client,
  onSelectClient
}) => {

  return (
    <ClientSearchResultContainer>
      <ClientSearchResultButton onClick={onSelectClient}>
        <ClientMainInfo>
            <ClientAvatarContainer><ClientAvatar src={client.avatar} /></ClientAvatarContainer>
            <ClientInfoText>
            <div dangerouslySetInnerHTML={{ __html: client.name }} />
            <div>{client.title}</div>
            </ClientInfoText>
        </ClientMainInfo>
      </ClientSearchResultButton>
    </ClientSearchResultContainer>
  );
}

export default ClientSearchResult;
