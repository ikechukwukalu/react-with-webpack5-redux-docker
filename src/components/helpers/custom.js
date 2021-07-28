const button_loader = '&nbsp;<span class="spinner-border spinner-border-sm text-light mb-1"></span>';

export const makeToast = (text = "This is a toast", type = "success", url = null, clickFunc = () => {}) => {
    var colorType = {
        success: "linear-gradient(to right, #00b09b, #96c93d)",
        warning: "linear-gradient(to right, #b00000, #f3c21f)",
        info: "",
        danger: "#b00000"
    }
    var json = {
        text: text,
        duration: 5000,
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: 'right', // `left`, `center` or `right`
        backgroundColor: colorType[type],
        stopOnFocus: true, // Prevents dismissing of toast on hover
        onClick: clickFunc // Callback after click
    }
    if (url !== null)
        json.destination = url;
    Toastify(json).showToast();
}

export const sendRequest = (form = {}, data = {}, thenFunc = () => { }, catchFunc = () => { }) => {
    try {
        axios({
            method: form.method,
            url: form.action,
            data: data,
            headers: {
                'Content-Type': 'application/json',
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
                "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token, Authorization, Accept,charset,boundary,Content-Length"
            }
        })
            .then(thenFunc)
            .catch(catchFunc)
    } catch (e) {
        console.error('Could not send XHR requests');
    }
}

const submitForm = (thenFunc = null, catchFunc = null) => {
    if (document.getElementsByTagName("form")) {
        $('body').off('submit', 'form');
        $('body').on('submit', 'form', function (e) {
            e.preventDefault();
            var submit_button = $(this).find('button[type="submit"]');
            const original_value = submit_button.html();
            submit_button.html(original_value + button_loader);
            submit_button.prop("disabled", true);

            var form = e.target;
            var data = new FormData(form);

            if (typeof thenFunc !== 'function' || thenFunc === null)
                thenFunc = (response) => {
                    $(this).find('button[type="submit"]').html(original_value);
                    $(this).find('button[type="submit"]').prop("disabled", false);
                    if (response.data.status) {
                        $(this)[0].reset();
                        makeToast(response.data.message, "success");
                    } else {
                        makeToast(response.data.message, "danger");
                    }
                };
            if (typeof catchFunc !== 'function' || catchFunc === null)
                catchFunc = (e) => {
                    $(this).find('button[type="submit"]').html(original_value);
                    $(this).find('button[type="submit"]').prop("disabled", false);
                    makeToast("Oopps, looks like something went wrong. Try again?", "danger");
                };
            sendRequest(form, data, thenFunc, catchFunc);
        });
    }
}

export const submitSpecificForm = (formID = null, thenFunc = null, catchFunc = null) => {
    if (document.getElementById(formID)) {
        $('body').off('submit', '#' + formID);
        $('body').on('submit', '#' + formID, function (e) {
            e.preventDefault();
            var submit_button = $(this).find('button[type="submit"]');
            const original_value = submit_button.html();
            submit_button.html(original_value + button_loader);
            submit_button.prop("disabled", true);

            var form = e.target;
            var data = new FormData(form);

            if (typeof thenFunc !== 'function' || thenFunc === null)
                thenFunc = (response) => {
                    $(this).find('button[type="submit"]').html(original_value);
                    $(this).find('button[type="submit"]').prop("disabled", false);
                    if (response.data.status) {
                        $(this)[0].reset();
                        makeToast(response.data.message, "success");
                    } else {
                        makeToast(response.data.message, "danger");
                    }
                };
            if (typeof catchFunc !== 'function' || catchFunc === null)
                catchFunc = (e) => {
                    $(this).find('button[type="submit"]').html(original_value);
                    $(this).find('button[type="submit"]').prop("disabled", false);
                    makeToast("Oopps, looks like something went wrong. Try again?", "danger");
                };
            sendRequest(form, data, thenFunc, catchFunc);
        });
    }
}

export const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export default submitForm;