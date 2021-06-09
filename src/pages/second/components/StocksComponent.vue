<template>
    <div class="StocksComponent">
        <div class="stock-wrapper">
            <div class="main">
                <div v-for="item in data">
                    <div :key="item.stockId" class="stock-item" @click="()=> handleLaunch(item)">
                        <div class="left">
                            <div class="header">
                                <span class="price" :class="{fall: !item.trend}">{{ (item.price / Math.pow(10, 9)).toFixed(3) }}</span>
                                <div v-if="item.trend === 1">
                                    <img class="up" src="../images/up.png" alt="up">
                                </div>
                                <div v-else>
                                    <img class="up" src="../images/fall.png" alt="up">
                                </div>
                            </div>
                            <div class="trend" :class="{fall_trend: !item.trend}">
                                {{ item.trend === 1 ? '+' : '' }}{{ (item.rate * 100).toFixed(2) }}%
                            </div>
                        </div>
                        <div class="content">
                            <div class="name">{{ item[stock_lang_name[lang]] }}</div>
                            <div class="footer">
                                <span class="tag">{{ item.srcCode.split('.')[1] }}</span>
                                <span class="code">{{ item.srcCode.split('.')[0] }}</span>
                            </div>
                        </div>
                        <div class="right" >
                            <img class="arrow" src="../images/arrow.png" alt="arrow">
                        </div>
                    </div>
                </div>
                <div v-if="stocksList.length > 2 && !!collapse" class="more-wrapper">
                    <span @click="handleClickMore" class="more">{{ $t('get_more') }}</span>
                </div>
            </div>

        </div>
    </div>
</template>
<script>
import {launchNN} from 'src/utils';
import {stock_lang_name} from '../config';

export default {
    name: 'StocksComponent',
    props: {
        stocksList: Array,
        lang: Number
    },
    data() {
        return {
            collapse: true,
            stock_lang_name
        };
    },
    computed: {
        data() {
            if (this.collapse) {
                return this.stocksList.slice(0, 2);
            }
            return this.stocksList;
        }
    },
    methods: {
        handleClickMore() {
            this.collapse = false;
        },
        handleLaunch(stockInfo) {
            const url = `futunn://quote/stockDetail/${stockInfo.stockId}/1`;
            launchNN(url, 1);
        }
    }
};
</script>

<style scoped lang="less">
.StocksComponent {
    box-sizing: border-box;
    width: 100%;
    padding: 0 0.3rem;

    .stock-wrapper {
        box-sizing: border-box;
        display: flex;
        position: relative;
        align-items: center;
        justify-content: center;
        padding: 0.5rem 0.2rem 0.55rem;
        border: 1px solid #b596ad;
        background: linear-gradient(90deg, #2f3544 0%, #252c3c 100%);;
        border-radius: 0.12rem;

        .main {
            position: relative;
            z-index: 10;
            width: 100%;
            .stock-item {
                box-sizing: border-box;
                display: flex;
                align-items: center;
                justify-content: center;
                width: 100%;
                height: 1.4rem;
                padding: 0 0.34rem;
                margin-bottom: 0.1rem;
                background-color: #1c2334;
                border-radius: 0.14rem;

                .left {
                    flex: 1;

                    .header {
                        display: flex;
                        align-items: center;
                        justify-content: flex-start;
                        margin-bottom: 0.15rem;

                        .price {
                            font-size: 0.4rem;
                            font-weight: normal;
                            font-stretch: normal;
                            line-height: 1;
                            letter-spacing: -0.01rem;
                            color: #fc3a30;
                        }
                        .fall {
                            color: #419047;
                        }
                        .up {
                            width: 0.19rem;
                            height: 0.2rem;
                            margin-left: 0.1rem;
                        }
                    }

                    .trend {
                        width: 1.1rem;
                        height: 0.36rem;
                        line-height: 0.36rem;
                        background-color: #fc3a30;
                        border-radius: 0.04rem;
                        text-align: center;
                        color: #ffffff;
                    }
                    .fall_trend {
                        background-color: #419047;
                    }
                }

                .content {
                    flex: 2;

                    .name {
                        width: 3.5rem;
                        margin-bottom: 0.16rem;
                        color: #ffffff;
                        font-size: 0.36rem;
                        font-weight: normal;
                        font-stretch: normal;
                        line-height: 0.42rem;
                        letter-spacing: 0.01rem;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                    }

                    .tag {
                        display: inline-block;
                        width: 0.4rem;
                        height: 0.28rem;
                        text-align: center;
                        font-size: 0.2rem;
                        border-radius: 0.05rem;
                        border: solid 0.01rem #8654d7;
                        color: #8654d7;
                    }

                    .code {
                        font-size: 0.2rem;
                        font-weight: normal;
                        font-stretch: normal;
                        line-height: 0.27rem;
                        letter-spacing: 0;
                        color: #b4b4b4;
                    }
                }

                .right {
                    width: 0.15rem;

                    .arrow {
                        width: 0.15rem;
                        height: 0.26rem;
                    }
                }
            }
        }

        .more-wrapper {
            margin: 0.3rem 0 0;
            text-align: center;

            .more {
                color: #e5b898;
            }
        }
    }
}
</style>

