<template>
    <cube-tab-bar
      v-model="selectedLabelDefault"
      :data="tabs"
      @click="clickHandler"
      @change="changeHandler">
    </cube-tab-bar>
</template>

<script type="text/ecmascript-6">
  export default {
    data () {
      return {
        selectedLabelDefault: 'Vip',
        tabs: [{
          label: '书架',
          icon: 'cubeic-like'
        }, {
          label: '首页',
          icon: 'cubeic-home'
        }, {
          label: '充值',
          icon: 'cubeic-vip'
        }, {
          label: '我的',
          icon: 'cubeic-person'
        }]
      }
    },
  methods: {
    clickHandler (label) {
      // if you clicked home tab, then print 'Home'
      console.log(label)
    },
    changeHandler (label) {
      // if you clicked different tab, this methods can be emitted
    }
  }
  }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
</style>
