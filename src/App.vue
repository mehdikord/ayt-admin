<script>
import Slidebar from "@/components/menu/Slidebar.vue";
import { NConfigProvider, NGlobalStyle, faIR, dateFaIR } from 'naive-ui';
export default {
  name : "App",
  components: {
    "slidebar" : Slidebar,
    NConfigProvider,
    NGlobalStyle,
  },
  mounted() {
    console.log("✅ App mounted");
  },
  data() {
    return {
      faIR,
      dateFaIR,
      rtlConfig: [{ name: 'fa', rtl: true }], // تنظیمات RTL برای زبان فارسی
      themeOverrides: {
        common: {
          // fontFamily: 'Vazirmatn, Tahoma, sans-serif'
        },
      },
    };
  },
};

</script>

<template>
  <n-config-provider :locale="faIR" :date-locale="dateFaIR" :rtl="rtlConfig" :theme-overrides="themeOverrides">
    <n-global-style />
    <div>
     <slidebar></slidebar>
      <router-view />
    </div>
  </n-config-provider>
</template>


<style scoped>

</style>