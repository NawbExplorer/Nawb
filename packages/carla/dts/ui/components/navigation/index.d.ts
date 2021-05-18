export declare type Route = {
    name: string;
    params?: Record<string, any>;
};
export declare const navigation: {
    /**
     *
     * 不论是否存在都会加到路由栈中
     * @param name
     * @param params
     */
    push(name: string, params?: Record<string, any>): void;
    /**
     *
     * @param {number} count - page 出栈数量
     */
    pop(count?: number): void;
    popToRoot(): void;
    /**
     *
     *
     * @param {string} name
     * @param params
     */
    replace(name: string, params?: Record<string, any>): void;
    /**
     *
     *
     * @param {string} name
     * @param params
     */
    navigate(name: string, params?: Record<string, any>): void;
};
