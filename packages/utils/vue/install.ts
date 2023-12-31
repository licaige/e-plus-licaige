// 工具函数
import type { Plugin } from "vue";

export type SFCWithInstall<T> = T & Plugin;// 添加插件类

export const withInstall = <T, E extends Record<string, any>>(
  main: T, // 主要组件
  extra?: E // 拓展组件
) => {
  (main as SFCWithInstall<T>).install = (app): void => {
    // 这边设计中，可以拓展的组件，也可以一并放入，例如 button、button-group
    for (const comp of [main, ...Object.values(extra ?? {})]) {
      app.component(comp.name, comp); // 注册全局组件
    }
  };

  if (extra) {
    for (const [key, comp] of Object.entries(extra)) {
      (main as any)[key] = comp;
    }
  }
  return main as SFCWithInstall<T> & E;
};
