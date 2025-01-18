
export const getTokenFromLocalStorage = () => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('authToken');
    }
    return null;
  };
  
  export const removeTokenFromLocalStorage = () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('authToken');
    }
  };
  
  export const setTokenInLocalStorage = (token: string) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('authToken', token);
    }
  };