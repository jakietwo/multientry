const Button = {
    sign_now_btn: '立即报名',
    no_count: '名额已满',
    no_start: '会议还未开始',
    entry_meeting: '进入会议',
};
const pi_modal = {
    pi_tip: '温馨提示',
    pi_tip_content: '本次路演仅限于PI客户预约报名',
    PI_btn: '立即认证PI',
};
const sign_success_modal = {
    sign_success_title: '报名成功',
    road_show_theme: '路演主题',
    road_show_time: '路演时间',
    road_show_guest: '路演嘉宾',
    road_show_tip: '路演将通过牛牛直播举行，敬请留意直播通知',
    road_show_modal_btn: '知道了',
};
const other = {
    auto_close: '自动关闭',
};
const textarea_modal = {
    textarea_cancel_btn: '取消',
    textarea_submit_btn: '提交',
    placeholder: '请输入你的问题，以便我们提供更好的帮助。',
    textarea_title: '我要提问',
};
const manager = {
    manager_name: '专属客户经理',
    manager_phone: '电话号码',
    copy_phone: '复制号码',
    qrcode_tip: '扫二维码添加微信',
    copy_success: '复制号码成功！',
    contact_manager: '联系您的专属客户经理',
    more_information: '【了解更多信息】',
};
const question_page = {
    question_header: '尊敬的客户',
    question_sex_man: '先生',
    question_sex_woman: '女士',
    question_hello: '您好，我是您的专属客服{name}，我们正在搜集路演提问环节的问题。',
    question_title: '已收到您的提问',
    question_content:
        '我们已第一时间反馈给企业方，请您留意路演提问环节。如有其他问题想要咨询，欢迎添加服务经理，随时联系{name}，我将竭诚为您服务。',
    my_questions: '我的问题',
    question_tip: '您有什么会议相关的问题？',
    question: '我要提问',
    continue_question_btn: '继续提问',
    question_hello_no_custom: '我们正在收集路演提问环节的问题。',
    question__content_no_custom: '我们已第一时间反馈给企业方，请您留意路演提问环节。',
};
const act_end_modal = {
    act_end: '活动已结束',
    act_end_tip: '感谢您对富途的支持',
};
const banner_component = {
    signed_count: '当前报名人数：',
};
const footer_button = {
    button_sign: '立即报名',
    button_count_max: '名额已满',
    button_no_start: '会议还未开始',
    button_entry_meet: '进入会议',
    button_question: '继续提问',
    button_act_end: '路演结束',
};
const toast_tip = {
    max_number: '问题不可超过140个字符',
    submit_question_success: '提问成功',
    submit_question_fail: '提问失败',
};
const share = {
    shareTitle: '【邀您参加】{title}尊享路演',
    shareDesc: '最后{total}个名额，仅限专业投资者报名',
};
export default {
    road_show_guest: '路演嘉宾',
    had_sign_count: '当前报名人数',
    meet_introduction: '会议介绍',
    meet_summary: '会议材料',
    meet_title: '本期议题',
    meet_ring: '路演环节',
    meet_ring_title: [
        '环节一',
        '环节二',
        '环节三',
        '环节四',
        '环节五',
        '环节六',
        '环节七',
        '环节八',
        '环节九',
    ],
    meet_stocks_title: '相关股票',
    meet_funds_title: '相关基金',
    meet_spot_title: '会议亮点',
    guest_share_title: '嘉宾分享',
    check_online: '在线查看',
    funds_years_trend: '近一年涨幅',
    meet_infos_title: '相关资讯',
    VIP_custom_manager: 'VIP专属客户经理',
    summit_question: '向嘉宾提问',
    go_login: '去登录',
    get_more: '查看更多',
    ...Button,
    ...pi_modal,
    ...manager,
    ...other,
    ...sign_success_modal,
    ...textarea_modal,
    ...question_page,
    ...act_end_modal,
    ...banner_component,
    ...footer_button,
    ...toast_tip,
    ...share,
};
