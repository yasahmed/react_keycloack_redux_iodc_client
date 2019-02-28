import { UserManager, WebStorageStateStore } from "oidc-client";

import appConfig from "./auth-config";

const createUserManager = config => {
  const userStore = new WebStorageStateStore({ store: window.localStorage });
  const userManagerSettings = Object.assign({ userStore }, config);
  const userManager = new UserManager(userManagerSettings);
  userManager.events.addUserSignedOut(() => {
    userManager.removeUser();
  });
  return userManager;
};

const customUserManager = createUserManager(appConfig.oauth2);

export default customUserManager;
