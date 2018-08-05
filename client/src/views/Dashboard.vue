<template>
  <section>
    <h1>Dashboard</h1>
    <h1 v-if="!user">Getting user information...</h1>
    <h1 v-if="user">Hello, {{user.username}}!! 👋</h1>
    <button @click="logout()" class="btn btn-primary">Logout</button>
  </section>
</template>

<script>
const API_URL = 'http://localhost:5000/';

export default {
  data: () => ({
    user: null,
  }),
  mounted() {
    fetch(API_URL, {
      headers: {
        authorization: `Bearer ${localStorage.token}`,
      },
    }).then(res => res.json())
      .then((result) => {
        if (result.user) {
          this.user = result.user;
        } else {
          this.logout();
        }
      });
  },
  methods: {
    logout() {
      localStorage.removeItem('token');
      this.$router.push('/login');
    },
  },
};
</script>

<style>

</style>
