// 打包方式：串行(series)  并行(parallel)
import { series } from "gulp";
import { withTaskName, run } from "./src/utils";

// gulp 不叫打包，做代码转化 vite

/**
 * 1. 打包样式
 * 2. 打包工具方法
 * 3. 打包所有组件
 * 4. 打包每个组件
 * 5. 生成一个组件库
 * 6. 发布组件
 */
// 可以先尝试一下删除根目录中的 dist
export default series(
  withTaskName("clean", async () => run("rm -rf ./dist")) // 删除dist目录
);
