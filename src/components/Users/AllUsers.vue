<template>
  <div>
    <h1>Users ({{ count }})</h1>
    <h3>User of Seoul: {{ seoul }}</h3>
    <h3>User percent of Seoul: {{ percent }}%</h3>
    <v-list two-line>
      <v-list-tile v-for="user in users" :key="user.userId" avatar>
        <v-list-tile-avatar color="grey lighten-3">
          <img :src="user.src" />
        </v-list-tile-avatar>

        <v-list-tile-content>
          <v-list-tile-title v-html="user.name"></v-list-tile-title>
          <v-list-tile-sub-title>ID: {{ user.userId }} / Addr: {{ user.address }}</v-list-tile-sub-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </div>
</template>

<script>
import { EventBus } from "@/main.js";
import { mapState, mapGetters } from "vuex";

export default {
  data() {
    return {};
  },
  computed: {
    ...mapState(["users"]),
    ...mapGetters({
      count: "countOfUsers",
      seoul: "userOfSeoul",
      percent: "percentOfSeoul",
    }),
  },
};
</script>
