/* eslint-disable @typescript-eslint/no-explicit-any */

export const profileAdapter = (response: any) => {
    return {
      user: response.user ?? "",
    };
  };