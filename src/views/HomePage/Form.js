import React from "react";

const Form = () => {
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
                                    method="post"
                                    id="formfull"
                                    action=""
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
                                                value=""
                                                maxlength="25"
                                                aria-label="First name"
                                                autocomplete="given-name"
                                            />
                                            <div
                                                class="tooltip tooltip_first_name"
                                                id="tooltip_first_name"
                                            >
                                                Minimum two characters. Letters
                                                only
                                            </div>
                                            <div
                                                class="tooltip tooltip_first_name_require"
                                                id="tooltip_first_name_require"
                                                style={{ display: "none" }}
                                            >
                                                First name (mandatory)
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
                                                value=""
                                                maxlength="25"
                                                aria-label="Last name"
                                                autocomplete="family-name"
                                            />
                                            <div
                                                class="tooltip tooltip_last_name"
                                                id="tooltip_last_name"
                                            >
                                                Minimum two characters. Letters
                                                only
                                            </div>
                                            <div
                                                class="tooltip tooltip_last_name_require"
                                                id="tooltip_last_name_require"
                                                style={{ display: "none" }}
                                            >
                                                Last name (mandatory)
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
                                                value=""
                                                maxlength="255"
                                                autocomplete="email"
                                            />
                                            <div
                                                class="tooltip tooltip_user_email"
                                                id="tooltip_user_email"
                                            >
                                                Invalid. Use format:{" "}
                                                <a
                                                    href="https://alcest-investlite.com/cdn-cgi/l/email-protection"
                                                    class="__cf_email__"
                                                    data-cfemail="51242234233f303c3411353e3c30383f7f292929"
                                                >
                                                    [email&#160;protected]
                                                </a>
                                            </div>
                                            <div
                                                class="tooltip tooltip_user_email_required"
                                                id="tooltip_user_email_required"
                                            >
                                                Email address (mandatory)
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

                                    <div class="fieldset_group phone-fieldset">
                                        <div class="fieldset__title">
                                            Phone Number
                                        </div>
                                        <div class="fieldset">
                                            <div class="iti iti--allow-dropdown iti--separate-dial-code">
                                                <div class="iti__flag-container">
                                                    <div
                                                        class="iti__selected-flag"
                                                        tabindex="0"
                                                        title="Bahrain: +973"
                                                    >
                                                        <div class="iti__flag iti__bh"></div>
                                                        <div class="iti__selected-dial-code">
                                                            +973
                                                        </div>
                                                        <div class="iti__arrow"></div>
                                                    </div>
                                                    <div
                                                        class="iti__country-list iti__hide"
                                                        id="country-listbox"
                                                        aria-expanded="false"
                                                        role="listbox"
                                                        aria-activedescendant="iti-item-bh"
                                                    >
                                                        <div class="iti__country-filter">
                                                            <input
                                                                type="text"
                                                                class="iti__country-filter-input"
                                                            />
                                                        </div>
                                                        <ul class="iti__country-list-inner">
                                                            <li
                                                                class="iti__country iti__standard"
                                                                tabindex="-1"
                                                                id="iti-item-bh"
                                                                role="option"
                                                                data-dial-code="973"
                                                                data-country-code="bh"
                                                            >
                                                                <div class="iti__flag-box">
                                                                    <div class="iti__flag iti__bh"></div>
                                                                </div>
                                                                <span class="iti__country-name">
                                                                    Bahrain
                                                                </span>
                                                                <span class="iti__dial-code">
                                                                    +973
                                                                </span>
                                                            </li>
                                                            <li
                                                                class="iti__country iti__standard"
                                                                tabindex="-1"
                                                                id="iti-item-kr"
                                                                role="option"
                                                                data-dial-code="82"
                                                                data-country-code="kr"
                                                            >
                                                                <div class="iti__flag-box">
                                                                    <div class="iti__flag iti__kr"></div>
                                                                </div>
                                                                <span class="iti__country-name">
                                                                    Korea,
                                                                    Republic of
                                                                    (South)
                                                                </span>
                                                                <span class="iti__dial-code">
                                                                    +82
                                                                </span>
                                                            </li>
                                                            <li
                                                                class="iti__country iti__standard"
                                                                tabindex="-1"
                                                                id="iti-item-kw"
                                                                role="option"
                                                                data-dial-code="965"
                                                                data-country-code="kw"
                                                            >
                                                                <div class="iti__flag-box">
                                                                    <div class="iti__flag iti__kw"></div>
                                                                </div>
                                                                <span class="iti__country-name">
                                                                    Kuwait
                                                                </span>
                                                                <span class="iti__dial-code">
                                                                    +965
                                                                </span>
                                                            </li>
                                                            <li
                                                                class="iti__country iti__standard"
                                                                tabindex="-1"
                                                                id="iti-item-my"
                                                                role="option"
                                                                data-dial-code="60"
                                                                data-country-code="my"
                                                            >
                                                                <div class="iti__flag-box">
                                                                    <div class="iti__flag iti__my"></div>
                                                                </div>
                                                                <span class="iti__country-name">
                                                                    Malaysia
                                                                </span>
                                                                <span class="iti__dial-code">
                                                                    +60
                                                                </span>
                                                            </li>
                                                            <li
                                                                class="iti__country iti__standard"
                                                                tabindex="-1"
                                                                id="iti-item-om"
                                                                role="option"
                                                                data-dial-code="968"
                                                                data-country-code="om"
                                                            >
                                                                <div class="iti__flag-box">
                                                                    <div class="iti__flag iti__om"></div>
                                                                </div>
                                                                <span class="iti__country-name">
                                                                    Oman
                                                                </span>
                                                                <span class="iti__dial-code">
                                                                    +968
                                                                </span>
                                                            </li>
                                                            <li
                                                                class="iti__country iti__standard"
                                                                tabindex="-1"
                                                                id="iti-item-qa"
                                                                role="option"
                                                                data-dial-code="974"
                                                                data-country-code="qa"
                                                            >
                                                                <div class="iti__flag-box">
                                                                    <div class="iti__flag iti__qa"></div>
                                                                </div>
                                                                <span class="iti__country-name">
                                                                    Qatar
                                                                </span>
                                                                <span class="iti__dial-code">
                                                                    +974
                                                                </span>
                                                            </li>
                                                            <li
                                                                class="iti__country iti__standard"
                                                                tabindex="-1"
                                                                id="iti-item-sa"
                                                                role="option"
                                                                data-dial-code="966"
                                                                data-country-code="sa"
                                                            >
                                                                <div class="iti__flag-box">
                                                                    <div class="iti__flag iti__sa"></div>
                                                                </div>
                                                                <span class="iti__country-name">
                                                                    Saudi Arabia
                                                                </span>
                                                                <span class="iti__dial-code">
                                                                    +966
                                                                </span>
                                                            </li>
                                                            <li
                                                                class="iti__country iti__standard"
                                                                tabindex="-1"
                                                                id="iti-item-th"
                                                                role="option"
                                                                data-dial-code="66"
                                                                data-country-code="th"
                                                            >
                                                                <div class="iti__flag-box">
                                                                    <div class="iti__flag iti__th"></div>
                                                                </div>
                                                                <span class="iti__country-name">
                                                                    Thailand
                                                                </span>
                                                                <span class="iti__dial-code">
                                                                    +66
                                                                </span>
                                                            </li>
                                                            <li
                                                                class="iti__country iti__standard"
                                                                tabindex="-1"
                                                                id="iti-item-ae"
                                                                role="option"
                                                                data-dial-code="971"
                                                                data-country-code="ae"
                                                            >
                                                                <div class="iti__flag-box">
                                                                    <div class="iti__flag iti__ae"></div>
                                                                </div>
                                                                <span class="iti__country-name">
                                                                    United Arab
                                                                    Emirates
                                                                </span>
                                                                <span class="iti__dial-code">
                                                                    +971
                                                                </span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <input
                                                    type="tel"
                                                    name="phone_num"
                                                    id="phone_num"
                                                    class="phone_num required"
                                                    placeholder="8710211"
                                                    value=""
                                                    aria-label="Phone number"
                                                    autocomplete="tel-national"
                                                />
                                            </div>
                                            <div
                                                class="tooltip tooltip_phone_num"
                                                id="tooltip_phone_num"
                                            >
                                                Enter a valid phone number
                                            </div>
                                            <div
                                                class="tooltip tooltip_phone_num_digits"
                                                id="tooltip_phone_num_digits"
                                            >
                                                Numbers only
                                            </div>
                                            <div
                                                class="tooltip tooltip_phone_num_required"
                                                id="tooltip_phone_num_required"
                                            >
                                                Phone number (mandatory)
                                            </div>
                                            <div
                                                class="tooltip tooltip_country"
                                                id="tooltip_country"
                                            >
                                                Your Location is not yet
                                                supported
                                            </div>
                                            <div
                                                class="tooltip tooltip_phone_num_error"
                                                id="tooltip_phone_num_error"
                                            ></div>
                                        </div>
                                        <select
                                            class="required country visually-hidden"
                                            hidden
                                            id="country"
                                            name="country"
                                            aria-label="Country code"
                                        >
                                            <option value="">
                                                Select Country
                                            </option>
                                            <option
                                                value="17"
                                                id="973"
                                                data-currency="149"
                                                data-iso="bh"
                                                selected
                                            >
                                                Bahrain
                                            </option>
                                            <option
                                                value="113"
                                                id="82"
                                                data-currency="49"
                                                data-iso="kr"
                                            >
                                                Korea, Republic of (South)
                                            </option>
                                            <option
                                                value="114"
                                                id="965"
                                                data-currency="149"
                                                data-iso="kw"
                                            >
                                                Kuwait
                                            </option>
                                            <option
                                                value="129"
                                                id="60"
                                                data-currency="149"
                                                data-iso="my"
                                            >
                                                Malaysia
                                            </option>
                                            <option
                                                value="161"
                                                id="968"
                                                data-currency="149"
                                                data-iso="om"
                                            >
                                                Oman
                                            </option>
                                            <option
                                                value="174"
                                                id="974"
                                                data-currency="118"
                                                data-iso="qa"
                                            >
                                                Qatar
                                            </option>
                                            <option
                                                value="187"
                                                id="966"
                                                data-currency="149"
                                                data-iso="sa"
                                            >
                                                Saudi Arabia
                                            </option>
                                            <option
                                                value="211"
                                                id="66"
                                                data-currency="149"
                                                data-iso="th"
                                            >
                                                Thailand
                                            </option>
                                            <option
                                                value="224"
                                                id="971"
                                                data-currency="149"
                                                data-iso="ae"
                                            >
                                                United Arab Emirates
                                            </option>
                                        </select>
                                        <div
                                            class="fieldset fl visually-hidden js-country-iso"
                                            data-iso="ar"
                                        >
                                            <input
                                                type="hidden"
                                                name="country_prefix"
                                                id="country_prefix"
                                                class="country_prefix required js-country-code"
                                                value="54"
                                            />
                                        </div>
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
