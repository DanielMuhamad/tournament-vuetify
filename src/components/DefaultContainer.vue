<template>
  <v-app>
    <v-navigation-drawer persistent :mini-variant="miniVariant" :clipped="clipped" v-model="drawer" enable-resize-watcher fixed app>
      <v-list>
        <div align="center">
          <a href="#">
            <img src="../assets/logo.png" alt="">
          </a>
        </div>
        <v-list-tile value="true" v-for="(item, i) in items" :key="i" :to="item.path">
          <v-list-tile-action>
            <v-icon v-html="item.icon"></v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar app :clipped-left="clipped">
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-btn icon @click.stop="miniVariant = !miniVariant">
        <v-icon v-html="miniVariant ? 'chevron_right' : 'chevron_left'"></v-icon>
      </v-btn>
            
      <!-- <v-toolbar-title v-text="title"></v-toolbar-title> -->
      <v-spacer></v-spacer>
      <!-- <v-btn icon @click.stop="rightDrawer = !rightDrawer">
        <v-icon>menu</v-icon>
      </v-btn> -->
      <v-btn @click="signOut()"><v-icon>power_settings_new</v-icon>Logout</v-btn>
    </v-toolbar>

    <v-content>
      <router-view></router-view>
    </v-content>

    <!-- <v-navigation-drawer temporary :right="right" v-model="rightDrawer" fixed app>
      <v-list>
        <v-list-tile @click="right = !right">
          <v-list-tile-action>
            <v-icon>compare_arrows</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>Switch drawer (click me)</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer> -->
    <v-footer :fixed="fixed" app>
      <span>&copy; 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
import firebase from "firebase";
import router from "../router/index.js";

export default {
  name: "DefaultContainer",
  data() {
    return {
      clipped: false,
      drawer: true,
      fixed: false,
      items: [
        {
          path: "/dashboard",
          icon: "dashboard",
          title: "Dashboard"
        },
        {
          path: "/setup",
          icon: "build",
          title: "Setup"
        },
        {
          path: "/user",
          icon: "person",
          title: "User"
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: "Vuetify.js"
    };
  },

  methods: {
    signOut: function() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          router.replace("login");
        });
    }
  }
};
</script>