declare global {
    interface Window {
      _env_: { [key: string]: unknown };
    }
  }
  interface AppConfig {
    apiUrl?: string;
  }
  
  export const config: AppConfig = {
    apiUrl: import.meta.env.VITE_API_URL ?? "",
  } as const;