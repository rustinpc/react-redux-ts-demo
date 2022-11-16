import React from 'react';
import { connect } from 'react-redux';

import Input from '../../../../common/components/input';
import { Client } from '../../types';
import * as actions from '../../actions';
import selectors from './selectors';
import ClientSearchResult from '../../components/client-search-result';
import { ClientSearchContainer, ClientSearchResultContainer } from './styles';

interface ComponentProps {
  searchQuery: string;
  clientList: Array<Client>;
  setSearchQuery: (queryString: string) => void;
  setSelectedClientIndex: (clientIndex: number) => void;
}

const ClientSearch: React.FC<ComponentProps> = ({
  searchQuery,
  clientList,
  setSearchQuery,
  setSelectedClientIndex
}) => {
  return (
    <ClientSearchContainer>
      <p><strong>Clients</strong></p>
      <Input
        inputType='text'
        inputValue={searchQuery}
        onInputChange={(ev) => {
          setSearchQuery(ev.target.value || '');
        }}
      />
      <ClientSearchResultContainer>
        {clientList.map((client, i) => (
          <ClientSearchResult
            key={`${client.name}-{i}`}
            client={client}
            onSelectClient={() => { setSelectedClientIndex(i); }}
          />
        ))}
      </ClientSearchResultContainer>
    </ClientSearchContainer>
  );
}

export default connect(selectors, {
  setSearchQuery: actions.setSearchQuery,
  setSelectedClientIndex: actions.setSelectedClientIndex,
})(ClientSearch);
