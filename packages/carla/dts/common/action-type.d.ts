/**发送路由入栈事件 */
export interface PluginRoutePushAction {
    action: 'plugin_route_push';
    data: {
        name: string;
        params?: Record<string, any>;
    };
}
/**发送路由出栈事件 */
export interface PluginRoutePopAction {
    action: 'plugin_route_pop';
    data: {
        count?: number;
    };
}
/**发送路由退出到栈底事件 */
export interface PluginRoutePopToRootAction {
    action: 'plugin_route_popToRoot';
}
/**发送路由替换事件 */
export interface PluginRouteReplaceAction {
    action: 'plugin_route_replace';
    data: {
        name: string;
        params?: Record<string, any>;
    };
}
/**发送路由替换事件 */
export interface PluginRouteNavigateAction {
    action: 'plugin_route_navigate';
    data: {
        name: string;
        params?: Record<string, any>;
    };
}
/**发送toast事件 */
export interface PluginToastAction {
    action: 'show_toast';
}
export declare type PostReactNativeAction = PluginRoutePushAction | PluginRoutePopAction | PluginRoutePopToRootAction | PluginRouteReplaceAction | PluginRouteNavigateAction | PluginToastAction;
