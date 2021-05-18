import { ContextBasicProps } from './ContextBasicProps';
export declare class ContextProvider {
    private static _instance;
    value: ContextBasicProps;
    setContext(context: Record<string, any> | ContextBasicProps): void;
    addToContext(obj: Record<string, any>): void;
    static getSingleton(): ContextProvider;
}
export declare const Context: ContextProvider;
