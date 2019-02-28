import ClientListPage from "@pages/ClientList";
import { removeClient } from "@actions/clients.action";
import { connected } from '@store/connected';
// const mapStateToProps = state => {
//   return { clients: state.clients };
// };

// const mapDispatchToProps = dispatch => ({
//   deleteClient(id) {
//     dispatch(removeClient(id));
//   }
// });

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(ClientListPage);

export default connected(ClientListPage)
  .mappingStateToProps(state => {
    return {
      clients: state.clients
    };
  })
  .mappingActionsToProps({ removeClient })
  .build();
