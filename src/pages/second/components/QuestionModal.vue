<template>
    <div class="QuestionModal" v-if="showModal">
        <div class="mask"/>
        <div class="act-dialog">
            <div class="act-dialog-wrapper">
                <div class="header">
                    <div class="cancel" @click="handleCancel">{{ $t('textarea_cancel_btn') }}</div>
                    <div class="title_tip">{{ $t('textarea_title') }}</div>
                    <a class="submit" @click="handleSubmit" :class="{no_click: !showBtn}">{{$t('textarea_submit_btn')}}</a>
                </div>
                <textarea autofocus class="textarea" name="textarea" id="text" cols="10" rows="8"
                          v-model="question"
                          :placeholder="$t('placeholder')"></textarea>
            </div>
        </div>
    </div>
</template>
<script>

export default {
    name: 'QuestionModal',
    props: {
        showModal: Boolean,
    },
    data() {
        return {
            question: ''
        };
    },
    computed: {
        showBtn() {
            return !!this.question;
        }
    },
    watch: {
        showModal(val) {
            if (!val) {
                this.question = '';
            }
        }
    },
    methods: {
        closeModal() {
            this.$emit('onClose');
        },
        handleCancel() {
            this.$emit('onClose');
        },
        handleSubmit() {
            if (!this.question) return;
            this.$emit('onSubmit', this.question);
        }
    }
};
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
        width: 7.5rem;
        height: 5.55rem;
        background-color: #ffffff;
        border-radius: 0.2rem 0.2rem 0 0;
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

.header {
    display: flex;
    box-sizing: border-box;
    align-items: center;
    width: 100%;
    height: 0.81rem;
    padding: 0 0.4rem;
    font-size: 0.28rem;
    border-bottom: 0.01rem solid #d2d2d2;

    .cancel {
        color: #010101;
    }

    .title_tip {
        flex: 1;
        text-align: center;
        color: #898989;
    }

    .no_click {
        color: #ccc;
    }
}

.textarea {
    display: block;
    width: 6.9rem;
    margin: 0.35rem auto 0;
    outline: none;
    border: none;
}
</style>

