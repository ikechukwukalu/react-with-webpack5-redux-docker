import Toastify from "toastify-js";
import $ from "jquery";
import { match } from "ts-pattern";
import { useFormInputValidation } from "react-form-input-validation";

type COLORTYPE = {
    success: string,
    warning: string,
    info: string,
    danger: string
}

type FORM = {
    method: string,
    action: string
}

const button_loader = '&nbsp;<span class="spinner-border spinner-border-sm text-light mb-1"></span>';

export const makeToast: any = (text: string = "This is a toast", type: string = "success", url: string | null = null, clickFunc: any = () => { }): void => {
    var colorType: COLORTYPE = {
        success: "linear-gradient(to right, #00b09b, #96c93d)",
        warning: "linear-gradient(to right, #b00000, #f3c21f)",
        info: "",
        danger: "#b00000"
    }

    match(type)
        .with("success", () => type = colorType.success)
        .with("warning", () => type = colorType.warning)
        .with("info", () => type = colorType.info)
        .with("danger", () => type = colorType.danger)
        .otherwise(() => type = colorType.info);

    var toastJson: Toastify.Options = {
        text: text,
        duration: 5000,
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: 'right', // `left`, `center` or `right`
        backgroundColor: type,
        stopOnFocus: true, // Prevents dismissing of toast on hover
        onClick: clickFunc // Callback after click
    }

    if (url !== null) {
        toastJson.destination = url;
    }

    Toastify(toastJson).showToast();
}

export const sendRequest = (form: FORM, data: object = {}, thenFunc: any = () => { }, catchFunc: any = () => { }) => {
    try {
        fetch(form.action, {
            method: form.method,
            headers: {
                'Content-Type': 'application/json',
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
                "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token, Authorization, Accept, charset, boundary, Content-Length"
            },
            body: JSON.stringify(data)
        })
            .then(thenFunc)
            .catch(catchFunc)
    } catch (e) {
        console.error('Could not send XHR requests');
    }
}

export const submitForm = (thenFunc: Function | null = null, catchFunc: Function | null = null) => {
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
                thenFunc = (response: any) => {
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
                catchFunc = (e: any) => {
                    $(this).find('button[type="submit"]').html(original_value);
                    $(this).find('button[type="submit"]').prop("disabled", false);
                    makeToast("Oopps, looks like something went wrong. Try again?", "danger");
                };
            sendRequest(form, data, thenFunc, catchFunc);
        });
    }
}

export const submitSpecificForm = (formID: string, thenFunc: Function | null = null, catchFunc: Function | null = null) => {
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
                thenFunc = (response: any) => {
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
                catchFunc = (e: any) => {
                    $(this).find('button[type="submit"]').html(original_value);
                    $(this).find('button[type="submit"]').prop("disabled", false);
                    makeToast("Oopps, looks like something went wrong. Try again?", "danger");
                };
            sendRequest(form, data, thenFunc, catchFunc);
        });
    }
}

export const capitalizeFirstLetter = (string: string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export const logout: Function = (e: any): void => {
    e.preventDefault();
    localStorage.clear();
    location.href = '/';
}

export const validator: Function = (inputs: any = {}, rules: any = {}): null | Array<any> => {
    if (typeof inputs != 'object' || typeof rules != 'object') {
        console.log('inputs is a/an' + typeof inputs);
        console.log('rules is a/an' + typeof rules);
        return null;
    }

    return useFormInputValidation(inputs, rules);
}
