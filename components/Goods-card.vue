<template>
<div class="goods-card">
    <div class="goods-card__column">
        <img src="~/assets/img/cards/G2H.png" alt="" class="goods-card__img">
        <div class="goods-card__name">G2H</div>
        <div class="goods-card__info">Многофункциональное вытяжное устройство для естественной и гибридной вентиляции</div>
    </div>
    <div class="goods-card__column">
        <div class="goods-card__price">6 848 ₽ – 56 584 ₽</div>
        <div class="goods-card__price-converted">77.60 € – 643.86 €</div>
        <div class="goods-card__button button">
            Подробнее
        </div>
    </div>
</div>
</template>


<style scoped>
.goods-card {
    width: 305px;
    height: 563px;
    border-radius: 5px;
    background-color: #F6F8FA;
    padding: 25px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.goods-card__img {
    width: 245px;
    height: 245px;
}

.goods-card__name {
    font-weight: 700;
    font-size: 22px;
    line-height: 121%;
    color: #1f2432;
    padding: 5px 0 10px;
}

.goods-card__info {
    font-weight: 400;
    font-size: 14px;
    line-height: 145%;
    color: #1f2432;
}

.goods-card__price {
    font-family: var(--second-family);
    font-weight: 500;
    font-size: 22px;
    line-height: 130%;
    letter-spacing: 0.01em;
    color: #1f2432;
}

.goods-card__price-converted {
    font-weight: 400;
    font-size: 16px;
    line-height: 145%;
    color: #797b86;
    margin: 3px 0 20px;
}

</style>