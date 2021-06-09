<template>
    <div class="GuestComponent" :class="{noGuest: !guest_desc}" >
        <div class="wrapper" :class="{noDesc: !guest_desc}">
            <div class="guest">
                <div class="avatar">
                    <div class="avatar-wrap">
                        <img class="img-avatar" :src="avatar" alt="avatar" />
                    </div>
                </div>
                <div class="name-wrapper">
                    <p class="name">{{ guest_name }}</p>
                    <p class="title">{{ guest_title }}</p>
                </div>
            </div>
            <div class="guest-info" v-if="guest_desc">
                <p class="content">{{guest_desc}}</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'GuestComponent',
    props: {
        avatar: String,
        guest_name: String,
        guest_title: String,
        guest_desc: String
    }
};
</script>

<style scoped lang="less">
.GuestComponent {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 4.08rem;

    .wrapper {
        display: flex;
        flex-direction: column;
        width: 7.08rem;
        height: 100%;
        background-image: url("../images/guest.png");
        background-repeat: no-repeat;
        background-size: contain;
        .guest {
            box-sizing: border-box;
            display: flex;
            align-items: center;
            width: 100%;
            height: 1.9rem;
            padding-left: 0.48rem;
            .avatar {
                display: flex;
                align-items: center;
                justify-content: center;
                width: 1.32rem;
                height: 1.32rem;
                text-align: center;
                margin-right: 0.29rem;
                border: solid 0.01rem #e5bc9a;
                border-radius: 50%;
                .avatar-wrap {
                    width: 1.1rem;
                    height: 1.1rem;
                    border: solid 0.01rem #d8a071;
                    overflow: hidden;
                    border-radius: 50%;
                    background-color: #1e2533;
                }
                .img-avatar {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
            }
            .name-wrapper {
                display: flex;
                flex-direction: column;
                font-weight: normal;
                font-stretch: normal;
                line-height: 1;
                letter-spacing: 0;
                color: #000000;
                .name {
                    font-size: 0.42rem;
                }
                .title {
                    margin-top: 0.15rem;
                    font-size: 0.28rem;
                }
            }
        }
        .guest-info {
            box-sizing: border-box;
            display: flex;
            width: 100%;
            height: 2.18rem;
            .content {
                padding: 0.48rem 0.4rem 0;
                width: 100%;
                font-size: 0.28rem;
                font-weight: normal;
                font-stretch: normal;
                line-height: 0.42rem;
                letter-spacing: 0;
                color: #000000;
            }
        }
    }
    .noDesc {
        height: 1.9rem;
        background-image: url("../images/no_desc.png");
        background-repeat: no-repeat;
        background-size: contain;
    }
}

.noGuest {
    height: 1.9rem;
}
</style>

