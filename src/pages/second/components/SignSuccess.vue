<template>
    <div class="SignSuccess" v-if="showModal">
        <div class="mask"/>
        <div class="act-dialog">
            <div class="act-dialog-wrapper">
                <div class="topPic topPic-4">{{ $t('sign_success_title') }}</div>
                <div class="content">
                    <div class="Box01">
                        <div class="theme">
                            <span class="prefix">{{ $t('road_show_theme') }}</span>
                            <span class="item">{{ data.title }}</span>
                        </div>
                        <div class="time">
                            <span class="prefix">{{ $t('road_show_time') }}</span>
                            <span class="item">{{ dayjs.unix(data.start_at).format('MM月DD日 HH:mm') }}</span>
                        </div>
                        <div class="guest">
                            <span class="prefix">{{ $t('road_show_guest') }}</span>
                            <span class="item">{{ data.guest_name }}</span>
                        </div>
                    </div>
                    <div class="Box02">
                        <span class="dot">*</span>
                        {{ $t('road_show_tip') }}
                    </div>
                </div>
                <div class="act-dialog-footBtnBar">
                    <a @click="closeModal" class="actBtn actBtn01">{{ $t('road_show_modal_btn') }}</a>
                </div>
                <div class="auto-close">
                    <span>（{{ time }}s {{$t('auto_close')}}）</span>
                </div>
            </div>

        </div>

    </div>
</template>
<script>
import dayjs from 'dayjs'
export default {
    name: 'SignSuccess',
    props: {
        showModal: Boolean,
        data: Object,
    },
    data() {
        return {
            dayjs,
            time: 3,
            timer: null
        }
    },
    mounted() {
        this.timer = setTimeout(this.closeModal, 3000)
        this.timer = setInterval(() => {
            this.time--;
            if (this.time <= 0) {
                this.closeModal();
            }
        }, 1000)
    },
    methods: {
        closeModal() {
            clearInterval(this.timer)
            this.$emit('onClose')
        }
    }
}
</script>

<style scoped lang="less">
.mask {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 9999;
    background-color: #000000;
    opacity: 0.8;
}

.act-dialog {
    background: none;

    .act-dialog-wrapper {
        width: 6rem;
        height: 6.34rem;
        background-color: #303950;
    }

    .act-dialog-header {
        border-bottom: 1px solid #dbdfeb;
        height: 0.9rem;
        text-align: center;
        line-height: 0.9rem;
        font-size: 0.35rem;
        color: #393b3f;
    }

    .act-dialog-body {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 1.44rem;
        text-align: center;
        font-size: 0.3rem;
        padding: 0.22rem;
    }

    .act-dialog-footer {
        display: flex;
        padding: 0 0.32rem 0.32rem 0.32rem;
        justify-content: center;
        text-align: center;

        .actBtn3 {
            width: 100%;
            height: 0.84rem;
            line-height: 0.84rem;
            border-radius: 0.44rem;
            font-size: 0.32rem;
            color: #fff;
            background-color: #3378dd;
        }
    }
}

.act-dialog-wrapper {
    display: flex;
    box-sizing: border-box;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: 0.41rem 0.36rem 0.59rem;
}

.topPic {
    margin-bottom: 0.45rem;
    font-size: 0.4rem;
    color: #ffffff;
}

.content {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 3.05rem;
    background-image: url("../images/success/success-bg.png");
    background-repeat: no-repeat;
    background-size: cover;

    .Box01 {
        display: flex;
        box-sizing: border-box;
        flex-direction: column;
        width: 100%;
        height: 2.34rem;
        padding: 0.41rem 0.41rem 0.36rem;

        .time, .guest, .theme {
            display: flex;
            align-items: center;

            .prefix {
                margin-right: 0.33rem;
                color: #484848;
                font-size: 0.24rem;
            }

            .item {
                font-size: 0.24rem;
                font-weight: 400;
                font-stretch: normal;
                letter-spacing: 0;
                color: #000000;
            }
        }

        .time {
            flex: 1;
        }
    }

    .Box02 {
        display: flex;
        box-sizing: border-box;
        align-items: center;
        width: 100%;
        height: 0.73rem;
        padding-left: 0.24rem;
        font-size: 0.2rem;
        color: #7b7b7b;

        .dot {
            display: flex;
            align-items: center;
            margin-right: 0.07rem;
            vertical-align: center;
        }
    }
}

.act-dialog-footBtnBar {
    position: absolute;
    bottom: 0.6rem;
    width: 4rem;
    height: 0.88rem;
    background-image: url("../images/button/pi-btn.png");
    background-size: cover;
    background-repeat: no-repeat;
}

.actBtn {
    color: #242f4d;;
    font-size: 0.32rem;
}

.auto-close {
    position: absolute;
    bottom: -0.48rem;
    color: #ffffff;
}
</style>

