<template>
  <v-app class="main-landing">
    <v-card flat tile>
      <!-- Header toolbar Start -->
      <v-toolbar color="cyan" dark>
        <v-toolbar-title>
          <a href="https://www.novin.dev" class="white--text" style="text-decoration:none">Novin.dev</a>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon class="red" title="خروج" @click="dialogLogout = true">
          <v-icon class="red">power_settings_new</v-icon>
        </v-btn>
      </v-toolbar>
      <!-- Header toolbar End -->

      <!-- Main Content Start -->
      <v-container class="grey lighten-4" fluid>
        <v-row>
          <v-spacer></v-spacer>
          <v-col v-for="(res , idx) in result" :key="idx" cols="12" sm="6" md="4">
            <v-card>
              <v-img :src="res.avatar" height="280px">
                <span class="text-h5 white--text pl-4 pt-4 d-inline-block"></span>
              </v-img>
              <v-card-title class="justify-center">{{res.first_name}} {{res.last_name}}</v-card-title>
              <v-card-actions>
                <v-btn color="indigo darken-3" text style="font-weight:900;">
                  توضیحات
                  <v-icon>arrow_back</v-icon>
                </v-btn>
                <v-spacer></v-spacer>
                <v-btn icon @click="show = !show">
                  <v-icon
                    class="info lighten-3 rounded"
                  >{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                </v-btn>
              </v-card-actions>
              <v-expand-transition>
                <div v-show="show">
                  <v-divider></v-divider>
                  <v-card-text>
                    <p>ID: {{res.id}}</p>
                    <p>Email: {{res.email}}</p>
                  </v-card-text>
                </div>
              </v-expand-transition>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
      <!-- Main Content End -->
    </v-card>

    <!-- Footer Start -->
    <v-footer dark padless>
      <v-card color="#00c7bd" class="flex" flat tile>
        <v-card-title class="teal">
          <strong class="subheading">شبکه های اجتماعی</strong>
          <v-spacer></v-spacer>
          <v-btn v-for="icon in icons" :key="icon" class="mx-4" dark icon>
            <v-icon size="24px">{{ icon }}</v-icon>
          </v-btn>
        </v-card-title>
        <v-card-text class="py-4 white--text text-center">
          {{ new Date().getFullYear() }} —
          <strong>Amin ArshadiNia</strong>
        </v-card-text>
      </v-card>
    </v-footer>
    <!-- Footer End -->

    <!-- logOut Dialog Start -->
    <v-dialog v-model="dialogLogout" max-width="500px">
      <v-card>
        <v-card-title class="text-h5" style="font-family: vazir !important">آیا میخواهید خارج شوید؟</v-card-title>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green" dark large @click="logoutConfirm">تایید</v-btn>
          <v-btn color="red darken-3" dark class="mx-5" large outlined @click="closeLogout">انصراف</v-btn>
          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <!-- logOut Dialog End -->
  </v-app>
</template>

<script>
import { cookiesMixin } from "../store/modules/cookies";
import { router       } from "../main";
import { sweetAlert   } from "../store/modules/sweetAlert";
import { apiMixin     } from "../utilities/api";

export default {
  components: {},
  data() {
    return {
      result: [],
      show: false,
      loading: false,
      dialogLogout: false,
      icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
    };
  },

  mixins: [cookiesMixin, sweetAlert, apiMixin], //Fetchs data from named Widgets

  methods: {
    //User EXIT Dialog start
    logoutConfirm() {
      this.userLogout();
    },
    closeLogout() {
      this.dialogLogout = false;
    },
    userLogout() {
      this.eraseCookie("auth_token");
      router.push("/");
    },
    //User EXIT Dialog end
  },

  async created() {
    if (!this.getCookie("auth_token")) { router.push("/") } //Checks if token is available or not

    await this.getUserList(); //Get Data from getuserlist api using VueMixin
  },
};
</script>

<style>

</style>
