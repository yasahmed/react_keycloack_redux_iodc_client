import { SIGN_IN, SIGN_OUT, SIGN_IN_SILENT } from '@constants';

import { createAction } from 'redux-actions';
import userManager from "@services/Auth";

export const signInSilent = createAction(SIGN_IN_SILENT, async () => {
  try {
    await userManager.signinSilent();
  } catch (ex) {
    console.log(`Cannot perform silent log in. Reason: ${ex.message}`);
  }
});

export const signIn = createAction(SIGN_IN, async () => {
  try {
    await userManager.signinRedirect();
  } catch (e) {
    console.log(e);
    console.log(
      'Unable to redirect to the Authorization Server. ' +
        "Please make sure it is up and running and exposes OpenID Provider's configuration endpoint."
    );
    // throw new Error(
    //   "Unable to redirect to the Authorization Server. " +
    //     "Please make sure it is up and running and exposes OpenID Provider's configuration endpoint."
    // );
  }
});

export const signOut = createAction(SIGN_OUT, async () => {
  try {
    await userManager.removeUser();
    await userManager.signoutRedirect();
  } catch (e) {
    console.log(
      'Unable to finish sign out process. ' + "Please make sure the server supports OpenID's end session endpoint."
    );
  }
});
