import React from "react";

const Article = () => {
    return (
        <section class="article ">
            <div class="container">
                <div class="article__text">
                    <div data-editable data-name="article__title">
                        <h2>A true “trillionaire company”</h2>
                    </div>
                    <div data-editable data-name="article__text-1">
                        <p>
                            Amazon's market cap reached 1 trillion dollars in
                            2018. According to Bloomberg, Amazon could reach
                            yearly gross revenues over $1 trillion by 2025.
                        </p>
                    </div>
                    <div data-editable data-name="article__text-2">
                        <p>
                            With increasing market revenue, Amazon is the
                            undisputed leader. Investors and people who
                            participate in the Amazon model can continue to
                            benefit from the development prospects for Amazon.
                        </p>
                    </div>
                </div>
                <div
                    class="article__image"
                    data-editable
                    data-name="article__image"
                >
                    <img
                        src="https://alcest-investlite.com/static/funnels/amz_info_4620_2_es_lat/images/art-image.jpg?v=45525"
                        alt=""
                    />
                </div>
            </div>

            <button
                data-editable
                data-name="offer__btn btn"
                data-scroll="form__top"
                class="offer__btn js-scroll"
            >
                <p>Discover how to profit from Amazon investment</p>
            </button>
            <div
                class="offer__payment-methods"
                data-editable
                data-name="offer__payment-methods"
            >
                <img
                    src="https://alcest-investlite.com/static/funnels/amz_info_4620_2_es_lat/images/payment-methods.png?v=45525"
                    alt=""
                />
            </div>
        </section>
    );
};

export default Article;
