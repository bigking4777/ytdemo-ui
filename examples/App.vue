<template>
  <div id="app">
    app
    <TicketBase
      width="200px"
      height="120px"
      backColor=""
      radius="20px"
      Lwidth="30%"
      Rwidth="70%"
      size="28px"
      title="123456"
    >
    </TicketBase>
    <Ticket2
      Lw="50%"
      Rw="50%"
      height="200px"
      radius="20px"
      num="6"
      
    >
      <div slot="left">123</div>
      <div slot="right">123</div>
    </Ticket2>
  </div>
</template>


<script>
// import demo_one from "./packages/demo1/src/index";
// import demo_one from './packages/demo1'
// import Ticket2 from "./packages/Ticket2/main";

export default {
  name: "App",
  components: {
    // demo_one,
    // Ticket2,
  },

  created() {},
};
</script>

<style lang="scss">
</style>
