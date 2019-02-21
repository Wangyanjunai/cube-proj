<template>
  <cube-button @click="showDialog()">show dialog</cube-button>
</template>

<script type="text/ecmascript-6">
    export default {
      name: 'CubeDialog',
      methods: {
        showDialog() {
          this.$createDialog({
            type: 'alert',
            title: 'Alert',
            content: 'Dialog Content'
          }).show()
        }
      }
    }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>

</style>
