<template>
    <div class="InfoComponent">
        <div class="info-wrapper">
            <div class="main">
                <div v-for="(item, index) in data" v-bind:key="index">
                    <div class="info-item">
                        <div class="content" @click="() => handleRedirect(item.buffUrl)">
                            <div class="title">{{ item.buffTitle }}</div>
                            <div class="footer">
                                <span class="source">{{ item.source }}</span>
                                <span class="time">{{
                                    dayjs.unix(item.dwTime).format('HH:mm')
                                }}</span>
                            </div>
                        </div>
                        <div class="right">
                            <a :href="item.buffUrl" target="_blank" rel="noreferrer noopener">
                                <img class="arrow" src="../images/arrow.png" alt="arrow" />
                            </a>
                        </div>
                    </div>
                </div>
                <div v-if="infosList.length > 2 && !!collapse" class="more-wrapper">
                    <span @click="handleClickMore" class="more">{{ $t('get_more') }}</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import dayjs from 'dayjs';

export default {
    name: 'InfoComponent',
    props: {
        infosList: Array,
    },
    data() {
        return {
            collapse: true,
            dayjs,
        };
    },
    computed: {
        data() {
            if (!!this.collapse && this.infosList.length) {
                return this.infosList.slice(0, 2);
            }
            return this.infosList;
        },
    },
    methods: {
        handleClickMore() {
            this.collapse = false;
        },
        handleRedirect(url) {
            window.location.href = url;
        },
    },
};
</script>

<style scoped lang="less">
.InfoComponent {
    box-sizing: border-box;
    width: 100%;
    padding: 0 0.3rem;

    .info-wrapper {
        box-sizing: border-box;
        display: flex;
        position: relative;
        align-items: center;
        justify-content: center;
        padding: 0.5rem 0.2rem 0.55rem;
        border: 1px solid #b596ad;
        background: linear-gradient(90deg, #2f3544 0%, #252c3c 100%);
        border-radius: 0.12rem;

        .main {
            position: relative;
            z-index: 10;
            width: 100%;
            .info-item {
                box-sizing: border-box;
                display: flex;
                align-items: center;
                justify-content: center;
                margin-bottom: 0.2rem;
                padding: 0 0.34rem 0.2rem 0.33rem;
                background-color: #1c2334;
                border-radius: 0.14rem;
                width: 100%;

                .content {
                    flex: 1;
                    display: flex;
                    flex-direction: column;

                    .title {
                        width: 4.9rem;
                        flex: 1;
                        margin-top: 0.24rem;
                        color: #ffffff;
                        line-height: 0.42rem;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        display: -webkit-box;
                        -webkit-line-clamp: 2;
                        -webkit-box-orient: vertical;
                    }

                    .footer {
                        margin-top: 0.25rem;
                        color: #b4b4b4;
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

            .more-wrapper {
                margin: 0.3rem 0 0;
                text-align: center;

                .more {
                    color: #e5b898;
                }
            }
        }
    }
}
</style>
<<<<<<< HEAD
=======

>>>>>>> trust1
