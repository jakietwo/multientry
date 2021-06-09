<template>
    <div class="CustomManager">
        <div class="content">
            <div class="main">
                <div class="left">
                    <div class="name-wrap">
                        <span class="name-tip">{{ $t('manager_name') }}</span>
                        <span class="name">{{ name }}</span>
                    </div>
                    <div class="phone-wrap">
                        <span class='phone-tip'>{{ $t('manager_phone') }}</span>
                        <span class="mobile">{{ `${mobile.slice(0, 3)} ${mobile.slice(3, 7)} ${mobile.slice(7, 11)}` }}
                        <span class="copy" @click="handleCopyMobile">{{ $t('copy_phone') }}</span>
                    </span>
                    </div>
                </div>
                <div class="right">
                    <div class="qrcode">
                        <img class="img" :src="qrcode_url" alt="code">
                    </div>
                </div>
            </div>
            <div v-if="type === 2" class="tip-wrap">
                <div class="split"/>
                <div class="tip">
                    {{$t('contact_manager')}}
                    <span class="more">{{$t('more_information')}}</span>
                </div>
            </div>
        </div>

    </div>
</template>
<script>
export default {
    name: 'CustomManager',
    props: {
        type: Number,
        name: String,
        qrcode_url: String,
        mobile: String,
    },
    data() {
        return {};
    },
    methods: {
        handleCopyMobile() {
            this.copyNumber(this.mobile);
        },
        copyNumber(number) {
            const transfer = document.createElement('input');
            document.body.appendChild(transfer);
            transfer.value = number; // 这里表示想要复制的内容
            transfer.select();
            if (document.execCommand('copy')) {
                document.execCommand('copy');
                this.$toast.tips(this.$t('copy_success'));
            }
            document.body.removeChild(transfer);
        }
    }
};
</script>

<style scoped lang="less">
.CustomManager {
    box-sizing: border-box;
    width: 100%;
    padding: 0 0.3rem;
    .content {
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        position: relative;
        align-items: center;
        justify-content: center;
        background-image: url("../images/custom.png");
        background-repeat: no-repeat;
        background-size: cover;
        border-radius: 0.12rem;
        border: 0.01rem solid #b596ad;
    }
    .main {
        box-sizing: border-box;
        display: flex;
        position: relative;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 3rem;
        padding: 0.42rem 0.5rem 0.4rem;

        .left {
            flex: 1;
            display: flex;
            flex-direction: column;
            height: 100%;

            .name-wrap {
                flex: 1;
                display: flex;
                flex-direction: column;

                .name-tip {
                    color: #b4b4b4;
                    font-size: 0.24rem;
                }

                .name {
                    display: block;
                    margin-top: 0.15rem;
                    color: #ffffff;
                    font-size: 0.42rem;
                }
            }

            .phone-wrap {
                flex: 1;
                display: flex;
                flex-direction: column;
                margin-top: 0.5rem;

                .phone-tip {
                    margin-bottom: 0.15rem;
                    color: #b4b4b4;
                    font-size: 0.24rem;
                }

                .mobile {
                    color: #fff;
                    font-size: 0.32rem;

                    .copy {
                        font-size: 0.21rem;
                        color: #e5b898;
                        text-decoration: underline;
                    }
                }
            }
        }

        .right {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            width: 2rem;
            border-radius: 0.1rem;

            .qrcode {
                width: 1.85rem;
                height: 1.85rem;
                margin-top: 0.1rem;
                margin-bottom: 0.15rem;
                .img {
                    width: 1.85rem;
                    height: 1.85rem;
                }
            }

            .code-tip {
                font-size: 0.2rem;
                font-weight: normal;
                font-stretch: normal;
                line-height: 0.42rem;
                letter-spacing: 0;
                color: #b4b4b4;
            }
        }
    }
    .tip-wrap {
        box-sizing: border-box;
        height: 0.82rem;
        .tip {
            margin-top: 0.31rem;
            margin-bottom: 0.3rem;
            padding-left: 0.3rem;
            color: #b4b4b4;
            font-size: 0.21rem;
            .more {
                display: inline-block;
                color: #e5e9f4;
            }
        }
    }
    .split {
        width: 6.1rem;
        height: 0.01rem;
        margin-left: 0.3rem;
        background-color: #5a658f;
    }
}
</style>

