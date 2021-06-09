<template>
    <div class="meet-issue">
        <div class="issue-wrapper">
            <div class="list" v-for="(item, index) in meet_issue">
                <div :key="item" class="item" :class="{last: index === meet_issue.length -  1}">
                    <span class="number">{{ meet_serial_number[index] }}</span>
                    <span class="content">{{item}}</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import config from '../config/index.js';

export default {
    name: 'MeetIssue',
    props: {
        meet_issue: Array,
    },
    data() {
        return {
            meet_serial_number: config.meet_serial_number
        };
    },
};
</script>

<style scoped lang="less">
.meet-issue {
    box-sizing: border-box;
    width: 100%;
    padding: 0 0.3rem;
    .issue-wrapper {
        position: relative;
        padding: 0.2rem 0;
        border: 1px solid #b596ad;
        background: linear-gradient(90deg, #2f3544 0%, #252c3c 100%);;
        border-radius: 0.12rem;
        .list {
            .item {
                position: relative;
                display: flex;
                align-items: center;
                justify-content: center;
                box-sizing: border-box;
                width: 6.1rem;
                height: 0.9rem;
                margin-left: 0.4rem;
                border-bottom: #454d61 0.01rem solid;

                .number {
                    width: 0.65rem;
                    font-family: DIN2014-Demi, sans-serif;
                    font-size: 0.42rem;
                    font-weight: normal;
                    font-stretch: normal;
                    line-height: 0.9rem;
                    letter-spacing: 0;
                    color: #e5b898;
                }

                .content {
                    flex: 1;
                    font-family: FZLTHK--GBK1-0, sans-serif;
                    font-size: 0.28rem;
                    font-weight: normal;
                    font-stretch: normal;
                    line-height: 1;
                    letter-spacing: 0;
                    color: #ffffff;
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                }
            }

            .last {
                border-bottom: none;
            }
        }
    }
}
</style>

