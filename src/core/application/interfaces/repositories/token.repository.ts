export type TokenRepository = {
    get: (input: { key: string }) => string | null;
    store: (input: { key: string; token: string }) => boolean;
    delete: (input: { key: string }) => boolean;
    key: string;
  }
  