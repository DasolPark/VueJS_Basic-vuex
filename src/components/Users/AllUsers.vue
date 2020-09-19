<template>
  <div>
    <h1>Users ({{ countOfUser }})</h1>
    <h3>User of Seoul: {{ userOfSeoul }}</h3>
    <h3>User percent of Seoul: {{ percenOfSeoul }}%</h3>
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

export default {
  data() {
    return {
      users: [
        {
          userId: "hoza123",
          password: "123",
          name: "Hoza",
          address: "Seoul",
          src: "https://randomuser.me/api/portraits/men/76.jpg",
        },
        {
          userId: "max123",
          password: "456",
          name: "Max",
          address: "Berlin",
          src: "https://randomuser.me/api/portraits/men/77.jpg",
        },
        {
          userId: "lego123",
          password: "789",
          name: "Lego",
          address: "Busan",
          src: "https://randomuser.me/api/portraits/men/78.jpg",
        },
      ],
    };
  },
  computed: {
    countOfUser: function () {
      return this.users.length;
    },
    userOfSeoul: function () {
      let count = 0;

      this.users.forEach((user) => {
        if (user.address === "Seoul") count++;
      });

      return count;
    },
    percenOfSeoul: function () {
      return Math.round((this.userOfSeoul / this.countOfUser) * 100);
    },
  },
  mounted() {
    EventBus.$on("signUp", (user) => {
      this.users.push(user);
    });
  },
};
</script>
