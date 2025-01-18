/* eslint-disable @typescript-eslint/no-explicit-any */

export const loginAdapter = (response: any) => {
    return {
      accessToken: response.result.accessToken ?? "",
      refreshToken: response.result.refreshToken ?? "",
    };
  };