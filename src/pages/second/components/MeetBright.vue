<template>
    <div class="MeetBright">
        <div class="main">
            <div v-for="(item, index) in data" v-bind:key="index">
                <div class="item" :key="index">
                    <img class="img" src="../images/summary/summary_tag.png" alt="tag">
                    <div class="content">
                        {{ item }}
                        <div class="split" v-if="data.length > index + 1"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'MeetBright',
    props: {
        data: Array
    },
};
</script>

<style scoped lang="less">
.MeetBright {
    box-sizing: border-box;
    width: 100%;
    padding: 0 0.3rem;

    .main {
        box-sizing: border-box;
        width: 100%;
        padding: 0.2rem 0.39rem;
        background: linear-gradient(90deg,
        #fff1dd 0%,
        #e5bc9a 100%);
        border-radius: 0.12rem;

        .item {
            display: flex;
            margin-top: 0.2rem;

            .img {
                margin-top: 0.1rem;
                margin-right: 0.2rem;
                width: 0.17rem;
                height: 0.17rem;
            }

            .content {
                font-size: 0.28rem;
                font-weight: normal;
                font-stretch: normal;
                line-height: 0.42rem;
                letter-spacing: 0.01rem;
                color: #000000;

                .split {
                    width: 100%;
                    height: 0.01rem;
                    margin: 0.32rem 0 0;
                    background-color: #d3a37b;
                }
            }
        }
    }
}
</style>

