/* eslint-disable @typescript-eslint/no-explicit-any */

export const loginAdapter = (response: any) => {
    return {
      accessToken: response.login.accessToken ?? "",
      refreshToken: response.login.refreshToken ?? "",
    };
  };