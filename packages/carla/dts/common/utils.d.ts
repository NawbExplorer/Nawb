export declare const is: {
    type(obj: unknown, str: string): boolean;
    string(obj: unknown): obj is string;
    object(obj: unknown): obj is object;
    function(obj: unknown): obj is Function;
    asyncFunction(obj: unknown): obj is Function;
    null(obj: unknown): obj is null;
    undefined(obj: unknown): obj is undefined;
    number(obj: unknown): obj is number;
    array(obj: unknown): obj is [];
};
export declare const verifyElementProps: (verifyProps: string[], props: Record<string, any>) => void;
