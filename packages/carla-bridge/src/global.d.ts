interface DeviceInfo {}

declare module NodeJS {
  interface Global {
    device: Record<string, any>;
  }
}
