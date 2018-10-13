<template>
    <v-container fluid>
        <v-layout align-center justify-center>
            <v-flex xs4>
                <v-card>
                    <v-card-text>
                      Sign in to your account!
                        <v-form>
                            <v-text-field v-model="email" type="email" label="Email"></v-text-field>
                            <v-text-field v-model="password" type="password" label="Password"></v-text-field>
                        </v-form>
                        <v-btn @click="signIn()">Sign In</v-btn> <br>
                        <span>Don't have an account ? <router-link to="/sign-up">Sign Up</router-link></span>
                    </v-card-text>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import firebase from "firebase";

import router from "../../router/index.js";

export default {
  name: "login",
  data() {
    return {
      email: "",
      password: ""
    };
  },

  methods: {
    signIn: function() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(
          function(user) {
            router.replace("dashboard");
          },

          function(err) {
            alert("Oops. " + err.message);
          }
        );
    }
  }
};
</script>
