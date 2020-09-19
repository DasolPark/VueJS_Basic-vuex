<template>
  <div>
    <h1>Users ({{ $store.getters.countOfUsers }})</h1>
    <h3>User of Seoul: {{ $store.getters.userOfSeoul }}</h3>
    <h3>User percent of Seoul: {{ $store.getters.percentOfSeoul }}%</h3>
    <v-list two-line>
      <v-list-tile v-for="user in $store.state.users" :key="user.userId" avatar>
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

export default {
  data() {
    return {};
  },
  mounted() {
    EventBus.$on("signUp", (user) => {
      this.users.push(user);
    });
  },
};
</script>
