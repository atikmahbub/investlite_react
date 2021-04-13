import React from "react";
import PhoneInput from "react-phone-input-2";
import { useForm } from "react-hook-form";
import { API, config } from "../../config/API";

const Form = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const [phoneNumber, setPhoneNumber] = React.useState({
        phone: "",
    });

    const onSubmit = (data) => {
        if (phoneNumber.phone && data) {
            const postData = {
                first_name: data.first_name,
                last_name: data.last_name,
                email: data.email,
                phone: phoneNumber.phone,
            };
            API.post("leads", postData, config)
                .then((res) => {
                    console.log("Response : ", res);
                })
                .catch((err) => {
                    console.log("Error", err);
                });
        }
    };
    return (
        <section className="form">
            <div class="form__container container">
                <div class="form__top">
                    <div class="form__main">
                        <div
                            class="form__title"
                            data-editable
                            data-name="form__title"
                        >
                            <p>Invest in AMAZON</p>
                        </div>

                        <div class="form__body">
                            <div id="formWrapper1" class="formWrapper">
                                <form
                                    id="formfull"
                                    onSubmit={handleSubmit(onSubmit)}
                                    class="cpmn-form lp-form lead-form placeholder-form tradingapp_emailForm form-en sv-gen-2 sv-skin sv-skin-default"
                                >
                                    <div class="fieldset_group">
                                        <div class="fieldset__title">
                                            First Name
                                        </div>
                                        <div class="fieldset">
                                            <span class="fieldset-icon first_name-icon"></span>
                                            <input
                                                type="text"
                                                name="first_name"
                                                id="first_name"
                                                class="first_name required"
                                                placeholder="e.g. John"
                                                maxlength="25"
                                                aria-label="First name"
                                                autocomplete="given-name"
                                                {...register("first_name", {
                                                    required: true,
                                                })}
                                            />
                                            <div
                                                class="tooltip tooltip_first_name_require"
                                                id="tooltip_first_name_require"
                                                style={{ display: "block" }}
                                            >
                                                {errors.first_name &&
                                                    "First name is required"}
                                            </div>
                                        </div>
                                    </div>
                                    <div class="fieldset_group">
                                        <div class="fieldset__title">
                                            Last Name
                                        </div>
                                        <div class="fieldset">
                                            <span class="fieldset-icon last_name-icon"></span>
                                            <input
                                                type="text"
                                                name="last_name"
                                                id="last_name"
                                                class="last_name required"
                                                placeholder="e.g. Lander"
                                                maxlength="25"
                                                aria-label="Last name"
                                                autocomplete="family-name"
                                                {...register("last_name", {
                                                    required: true,
                                                })}
                                            />
                                            <div
                                                class="tooltip tooltip_last_name_require"
                                                id="tooltip_last_name_require"
                                                style={{ display: "block" }}
                                            >
                                                {errors.last_name &&
                                                    "last name is required"}
                                            </div>
                                        </div>
                                    </div>

                                    <div class="fieldset_group">
                                        <div class="fieldset__title">Email</div>
                                        <div class="fieldset">
                                            <span class="fieldset-icon user_email-icon"></span>
                                            <input
                                                type="text"
                                                name="user_email"
                                                id="user_email"
                                                class="user_email required"
                                                placeholder="e.g. name@gmail.com"
                                                maxlength="255"
                                                autocomplete="email"
                                                {...register("email", {
                                                    required: true,
                                                    pattern: {
                                                        value: /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/,
                                                    },
                                                })}
                                            />
                                            <div
                                                class="tooltip tooltip_user_email_required"
                                                id="tooltip_user_email_required"
                                                style={{ display: "block" }}
                                            >
                                                {errors.email &&
                                                    "please input a valid email"}
                                            </div>
                                            <div
                                                class="tooltip tooltip_existing"
                                                id="tooltip_existing"
                                            >
                                                Already registered. Choose
                                                another or{" "}
                                                <a
                                                    id="login-link"
                                                    class="js-login-url"
                                                    rel="noopener noreferrer"
                                                    target="_blank"
                                                >
                                                    login
                                                </a>
                                                .
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="fieldset_group phone-fieldset"
                                        style={{ marginBottom: "13px" }}
                                    >
                                        <div className="fieldset__title">
                                            Phone Number
                                        </div>
                                        <PhoneInput
                                            onlyCountries={[
                                                "qa",
                                                "bh",
                                                "my",
                                                "kw",
                                                "kr",
                                                "th",
                                                "om",
                                                "sa",
                                                "ae",
                                            ]}
                                            enableAreaCodeStretch
                                            inputProps={{
                                                name: "phone",
                                                required: true,
                                            }}
                                            enableSearch={true}
                                            country={"bh"}
                                            value={""}
                                            onChange={(value) => {
                                                setPhoneNumber({
                                                    ...phoneNumber,
                                                    phone: value,
                                                });
                                            }}
                                            defaultErrorMessage="phone number is required"
                                        />
                                    </div>

                                    <noscript>
                                        <input
                                            type="hidden"
                                            name="js_disabled"
                                            value="true"
                                        />
                                    </noscript>

                                    <input
                                        type="hidden"
                                        name="uaction"
                                        id="uaction"
                                        value="create_lead"
                                    />
                                    <input
                                        type="hidden"
                                        name="brand_id"
                                        id="brand_id"
                                        value="62"
                                    />

                                    <div
                                        class="fieldset submit-fieldset"
                                        id="submit-fieldset"
                                        data-editable
                                        data-name="main-form"
                                        data-ce-tag="button"
                                    >
                                        <button
                                            type="submit"
                                            id="lead-form-submit"
                                            class="lead-form-submit"
                                        >
                                            <div>Get info</div>
                                        </button>
                                    </div>
                                </form>
                            </div>

                            <div
                                data-editable
                                data-name="form__text"
                                class="form__text"
                            >
                                <p>
                                    To invest in Amazon you must be at least 18
                                    years old. Minimum required capital 250$
                                </p>
                            </div>
                        </div>
                        <div
                            class="form__footer"
                            data-editable
                            data-name="form__payment-methods"
                        >
                            <img
                                src="https://alcest-investlite.com/static/funnels/amz_info_4620_2_es_lat/images/payment-methods.png?v=45525"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Form;
