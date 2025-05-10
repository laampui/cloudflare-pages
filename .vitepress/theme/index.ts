import type { Theme as ThemeConfig } from "vitepress";
import DefaultTheme from "vitepress/theme";
import { h } from "vue";
import {
  NolebaseEnhancedReadabilitiesMenu,
  NolebaseEnhancedReadabilitiesScreenMenu,
} from "@nolebase/vitepress-plugin-enhanced-readabilities/client";

import "@nolebase/vitepress-plugin-enhanced-readabilities/client/style.css";
// import { NolebaseBreadcrumbs } from '@nolebase/vitepress-plugin-breadcrumbs/client'

export const Theme: ThemeConfig = {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // 为较宽的屏幕的导航栏添加阅读增强菜单
      "nav-bar-content-after": () => h(NolebaseEnhancedReadabilitiesMenu),
      // 为较窄的屏幕（通常是小于 iPad Mini）添加阅读增强菜单
      "nav-screen-content-after": () =>
        h(NolebaseEnhancedReadabilitiesScreenMenu),
      // 将面包屑导航组件添加到文档上方
      // 'doc-before': () => h(NolebaseBreadcrumbs),
    });
  },
};

export default Theme;
