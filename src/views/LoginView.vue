<template>
  <v-container fluid fill-height class="pa-0 full-height">
    <v-row align="center" justify="center" class="fill-height ma-0 full-height">
      <v-col cols="12" class="fill-height pa-0">
        <v-card class="elevation-6 fill-height pa-0 full-height">
          <v-window v-model="step" class="fill-height">
            <v-window-item :value="1">
              <v-row no-gutters class="fill-height ma-0 pa-0">
                <!-- Columna para el formulario de inicio de sesión -->
                <v-col cols="12" md="6" class="pa-0 ma-0">
                  <v-card-text class="mt-12">
                    <h2 class="text-center">Login in to Your Account</h2>
                    <h4 class="text-center grey--text">
                      Log in to your account to continue managing and <br>
                      updating your pet care routines.
                    </h4>
                    <v-row align="center" justify="center">
                      <v-col cols="12" sm="8">
                        <!-- Formulario de inicio de sesión -->
                        <v-form ref="form" v-model="valid">
                          <v-text-field
                            v-model="email"
                            label="Email"
                            outlined
                            dense
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
                              <span class="caption blue--text">Forgot password</span>
                            </v-col>
                          </v-row>
                          <!-- Botón de inicio de sesión -->
                          <v-btn color="blue" dark block tile @click="handleLogin">
                            Log in
                          </v-btn>
                          <!-- Mensaje de error de inicio de sesión -->
                          <v-fade-transition>
                            <v-col>
                              <v-alert
                                v-show="loginError"
                                type="error"
                                dismissible
                                @click:close="clearError"
                              >
                                {{ loginError }}
                              </v-alert>
                            </v-col>
                          </v-fade-transition>
                        </v-form>
                      </v-col>
                    </v-row>
                  </v-card-text>
                </v-col>
                <!-- Columna para el mensaje de registro -->
                <v-col cols="12" md="6" class="blue rounded-bl-xl fill-height pa-0 ma-0">
                  <div style="text-align: center; padding: 210px 0;">
                    <v-card-text class="white--text">
                      <h2 class="text-center">Don't Have an Account Yet?</h2><br>
                      <h4 class="text-center">
                        Let’s set it up so you can start caring for your pets.<br>
                        Join us!
                      </h4>
                    </v-card-text>
                    <div class="text-center">
                      <!-- Botón para ir al registro -->
                      <v-btn tile outlined dark @click="step++">
                        SIGN UP
                      </v-btn>
                    </div>
                  </div>
                </v-col>
              </v-row>
            </v-window-item>
            <!-- Segundo paso de la ventana (Registro) -->
            <v-window-item :value="2">
              <v-row no-gutters class="fill-height ma-0 pa-0">
                <v-col cols="12" md="6" class="blue rounded-br-xl fill-height pa-0 ma-0">
                  <div style="text-align: center; padding: 210px 0;">
                    <v-card-text class="white--text">
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
                <!-- Columna para el formulario de registro -->
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
                          <!-- Campos para el nombre y apellido -->
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
                          <v-col cols="12" sm="7">
                            <v-checkbox
                              label="I Accept AAE"
                              class="mt-n1"
                              color="blue"
                            ></v-checkbox>
                          </v-col>
                          <v-col cols="12" sm="5">
                            <span class="caption blue--text ml-n4">Terms & Conditions</span>
                          </v-col>
                        </v-row>
                        <!-- Botón para registrar -->
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
    step: 1, // Controla el paso actual de la ventana
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    valid: true, // Estado de validación del formulario
    loginError: '', // Mensaje de error de inicio de sesión
    emailRules: [
      v => !!v || 'Email is required',
      v => /.+@.+\..+/.test(v) || 'Email must be valid'
    ],
    passwordRules: [
      v => !!v || 'Password is required'
    ],
    alertTimeout: null,
  }),
  props: {
    source: String
  },
  methods: {
    ...mapActions(['login', 'register']),
    async handleLogin() {
      // maneja el inicio de sesión
      if (this.$refs.form.validate()) {
        try {
          await this.login({ email: this.email, password: this.password });
          this.$router.push({ name: 'home' });
        } catch (error) {
          console.error('Error al hacer login:', error);
          this.loginError = 'You need to register an account before you can log in.';
          this.setAlertTimeout();
        }
      }
    },
    async handleRegister() {
      // maneja el registro
      if (this.$refs.form.validate()) {
        try {
          const user = { email: this.email, password: this.password };
          await this.register(user);
          this.step--;
          this.resetForm();
        } catch (error) {
          console.error('Error al registrar usuario:', error);
        }
      }
    },
    resetForm() {
      // rrinicia el formulario y sus campos
      this.email = '';
      this.password = '';
      this.firstName = '';
      this.lastName = '';
      this.$refs.form.reset();
    },
    setAlertTimeout() {
      // configura el temporizador para ocultar mensajes de error
      if (this.alertTimeout) {
        clearTimeout(this.alertTimeout);
      }
      this.alertTimeout = setTimeout(() => {
        this.loginError = '';
      }, 2000);
    },
    clearError() {
      // limpia el mensaje de error
      this.loginError = '';
      if (this.alertTimeout) {
        clearTimeout(this.alertTimeout);
      }
    }
  },
  beforeDestroy() {
    // limpia el temporizador antes que destruya el componente
    if (this.alertTimeout) {
      clearTimeout(this.alertTimeout);
    }
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
