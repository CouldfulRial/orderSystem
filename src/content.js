import './content.css';
import Card from './card';

import buoluochaofan from './res/boluochaofan.jpg';
import danchaofan from './res/danchaofan.jpg';
import fanqiechaodan from './res/fanqiechaodan.jpg';
import ganguobaocai from './res/ganguobaocai.jpg';
import guojiaojixiong from './res/guojiaojixiong.jpg';
import hongshaojitui from './res/hongshaojitui.jpg';
import hongzaogouqi from './res/hongzaogouqi.jpg';
import jiachangdoufu from './res/jiachangdoufu.jpg';
import jingdianyidalimian from './res/jingdianyidalimian.jpg';
import jitang from './res/jitang.jpg';
import kaoniuleigu from './res/kaoniuleigu.jpg';
import kelejichi from './res/kelejichi.jpg';
import lajiaochaorou from './res/lajiaochaorou.jpg';
import liangbanmuer from './res/liangbanmuer.jpg';
import miandian from './res/miandian.jpg';
import mifan from './res/mifan.jpg';
import naiyoumogu from './res/naiyoumogu.jpg';
import niupaigaifan from './res/niupaigaifan.jpg';
import rishilamian from './res/rishilamian.jpg';
import suanmokongxincai from './res/suanmokongxincai.jpg';
import tetiao from './res/tetiao.jpg';
import tudouniurou from './res/tudouniurou.jpg';
import xianxiafensibao from './res/xianxiafensibao.jpg';
import xianyadan from './res/xianyadan.jpg';
import yangzhouchaofan from './res/yangzhouchaofan.jpg';
import yimianniupai from './res/yimianniupai.jpg';
import youzaqingcai from './res/youzaqingcai.jpg';
import yumipaigutang from './res/yumipaigutang.jpg';
import zaliangmifan from './res/zaliangmifan.jpg';


function Content() {
    const cardsData = [
        { name: "菠萝炒饭", pic: buoluochaofan },
        { name: "蛋炒饭", pic: danchaofan },
        { name: "番茄炒蛋", pic: fanqiechaodan },
        { name: "干锅包菜", pic: ganguobaocai },
        { name: "锅焦鸡胸", pic: guojiaojixiong },
        { name: "红烧鸡腿", pic: hongshaojitui },
        { name: "红枣枸杞", pic: hongzaogouqi },
        { name: "家常豆腐", pic: jiachangdoufu },
        { name: "经典意大利面", pic: jingdianyidalimian },
        { name: "鸡汤", pic: jitang },
        { name: "烤牛肋骨", pic: kaoniuleigu },
        { name: "可乐鸡翅", pic: kelejichi },
        { name: "辣椒炒肉", pic: lajiaochaorou },
        { name: "凉拌木耳", pic: liangbanmuer },
        { name: "面点", pic: miandian },
        { name: "米饭", pic: mifan },
        { name: "奶油蘑菇", pic: naiyoumogu },
        { name: "牛排盖饭", pic: niupaigaifan },
        { name: "日式拉面", pic: rishilamian },
        { name: "蒜蘑空心菜", pic: suanmokongxincai },
        { name: "特调", pic: tetiao },
        { name: "土豆牛肉", pic: tudouniurou },
        { name: "鲜虾粉丝煲", pic: xianxiafensibao },
        { name: "咸鸭蛋", pic: xianyadan },
        { name: "扬州炒饭", pic: yangzhouchaofan },
        { name: "意面牛排", pic: yimianniupai },
        { name: "油渣青菜", pic: youzaqingcai },
        { name: "玉米排骨汤", pic: yumipaigutang },
        { name: "杂粮米", pic: zaliangmifan },
    ];

    return (
        <div className="Content">
            {cardsData.map((card, index) => (
                <Card key={index} name={card.name} pic={card.pic} />
            ))}
        </div>
    );
}

export default Content;