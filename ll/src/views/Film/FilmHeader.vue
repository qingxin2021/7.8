<template>
  <div>
      <ul>
          <router-link to="/film/nowplaying" tag="li" active-class="active">正在热映</router-link>
          <router-link to="/film/comingsoon" tag="li" active-class="active">即将上映</router-link>
      </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  ul {
      display: flex;
      li {
          flex: 1;
          height: 40px;
          line-height: 40px;
          text-align: center;
          background-color: rgb(199, 202, 18);
          font-weight: 800;
      }
  }
  .active {
      color: rgb(0, 174, 255);
      border-bottom: 2px solid rgb(212, 0, 255);
  }
  .fixed {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 40px;
    background-color: rgb(27, 117, 235);
  }
</style>
