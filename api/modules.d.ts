declare namespace NodeJS {
  export interface ProcessEnv {
    PORT: number;
    NODE_ENV: string;
    MONGODB_URI_DEVELOPMENT: string;
    MONGODB_URI_TEST: string;
    MONGODB_DB_NAME?: string;
    MONGODB_DB_NAME_TEST?: string;
    MONGO_USERNAME: string;
    MONGO_PASSWORD: string;
    JWT_SECRET: string;
  }
}
