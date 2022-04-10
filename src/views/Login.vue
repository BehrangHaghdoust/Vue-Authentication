<template>
  <main class="login">
    <section class="forms">
      <form class="register" @submit.prevent="register">
        <h2>Register</h2>
        <input
          type="email"
          v-model="register_from.email"
          placeholder="Email Adress..."
        />
        <input
          type="password"
          v-model="register_from.password"
          placeholder="Enter Your Password"
        />

        <input type="submit" value="Register" />
      </form>
      <form class="login" @submit.prevent="login">
        <form class="register">
          <h2>Login</h2>
          <input
            type="email"
            v-model="login_from.email"
            placeholder="Email Adress..."
          />
          <input
            type="password"
            v-model="login_from.password"
            placeholder="Enter Your Password"
          />
          <input type="submit" value="Login" />
        </form>
      </form>
    </section>
  </main>
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";
export default {
  setup() {

    const login_form = ref({});
    const register_form = ref({});
    const store = useStore();

    const login = () => {
      store.dispatch("login", login_form.value);
    };

    const register = () => {
      store.dispatch("register", register_form.value);
    };

    return {
      login_form,
      register_form,
      login,
      register


    };
  },
};
</script>

<style>
</style>