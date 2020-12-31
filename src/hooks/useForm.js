import { useState } from "react";

export const useForm = (initialForm = {}) => {
    const [formState, setFormState] = useState(initialForm);

    const handleValidations = () => {
        for (const key in formState) {
            switch (key) {
                case "email":
                    const emailRegExp = new RegExp(
                        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                    );
                    if (emailRegExp.test(String(formState[key].value))) {
                        formState[key].validate.isValidated = true;
                        formState[key].validate.error = "";
                    } else {
                        formState[key].validate.isValidated = false;
                        formState[key].validate.error = "It must be a real Email";
                    }

                    break;
                case "name":
                    const nameRegExp = new RegExp(/^[a-z ,.'-]+$/i);
                    nameRegExp.test(String(formState[key].value)) ?
                        (formState[key].validate.isValidated = true) :
                        (formState[key].validate.isValidated = false);
                    break;
                case "surname":
                    const surnameRegExp = new RegExp(/^[a-z ,.'-]+$/i);
                    surnameRegExp.test(String(formState[key].value)) ?
                        (formState[key].validate.isValidated = true) :
                        (formState[key].validate.isValidated = false);
                    break;
                case "password":
                    const passwordRegExp = new RegExp(
                        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/
                    );
                    passwordRegExp.test(String(formState[key].value)) ?
                        (formState[key].validate.isValidated = true) :
                        (formState[key].validate.isValidated = false);
                    break;
                case "repeatPassword":
                    const repeatPasswordRegExp = new RegExp(
                        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/
                    );
                    formState[key] === formState["password"] ||
                        repeatPasswordRegExp.test(String(formState[key].value)) ?
                        (formState[key].validate.isValidated = true) :
                        (formState[key].validate.isValidated = false);
                    break;

                default:
                    break;
            }
            setFormState(formState);
        }
    };
    const handleInputForm = ({ target }) => {
        console.log(target);
        setFormState({
            ...formState,
            [target.name]: {
                value: target.value,
                validate: formState[target.name].validate,
            },
        });
    };
    return { formState, handleInputForm, handleValidations };
};