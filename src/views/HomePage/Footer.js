import React from "react";

const Footer = () => {
    return (
        <div
            class="gc-footer"
            data-domain="Investlite Branded Domains (with CFD)"
            data-lang="en"
            style={{ backgroundColor: "#040519" }}
        >
            <div class="gc-footer__container">
                <div class="gc-footer__logo">
                    <img
                        src="https://lp-assets.alcest-investlite.com/logo/logo-light_1611740244.svg"
                        alt="logo"
                        class="gc-footer__logo-img"
                    />
                </div>

                <div class="gc-footer__menu">
                    <div class="gc-footer__menu-item">
                        <a
                            href="https://investlite-fo-content.s3-eu-west-1.amazonaws.com/Content/Documents/privacy_policy.pdf"
                            target="_blank"
                            class="gc-footer__menu-link"
                        >
                            Privacy Policy
                        </a>
                    </div>
                    <div class="gc-footer__menu-item">
                        <a
                            href="https://investlite-fo-content.s3-eu-west-1.amazonaws.com/Content/Documents/terms.pdf"
                            target="_blank"
                            class="gc-footer__menu-link"
                        >
                            Terms &amp; Conditions
                        </a>
                    </div>
                    <div class="gc-footer__menu-item">
                        <a
                            href="https://www.investlite.com/en/contactus"
                            target="_blank"
                            class="gc-footer__menu-link"
                        >
                            Contact us
                        </a>
                    </div>
                </div>

                <div class="gc-footer__disclaimer">
                    <p>
                        Investlite is operated by Bayline Global World Ltd. a
                        company bearing registration number SC517838, having a
                        registered office address at 69 Brunswick Street,
                        Edinburgh, United Kingdom and by Bayline Trading Ltd. a
                        limited liability company incorporated under the laws of
                        Belize bearing company registration number 136374,
                        having it's registered address at 5 Cork Street, Belize
                        City, Belize regulated by the Belize International
                        Financial Services Commission (IFSC), license number
                        000188/91.
                    </p>
                    <p>
                        Due to regional restrictions, we can't offer services
                        for US, Canada, and some more other residents.
                    </p>
                    <p>
                        Payments are processed by&nbsp;Bayline Global World Ltd.
                        on behalf of&nbsp;Bayline Trading Ltd.&nbsp;
                    </p>
                    <p>Risk Warning:</p>
                    <p>
                        Trading Forex and CFDs carries a high level of risk to
                        your capital.&nbsp;The trading may not be suitable for
                        all investors, so please ensure that you fully
                        understand the risks involved, and seek independent
                        advice if necessary taking into account your investment
                        objectives and level of experience. You should not risk
                        more than you are prepared to lose. Please ensure that
                        you read through our terms and conditions of use
                        carefully before making CFDs/Forex investments.&nbsp;
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
