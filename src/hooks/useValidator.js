import { useState } from "react";

export const useValidator = (initialForm = {}) => {
    const [validatorState, setValidatorState] = useState(initialForm);

    const handleValidations = (validations) => {
        for (const key in validations) {
            switch (key) {
                case "email":
                    const emailRegExp = new RegExp(
                        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                    );
                    emailRegExp.test(String(validations[key].value)) ?
                        (validations[key].validate = true) :
                        (validations[key].validate = false);
                    break;
                case "name":
                    const nameRegExp = new RegExp(/^[a-z ,.'-]+$/i);
                    nameRegExp.test(String(validations[key].value)) ?
                        (validations[key].validate = true) :
                        (validations[key].validate = false);
                    break;
                case "surname":
                    const surnameRegExp = new RegExp(/^[a-z ,.'-]+$/i);
                    surnameRegExp.test(String(validations[key].value)) ?
                        (validations[key].validate = true) :
                        (validations[key].validate = false);
                    break;
                case "password":
                    const passwordRegExp = new RegExp(
                        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/
                    );
                    passwordRegExp.test(String(validations[key].value)) ?
                        (validations[key].validate = true) :
                        (validations[key].validate = false);
                    break;
                case "repeatPassword":
                    const repeatPasswordRegExp = new RegExp(
                        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/
                    );
                    validations[key] === validations["password"] &&
                        repeatPasswordRegExp.test(String(validations[key].value)) ?
                        (validations[key].validate = true) :
                        (validations[key].validate = false);
                    break;

                default:
                    break;
            }
        }

        setValidatorState(validations);
        return validations;
    };

    return { validatorState, handleValidations };
};