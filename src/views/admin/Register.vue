<template>
  <CContainer class="min-vh-100 d-flex align-items-center">
    <CRow class="w-100 justify-content-center">
      <CCol md="6" sm="8">
        <CCard class="mx-4 mb-0">
          <CCardBody class="p-4">
            <CForm>
              <h1>Register</h1>
              <p class="text-muted">Create your account</p>
              <CInput
                placeholder="First Name"
                autocomplete="First Name"
                v-model="signupUser.firstName"
              >
                <template #prepend-content><CIcon name="cil-user"/></template>
              </CInput>
              <CInput
                placeholder="Last Name"
                autocomplete="Last Name"
                v-model="signupUser.lastName"
              >
                <template #prepend-content><CIcon name="cil-user"/></template>
              </CInput>
              <CInput
                placeholder="Phone"
                autocomplete="Phone"
                v-model="signupUser.phone"
              >
                <template #prepend-content><CIcon name="cil-user"/></template>
              </CInput>
              <CInput
                placeholder="OTP"
                autocomplete="OTP"
                v-model="signupUser.otp"
              >
                <template #prepend-content><CIcon name="cil-user"/></template>
              </CInput>
              <CInput
                placeholder="Email"
                autocomplete="email"
                prepend="@"
                v-model="signupUser.email"
              />
              <CInput
                placeholder="Password"
                type="password"
                autocomplete="new-password"
                v-model="signupUser.password"
              >
                <template #prepend-content><CIcon name="cil-lock-locked"/></template>
              </CInput>
              <CInput
                placeholder="Repeat password"
                type="password"
                autocomplete="new-password"
                v-model="signupUser.rpassword"
                class="mb-4"
              >
                <template #prepend-content><CIcon name="cil-lock-locked"/></template>
              </CInput>
              <CButton color="success" block v-on:click="signup">Create Account</CButton>
            </CForm>
          </CCardBody>
          <CCardFooter class="p-4">
            <CRow>
              <CCol col="6">
                <CButton block color="facebook">
                  Facebook
                </CButton>
              </CCol>
              <CCol col="6">
                <CButton block color="twitter">
                  Twitter
                </CButton>
              </CCol>
            </CRow>
          </CCardFooter>
        </CCard>
      </CCol>
    </CRow>
  </CContainer>
</template>

<script>
export default {
  name: 'Register',
  data() {
    return {

      signupUser: {
        "firstName": "",
        "phone": "",
        "lastName": "",
        "email": "",
        "password": "",
        "rpassword": "",
        "userType": "",
        "otp": "",
        "disabled":false
      },
      signupError: {
        "firstName": "",
        "lastName": "",
        "phone": "",
        "email": "",
        "password": "",
        "rpassword": "",
        "otp": ""
      },

    }
  },
  methods:{
    sendOtp: function () {
      let that = this;
      if (!that.signupUser.phone) {
        that.signupError.phone = "Phone is required";
      } else {
        axios.post(APP_URL + '/send-otp', {
          'phone': that.signupUser.phone,
        }).then(response => {
          this.$swal({
            type: "success",
            title: "Success",
            text: "OTP Sent successfully",
            showConfirmButton: true
          });
        }).catch((error) => {
          that.signupError.phone = error.response.data.message;
        });
      }
    },
    validateOtp: function () {
      let that = this;
      if (!that.signupUser.otp) {
        that.signupError.otp = "OTP is required";
      } else {
        axios.post(APP_URL+'/check-otp', {
          'phone': that.signupUser.phone,
          'otp': that.signupUser.otp,
        }).then(response => {
          that.signup();
        }).catch((error) => {
          this.$swal({
            type: "error",
            title: "error",
            text: error.response.data.message,
            showConfirmButton: true
          });
        });
      }
    },
    signup: function () {
      let that = this;
      that.signupUser.disabled = true;
      axios.post('/signup', that.signupUser
      ).then(response => {
        that.signupUser.disabled = false;
        response = response.data;
        window.localStorage.setItem('token', response.access_token);
        window.localStorage.setItem('user', JSON.stringify(response.user));
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + response.access_token;
        this.$router.push('/dashboard');
      }).catch((error) => {

        this.$swal({
          type: "error",
          title: "error",
          text: error.response.data.message,
          showConfirmButton: true
        });

      });
    },
  }
}
</script>
