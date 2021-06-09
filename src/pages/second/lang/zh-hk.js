const Button = {
    sign_now_btn: '立即報名',
    no_count: '名額已滿',
    no_start: '會議還未開始',
    entry_meeting: '進入會議',
};
const pi_modal = {
    pi_tip: '溫馨提示',
    pi_tip_content: '本次路演僅限於PI客戶預約報名',
    PI_btn: '立即認證PI',
};
const sign_success_modal = {
    sign_success_title: '報名成功',
    road_show_theme: '路演主題',
    road_show_time: '路演時間',
    road_show_guest: '路演嘉賓',
    road_show_tip: '路演將通過牛牛直播舉行，敬請留意直播通知',
    road_show_modal_btn: '知道了',
};
const other = {
    auto_close: '自動關閉',
};
const textarea_modal = {
    textarea_cancel_btn: '取消',
    textarea_submit_btn: '提交',
    placeholder: '請輸入你的問題，以便我們提供更好的幫助。',
    textarea_title: '我要提問',
};
const manager = {
    manager_name: '專屬客戶經理',
    manager_phone: '電話號碼',
    copy_phone: '複製號碼',
    qrcode_tip: '掃二維碼添加微信',
    copy_success: '複製號碼成功！',
    contact_manager: '聯繫您的專屬客戶經理',
    more_information: '【獲得更多資料】',
};
const question_page = {
    question_header: '尊敬的客戶',
    question_sex_man: '先生',
    question_sex_woman: '女士',
    question_hello: '您好，我是您的專屬客服{name}，我們正在蒐集路演提問環節的問題。',
    question_title: '已收到您的提問',
    question_content:
        '我們已第一時間反饋給企業方，請您留意路演提問環節。如有其他問題想要諮詢，歡迎添加服務經理，隨時聯繫{name}，我將竭誠為您服務',
    my_questions: '我的問題',
    question_tip: '您有什麼會議相關的問題？',
    question: '我要提問',
    continue_question_btn: '繼續提問',
    question_hello_no_custom: '我們正在收集路演提問環節的問題。',
    question__content_no_custom: '我們已第一時間反饋給企業方，請您留意路演提問環節。',
};

const banner_component = {
    signed_count: '當前報名人數：',
};
const footer_button = {
    button_sign: '立即報名',
    button_count_max: '名額已滿',
    button_no_start: '會議還未開始',
    button_entry_meet: '進入會議',
    button_question: '繼續提問',
    button_act_end: '路演結束',
};
const toast_tip = {
    max_number: '問題不可超過140個字符',
    submit_question_success: '提問成功',
    submit_question_fail: '提問失敗',
};

const share = {
    shareTitle: '【邀您參加】{title}尊享路演',
    shareDesc: '最後{total}個名額，僅限專業投資者報名',
};

export default {
    road_show_guest: '路演嘉賓',
    had_sign_count: '當前報名人數',
    meet_introduction: '會議介紹',
    meet_summary: '會議材料',
    meet_title: '本期議題',
    meet_ring: '路演環節',
    meet_ring_title: [
        '環節一',
        '環節二',
        '環節三',
        '環節四',
        '環節五',
        '環節六',
        '環節七',
        '環節八',
        '環節九',
    ],
    meet_stocks_title: '相關股票',
    meet_funds_title: '相關基金',
    meet_spot_title: '會議亮點',
    guest_share_title: '嘉賓分享',
    check_online: '在線查看',
    funds_years_trend: '近一年漲幅',
    meet_infos_title: '相關資訊',
    VIP_custom_manager: 'VIP專屬客戶經理',
    summit_question: '向嘉賓提問',
    get_more: '查看更多',
    ...Button,
    ...pi_modal,
    ...manager,
    ...other,
    ...sign_success_modal,
    ...textarea_modal,
    ...question_page,
    ...banner_component,
    ...footer_button,
    ...toast_tip,
    ...share,
};
