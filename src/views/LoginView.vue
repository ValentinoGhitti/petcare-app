<template>
  <v-container fluid fill-height class="pa-0 full-height">
    <v-row align="center" justify="center" class="fill-height ma-0 full-height">
      <v-col cols="12" class="fill-height pa-0">
        <v-card class="elevation-6 fill-height pa-0 full-height">
          <v-window v-model="step" class="fill-height">
            <v-window-item :value="1">
              <v-row no-gutters class="fill-height ma-0 pa-0">
                <v-col cols="12" md="6" class="pa-0 ma-0">
                  <v-card-text class="mt-12">
                    <h2 class="text-center">Login in to Your Account</h2>
                    <h4 class="text-center grey--text">
                      Log in to your account to continue managing and <br>
                      updating your pet care routines.
                    </h4>
                    <v-row align="center" justify="center">
                      <v-col cols="12" sm="8">
                        <v-form ref="form" v-model="valid">
                          <v-text-field
                            v-model="email"
                            label="Email"
                            outlined
                            dense
                            prepend-inner-icon="mdi-email"
                            color="blue"
                            :rules="emailRules"
                            autocomplete="false"
                            class="mt-16"
                          />
                          <v-text-field
                            v-model="password"
                            label="Password"
                            outlined
                            dense
                            prepend-inner-icon="mdi-lock"
                            color="blue"
                            :rules="passwordRules"
                            autocomplete="false"
                            type="password"
                          />
                          <v-row>
                            <v-col cols="12" sm="7">
                              <v-checkbox
                                label="Remember Me"
                                class="mt-n1"
                                color="blue"
                              ></v-checkbox>
                            </v-col>
                            <v-col cols="12" sm="5">
                              <a click class="caption blue--text click" @click="handleForgotPassword">Forgot password</a>
                            </v-col>
                          </v-row>
                          <v-alert v-if="errorMessage" type="error" class="my-0" border="left" color="red">
                            {{ errorMessage }}
                          </v-alert>
                          <v-btn color="blue" dark block tile @click="handleLogin">
                            Log in
                          </v-btn>
                        </v-form>
                      </v-col>
                    </v-row>
                  </v-card-text>
                </v-col>
                <v-col cols="12" md="6" class="blue rounded-bl-xl fill-height pa-0 ma-0">
                  <div style="text-align: center; padding: 130px 0;">
                    <v-card-text class="white--text">
                      <img src="../../public/img/pc-logo-login.png" height="120" alt="logo">
                      <h2 class="text-center">Don't Have an Account Yet?</h2><br>
                      <h4 class="text-center">
                        Let’s set it up so you can start caring for your pets.<br>
                        Join us!
                      </h4>
                    </v-card-text>
                    <div class="text-center">
                      <v-btn tile outlined dark @click="step++">
                        SIGN UP
                      </v-btn>
                    </div>
                  </div>
                </v-col>
              </v-row>
            </v-window-item>
            <v-window-item :value="2">
              <v-row no-gutters class="fill-height ma-0 pa-0">
                <v-col cols="12" md="6" class="blue rounded-br-xl fill-height pa-0 ma-0">
                  <div style="text-align: center; padding: 130px 0;">
                    <v-card-text class="white--text">
                      <img src="../../public/img/pc-logo-signup.png" height="120" alt="logo">
                      <h2 class="text-center">Log in to manage your PetCare.</h2><br>
                      <h4 class="text-center">
                        Log in to your account so you can continue <br>
                        setting up and managing your pet care routines.
                      </h4>
                    </v-card-text>
                    <div class="text-center">
                      <v-btn tile outlined dark @click="step--">
                        Log in
                      </v-btn>
                    </div>
                  </div>
                </v-col>
                <v-col cols="12" md="6" class="pa-0 ma-0">
                  <v-card-text class="mt-12">
                    <h2 class="text-center">Sign Up for an Account</h2>
                    <h4 class="text-center grey--text">
                      Let’s get you set up so you can start managing <br>
                      your pet care routines.
                    </h4>
                    <v-row align="center" justify="center">
                      <v-col cols="12" sm="8">
                        <v-row>
                          <v-col cols="12" sm="6">
                            <v-text-field
                              v-model="firstName"
                              label="First Name"
                              outlined
                              dense
                              color="blue"
                              autocomplete="false"
                              class="mt-4"
                            />
                          </v-col>
                          <v-col cols="12" sm="6">
                            <v-text-field
                              v-model="lastName"
                              label="Last Name"
                              outlined
                              dense
                              color="blue"
                              autocomplete="false"
                              class="mt-4"
                            />
                          </v-col>
                        </v-row>
                        <v-text-field
                          v-model="email"
                          label="Email"
                          outlined
                          dense
                          color="blue"
                          autocomplete="false"
                        />
                        <v-text-field
                          v-model="password"
                          label="Password"
                          outlined
                          dense
                          color="blue"
                          autocomplete="false"
                          type="password"
                        />
                        <v-row>
                          <v-col cols="12" sm="12">
                            <v-checkbox
                              label="I agree to the terms and conditions."
                              class="mt-n1"
                              color="blue"
                            ></v-checkbox>
                          </v-col>
                        </v-row>
                        <v-btn color="blue" @click="handleRegister" dark block tile>
                          Sign up
                        </v-btn>
                      </v-col>
                    </v-row>
                  </v-card-text>
                </v-col>
              </v-row>
            </v-window-item>
          </v-window>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data: () => ({
    step: 1,
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    valid: true,
    errorMessage: '',
    emailRules: [
      v => !!v || 'Email is required',
      v => /.+@.+\..+/.test(v) || 'Email must be valid'
    ],
    passwordRules: [
      v => !!v || 'Password is required'
    ],
  }),
  props: {
    source: String
  },
  methods: {
    ...mapActions('petcare', ['login', 'register']),
    async handleLogin() {
      if (this.$refs.form.validate()) {
        try {
          await this.login({ email: this.email, password: this.password });
          this.$router.push({ name: 'home' });
          this.errorMessage = '';
        } catch (error) {
          console.error('Error al hacer login:', error);
          this.errorMessage = 'Invalid credentials. Please check your email and password and try again.'; 

          setTimeout(() => {
            this.errorMessage = '';
          }, 3000);
        }
      }
    },
    async handleRegister() {
      if (this.$refs.form.validate()) {
        try {
          const user = { email: this.email, password: this.password };
          await this.register(user);
          this.step--;
          this.resetForm();
        } catch (error) {
          console.error('Error al registrar usuario:', error);
          this.errorMessage = 'Error al registrar';

          setTimeout(() => {
            this.errorMessage = '';
          }, 3000);
        }
      }
    },
    handleForgotPassword() {
      this.$router.push('/reset-password');
    },
    resetForm() {
      this.email = '';
      this.password = '';
      this.firstName = '';
      this.lastName = '';
      this.$refs.form.reset();
    },
  }
};
</script>

<style scoped>
.fill-height {
  height: 100vh;
}
.v-application .rounded-bl-xl {
  border-bottom-left-radius: 300px !important;
}
.v-application .rounded-br-xl {
  border-bottom-right-radius: 300px !important;
}
.v-fade-transition-enter-active, .v-fade-transition-leave-active {
  transition: opacity 0.5s;
}
.v-fade-transition-enter, .v-fade-transition-leave-to {
  opacity: 0;
}
</style>
