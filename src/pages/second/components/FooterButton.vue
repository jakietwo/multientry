<template>
    <div class="FooterButton">
        <div class="login-wrapper" @click="handleClickBtn">
            <div class="mask"></div>
            <div class="login img" :class="{normal: status === 1}">
                <div v-if="text === 0" class="text0">{{ $t('button_sign') }}</div>
                <div v-if="text === 1" class="text1">{{ $t('button_count_max') }}</div>
                <div v-if="text === 2" class="text1">{{$t('button_no_start')}}</div>
                <div v-if="text === 3" class="text0">{{ $t('button_entry_meet') }}</div>
                <div v-if="text === 4" class="text0">{{ $t('button_question') }}</div>
                <div v-if="text === 5" class="text1">{{ $t('button_act_end') }}</div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'FooterButton',
    props: {
        status: Number,
        text: Number, //  0, 立即报名, 1，名额已满， 2， 会议未开始， 3， 进入会议， 4， 继续提问
    },
    methods: {
        handleClickBtn() {
            if (this.status === 0) return;
            this.$emit('onClick');
        }
    }
};
</script>

<style scoped lang="less">
.FooterButton {
    .login-wrapper {
        position: fixed;
        bottom: 0;
        z-index: 100;
        width: 7.5rem;
        height: 1.7rem;
        margin: 0 auto;
        .mask {
            position: absolute;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
            background-color: #12141b;
            opacity: 0.7;
        }
        .login {
            position: relative;
            z-index: 10;
            box-sizing: border-box;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            height: 0.9rem;
            margin: 0.2rem auto;
            font-size: 0.4rem;
            font-weight: normal;
            font-stretch: normal;
            line-height: 0.9rem;
            letter-spacing: 0.04rem;

            .text0 {
                color: #242f4d;
            }

            .text1 {
                color: #5e78b9;
            }
        }

        .img {
            width: 6.94rem;
            height: 0.9rem;
            background-image: url("../images/button/no-normal.png");
            background-size: cover;
            background-repeat: no-repeat;
        }

        .normal {
            width: 6.94rem;
            height: 0.9rem;
            background-image: url("../images/button/normal.png");
            background-size: cover;
            background-repeat: no-repeat;
        }
    }
}
</style>

