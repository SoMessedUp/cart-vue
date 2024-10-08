<template>
    <div class="cart-card">
        <img src="~/assets/img/cards/G2H.png" alt="" class="cart-card__img">
        <div class="cart-card__text">
            <div class="cart-card__name">Вытяжное устройство G2H</div>
            <div class="cart-card__info">12-72/168 м3/ч / гидрорегулируемый расход /<br> от датчика присутствия</div>
            <div class="cart-card__article">Артикул: G2H1065</div>
        </div>
        <div class="cart-card__quantity">
            <div class="cart-card__quantity-buttons">
                <div class="cart-card__quantity-remove cart-card__quantity-button">-</div>
                <div class="cart-card__quantity-number cart-card__quantity-button">1</div>
                <div class="cart-card__quantity-add cart-card__quantity-button">+</div>
            </div>
            <div class="cart-card__quantity-price"></div>
        </div>
        <div class="cart-card__sum">12644р</div>
        <div class="cart-card__button-delete">×</div>
    </div>
</template>

<style scoped>
.cart-card {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    padding: 25px 37px 20px 15px;
}

.cart-card+.cart-card {
    border-top: 1px solid #c4c4c4;
}

.cart-card__img {
    width: 100px;
    height: 100px;
    margin-right: 30px;
}

.cart-card__name {
    font-weight: 600;
    font-size: 16px;
    line-height: 145%;
    color: #1f2432;
}

.cart-card__info {
    padding: 6px 0;
    font-weight: 400;
    font-size: 12px;
    line-height: 150%;
    color: #2c3242;
}

.cart-card__article {
    font-weight: 400;
    font-size: 14px;
    line-height: 150%;
    color: #797b86;
}

.cart-card__quantity-buttons {
    display: flex;
    align-items: center;
}

.cart-card__quantity-button {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    height: 34px;
    width: 34px;
    background-color: #EEF1F4;
    margin: 0 1px;
}

.cart-card__sum {
    font-family: var(--second-family);
    font-weight: 500;
    font-size: 18px;
    line-height: 145%;
    text-align: right;
    color: #1f2432;
}

.cart-card__button-delete {
    position: absolute;
    top: 10px;
    right: 10px; 
    cursor: pointer; 
}

</style>
