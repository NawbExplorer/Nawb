interface Carla {
  pluginName: string;
  sourceLocker: boolean;
}

declare var carla: Carla;

declare var device: any;

declare module NodeJS {
  interface Global {
    device: Record<string, any>;
  }
}
