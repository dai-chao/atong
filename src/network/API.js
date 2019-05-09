

//const LOCAL_SERVER = "http://192.168.0.44:8080";
const ONLINE_SERVER = "http://182.92.109.146:7779";

const LOCAL_SERVER = "http://182.92.109.146:7779";

const API = {
    Login: LOCAL_SERVER + "/sys/login",                                  //登录
    Fill_The_Information: LOCAL_SERVER + " /user/isall",                 //补全信息
    Verification_Code: LOCAL_SERVER + "/sys/validcode",                  //获取验证码
    Modify_Mobile_Phone_Number: LOCAL_SERVER + "/user/chgphone",        //修改手机号
    Upload_The_Picture: LOCAL_SERVER + "/user/chgheader",               //上传修改头像
    Download_Address: LOCAL_SERVER + "/user/getVersion",                //获取下载地址
    Personal_Center: LOCAL_SERVER + "/personal/myCenter",               //个人中心资料
    Modify_The_Information: LOCAL_SERVER + "/personal/updatePersonal",  //修改个人信息
    The_System_Informs: LOCAL_SERVER+ "/personal/mailList",             //系统通知
    Feedback: LOCAL_SERVER+ " /personal/addFeedback",                   //意见反馈
};
export default API;

