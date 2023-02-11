function ftn(val) {
    if (val == 1) {
        var left_pos = 70;
        start_timmer = setInterval(start_ftn_inner, 25)

        function start_ftn_inner() {
            if (left_pos <= 2) {
                document.querySelector("#danger").style.visibility = "visible";
                document.getElementById('car_image').style.left = left_pos + "%";
                clearInterval(start_timmer)
            } else {
                document.getElementById('car_image').style.left = left_pos + "%";
                left_pos -= 1;
            }
        }

    } else if (val == 2) {
        clearInterval(start_timmer)
        document.getElementById("btn_start").disabled = true;
    } else if (val == 0) {
        document.querySelector("#danger").style.visibility = "hidden";
        document.getElementById('car_image').style.left = 950 + "px";
        document.getElementById("btn_start").disabled = false;
    }


}