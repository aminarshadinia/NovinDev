import swal from "sweetalert";
var sweetAlert = {
  methods: {
    errAlert(text) {
      swal({
        title: text,
        icon: "warning",
        buttons: {
          yes: "باشه"
        }
      });
    }
  }
};
export { sweetAlert };
