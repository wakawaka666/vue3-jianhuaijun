<template>
  <div class="layout">
    <NavigationBar />
    <Main />
  </div>
</template>

<script>
import NavigationBar from "./Components/NavigationBar";
import Main from "./Components/Main";

export default {
  name: "layout",
  components: { NavigationBar, Main },
  setup() {},
};
</script>

<style lang="scss" scoped>
.layout {
  // background-color: gray;
}
</style>
