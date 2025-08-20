<script>
import Slidebar from './components/menu/Slidebar.vue'
import Template_Title from "@/components/menu/Template_Title.vue";

export default {
  name : "App",
  components: {
    "template_title":Template_Title,
   "slidebar": Slidebar,
  },
  data(){
    return {
      rightDrawerOpen : false,

    }
  },
  methods:{
    toggleRightDrawer () {
      this.rightDrawerOpen = !this.rightDrawerOpen
    }
  }



};

</script>

<template>
  <q-layout view="lHr lpR lFf">

    <q-header elevated class=" text-dark" style="background-color: #adb883">
      <q-toolbar>
        <q-btn dense flat round icon="mdi-view-list" @click="toggleRightDrawer" />

        <q-toolbar-title>
          <strong class="font-20 font-weight-800" >آی&#x200C;ت </strong>
          <strong class="font-20 font-weight-800 q-ml-xs">کافه</strong>
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="rightDrawerOpen" side="left" bordered>
      <slidebar></slidebar>
    </q-drawer>

    <q-page-container>
<template_title></template_title>
      <router-view />
    </q-page-container>

  </q-layout>
</template>


<style scoped>

</style>