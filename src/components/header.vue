<template>
  <div class="flex w-full mt-5 content-around overflow-hidden">
    <h3 class="px-5 flex-1">
      PrimeBot
    </h3>
    <div class="flex">
      <MenuItem
          v-for="(item, index) in items"
          :key="index"
          :item="item"
          :selected="isSelected(index)"
          @select="selectedIndex = index"
          class="px-3"/>
    </div>
    <div>
      S
    </div>
  </div>
</template>

<script>
import MenuItem from './menu-item'

export default {
  name: 'Header',
  components: {
    MenuItem
  },
  props: {},
  data() {
    return {
      selectedIndex: 0,
      items: [
        {
          name: 'Start',
          route: 'home',
          children: [
            {name: 'Discord'},
            {name: 'Telegram'}
          ]
        },
        {name: 'Lass dein Spiel casten', route: 'casting',},
        {name: 'Finde Scrims für dein Team', route: 'scrims',},
        {name: 'PrimeBot Crew & Kontakte', route: 'contact'}
      ]
    }
  },
  computed: {
    isSelected() {
      const selected = this.selectedIndex;
      return (index) => {
        return index === selected
      }
    }
  },
  mounted() {
    const routeName = this.$route.name;
    if (routeName) {
      for (const [item, index] of this.items.entries()) {
        if (item.route === routeName) {
          this.selectedIndex = index;
          break;
        }
      }
    }
  },
  methods: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
