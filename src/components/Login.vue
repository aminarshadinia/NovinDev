<template>
  <div id="app" class="full-height">
    <div class="loader-parent" v-if="loading">
      <div class="loader"></div>
    </div>
    <body>
      <div class="top-link-container my-4">
        <div class="col-sm-12">
          <div class="top-links">
            <a id="security-note-link" href="/"
              ><span class="">هشدارهای امنیتی‌</span
              ><i class="la la-warning"></i
            ></a>
            <a href="/">
            <span>راهنما</span>
              <i class="la la-question-circle"></i>
            </a>
            <a href="/"><span>English</span><i class="la la-globe"></i></a>
          </div>
        </div>
      </div>
        <!-- Login Form Start -->
      <div class="login-container animate__animated animate__backInDown">
        <div class="login-row">
          <div class="col-xs-12">
            <div class="login-col center-block">
              <div class="panel panel-default">
                <div class="panel-body">
                  <div class="login-panel">
                    <img
                      id="parsian_fa_logo"
                      class="login-img mt-2"
                      src="../assets/images/NovinDev.png"
                      width="380"
                      height="100"
                    />
                    <div class="alert alert-warning">
                      وقت‌بخیر، به سامانه‌ی نوین‌ خوش آمدید
                    </div>
                    <form @submit.prevent="login">
                      <div class="form-group">
                        <input
                          type="text"
                          id="username"
                          v-model="username"
                          class="form-control"
                          autofocus=""
                          autocomplete="off"
                          maxlength="32"
                          placeholder="نام کاربری"
                          aria-describedby="emailHelp"
                        />
                      </div>
                      <div class="form-group">
                        <input
                          type="password"
                          id="password"
                          v-model="password"
                          class="form-control"
                          autocomplete="off"
                          maxlength="32"
                          placeholder="رمز عبور"
                        />
                      </div>
                      <button
                        type="submit"
                        class="btn btn-success my-3"
                        style="width: 80%"
                      >
                        ورود
                      </button>
                    </form>
                    <!-- User Links Start -->
                    <div class="users-links">
                      <div class="pt-1">
                        <router-link class="new-user" rel="noopener" to="/">
                          کاربر جدید هستم
                        </router-link>
                      </div>
                      <div class="pt-2">
                        <router-link class="pass-restore" rel="noopener"  to="/" >
                          رمز عبور خود را فراموش کرده ام
                        </router-link>
                      </div>
                    </div>
                  </div>
                  <!-- User Links End -->

                  <div
                    class="security-note-panel"
                    dir="ltr"
                    style="display: none"
                  >
                    <div class="alert alert-warning">
                      هشدارهای امنیتی<i class="la la-warning la-one-half"></i>
                    </div>
                  </div>
                </div>
              </div>

              <div class="copywrite">
                <span class="">کلیه حقوق برای </span>
                <a class="novin-color" href="https://www.novin.dev">Novin.dev</a>
                <span class=""> محفوظ می باشد.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Login Form End -->
    </body>
  </div>
</template>

<script>
import { cookiesMixin } from "../store/modules/cookies";
import { loading      } from "../store/modules/loading";
import { router       } from "../main";
import { sweetAlert   } from "../store/modules/sweetAlert"
import { apiMixin     } from '../utilities/api';

export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },

  mixins: [cookiesMixin, loading , sweetAlert , apiMixin],

  created() {
    if (this.getCookie("auth_token")) router.push("/landing-page"); 
  },

  methods: {
    login(){
      this.loginUser()
    }
  },
};
</script>

<style>
body {
  background-image: url("../assets/images/login-bg.jpg");
}
</style>
