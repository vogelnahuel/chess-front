declare global {
    interface Window {
      _env_: { [key: string]: unknown };
    }
  }
  interface AppConfig {
    apiUrl?: string;
  }
  
  export const config: AppConfig = {
    apiUrl: process.env.NEXT_PUBLIC_BASE_URL,
  } as const;