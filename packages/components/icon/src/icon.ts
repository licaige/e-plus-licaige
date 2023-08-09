import { ExtractPropTypes, PropType } from "vue";
// 设计 icon 中会使用的入参配置
export const iconProps = {
  size: [Number, String] as PropType<number | string>,
  color: String,
};

export type IconProps = ExtractPropTypes<typeof iconProps>;
