<template>
    <div class="GuestShare">
        <img src="../images/summary/pdf.png" alt="pdf" class="pdf">
        <div class="content">
            <div class="file-name">{{ file_name }}</div>
            <div class="intro">{{ file_desc }}</div>
        </div>
        <a :href="file_link" class="check" target="_blank" ref="noopener noreferrer"  >{{ $t('check_online') }}</a>
    </div>
</template>
<script>
export default {
    name: 'GuestShare',
    props: {
        file_link: String,
        file_desc: String,
        file_name: String
    },
    data() {
        return {};
    },
};
</script>

<style scoped lang="less">
.GuestShare {
    box-sizing: border-box;
    display: flex;
    align-items: center;
    width: calc(100% - 0.6rem);
    height: 1.26rem;
    margin: 0 auto;
    padding: 0 0.33rem 0 0.4rem;
    border-radius: 0.12rem;
    border: 1px solid #b596ad;
    background: linear-gradient(90deg, #2f3544 0%, #252c3c 100%);;

    .pdf {
        width: 0.62rem;
        height: 0.74rem;
        margin-right: 0.29rem;
    }

    .content {
        flex: 1;

        .file-name {
            margin-bottom: 0.15rem;
            color: #fff;
            font-size: 0.28rem;
        }

        .intro {
            font-size: 0.2rem;
            color: #b4b4b4;
        }
    }

    .check {
        font-size: 0.24rem;
        color: #e5b898;
    }
}
</style>

