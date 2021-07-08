<template>
  <div>
      <h1>插槽演示</h1>
      <slot></slot>
      <slot name="header"></slot>
      <h1>中间的内容</h1>
      <slot name="footer"></slot>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
