<template>
    <div class="Pi" v-if="showModal">
        <div class="mask" />
        <div class="act-dialog">
            <div class="act-dialog-wrapper">
                <img class="pi-t" src="../images/pi-t.png" alt="pi">
                <a class="close" title="关闭" @click="closeDialog"></a>
                <div class="topPic topPic-4">{{ $t('pi_tip') }}</div>
                <div class="content">
                    <div class="txtBox01">{{$t('pi_tip_content')}}</div>
                </div>
                <div class="act-dialog-footBtnBar">
                    <a href="https://upgrowth.futunn.com/pi" class="actBtn actBtn01">{{$t('PI_btn')}}</a>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Pi',
    props: {
        showModal: Boolean,
    },
    data() {
        return {}
    },
    watch: {},
    created() {
    },
    mounted() {
    },
    methods: {
        closeDialog() {
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

.pi-t {
    position: absolute;
    left: 1.31rem;
    top: -0.33rem;
    width: 3.38rem;
    height: 2.09rem;
}

.act-dialog-wrapper {
    display: flex;
    box-sizing: border-box;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    border-radius: 0.2rem;
    background-image: url("../images/pi.png");
    background-size: cover;
    background-repeat: no-repeat;
}

.topPic {
    margin-top: 2.39rem;
    margin-bottom: 0.26rem;
    font-size: 0.46rem;
    font-weight: normal;
    font-stretch: normal;
    line-height: 0.58rem;
    letter-spacing: 0;
    color: #000000;
}

.txtBox01 {
    color: #595959;
    font-size: 0.28rem;
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
</style>

