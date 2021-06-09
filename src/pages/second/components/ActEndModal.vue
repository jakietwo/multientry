<template>
    <div class="ActEndModal" v-if="showModal">
        <div class="mask"/>
        <div class="act-dialog j_dialog_over">
            <div class="act-dialog-activityEnd">
                <a href="javascript:void(0);" class="close j_close_btn" title="关闭"
                   @click="toggleDialogShow('overDlg')"></a>
                <div class="tips-pic tips-pic-01"></div>
                <div class="title">{{ $t('act_end') }}</div>
                <div class="content">
                    {{ $t('act_end_tip') }}
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'ActEndModal',
    props: {
        showModal: Boolean
    },
    data() {
        return {}
    },
    methods: {}
}
</script>

<style scoped lang="less">
.mask {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 999;
    background-color: #000000;
    opacity: 0.8;
}
</style>

