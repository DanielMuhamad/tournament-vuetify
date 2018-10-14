<template>
    <div>
        <v-content>
            <v-container fluid>
                <v-layout align-center justify-center>
                    <v-flex xs4>
                        <v-card>
                            <v-card-text>
                               I'ts Working on Test:)<br>
                               I'ts Working on Test:)<br>
                               I'ts Working on Test:)<br>
                               I'ts Working on Test:)<br>
                               I'ts Working on Test:)<br>
                               I'ts Working on Test:)<br>
                               I'ts Working on Test:)<br>
                               I'ts Working on Test:)<br>
                            </v-card-text>
                        </v-card>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-content>
    </div>
</template>

<script>
import firebase from "firebase";

import router from "../../router/index.js";

export default {
  data() {
    return {
      email: "",
      password: ""
    };
  },
};
</script>
