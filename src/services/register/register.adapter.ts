/* eslint-disable @typescript-eslint/no-explicit-any */

export const registerAdapter = (response: any) => {
    return {
      user: response.user?? "",
      token: response.token ?? "",
    };
  };