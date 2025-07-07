<template>
  <div class="d-flex justify-center align-center" style="height: 100vh">
    <v-card width="500" class="py-7">
      <h2 class="text-center my-8">Signin</h2>
      <v-card-text class="text-center px-10">
        <v-form>
          <v-text-field
            label="Username"
            rounded
            prepend-inner-icon="mdi-account"
            outlined
          ></v-text-field>
          <v-text-field
            label="Password"
            rounded
            type="password"
            prepend-inner-icon="mdi-lock"
            outlined
          ></v-text-field>
          <v-btn color="primary" rounded block>Sign In</v-btn>
          <!-- <p class="my-5">OR</p> -->
          <div class="hr-sect my-5">OR</div>
          <v-btn color="red" class="text-capitalize" @click="signInWithGoogle()" rounded block
            ><v-icon left>mdi-google</v-icon> Signin with google</v-btn
          >
        </v-form>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  layout: "auth",
  middleware: 'guest',
  methods: {
    signInWithGoogle() {
      this.$auth.loginWith("google");
    },
  },
};
</script>
<style scoped>
.hr-sect {
  display: flex;
  flex-basis: 100%;
  align-items: center;
  /* color: rgba(0, 0, 0, 0.9); */
  margin: 8px 0;
}

.hr-sect::before,
.hr-sect::after {
  content: "";
  flex-grow: 1;
  background: rgba(255, 255, 255, 0.431);
  height: 1px;
  font-size: 0;
  line-height: 0;
  margin: 0 8px;
}
</style>