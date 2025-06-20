<template>
  <div class="d-flex justify-center align-center" style="height: 100vh;">
    <v-card max-width="500">
        <v-card-text>
            <v-form>
                <v-text-field label="Email" prepend-inner-icon="mdi-email"></v-text-field>
                <v-text-field label="Password" type="password" prepend-inner-icon="mdi-lock"></v-text-field>
            </v-form>
        </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
    layout: "auth",
    //middleware: "auth"
}

</script>