<template>
  <div id="basicLayout">
    <a-layout style="height: 100vh">
      <a-layout-header class="header">
        <GlobalHeader></GlobalHeader>
      </a-layout-header>
      <a-layout-content class="conten">
        <router-view />
      </a-layout-content>
      <a-layout-footer class="footer"> 作者：杨杨杨</a-layout-footer>
    </a-layout>
  </div>
</template>

<script setup lang="ts">
import GlobalHeader from "@/components/GlobalHeader.vue";
</script>

<style scoped>
#basicLayout {
}
#basicLayout .conten {
  max-width: 1200px;
  width: 100%;
  box-sizing: border-box;
  background: linear-gradient(to right, #fefefe, #fff);
  margin: 0 auto 28px;
  padding: 20px;
}

#basicLayout .header {
  margin-bottom: 16px;
  box-shadow: #eee 1px 1px 5px;
}

.footer {
  background: #efefef;
  padding: 16px;
  text-align: center;
}
</style>
