<template>
    <CContainer class="d-flex align-items-center min-vh-100">
        <CRow class="justify-content-center new-justify-content-center">
            <CCol md="12">
                <CCardGroup>

                    <CCard class="p-4">
                        <CHeaderBrand
                                class="mx-auto"
                                src="img/brand/workportal-logo.png"
                                width="190"
                                height="46"
                                alt="CoreUI Logo"
                        />
                        <CCardBody>

                            <CForm>
                                <h1>Login</h1>
                                <p class="text-muted">Sign In to your account</p>
                                <CInput
                                        placeholder="Email"
                                        autocomplete="username email"
                                        v-model="loginUser.email"
                                >
                                    <template #prepend-content>
                                        <CIcon name="cil-user"/>
                                    </template>
                                </CInput>
                                <CInput
                                        placeholder="Password"
                                        type="password"
                                        autocomplete="curent-password"
                                        v-model="loginUser.password"
                                >
                                    <template #prepend-content>
                                        <CIcon name="cil-lock-locked"/>
                                    </template>
                                </CInput>
                                <CRow>
                                    <CCol col="6">
                                        <CButton color="primary" class="px-4" v-on:click="login"
                                                 :disabled="loginUser.disabled">Login
                                        </CButton>
                                    </CCol>
                                    <CCol col="6" class="text-right">
                                        <!--                    <CButton color="link" class="px-0">Forgot password?</CButton>-->
                                    </CCol>
                                </CRow>
                            </CForm>
                        </CCardBody>
                    </CCard>
                </CCardGroup>
            </CCol>
        </CRow>

    </CContainer>
</template>
<style>
    .new-justify-content-center {
        position: absolute;
        left: 31%;
        width: 40%;
    }
</style>
<script>
    export default {
        name: 'Login',
        data() {
            return {
                loginUser: {
                    "email": "",
                    "password": "",
                    "userType": 0,
                    "disabled": false
                },
            }
        },
        methods: {
            login: function () {
                let that = this;
                if (that.loginUser.email == "") {
                    this.$swal({
                        type: "error",
                        title: "error",
                        text: "Please Enter Email",
                        showConfirmButton: true
                    });
                } else if (that.loginUser.password == "") {
                    this.$swal({
                        type: "error",
                        title: "error",
                        text: "Please Enter Password",
                        showConfirmButton: true
                    });
                } else {
                    that.loginUser.disabled = true;
                    axios.post(APP_URL + '/login', that.loginUser).then(response => {
                            that.loginUser.disabled = false;
                            window.localStorage.setItem('token', response.data.access_token);
                            window.localStorage.setItem('user', JSON.stringify(response.data.user));
                            axios.defaults.headers.common['Authorization'] = 'Bearer ' + response.data.access_token;
                            this.$router.push('/dashboard');
                        }
                    ).catch((error) => {
                        that.loginUser.disabled = false;
                        this.$swal({
                            type: "error",
                            title: "error",
                            text: error.response.data.message,
                            showConfirmButton: true
                        });
                    });
                }
            },
        }
    }
</script>
