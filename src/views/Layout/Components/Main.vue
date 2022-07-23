<template>
    <div class="main-wrap">
        <router-view />
<Footer/>
    </div>
</template>

<script>
import Footer from './Footer.vue'
export default({
    components:{Footer},
    setup() {
        
    },
})
</script>

<style lang="scss" scoped>
.main-wrap {
  width: 100%;
}
</style>
