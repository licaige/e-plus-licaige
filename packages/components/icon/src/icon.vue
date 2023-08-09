<template>
 <!-- 设计关于 bem 的操作，放入 class 内-->
  <i :class="bem.b()" :style="style">
    <slot></slot>
  </i>
</template>

<script lang="ts" setup>
import { useNamespace } from "@e-plus/hook/index";
import { computed, CSSProperties } from "vue";
import { iconProps } from "./icon";
// 通过 hooks，获取 class 名称
const bem = useNamespace("icon");
// 导出组件的名称，后续有用
defineOptions({
  name: "EIcon",
});
// 导入 props 入参
const props = defineProps(iconProps);
// 通过计算属性，获取组件的字体大小和颜色
const style = computed<CSSProperties>(() => {
  if (!props.size && !props.color) {
    return {};
  }
  return {
    ...(props.size ? { "font-size": props.size + "px" } : {}),
    ...(props.color ? { color: props.color } : {}),
  };
});
</script>
