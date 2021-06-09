<template>
    <div class="FundsComponent">
        <div class="fund-wrapper">
            <div class="main">
                <div v-for="(item, index ) in data">
                    <div :key="index" class="fund-item" @click="()=> handleLaunch(item)">
                        <div class="left">
                            <div class="trend" :class="{fall: +item.rate.split('%')[0] < 0}">
                                <div class="symbol">{{ +item.rate.split('%')[0] > 0 ? '+' : '-' }}</div>
                                <div class="rate">{{ handleFundRate(item.rate) }}</div>
                            </div>
                            <span class="tip">{{ $t('funds_years_trend') }}</span>
                        </div>
                        <div class="content">
                            <div class="name">{{item.fund_name}}</div>
                            <div class="tags">
                                <span  v-for="tag in item.fund_tags" class="tag">{{ tag }}</span>
                            </div>
                        </div>
                        <div class="right" @click="()=> handleLaunch(item)">
                            <img class="arrow" src="../images/arrow.png" alt="arrow">
                        </div>
                    </div>
                </div>
                <div v-if="fundsList.length > 2 && !!collapse" class="more-wrapper">
                    <span @click="handleClickMore" class="more">{{ $t('get_more') }}</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import {launchNN} from 'src/utils';

export default {
    name: 'FundsComponent',
    props: {
        fundsList: Array,
        lang: Number,
    },
    data() {
        return {
            collapse: true
        };
    },
    computed: {
        data() {
            if (!!this.collapse && this.fundsList.length) {
                return this.fundsList.slice(0, 2);
            }
            return this.fundsList;
        }
    },
    methods: {
        handleClickMore() {
            this.collapse = false;
        },
        // 返回的基金保留了小数点后四位，需要改成2位
        handleFundRate(rate) {
            const number = +rate.split('%')[0];
            return number.toFixed(2) + '%';
        },
        handleLaunch(fundInfo) {
            const url = `futunn://quote/stockDetail/${fundInfo.stockId}/1`;
            launchNN(url, 1);
        }
    }
};
</script>

<style scoped lang="less">
.FundsComponent {
    box-sizing: border-box;
    width: 100%;
    padding: 0 0.3rem;

    .fund-wrapper {
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
            .fund-item {
                box-sizing: border-box;
                display: flex;
                align-items: center;
                justify-content: center;
                height: 1.4rem;
                margin-bottom: 0.1rem;
                padding: 0 0.34rem 0 0.21rem;
                background-color: #1c2334;
                border-radius: 0.14rem;

                .left {
                    flex: 1;
                    display: flex;
                    flex-direction: column;

                    .trend {
                        display: flex;
                        align-items: center;
                        margin-bottom: 0.2rem;
                        font-size: 0.4rem;
                        line-height: 1;
                        letter-spacing: -0.01rem;
                        color: #fc3a30;

                        .symbol {
                            height: 100%;
                            margin-bottom: 0.06rem;
                            line-height: 1;
                        }

                        .rate {
                            height: 100%;
                            line-height: 1;
                        }
                    }

                    .fall {
                        color: #419047;
                    }

                    .tip {
                        font-size: 0.2rem;
                        font-weight: normal;
                        font-stretch: normal;
                        line-height: 0.27rem;
                        letter-spacing: 0;
                        color: #b4b4b4;
                    }
                }

                .content {
                    flex: 2.5;
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    justify-content: flex-start;

                    .name {
                        margin-bottom: 0.15rem;
                        font-size: 0.24rem;
                        font-weight: normal;
                        font-stretch: normal;
                        line-height: 0.42rem;
                        letter-spacing: 0.01rem;
                        color: #ffffff;
                    }

                    .tag {
                        margin-right: 0.05rem;
                        padding: 0 0.08rem;
                        border-radius: 0.04rem;
                        border: solid 0.01rem #364a7e;
                        text-align: center;
                        color: #5e77b8;
                        font-size: 0.2rem;

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

