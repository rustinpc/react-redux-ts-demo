import { RootState } from "../../../../app/store";
import { selectClientSearchQuery, selectClientsToDisplay } from "../../selectors";

const clientSearchSelectors = (state: RootState) => ({
  searchQuery: selectClientSearchQuery(state),
  clientList: selectClientsToDisplay(state),
});

export default clientSearchSelectors;
