<template>
  <v-container fluid>
    <v-row class="d-flex justify-center align-center min-height">
      <img
        src="../../public/img/img-passr.png"
        height="300px"
        alt="stock-img"
        class="fade-in"
      />
      <v-col class="wave"></v-col>
      <v-col cols="12" sm="8" md="5">
        <v-card class="pa-4 text-center login-card fade-in">
          <h2 class="mb-4 text-start">RESET PASSWORD</h2>
          <v-stepper v-model="step">
            <v-stepper-header>
              <v-stepper-step step="1" :complete="step > 1">
                Enter Email
              </v-stepper-step>
              <v-divider></v-divider>
              <v-stepper-step step="2" :complete="step > 2">
                New Password
              </v-stepper-step>
            </v-stepper-header>
            <v-stepper-items>
              <v-stepper-content step="1">
                <v-form
                  ref="formStep1"
                  v-model="validStep1"
                  lazy-validation
                  @submit.prevent="validateEmail"
                >
                  <v-text-field
                    v-model="email"
                    label="Email Address"
                    prepend-inner-icon="mdi-email"
                    :rules="emailRules"
                    outlined
                    dense
                    color="#2196F3"
                    required
                  ></v-text-field>
                </v-form>
                <v-btn color="#2196F3" @click="validateEmail">
                  Continue
                </v-btn>
                <v-btn @click="cancel">Cancel</v-btn>
              </v-stepper-content>

              <v-stepper-content step="2">
                <v-form
                  ref="formStep2"
                  v-model="validStep2"
                  lazy-validation
                  @submit.prevent="resetPassword"
                >
                  <v-text-field
                    v-model="newPassword"
                    label="New Password"
                    prepend-inner-icon="mdi-lock"
                    type="password"
                    :rules="passwordRules"
                    outlined
                    dense
                    color="#2196F3"
                    required
                  ></v-text-field>
                  <v-text-field
                    v-model="repeatPassword"
                    label="Repeat Password"
                    prepend-inner-icon="mdi-lock"
                    type="password"
                    :rules="repeatPasswordRules"
                    outlined
                    dense
                    color="#2196F3"
                    required
                  ></v-text-field>
                </v-form>
                <v-btn color="#2196F3" @click="resetPassword">
                  Reset Password
                </v-btn>
                <v-btn @click="cancel">Cancel</v-btn>
              </v-stepper-content>
            </v-stepper-items>
          </v-stepper>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      step: 1,
      email: '',
      newPassword: '',
      repeatPassword: '',
      validStep1: true,
      validStep2: true,
      isEmailValid: true,
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
        () => this.isEmailValid || 'The email you entered does not exist',
      ],
      passwordRules: [
        v => !!v || 'Password is required',
        v => v.length >= 6 || 'Password must be at least 6 characters',
      ],
      repeatPasswordRules: [
        v => !!v || 'Repeat Password is required',
        v => v === this.newPassword || 'Passwords must match',
      ],
      alertMessage: '',
      alertType: '',
    };
  },
  methods: {
    async validateEmail() {
      this.isEmailValid = true;
      const isValidStep1 = await this.$refs.formStep1.validate();

      if (isValidStep1) {
        try {
          const userExists = await this.$store.dispatch('petcare/resetPasswordAction', { email: this.email });
          if (userExists) {
            this.isEmailValid = true;
            this.step = 2;
          } else {
            this.isEmailValid = false;
            this.$refs.formStep1.validate();
          }
        } catch (error) {
          console.log('An error occurred while verifying the email');
        }
      } else {
        console.log('Please correct the errors before proceeding');
      }
    },

    async resetPassword() {
      const isValidStep2 = await this.$refs.formStep2.validate();

      if (isValidStep2) {
        if (this.newPassword !== this.repeatPassword) {
          this.alertMessage = 'Passwords must match';
          this.alertType = 'error';
        } else {
          try {
            await this.$store.dispatch('petcare/resetPasswordAction', { email: this.email, newPassword: this.newPassword });
            this.alertMessage = 'Password updated successfully';
            this.alertType = 'success';
            this.$router.push('/login');
          } catch (error) {
            this.alertMessage = 'An error occurred while resetting the password';
            this.alertType = 'error';
          }
        }
      } else {
        this.alertMessage = 'Please correct the errors before proceeding';
        this.alertType = 'error';
      }
    },

    cancel() {
      if (this.step === 1) {
        this.$router.push('/login');
      } else {
        this.step = 1;
      }
    }
  }
};
</script>

<style scoped>
.min-height {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.wave {
  clip-path: polygon(100% 0%, 0% 0% , 0.00% 11.93%, 1.00% 11.57%, 2.00% 11.24%, 3.00% 10.96%, 4.00% 10.72%, 5.00% 10.51%, 6.00% 10.36%, 7.00% 10.24%, 8.00% 10.16%, 9.00% 10.13%, 10.00% 10.14%, 11.00% 10.19%, 12.00% 10.29%, 13.00% 10.43%, 14.00% 10.61%, 15.00% 10.83%, 16.00% 11.09%, 17.00% 11.39%, 18.00% 11.74%, 19.00% 12.12%, 20.00% 12.55%, 21.00% 13.01%, 22.00% 13.51%, 23.00% 14.05%, 24.00% 14.62%, 25.00% 15.24%, 26.00% 15.88%, 27.00% 16.57%, 28.00% 17.28%, 29.00% 18.03%, 30.00% 18.81%, 31.00% 19.61%, 32.00% 20.45%, 33.00% 21.32%, 34.00% 22.21%, 35.00% 23.12%, 36.00% 24.07%, 37.00% 25.03%, 38.00% 26.01%, 39.00% 27.02%, 40.00% 28.04%, 41.00% 29.08%, 42.00% 30.14%, 43.00% 31.21%, 44.00% 32.29%, 45.00% 33.38%, 46.00% 34.48%, 47.00% 35.60%, 48.00% 36.71%, 49.00% 37.83%, 50.00% 38.96%, 51.00% 40.08%, 52.00% 41.21%, 53.00% 42.33%, 54.00% 43.45%, 55.00% 44.57%, 56.00% 45.68%, 57.00% 46.78%, 58.00% 47.87%, 59.00% 48.95%, 60.00% 50.02%, 61.00% 51.07%, 62.00% 52.11%, 63.00% 53.13%, 64.00% 54.13%, 65.00% 55.12%, 66.00% 56.08%, 67.00% 57.01%, 68.00% 57.93%, 69.00% 58.81%, 70.00% 59.68%, 71.00% 60.51%, 72.00% 61.31%, 73.00% 62.09%, 74.00% 62.83%, 75.00% 63.54%, 76.00% 64.21%, 77.00% 64.86%, 78.00% 65.46%, 79.00% 66.03%, 80.00% 66.57%, 81.00% 67.06%, 82.00% 67.52%, 83.00% 67.94%, 84.00% 68.32%, 85.00% 68.65%, 86.00% 68.95%, 87.00% 69.21%, 88.00% 69.42%, 89.00% 69.60%, 90.00% 69.73%, 91.00% 69.82%, 92.00% 69.86%, 93.00% 69.87%, 94.00% 69.83%, 95.00% 69.75%, 96.00% 69.62%, 97.00% 69.46%, 98.00% 69.25%, 99.00% 69.00%, 100.00% 68.71%);  
  background: #2196F3;
  height: 100vh;
  position: fixed;
}

.login-card {
  z-index: 1;
  border-radius: 20px;
  background: white;
}

.fade-in {
  opacity: 0;
  animation: fadeIn 1s ease-in forwards;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>