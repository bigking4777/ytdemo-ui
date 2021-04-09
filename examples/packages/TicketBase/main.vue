<template>
  
    <div ref="yt" class="main">
        <div class="left">{{title}}</div>
        
    </div>
  
</template>
<script>
export default {
  name: "TicketBase",
  props:[
      'width',
      'height',
      'backColor',
      'radius',
      'Lwidth',
      'size',
      'title'
        
  ],
  mounted() {
    this.$refs.yt.style.setProperty("--height", this.height?this.height:'120px');
    this.$refs.yt.style.setProperty("--width", this.width?this.width:'200px');
    this.$refs.yt.style.setProperty("--backColor", this.backColor?this.backColor:'linear-gradient(to right,#ff9000 0,#ff5000 100%)');
    this.$refs.yt.style.setProperty("--radius", this.radius?this.radius:'20px');
    this.$refs.yt.style.setProperty("--size", this.size?this.size:'20px');
  },
};
</script>
<style lang="scss" scoped>
.main {
  -webkit-mask: radial-gradient(circle at 0, #0000 var(--radius), #000 0);
  width: var(--width);
  height: var(--height);
  background: var(--backColor);
  display: flex;
}
.left{
    width:var(--Lwidth);
    height:100%;
    margin-left: var(--radius);
    padding-left: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: var(--size);
}

</style>