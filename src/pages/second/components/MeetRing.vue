<template>
    <div class="meet-ring">
        <div class="wrapper">
            <div>
                <div v-for="(item, index) in meet_ring" v-bind:key="index">
                    <div class="item">
                        <div class="tag">
                            <img class="tag-img" src="../images/tag.png" alt="tag">
                            <img class="down-img" src="../images/down.png" alt="down" v-if="meet_ring.length - 1 > index">
                        </div>
                        <div class="right">
                            <div class="header">
                                <span class="header-title">{{ $t('meet_ring_title')[index]}}</span>
                                <span class="time">{{dayjs.unix(item.start_at).format('HH:mm')}}-{{dayjs.unix(item.end_at).format('HH:mm')}}</span>
                            </div>
                            <p class="content">{{ item.name }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import dayjs from 'dayjs';
export default {
    name: 'MeetRing',
    props: {
        meet_ring: Array
    },
    data() {
        return {
            dayjs
        };
    },
};
</script>

<style scoped lang="less">
.meet-ring {
    box-sizing: border-box;
    width: 100%;
    padding: 0 0.3rem;
    .wrapper {
        box-sizing: border-box;
        position: relative;
        padding: 0.5rem 0.39rem;
        border: 1px solid #b596ad;
        background: linear-gradient(90deg, #2f3544 0%, #252c3c 100%);;
        border-radius: 0.12rem;
        .item {
            display: flex;
            .tag {
                display: flex;
                flex-direction: column;
                margin-right: 0.4rem;
                padding-top: 0.04rem;
                .tag-img {
                    width: 0.21rem;
                    height: 0.21rem;
                }
                .down-img {
                    width: 0.17rem;
                    height: 0.97rem;
                    margin: 0.08rem 0;
                }
            }
            .right {
                display: flex;
                flex-direction: column;
                .header {
                    display: flex;
                    align-items: flex-end;
                    .header-title {
                        margin-right: 0.22rem;
                        font-size: 0.32rem;
                        font-weight: normal;
                        font-stretch: normal;
                        line-height: 1;
                        letter-spacing: 0.01rem;
                        color: #e5b898;
                    }
                    .time {
                        font-size: 0.24rem;
                        font-weight: normal;
                        font-stretch: normal;
                        line-height: 1;
                        letter-spacing: 0;
                        color: #b4b4b4;
                    }

                }
                .content {
                    margin-top: 0.2rem;
                    font-size: 0.28rem;
                    font-weight: normal;
                    font-stretch: normal;
                    line-height: 1;
                    color: #ffffff;
                }
            }
        }
    }
}
</style>

