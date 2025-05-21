export const REVIEW_STATUS_ENUM = {
  // 待审核
  REVIEWING: 0,
  // 通过
  PASS: 1,
  // 拒绝
  REJECT: 2,
};

// 审核状态映射
export const REVIEW_STATUS_MAP: { 0: string; 1: string; 2: string } = {
  0: "待审核",
  1: "通过",
  2: "拒绝",
};

// 应用类型校验
export const APP_TYPE_ENUM: { SCORE: number; TEST: number } = {
  SCORE: 0,
  TEST: 1,
};

// 应用类型映射
export const APP_TYPE_MAP: { 0: string; 1: string } = {
  0: "得分类",
  1: "测评类",
};

// Second image content
export const APP_SCORING_STRATEGY_ENUM: { CUSTOM: number; AI: number } = {
  // 自定义
  CUSTOM: 0,
  // A1
  AI: 1,
};

// 应用评分策略映射
export const APP_SCORING_STRATEGY_MAP: { 0: string; 1: string } = {
  0: "自定义",
  1: "AI",
};
