export interface FetchParams {
  key: string;
  params?: any;
  callback(): any;
  expiresInSeconds?: number;
}

export interface KeyParams {
  key: string;
  params?: any;
}

export interface StoredData<T> {
  key: string;
  data: T;
  expiration: number;
}

export interface StorageCache {
  fetch<T>(params: FetchParams): Promise<T> | T;
}

export type ActionType = 'set' | 'delete';

export type Observer = <T>(actionType: ActionType, data: T) => void;
