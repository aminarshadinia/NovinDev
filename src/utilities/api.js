import   axios        from "axios";
import   swal         from "sweetalert";
import { BASE_URL   } from "./xhr";
import { router     } from '../main';

var apiMixin = {
  data() {
    return {

      //Gets Token From API using Vue Mix
      async loginUser() {
        this.loading = true;
        await axios
          .post("https://reqres.in/api/login", {
            email: this.username,
            password: this.password,
          })
          .then((response) => {
            this.setCookie("auth_token", response.data.token, "1/24");

            router.push("/landing-page");
            swal({
              title: "خوش آمدید",
              icon: "success",
              buttons: {
                yes: "باشه",
              },
            });
          })
          .catch((error) => {
            console.log(error);
              swal({
                title: "رمز عبور یا نام کاربری اشتباه است",
                icon: "warning",
                buttons: {
                  yes: "باشه",
                },
              })

          })
          .finally(() => {
            this.loading = false;
          });
      },

      //Get usersList From API
      async getUserList() {
        let result;
        await axios
          .get(`${BASE_URL}api/users?page=2`)
          .then((response) => {
            this.result = response.data.data;
            result = this.result;
          })
          .catch((error) => {
            console.log(error);
          });
        return result;
      },
    };
  },
};

export { apiMixin };
