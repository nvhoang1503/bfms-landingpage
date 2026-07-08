import BGxs from 'assets/BackgroundImg/Background.png'
import BGmd from 'assets/BackgroundImg/Backgroundmd.png'
import BGlg from 'assets/BackgroundImg/Backgroundlg.png'
import BGxl from 'assets/BackgroundImg/Backgroundxl.png'
import BGxxl from 'assets/BackgroundImg/Background2xl.png'
import utils from "core/utils";

const background = [{ BGxs }, { BGmd }, { BGlg }, { BGxl }, { BGxxl }]
let backgroundConfig = []

background.forEach((v, i) => {
    utils.toDataUrl(background[i][Object.keys(v)[0]], Object.keys(v)[0], result => {
        backgroundConfig.push(result)
    })
});


export default backgroundConfig