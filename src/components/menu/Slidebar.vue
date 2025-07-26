<template>
  <n-layout has-sider dir="rtl" style="text-align: right" class="" >
    <n-layout-sider
        bordered
        collapse-mode="width"
        :collapsed-width="64"
        :width="240"
        :collapsed="collapsed"
        show-trigger
        @collapse="handleCollapse(true)"
        @expand="handleCollapse(false)"
        :native-scrollbar="false"
    >
      <n-menu
          :collapsed="collapsed"
          :collapsed-width="64"
          :collapsed-icon-size="22"
          :options="menuOptions"
          key-field="whateverKey"
          label-field="whateverLabel"
          children-field="whateverChildren"
      />
    </n-layout-sider>
    <n-layout />
  </n-layout>
</template>

<script>
import {
  BookOutline as BookIcon,
  PersonOutline as PersonIcon,
  WineOutline as WineIcon
} from "@vicons/ionicons5";
import { NIcon } from "naive-ui";
import { h } from "vue";

function renderIcon(icon) {
  return () => h(NIcon, null, { default: () => h(icon) });
}

export default {
  name: "Slidebar",
  mounted() {
    console.log("✅ Slidebar component mounted!");
  },
  data() {
    return {
      collapsed: true,
      menuOptions: [
        {
          whateverLabel: "باد را گوش کن",
          whateverKey: "hear-the-wind-sing",
          icon: renderIcon(BookIcon)
        },
        {
          whateverLabel: "برقص برقص برقص",
          whateverKey: "Dance Dance Dance",
          icon: renderIcon(BookIcon),
          whateverChildren: [
            {
              type: "group",
              whateverLabel: "افراد",
              whateverKey: "people",
              whateverChildren: [
                {
                  whateverLabel: "راوی",
                  whateverKey: "narrator",
                  icon: renderIcon(PersonIcon)
                },
                {
                  whateverLabel: "مرد گوسفندی",
                  whateverKey: "sheep-man",
                  icon: renderIcon(PersonIcon)
                }
              ]
            },
            {
              whateverLabel: "نوشیدنی",
              whateverKey: "beverage",
              icon: renderIcon(WineIcon),
              whateverChildren: [
                {
                  whateverLabel: "ویسکی",
                  whateverKey: "whisky"
                }
              ]
            },
            {
              whateverLabel: "غذا",
              whateverKey: "food",
              whateverChildren: [
                {
                  whateverLabel: "ساندویچ",
                  whateverKey: "sandwich"
                }
              ]
            },
            {
              whateverLabel: "گذشته افزایش می‌یابد، آینده عقب‌نشینی می‌کند.",
              whateverKey: "the-past-increases-the-future-recedes"
            }
          ]
        }
      ]
    };
  },
  methods: {
    handleCollapse(value) {
      this.collapsed = value;
    }
  }
};
</script>

<style scoped>
.n-layout {
  direction: rtl;
}
</style>
