<template>
    <div class="module-title">
        <div class="title-wrapper">
            <div v-if="lang === 0">
                <img v-if="link === 'guest_share_title'" class="right img" src="../images/lang/cn/guest_share_title.png"
                     alt="right">
                <img v-if="link === 'meet_funds_title'" class="right img" src="../images/lang/cn/meet_funds_title.png"
                     alt="right">
                <img v-if="link === 'meet_infos_title'" class="right img" src="../images/lang/cn/meet_infos_title.png"
                     alt="right">
                <img v-if="link === 'meet_ring'" class="right img" src="../images/lang/cn/meet_ring.png" alt="right">
                <img v-if="link === 'meet_spot_title'" class="right img" src="../images/lang/cn/meet_spot_title.png"
                     alt="right">
                <img v-if="link === 'meet_stocks_title'" class="right img"
                     src="../images/lang/cn/meet_stocks_title.png"
                     alt="right">
                <img v-if="link === 'meet_title'" class="right img" src="../images/lang/cn/meet_title.png" alt="right">
                <img v-if="link === 'road_show_guest'" class="right img" src="../images/lang/cn/road_show_guest.png"
                     alt="right">
                <img v-if="link === 'VIP_custom_manager'" class="right img vip"
                     src="../images/lang/cn/VIP_custom_manager.png" alt="right">
            </div>
            <div v-else-if="lang === 1">
                <img v-if="link === 'guest_share_title'" class="right img" src="../images/lang/hk/guest_share_title.png"
                     alt="right">
                <img v-if="link === 'meet_funds_title'" class="right img" src="../images/lang/hk/meet_funds_title.png"
                     alt="right">
                <img v-if="link === 'meet_infos_title'" class="right img" src="../images/lang/hk/meet_infos_title.png"
                     alt="right">
                <img v-if="link === 'meet_ring'" class="right img" src="../images/lang/hk/meet_ring.png" alt="right">
                <img v-if="link === 'meet_spot_title'" class="right img" src="../images/lang/hk/meet_spot_title.png"
                     alt="right">
                <img v-if="link === 'meet_stocks_title'" class="right img"
                     src="../images/lang/hk/meet_stocks_title.png"
                     alt="right">
                <img v-if="link === 'meet_title'" class="right img" src="../images/lang/hk/meet_title.png" alt="right">
                <img v-if="link === 'road_show_guest'" class="right img" src="../images/lang/hk/road_show_guest.png"
                     alt="right">
                <img v-if="link === 'VIP_custom_manager'" class="right img vip"
                     src="../images/lang/hk/VIP_custom_manager.png" alt="right">
            </div>

        </div>
    </div>
</template>
<script>
import {lang_enum} from '../config'

export default {
    name: 'ModuleTitle',
    props: {
        link: String,
        lang: Number,
    },
    data() {
        return {
            lang_enum,
            src: ''
        }
    },
}
</script>

<style scoped lang="less">
.module-title {
    width: 100%;
    padding: 0.8rem 0 0.4rem;
    text-align: center;

    .title-wrapper {
        display: flex;
        align-items: center;
        justify-content: center;

        .img {
            width: 3.84rem;
            height: 0.45rem;
        }
        .vip {
            width: 5.6rem;
        }

    }
}
</style>

