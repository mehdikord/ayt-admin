<script>
import Slidebar from './components/menu/Slidebar.vue'
export default {
  name : "App",
  components: {
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

    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-btn dense flat round icon="mdi-view-list" @click="toggleRightDrawer" />

        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
          </q-avatar>
          Title
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="rightDrawerOpen" side="left" bordered>
      <slidebar></slidebar>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>


<style scoped>

</style>