<template>
  <div class="flex flex-col w-full bg-primebot-gray justify-center items-center gap-3 py-10">
    <h1 class="text-white text-4xl pb-7">Disclaimer</h1>
    <span class="text-white text-center">
      Dieser Bot ist nicht in Kooperation mit der PrimeLeague bzw. der Freaks4u Gaming GmbH entstanden.
    </span>
    <span class="text-white text-center">
      Der Bot wurde nach bestem Gewissen realisiert, und nach einer Testphase für andere Teams zur Verfügung gestellt.
    </span>
    <span class="text-white text-center">
      Dennoch sind alle Angaben ohne Gewähr!
    </span>

  </div>
</template>

<script>
export default {
  name: 'Footer',
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
