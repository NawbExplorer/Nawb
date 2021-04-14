declare module NodeJS {
  interface Global {
    device: Record<string, any>;
  }
}

export * from './components';
