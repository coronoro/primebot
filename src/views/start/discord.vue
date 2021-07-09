<template>
  <div class="flex flex-col w-full">
    <!-- LOGO
    <img alt="Vue logo" src="./assets/images/logo.png">
    -->

    <!-- -->
    <div class="flex justify-center items-center px-70">
      <div class="flex flex-col">
        <img
            alt="discord emblem"
            src="@/assets/images/Discord-Emblem.png">
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'DiscordStart',
  components: {},
  props: {},
  data() {
    return {}
  },
  computed: {},
  mounted() {
  },
  methods: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


.items li {
  @apply py-3;
  @apply text-white;
  @apply text-2xl;
}

.items a {
  @apply underline;
}
</style>
