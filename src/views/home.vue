<template>
  <div class="flex flex-col w-full">
    <!-- LOGO
    <img alt="Vue logo" src="./assets/images/logo.png">
    -->
    <div class="flex flex-col lg:flex-row bg-primebot-gray justify-center items-center gap-16 py-10 px-3 lg:px-72">
      <img
          class="order-2 lg:order-1"
          alt="discord example"
          src="@/assets/images/discord-example.png">
      <div class="order-1 lg:order-2 px-7 lg:px-0">
        <h1 class="text-white text-4xl pb-7">Was ist der PrimeBot?</h1>
        <ul class="items list-square">
          <li>Benachrichtigung bei neuen Zeitvorschlägen von Gegnern</li>
          <li>Benachrichtigung bei Spielbestätigungen</li>
          <li>Benachrichtigung bei neu aufgestellten Lineups eurer Gegner inklusive
            <a href="https://euw.op.gg/multi/query=">Multi-OP.gg-Link</a></li>
          <li>Wöchentliche Benachrichtigung für den neuen Spieltag inklusive <a href="https://euw.op.gg/multi/query=">Multi-OP.gg-Link</a>
          </li>
          <li>Benachrichtigung bei neuen Zeitvorschlägen von eurem Team</li>
          <li>Benachrichtigung zu neuen Spielen und Lineups in der Kalibrierungsphase</li>
          <li>Legt selber fest, welche Benachrichtigungen ihr bei Telegram bekommen möchtet</li>
          <li>Legt eure Discord-Teamrolle fest, die bei Benachrichtigungen erwähnt werden soll</li>
        </ul>
      </div>
    </div>
    <!-- -->
    <div class="flex flex-col lg:flex-row justify-center items-center gap-16 lg:px-72 py-10">
      <div class="flex flex-col items-center gap-5">
        <router-link to="discord">
          <img
              class="max-h-min lg:h-80"
              alt="discord emblem"
              src="@/assets/images/Discord-Emblem.png">
        </router-link>
        <router-link
            to="discord"
            class="text-2xl">
          Discord
        </router-link>
        <span class="text-2xl text-center">
          Ladet den PrimeBot auf euren <b>Discord-Server</b> ein und erhaltet Benachrichtigungen für eure Teams.
        </span>
        <span class="text-2xl text-center">
          Klicke <router-link to="discord">hier</router-link>, um für Discord dein Team zu registrieren.
        </span>
      </div>
      <div class="flex flex-col items-center gap-5">
        <router-link
            to="telegram">
          <img
              class="max-h-min lg:h-80"
              alt="telegram emblem"
              src="@/assets/images/Telegram-Emblem.png">
        </router-link>
        <router-link
            to="telegram"
            class="text-2xl">Telegram
        </router-link>
        <span class="text-2xl text-center">
          Fügt den PrimeBot zu eurer <b>Telegramgruppe</b> hinzu und bleibt so immer auf dem Laufenden.
        </span>
        <span class="text-2xl text-center">
          Klicke <router-link to="telegram">hier</router-link>hier, um dein Team zu registrieren.
        </span>
      </div>


    </div>
    <div class="flex flex-col gap-5 my-5">
      <span class="text-xl text-center">
        Wenn euch der Primebot gefällt, empfehlt ihn gerne weiter und hinterlasst im <a
          href="https://www.google.com/url?q=https%3A%2F%2Fwww.primeleague.gg%2Fde%2Fforums%2F1418-league-of-legends%2F1469-off-topic%2F637268-primeleague-updates-fr-dein-team-per-discord-oder-telegram-aufs-handy&sa=D&sntz=1&usg=AFQjCNGRzv2qzbTb4VfP0dkHrbx6v6XZBA">Primeleague-Forenthread</a> einen
        Kommentar.
        <br>
        Das freut nicht nur den Bot. 😀
      </span>
      <span class="text-xl text-center">
        Bei Fragen, Anregungen oder Wünschen schreibt uns direkt bei <router-link
          to="contact">Discord oder Telegram</router-link>.
      </span>

    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
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
a {
  @apply underline;
}

.items li {
  @apply py-3;
  @apply text-white;
  @apply text-2xl;
}


</style>
