<template>
    <div class="BannerComponent">
        <img class="img" :src="banner" alt="banner">
        <div class="main">
            <div class="left">
                <div class="time">
                    {{ dayjs.unix(start_at).format('YYYY年M月DD日') }}
                    {{ dayjs.unix(start_at).format('HH:mm') }}-{{ dayjs.unix(end_at).format('HH:mm') }}
                </div>
                <div class="count">
                    {{ $t('signed_count') }}
                    <span class="sign">{{ sign_count }}</span>/{{ total_count }}
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import dayjs from 'dayjs';

export default {
    name: 'BannerComponent',
    props: {
        banner: String,
        title: String,
        subTitle: String,
        start_at: Number,
        end_at: Number,
        total_count: Number,
        sign_count: Number,
        guest_name: String,
        guest_title: String,
        lang: Number
    },
    data() {
        return {
            dayjs
        };
    },
};
</script>

<style scoped lang="less">
.BannerComponent {
    position: relative;
    width: 100%;
    height: 5.15rem;

    .img {
        width: 100%;
        height: 100%;
    }

    .main {
        box-sizing: border-box;
        position: absolute;
        display: flex;
        z-index: 10;
        top: 0;
        left: 0;
        width: 100%;
        height: 5.15rem;
        padding: 0 0.27rem 0 0.29rem;

        .left {
            display: flex;
            flex: 1;
            flex-direction: column;

            .title {
                margin-top: 0.5rem;
                color: #293551;
                font-size: 0.86rem;
                line-height: 1;
            }

            .subtitle {
                margin-top: 0.2rem;
                color: #202738;
                font-size: 0.56rem;
                line-height: 1;
            }

            .time {
                margin-top: 3.35rem;
                color: #202838;
                font-size: 0.24rem;
                font-weight: 450;
                line-height: 1;
            }

            .count {
                margin-top: 0.16rem;
                color: #202838;
                font-size: 0.24rem;
                font-weight: 450;
                .sign {
                    color: #fc3a30;
                }
            }

        }

        .right {
            padding-top: 1.31rem;

            .guest-wrap {
                display: flex;
            }

            .guest_name, .guest_title {
                writing-mode: tb-rl;
                color: #000;
            }
            .guest_name {
                font-size: 0.32rem;
            }
            .guest_title {
                font-size: 0.24rem;
            }
        }
    }
}
</style>

