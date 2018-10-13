<template>
    <v-container fluid>
        <v-layout align-center justify-center>
            <v-flex xs4>
                <v-card>
                    <v-card-text>
                        Create an account!
                        <v-form>
                            <v-text-field v-model="email" type="email" label="Email"></v-text-field>
                            <v-text-field v-model="password" type="password" label="Password"></v-text-field>
                        </v-form>
                        <v-btn @click="signUp()">Sign Up</v-btn> <br>
                        <span>Back to <router-link to="/login">Login</router-link></span>
                    </v-card-text>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import firebase from "firebase";

export default {
  name: "signUp",
  data() {
    return {
      email: "",
      password: ""
    };
  },

  methods: {
    signUp: function() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(
          function(user) {
            alert("Selamat, akun anda berhasil dibuat.");
          },

          function(err) {
            alert("Oops. " + err.message);
          }
        );
    }
  }
};
</script>
