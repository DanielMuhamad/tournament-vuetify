<template>
    <div>
        <v-content>
            <v-container fluid>
                <v-layout>
                    <v-flex>
                        <v-card>
                            <v-card-text>
                                <v-data-table :headers="headers" :items="users">
                                </v-data-table>
                            </v-card-text>
                        </v-card>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-content>
    </div>
</template>

<script>
import axios from "axios";

const listUrl = "https://jsonplaceholder.typicode.com/todos",
  addUrl = "https://jsonplaceholder.typicode.com/todos",
  updateUrl = "https://jsonplaceholder.typicode.com/todos",
  deleteUrl = "https://jsonplaceholder.typicode.com/todos";

export default {
  name: "permission",
  data() {
    return {
      headers: [
        {
          text: "ID",
          value: "id"
        },
        {
          text: "Title",
          value: "title"
        },
        {
          text: "Completed",
          value: "completed"
        }
      ],

      users: [],
      mode: "add",
      form: {
        id: "",
        email: "",
        username: "",
        password: ""
      }
    };
  },

  mounted() {
    this.loadData();
  },

  methods: {
    loadData: function() {
      axios.get(listUrl).then(response => (this.users = response.data.data));
    },

    addData: function() {
      axios
        .post(addUrl + this.form)
        .then(response => (this.users = response.data.data));
    },

    updateData: function(user) {
      axios
        .put(updateUrl, this.form.id + this.form)
        .then(response => (this.users = response.data.data));
    },

    deleteUrl: function(index, id) {
      axios.delete(deleteUrl + id).then(this.users.splice(index, 1));
    }
  }
};
</script>
