import { ContextBasicProps } from './ContextBasicProps';
// 使用单列 避免重复创建

export class ContextProvider {
  private static _instance: ContextProvider;
  public value: ContextBasicProps;

  public setContext(context: Record<string, any> | ContextBasicProps) {
    this.value = context as ContextBasicProps;
  }

  public addToContext(obj: Record<string, any>) {
    this.value = Object.assign({}, this.value, obj);
  }

  public static getSingleton(): ContextProvider {
    if (ContextProvider._instance) {
      return ContextProvider._instance;
    } else {
      ContextProvider._instance = new ContextProvider();
      return ContextProvider._instance;
    }
  }
}

export const Context = ContextProvider.getSingleton();
