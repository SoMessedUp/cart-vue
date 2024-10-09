<template>
    <div class="cart-card">
        <img :src="item.imgSrc" alt="" class="cart-card__img">
        <div class="cart-card__text">
            <div class="cart-card__name">{{ item.name }}</div>
            <div class="cart-card__info">{{ item.info }}</div>
            <div class="cart-card__article">Артикул: {{ item.article }}</div>
        </div>
        <div class="cart-card__quantity">
            <div class="cart-card__quantity-buttons">
                <div class="cart-card__quantity-remove cart-card__quantity-button">-</div>
                <div class="cart-card__quantity-number cart-card__quantity-button">{{ item.quantity }}</div>
                <div class="cart-card__quantity-add cart-card__quantity-button">+</div>
            </div>
            <div class="cart-card__quantity-price">{{ item.price }} / шт.</div>
        </div>
        <div class="cart-card__sum">{{ item.price }}</div>
        <div class="cart-card__button-delete">×</div>
    </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
};
</script>

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
