/* eslint-disable @typescript-eslint/no-explicit-any */

export const clubAdapter = (response: any) => {
    return {
        clubs: response.clubs?? "",
    };
  };