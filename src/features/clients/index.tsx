import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { Client } from './types';
import * as actions from './actions';
import { RootState } from '../../app/store';
import { selectSelectedClient } from './selectors';
import { getClientList } from '../../app/endpoints';
import ClientSearch from './containers/client-search';
import ClientDetails from './components/client-details';

interface ComponentProps {
  selectedClient: Client | null;
  setClientList: (clientList: Array<Client>) => void;
  setSelectedClient: (clientIndex: number) => void;
}

const ClientsContainer: React.FC<ComponentProps> = ({
  selectedClient,
  setClientList,
  setSelectedClient
}) => {
  useEffect(() => {
    const abortController = new AbortController();
    (async () => {
      try {
        const clientListResponse = await getClientList(abortController.signal);
        setClientList(clientListResponse);
      } catch {

      }
    })();
    return () => {
       abortController.abort();
    };
    // eslint-disable-next-line
  }, []);

  return selectedClient ? 
    <ClientDetails
      client={selectedClient || null}
      onCloseClient={() => { setSelectedClient(null); }}
    /> : <ClientSearch />;
}

export default connect((state: RootState) => ({
    selectedClient: selectSelectedClient(state)
  }), {
  setClientList: actions.setFullClientList,
  setSelectedClient: actions.setSelectedClientIndex
})(ClientsContainer);
