<template>
  <div ref="ticket" class="ticket-all">
    <div class="ticket">
        <div class="pl">
            <slot name="left"></slot>
        </div>
        
    </div>
    <div class="ticket-left">
      <div class="border pl">
          <slot name="right"></slot>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Ticket2",
  props: {
      Lw:String,
      Rw:String,
      height:String,
      radius:String,
      Lback:String,
      Rback:String,
      border:String,
      Bordercolor:String,
      num:String,
      borderH:String
  },
  data() {
    return {};
  },
    mounted() {
    this.$refs.ticket.style.setProperty("--height", this.height?this.height:'100px');
    this.$refs.ticket.style.setProperty("--borderH", this.radius?`calc(100% - ${this.radius})`:`calc(100% - 10px)`);
    this.$refs.ticket.style.setProperty("--Lw", this.Lw?this.Lw:'100px');
    this.$refs.ticket.style.setProperty("--Rw", this.Rw?this.Rw:'200px');
    this.$refs.ticket.style.setProperty("--Lback", this.backColor?this.backColor:'#f7eed6');
    this.$refs.ticket.style.setProperty("--Bordercolor", this.Bordercolor?this.Bordercolor:'rgb(252, 200, 132)');
    this.$refs.ticket.style.setProperty("--Rback", this.backColor?this.backColor:'linear-gradient(to right,#ff9000 0,#ff5000 100%)');
    this.$refs.ticket.style.setProperty("--radius", this.radius?this.radius:'10px');
    this.$refs.ticket.style.setProperty("--pos", this.radius?`-${this.radius}`:'-10px');
    this.$refs.ticket.style.setProperty("--bos", this.radius?`${this.radius/2}`:'5px');
    this.$refs.ticket.style.setProperty("--num", this.num==6?'/50%':'/100%');
  },
};
</script>
<style lang="scss" scoped>
.ticket-all {
  display: flex;
}
.ticket {
  -webkit-mask: radial-gradient(circle at var(--radius) var(--radius), #0000 var(--radius), red 0) var(--pos) var(--pos) var(--num);
  //  -webkit-mask: radial-gradient(circle at 20px , transparent 20px, red 20px);
  background: var(--Rback);
  height: var(--height);
  width: var(--Lw);
}
.ticket-left {
  
  height: var(--height);
  width: var(--Rw);
  background: var(--Lback);
  transform: translateX(var(--pos));
  -webkit-mask: radial-gradient(circle at right 0, transparent var(--radius), red var(--radius)),
    radial-gradient(circle at right 100%, transparent var(--radius), red var(--radius));
  z-index: -2;
  -webkit-mask-composite: source-in; //显示重合的地方
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.border {
  border: 2px solid var(--Bordercolor);
  height: var(--borderH);
  width: 100%;
  margin-right: var(--bos);
  
}
.pl{
    padding-left:var(--radius) ;
}
</style>