var backLayer;//背景层

var loainglayer;//加载层

var onlayer;//遮罩层

var PictureButtonList=new Array();
var PictureStarList = new Array();
var PictureSceneList=new Array();
var PictureNPCList=new Array();
var PictureGodList=new Array();
var PictureCharacterList=new Array();
var PictureMonsterList=new Array();
var PictureFishList=new Array();
var PictureGameTitleList=new Array();
var PictureOutlineList=new Array();
var PictureAssessList=new Array();
var bgmsound=new LSound(),
    monstermusic=new LSound(),
    thiefmusic=new LSound();
var Resourcelist={};


var PlayerTotalVatality = 100,
    PlayerCurrentVitality = 100,
    PlayerExperience = 0,
    PlayerExpSpeed = 10, //the speed of exp growth
    PlayerLevel = 1,
    PlayerExpNeed=new Array(0,10,15,20,25,30,40,50,60,70,90,110,130,160,200,250,300,400,500,700,1000,1500,2000,3000,4000,5000,7000,10000),//每个阶段升级所需经验值,估计等级上不了20
    PlayerCoin = 0,
    PlayerFarming = 1,
    PlayerChoice,
    PlayerScene=8,//默认为海边
    PlayerDoor=new Array(0,0,0,1,0,0),//代表门是否解锁,门分别代表从左数的第0,1,2,3,4,5道门，第3道门开局解锁,第0道门为空
    PlayerDoorGod=new Array(0,-1,-1,-1,-1,-1),//从门的编号映射到门神贴的映射,-1表示无门神贴
    PlayerDoorGodBlood=new Array(0,100,100,100,100,100),//从门的编号映射到门神贴的门神血量
    PlayerBag = new Array(0,1,0,0,0,0,0,0,0,0,0,0,0);//7个普通门神+2个随机获得的门神+4个残损的门神

var PossiblityMonster = 700, // the possibility that a monster appears at night
    PossiblityMonsterAttackDouble = 200,//the possibility that a monster will give double attack
    PossiblityThief = 200, // the possibility that a thief appears at night
    PossiblityFish = 700, // the possibility that a fish can be caught during a fishing
    SystemDaytime = 1,
    DiscountMarket = 10-Math.floor(Math.random()*3),
    DiscountMerchant2 = 7-Math.floor(Math.random()*5),
    CurrentForm,
    Merchant2Items;//小贩处每天只卖一个门神贴

var MonsterHarvestButton;

var GodBloodList=new Array(20, 100, 75, 100, 280, 110, 250, 300, 400);//9个门神血量
var GodPowerList=new Array( 0,  30, 25,  50,  25, 100,  110, 140, 180);//9个门神战斗力

var GodPrice = new Array(150, 200, 150, 250, 400,500,1000,1500,1500);//7个门神贴市场原价,后面两个备用

var Godname=["加官进禄","哼哈二将","男童女童","神荼郁垒","秦尉迟二将","马武铫期","黄邪蓝邪","雷炎","残影神"];
var MonsterName = ["绿毛怪", "白无常", "黑无常", "夜叉", "雪毛怪", "鬼魄", "七彩怪", "巫人", "奇兽", "血月BOSS"];
var MonsterCoin = [40,          50,       50,     80,     100,    150,     300,    600,   1000,      0];
var MonsterExp =  [10,          20,       20,     25,      30,     40,      50,    100,    200,      0];
var MonsterHP  =  [20,         300,      280,     90,     150,     20,     200,    300,    500,   1000];//1000
var MonsterAtk =  [30,           5,        7,     35,      30,    100,     150,    200,    250,    400];//400
var PossibilityMonsterScheme = [
                  [400,        300,      200,     80,      21,      0,       0,      0,      0],
                  [ 80,        100,      100,    150,      40,    200,     200,    100,     31],
                  [ 20,         40,       40,    100,      20,    250,     200,    200,    151]];

var DoorButton1,
    DoorButton2,
    DoorButton3,
    DoorButton4,
    DoorButton5;//门上的按钮
var DoorrepairButton1,
    DoorrepairButton2,
    DoorrepairButton3,
    DoorrepairButton4,
    DoorrepairButton5;//门神贴的修补按钮
var DoorgiveupButton1,
    DoorgiveupButton2,
    DoorgiveupButton3,
    DoorgiveupButton4,
    DoorgiveupButton5;//门神贴的撕下按钮

var StartDoorn;//全局变量判断按的是第几道门
var PutGodDoorn;//全局变量判断要贴的是第几道门
var PutGodDoorm;//全局变量判断要贴的是第几个门神
var RepairGodDoorn;//全局变量判断要修补的是第几道门上的门神
var repaircoin;//全局变量修补要用到的钱
var giveupdoorgod;//全局变量判断要撕下的是第几道门上的门神
var DoorOpenCoin=new Array(0,1000,100,0,50,300);//解锁第n道门需要的钱
var DoorOpenExp=new Array(0,200,100,0,30,70);//解锁第n道门奖励的经验
var DoorOpenRank=new Array(0,12,6,0,3,9);//解锁第n道门需要的等级


var GodBuyButton1,
    GodBuyButton2,
    GodBuyButton3,
    GodBuyButton4,
    GodBuyButton5,
    GodBuyButton6,
    GodBuyButton7;//7个在商店中卖的门神贴
var GodBuyLuckButton;//在小贩处随机卖的门神

var BagX=new Array(0,90,260,455,670,870,1070,90,260,455,670,870,1070,90),
    BagY=new Array(0,165,165,165,165,165,165,265,265,265,265,265,265,367);//每张门神贴在背包中的位置

var GodinBagButton1,
    GodinBagButton2,
    GodinBagButton3,
    GodinBagButton4,
    GodinBagButton5,
    GodinBagButton6,
    GodinBagButton7,
    GodinBagButton8,
    GodinBagButton9;//门神贴贴上门的选择

var MainNewgameButton,//in main
    Animationtitle,   //in main
    MainNewgameText,  //in main
    MainLoadgameButton, //in main
    MainHonorlistButton,//in main
    MainUsButton,       //in main
    MainHelpButton,     //in main

    HelpButton,    //in GotoHelplist

    UsButton,      //in GotoUslist

    MainHonorTitle,          //in GotoFormHonorlist
    FromHonorreturntoMainButton,//in GotoFormHonorlist

    ChoosesceneButton1,//in GotoFormChoosescene
    ChoosesceneButton2,//in GotoFormChoosescene
    ChoosesceneButton3,//in GotoFormChoosescene

    ChooseCharacterButton1,//in GotoFormChooseCharacter
    ChooseCharacterButton2,//in GotoFormChooseCharacter
    ChooseCharacterButton3,//in GotoFormChooseCharacter

    VitalityTxt,  //in GameMainForm
    BagButton,    //in GameMainForm
    MarketButton, //in GameMainForm
    FishingButton,//in GameMainForm
    FarmingButton,//in GameMainForm
    Calculatetimetxt,//in GameMainForm
    SleepingButton,        //in GameMainForm

    BagsceneBitmap1,     //in FormBag
    BagsceneBitmap2,    //in FormBag
    PlayerCointxt,      //in FormBag
    FromBagreturntohomeButton,//in FormBag

    MerchantButton,              //in ActionMarket
    MerchantButton2,             //in ActionMarket
    FromMarketreturntohomeButton,//in ActionMarket

    FromMerchantreturntoMarketButton,//in ActionMerchant1
    FromMerchat2returntoMarketButton,//in ActionMerchant2
    Merchant2hadBought=0,//in ActionMerchant2每天在小贩处只能买一次
    MerchantleftslideButton,//in ActionMerchant1
    MerchantrightslideButton;//in ActionMerchant1

var ConfirmGrabbergiveupButton,//弹出框中放弃斗争
    ConfirmGrabberattackButton,//弹出框斗争
    ConfirmGiveupButton,//弹出框中任命按钮
    ConfirmFightButton,//弹出框中与强盗斗争的按钮
    ConfirmYesButton,//弹出框中的确认和确认购买按钮
    ConfirmCancelButton;//弹出框中的取消按钮

var GeneralCurrentForm = 0;

var GodCode = {
    "GodLeiYan" : 7,
    "GodCanYing" : 8,
    "GodLei" : 9,
    "GodYan" : 10,
    "GodLeft":11,
    "GodRight":12,
}

var SceneCode = {
    "SceneFarm" : 0,
    "SceneFish" : 1,
    "SceneMarket" : 2,
    "SceneMerchant2" : 3,
    "SceneMerchant" : 4,
}

var AccidentCode = {
    "AccidentFarmGodLei" : 0,
    "AccidentFarmGodYan" : 1,
    "AccidentFarmGodZuo" : 2,
    "AccidentFarmGodYou" : 3,

    "AccidentFishGodLei" : 4,
    "AccidentFishGodYan" : 5,
    "AccidentFishGodZuo" : 6,
    "AccidentFishGodYou" : 7,

    "AccidentGrabbers" : 8,
}

var ResourceData =[
              {name:"封面1",path:"图片/使用图/封面动画/封面1.png"},
              {name:"封面2",path:"图片/使用图/封面动画/封面2.png"},
              {name:"封面3",path:"图片/使用图/封面动画/封面3.png"},
              {name:"封面4",path:"图片/使用图/封面动画/封面4.png"},
              {name:"封面5",path:"图片/使用图/封面动画/封面5.png"},
              {name:"封面6",path:"图片/使用图/封面动画/封面6.png"},
              {name:"封面7",path:"图片/使用图/封面动画/封面7.png"},
              {name:"封面8",path:"图片/使用图/封面动画/封面8.png"},
              {name:"封面9",path:"图片/使用图/封面动画/封面9.png"},
              {name:"封面10",path:"图片/使用图/封面动画/封面10.png"},
              {name:"封面11",path:"图片/使用图/封面动画/封面11.png"},
              {name:"封面12",path:"图片/使用图/封面动画/封面12.png"},
              {name:"封面13",path:"图片/使用图/封面动画/封面13.png"},
              {name:"封面14",path:"图片/使用图/封面动画/封面14.png"},
              {name:"封面15",path:"图片/使用图/封面动画/封面15.png"},
              {name:"封面16",path:"图片/使用图/封面动画/封面16.png"},
              {name:"封面17",path:"图片/使用图/封面动画/封面17.png"},
              {name:"封面18",path:"图片/使用图/封面动画/封面18.png"},
              {name:"封面19",path:"图片/使用图/封面动画/封面19.png"},
              {name:"封面20",path:"图片/使用图/封面动画/封面20.png"},
              {name:"封面21",path:"图片/使用图/封面动画/封面21.png"},
              {name:"封面22",path:"图片/使用图/封面动画/封面22.png"},
              {name:"封面23",path:"图片/使用图/封面动画/封面23.png"},
              {name:"封面24",path:"图片/使用图/封面动画/封面24.png"},
              {name:"封面25",path:"图片/使用图/封面动画/封面25.png"},
              {name:"封面26",path:"图片/使用图/封面动画/封面26.png"},
              {name:"封面27",path:"图片/使用图/封面动画/封面27.png"},
              {name:"封面28",path:"图片/使用图/封面动画/封面28.png"},
              {name:"封面29",path:"图片/使用图/封面动画/封面29.png"},
              {name:"封面30",path:"图片/使用图/封面动画/封面30.png"},
              {name:"封面31",path:"图片/使用图/封面动画/封面31.png"},
              {name:"封面32",path:"图片/使用图/封面动画/封面32.png"},
              {name:"封面33",path:"图片/使用图/封面动画/封面33.png"},
              {name:"封面34",path:"图片/使用图/封面动画/封面34.png"},
              {name:"封面35",path:"图片/使用图/封面动画/封面35.png"},
              {name:"封面36",path:"图片/使用图/封面动画/封面36.png"},
              {name:"封面37",path:"图片/使用图/封面动画/封面37.png"},
              {name:"封面38",path:"图片/使用图/封面动画/封面38.png"},

              {name:"不惑",path:"图片/使用图/按钮/不惑.png"},
              {name:"与其斗争",path:"图片/使用图/按钮/与其斗争.png"},
              {name:"任命",path:"图片/使用图/按钮/任命.png"},
              {name:"休息",path:"图片/使用图/按钮/休息.png"},
              {name:"休息txt",path:"图片/使用图/按钮/休息txt.png"},
              {name:"修补",path:"图片/使用图/按钮/修补.png"},
              {name:"修补txt",path:"图片/使用图/按钮/修补txt.png"},
              {name:"关于我们",path:"图片/使用图/按钮/关于我们.png"},
              {name:"关于我们txt",path:"图片/使用图/按钮/关于我们txt.png"},
              {name:"关声音",path:"图片/使用图/按钮/关声音.png"},
              {name:"关闭",path:"图片/使用图/按钮/关闭.png"},
              {name:"升级",path:"图片/使用图/按钮/升级.png"},
              {name:"升级txt",path:"图片/使用图/按钮/升级txt.png"},
              {name:"叉",path:"图片/使用图/按钮/叉.png"},
              {name:"取消",path:"图片/使用图/按钮/取消.png"},
              {name:"古稀",path:"图片/使用图/按钮/古稀.png"},
              {name:"右滑",path:"图片/使用图/按钮/右滑.png"},
              {name:"商店按钮1",path:"图片/使用图/按钮/商店按钮1.png"},
              {name:"商店按钮2",path:"图片/使用图/按钮/商店按钮2.png"},
              {name:"回家txt",path:"图片/使用图/按钮/回家txt.png"},
              {name:"封",path:"图片/使用图/按钮/封.png"},
              {name:"山区村落",path:"图片/使用图/按钮/山区村落.png"},
              {name:"左滑",path:"图片/使用图/按钮/左滑.png"},
              {name:"平原村落",path:"图片/使用图/按钮/平原村落.png"},
              {name:"开声音",path:"图片/使用图/按钮/开声音.png"},
              {name:"开始游戏",path:"图片/使用图/按钮/开始游戏.png"},
              {name:"开始游戏txt",path:"图片/使用图/按钮/开始游戏txt.png"},
              {name:"弱冠",path:"图片/使用图/按钮/弱冠.png"},
              {name:"撕下",path:"图片/使用图/按钮/撕下.png"},
              {name:"撕下txt",path:"图片/使用图/按钮/撕下txt.png"},
              {name:"旧日回忆",path:"图片/使用图/按钮/旧日回忆.png"},
              {name:"旧日回忆txt",path:"图片/使用图/按钮/旧日回忆txt.png"},
              {name:"旧的荣誉",path:"图片/使用图/按钮/旧的荣誉.png"},
              {name:"旧的荣誉txt",path:"图片/使用图/按钮/旧的荣誉txt.png"},
              {name:"海边村落",path:"图片/使用图/按钮/海边村落.png"},
              {name:"确认购买",path:"图片/使用图/按钮/确认购买.png"},
              {name:"确认",path:"图片/使用图/按钮/确认.png"},
              {name:"种田",path:"图片/使用图/按钮/种田.png"},
              {name:"种田txt",path:"图片/使用图/按钮/种田txt.png"},
              {name:"背包",path:"图片/使用图/按钮/背包.png"},
              {name:"背包txt",path:"图片/使用图/按钮/背包txt.png"},
              {name:"贴",path:"图片/使用图/按钮/贴.png"},
              {name:"返回",path:"图片/使用图/按钮/返回.png"},
              {name:"返回txt",path:"图片/使用图/按钮/返回txt.png"},
              {name:"钓鱼",path:"图片/使用图/按钮/钓鱼.png"},
              {name:"钓鱼txt",path:"图片/使用图/按钮/钓鱼txt.png"},
              {name:"集市",path:"图片/使用图/按钮/集市.png"},
              {name:"集市txt",path:"图片/使用图/按钮/集市txt.png"},
              {name:"指南按钮",path:"图片/使用图/按钮/指南按钮.png"},
              {name:"指南按钮txt",path:"图片/使用图/按钮/指南按钮txt.png"},

              {name:"难度星级1", path:"图片/使用图/星(难度系数)/一星.png"},
              {name:"难度星级2", path:"图片/使用图/星(难度系数)/两星.png"},
              {name:"难度星级3", path:"图片/使用图/星(难度系数)/三星.png"},

              {name:"封面",path:"图片/使用图/场景/封面.png"},
              {name:"集市场景",path:"图片/使用图/场景/集市.png"},
              {name:"商品栏",path:"图片/使用图/场景/商品栏.png"},
              {name:"小贩商品栏",path:"图片/使用图/场景/小贩商品栏.png"},
              {name:"围墙",path:"图片/使用图/场景/围墙.png"},
              {name:"弹出框",path:"图片/使用图/场景/弹出框.png"},
              {name:"背包1",path:"图片/使用图/场景/背包1.png"},
              {name:"背包2",path:"图片/使用图/场景/背包2.png"},
              {name:"海边场景",path:"图片/使用图/场景/海边.png"},
              {name:"平原场景",path:"图片/使用图/场景/平原.png"},
              {name:"山林场景",path:"图片/使用图/场景/山林.png"},
              {name:"遮罩背景",path:"图片/使用图/场景/遮罩背景.png"},
              {name:"人员介绍",path:"图片/使用图/背景/人员介绍.png"},
              {name:"游戏指南",path:"图片/使用图/背景/游戏指南.png"},
              {name:"背景",path:"图片/使用图/背景/背景.png"},
              {name:"背景2",path:"图片/使用图/背景/背景2.png"},
              {name:"转换场景1",path:"图片/使用图/背景/转换场景1.png"},
              {name:"转换场景2",path:"图片/使用图/背景/转换场景2.png"},
              {name:"转换场景3",path:"图片/使用图/背景/转换场景3.png"},
              {name:"转换场景4",path:"图片/使用图/背景/转换场景4.png"},
              {name:"人物选择背景",path:"图片/使用图/场景/人物选择背景.png"},
              {name:"场景选择背景",path:"图片/使用图/场景/场景选择背景.png"},


              {name:"商人",path:"图片/使用图/npc/商人.png"},
              {name:"商人txt",path:"图片/使用图/npc/商人txt.png"},
              {name:"小贩",path:"图片/使用图/npc/小贩.png"},
              {name:"小贩txt",path:"图片/使用图/npc/小贩txt.png"},
              {name:"市贾",path:"图片/使用图/npc/市贾.png"},
              {name:"贩夫",path:"图片/使用图/npc/贩夫.png"},

              {name:"商贾对话框",path:"图片/使用图/框架/商贾对话框.png"},
              {name:"贩夫对话框",path:"图片/使用图/框架/贩夫对话框.png"},
              {name:"村长对话框",path:"图片/使用图/框架/村长对话框.png"},
              {name:"血条体力框",path:"图片/使用图/框架/血条体力框.png"},
              {name:"钱框",path:"图片/使用图/框架/钱框.png"},
              {name:"战斗力框",path:"图片/使用图/框架/战斗力框.png"},

              {name:"加官进禄贴",path:"图片/使用图/门神贴/加官进禄贴.png"},
              {name:"哼哈二将贴",path:"图片/使用图/门神贴/哼哈二将贴.png"},
              {name:"神荼郁垒贴",path:"图片/使用图/门神贴/神荼郁垒贴.png"},
              {name:"秦尉迟二将",path:"图片/使用图/门神贴/秦尉迟二将.png"},
              {name:"马武铫期贴",path:"图片/使用图/门神贴/马武铫期贴.png"},
              {name:"男童女童贴",path:"图片/使用图/门神贴/男童女童贴.png"},
              {name:"黄邪蓝邪贴",path:"图片/使用图/门神贴/黄邪蓝邪贴.png"},
              {name:"雷炎贴",path:"图片/使用图/门神贴/雷炎贴.png"},
              {name:"残影神",path:"图片/使用图/门神贴/残影神.png"},
              {name:"雷之贴",path:"图片/使用图/门神贴/雷.png"},
              {name:"炎之贴",path:"图片/使用图/门神贴/炎.png"},
              {name:"左残影",path:"图片/使用图/门神贴/左残影.png"},
              {name:"右残影",path:"图片/使用图/门神贴/右残影.png"},

              {name:"七彩怪",path:"图片/使用图/怪物/七彩怪.png"},
              {name:"夜叉",path:"图片/使用图/怪物/夜叉.png"},
              {name:"奇兽",path:"图片/使用图/怪物/奇兽.png"},
              {name:"巫人",path:"图片/使用图/怪物/巫人.png"},
              {name:"白无常",path:"图片/使用图/怪物/白无常.png"},
              {name:"绿毛怪",path:"图片/使用图/怪物/绿毛怪.png"},
              {name:"雪毛怪",path:"图片/使用图/怪物/雪毛怪.png"},
              {name:"鬼魄",path:"图片/使用图/怪物/鬼魄.png"},
              {name:"黑无常",path:"图片/使用图/怪物/黑无常.png"},
              {name:"七彩怪txt",path:"图片/使用图/怪物/七彩怪txt.png"},
              {name:"夜叉txt",path:"图片/使用图/怪物/夜叉txt.png"},
              {name:"奇兽txt",path:"图片/使用图/怪物/奇兽txt.png"},
              {name:"巫人txt",path:"图片/使用图/怪物/巫人txt.png"},
              {name:"白无常txt",path:"图片/使用图/怪物/白无常txt.png"},
              {name:"绿毛怪txt",path:"图片/使用图/怪物/绿毛怪txt.png"},
              {name:"雪毛怪txt",path:"图片/使用图/怪物/雪毛怪txt.png"},
              {name:"鬼魄txt",path:"图片/使用图/怪物/鬼魄txt.png"},
              {name:"黑无常txt",path:"图片/使用图/怪物/黑无常txt.png"},

              {name:"A+",path:"图片/使用图/评分/A+.png"},
              {name:"A-",path:"图片/使用图/评分/A-.png"},
              {name:"A",path:"图片/使用图/评分/A.png"},
              {name:"B+",path:"图片/使用图/评分/B+.png"},
              {name:"B-",path:"图片/使用图/评分/B-.png"},
              {name:"B",path:"图片/使用图/评分/B.png"},
              {name:"C+",path:"图片/使用图/评分/C+.png"},
              {name:"C-",path:"图片/使用图/评分/C-.png"},
              {name:"C",path:"图片/使用图/评分/C.png"},
              {name:"D+",path:"图片/使用图/评分/D+.png"},
              {name:"D-",path:"图片/使用图/评分/D-.png"},
              {name:"D",path:"图片/使用图/评分/D.png"},
              {name:"S",path:"图片/使用图/评分/S.png"},
              {name:"SS",path:"图片/使用图/评分/SS.png"},
              {name:"SSS",path:"图片/使用图/评分/SSS.png"},

              {name:"鱼1",path:"图片/使用图/鱼/鱼1.png"},
              {name:"鱼2",path:"图片/使用图/鱼/鱼2.png"},
              {name:"鱼3",path:"图片/使用图/鱼/鱼3.png"},

              {name:"弱冠照片",path:"图片/使用图/主角/弱冠.png"},
              {name:"不惑照片",path:"图片/使用图/主角/不惑.png"},
              {name:"古稀照片",path:"图片/使用图/主角/古稀.png"},

              {name:"bgm",path:"sound/bgm.mp3"},
              {name:"monstermusic",path:"sound/monster.wav"},
              {name:"thiefmusic",path:"sound/thief.wav"},
              ];



function PrepareResource(){//把所有图片转换成图片数值信息并按0，1,2……顺序保存在各个类型的资源数组中
    PictureGameTitleList.push(new LBitmapData(Resourcelist["封面1"]));  //0
    PictureGameTitleList.push(new LBitmapData(Resourcelist["封面2"]));  //1
    PictureGameTitleList.push(new LBitmapData(Resourcelist["封面3"]));  //2
    PictureGameTitleList.push(new LBitmapData(Resourcelist["封面4"]));  //3
    PictureGameTitleList.push(new LBitmapData(Resourcelist["封面5"]));  //4
    PictureGameTitleList.push(new LBitmapData(Resourcelist["封面6"]));  //5
    PictureGameTitleList.push(new LBitmapData(Resourcelist["封面7"]));  //6
    PictureGameTitleList.push(new LBitmapData(Resourcelist["封面8"]));  //7
    PictureGameTitleList.push(new LBitmapData(Resourcelist["封面9"])); //8
    PictureGameTitleList.push(new LBitmapData(Resourcelist["封面10"]));  //9
    PictureGameTitleList.push(new LBitmapData(Resourcelist["封面11"]));  //10
    PictureGameTitleList.push(new LBitmapData(Resourcelist["封面12"]));  //11
    PictureGameTitleList.push(new LBitmapData(Resourcelist["封面13"]));  //12
    PictureGameTitleList.push(new LBitmapData(Resourcelist["封面14"]));  //13
    PictureGameTitleList.push(new LBitmapData(Resourcelist["封面15"]));  //14
    PictureGameTitleList.push(new LBitmapData(Resourcelist["封面16"]));  //15
    PictureGameTitleList.push(new LBitmapData(Resourcelist["封面17"]));  //16
    PictureGameTitleList.push(new LBitmapData(Resourcelist["封面18"]));  //17
    PictureGameTitleList.push(new LBitmapData(Resourcelist["封面19"]));  //18
    PictureGameTitleList.push(new LBitmapData(Resourcelist["封面20"]));  //19
    PictureGameTitleList.push(new LBitmapData(Resourcelist["封面21"]));  //20
    PictureGameTitleList.push(new LBitmapData(Resourcelist["封面22"]));  //21
    PictureGameTitleList.push(new LBitmapData(Resourcelist["封面23"]));  //22
    PictureGameTitleList.push(new LBitmapData(Resourcelist["封面24"]));  //23
    PictureGameTitleList.push(new LBitmapData(Resourcelist["封面25"]));  //24
    PictureGameTitleList.push(new LBitmapData(Resourcelist["封面26"]));  //25
    PictureGameTitleList.push(new LBitmapData(Resourcelist["封面27"]));  //26
    PictureGameTitleList.push(new LBitmapData(Resourcelist["封面28"]));  //27
    PictureGameTitleList.push(new LBitmapData(Resourcelist["封面29"]));  //28
    PictureGameTitleList.push(new LBitmapData(Resourcelist["封面30"]));  //29
    PictureGameTitleList.push(new LBitmapData(Resourcelist["封面31"]));  //30
    PictureGameTitleList.push(new LBitmapData(Resourcelist["封面32"]));  //31
    PictureGameTitleList.push(new LBitmapData(Resourcelist["封面33"]));  //32
    PictureGameTitleList.push(new LBitmapData(Resourcelist["封面34"]));  //33
    PictureGameTitleList.push(new LBitmapData(Resourcelist["封面35"]));  //34
    PictureGameTitleList.push(new LBitmapData(Resourcelist["封面36"]));  //35
    PictureGameTitleList.push(new LBitmapData(Resourcelist["封面37"]));  //36
    PictureGameTitleList.push(new LBitmapData(Resourcelist["封面38"]));  //37

    PictureButtonList.push(new LBitmapData(Resourcelist["开始游戏"]));   //0
    PictureButtonList.push(new LBitmapData(Resourcelist["开始游戏txt"]));//1
    PictureButtonList.push(new LBitmapData(Resourcelist["种田"]));       //2
    PictureButtonList.push(new LBitmapData(Resourcelist["种田txt"]));    //3
    PictureButtonList.push(new LBitmapData(Resourcelist["背包"]));       //4
    PictureButtonList.push(new LBitmapData(Resourcelist["背包txt"]));    //5
    PictureButtonList.push(new LBitmapData(Resourcelist["返回"]));       //6
    PictureButtonList.push(new LBitmapData(Resourcelist["返回txt"]));    //7
    PictureButtonList.push(new LBitmapData(Resourcelist["回家txt"]));    //8
    PictureButtonList.push(new LBitmapData(Resourcelist["钓鱼"]));       //9
    PictureButtonList.push(new LBitmapData(Resourcelist["钓鱼txt"]));    //10
    PictureButtonList.push(new LBitmapData(Resourcelist["集市"]));       //11
    PictureButtonList.push(new LBitmapData(Resourcelist["集市txt"]));    //12
    PictureButtonList.push(new LBitmapData(Resourcelist["旧日回忆"]));    //13
    PictureButtonList.push(new LBitmapData(Resourcelist["旧日回忆txt"]));    //14
    PictureButtonList.push(new LBitmapData(Resourcelist["旧的荣誉"]));    //15
    PictureButtonList.push(new LBitmapData(Resourcelist["旧的荣誉txt"]));    //16
    PictureButtonList.push(new LBitmapData(Resourcelist["弱冠"]));    //17
    PictureButtonList.push(new LBitmapData(Resourcelist["不惑"]));    //18
    PictureButtonList.push(new LBitmapData(Resourcelist["古稀"]));    //19
    PictureButtonList.push(new LBitmapData(Resourcelist["关于我们"]));//20
    PictureButtonList.push(new LBitmapData(Resourcelist["关于我们txt"]));//21
    PictureButtonList.push(new LBitmapData(Resourcelist["海边村落"]));//22
    PictureButtonList.push(new LBitmapData(Resourcelist["平原村落"]));//23
    PictureButtonList.push(new LBitmapData(Resourcelist["山区村落"]));//24
    PictureButtonList.push(new LBitmapData(Resourcelist["休息"]));//25
    PictureButtonList.push(new LBitmapData(Resourcelist["休息txt"]));//26
    PictureButtonList.push(new LBitmapData(Resourcelist["修补"]));//27
    PictureButtonList.push(new LBitmapData(Resourcelist["修补txt"]));//28
    PictureButtonList.push(new LBitmapData(Resourcelist["升级"]));//29
    PictureButtonList.push(new LBitmapData(Resourcelist["升级txt"]));//30
    PictureButtonList.push(new LBitmapData(Resourcelist["撕下"]));//31
    PictureButtonList.push(new LBitmapData(Resourcelist["撕下txt"]));//32
    PictureButtonList.push(new LBitmapData(Resourcelist["关闭"]));//33
    PictureButtonList.push(new LBitmapData(Resourcelist["叉"]));//34
    PictureButtonList.push(new LBitmapData(Resourcelist["商店按钮1"]));//35
    PictureButtonList.push(new LBitmapData(Resourcelist["商店按钮2"]));//36
    PictureButtonList.push(new LBitmapData(Resourcelist["左滑"]));//37
    PictureButtonList.push(new LBitmapData(Resourcelist["右滑"]));//38
    PictureButtonList.push(new LBitmapData(Resourcelist["取消"]));//39
    PictureButtonList.push(new LBitmapData(Resourcelist["确认"]));//40
    PictureButtonList.push(new LBitmapData(Resourcelist["确认购买"]));//41
    PictureButtonList.push(new LBitmapData(Resourcelist["与其斗争"]));//42
    PictureButtonList.push(new LBitmapData(Resourcelist["任命"]));//43
    PictureButtonList.push(new LBitmapData(Resourcelist["贴"]));//44
    PictureButtonList.push(new LBitmapData(Resourcelist["封"]));//45
    PictureButtonList.push(new LBitmapData(Resourcelist["开声音"]));//46
    PictureButtonList.push(new LBitmapData(Resourcelist["关声音"]));//47
    PictureButtonList.push(new LBitmapData(Resourcelist["指南按钮"]));//48
    PictureButtonList.push(new LBitmapData(Resourcelist["指南按钮txt"]));//49

    PictureStarList.push(new LBitmapData(Resourcelist["难度星级1"])); //0
    PictureStarList.push(new LBitmapData(Resourcelist["难度星级2"])); //1
    PictureStarList.push(new LBitmapData(Resourcelist["难度星级3"])); //2

    PictureSceneList.push(new LBitmapData(Resourcelist["封面"]));//0
    PictureSceneList.push(new LBitmapData(Resourcelist["集市场景"]));//1
    PictureSceneList.push(new LBitmapData(Resourcelist["商品栏"]));//2
    PictureSceneList.push(new LBitmapData(Resourcelist["小贩商品栏"]));//3
    PictureSceneList.push(new LBitmapData(Resourcelist["围墙"]));//4
    PictureSceneList.push(new LBitmapData(Resourcelist["弹出框"]));//5
    PictureSceneList.push(new LBitmapData(Resourcelist["背包1"]));//6
    PictureSceneList.push(new LBitmapData(Resourcelist["背包2"]));//7
    PictureSceneList.push(new LBitmapData(Resourcelist["海边场景"]));//8
    PictureSceneList.push(new LBitmapData(Resourcelist["平原场景"]));//9
    PictureSceneList.push(new LBitmapData(Resourcelist["山林场景"]));//10
    PictureSceneList.push(new LBitmapData(Resourcelist["遮罩背景"]));//11
    PictureSceneList.push(new LBitmapData(Resourcelist["人员介绍"]));//12
    PictureSceneList.push(new LBitmapData(Resourcelist["游戏指南"]));//13
    PictureSceneList.push(new LBitmapData(Resourcelist["背景"]));//14
    PictureSceneList.push(new LBitmapData(Resourcelist["背景2"]));//15
    PictureSceneList.push(new LBitmapData(Resourcelist["转换场景1"]));//16
    PictureSceneList.push(new LBitmapData(Resourcelist["转换场景2"]));//17
    PictureSceneList.push(new LBitmapData(Resourcelist["转换场景3"]));//18
    PictureSceneList.push(new LBitmapData(Resourcelist["转换场景4"]));//19
    PictureSceneList.push(new LBitmapData(Resourcelist["人物选择背景"]));//20
    PictureSceneList.push(new LBitmapData(Resourcelist["场景选择背景"]));//21


    PictureNPCList.push(new LBitmapData(Resourcelist["商人"]));   //0
    PictureNPCList.push(new LBitmapData(Resourcelist["商人txt"]));//1
    PictureNPCList.push(new LBitmapData(Resourcelist["小贩"]));   //2
    PictureNPCList.push(new LBitmapData(Resourcelist["小贩txt"]));//3
    PictureNPCList.push(new LBitmapData(Resourcelist["市贾"]));   //4
    PictureNPCList.push(new LBitmapData(Resourcelist["贩夫"]));//5

    PictureOutlineList.push(new LBitmapData(Resourcelist["商贾对话框"]));//0
    PictureOutlineList.push(new LBitmapData(Resourcelist["贩夫对话框"]));//1
    PictureOutlineList.push(new LBitmapData(Resourcelist["村长对话框"]));//2
    PictureOutlineList.push(new LBitmapData(Resourcelist["血条体力框"]));//3
    PictureOutlineList.push(new LBitmapData(Resourcelist["钱框"]));//4
    PictureOutlineList.push(new LBitmapData(Resourcelist["战斗力框"]));//5

    PictureGodList.push(new LBitmapData(Resourcelist["加官进禄贴"]));//0
    PictureGodList.push(new LBitmapData(Resourcelist["哼哈二将贴"]));//1
    PictureGodList.push(new LBitmapData(Resourcelist["男童女童贴"]));//2
    PictureGodList.push(new LBitmapData(Resourcelist["神荼郁垒贴"]));//3
    PictureGodList.push(new LBitmapData(Resourcelist["秦尉迟二将"]));//4
    PictureGodList.push(new LBitmapData(Resourcelist["马武铫期贴"]));//5
    PictureGodList.push(new LBitmapData(Resourcelist["黄邪蓝邪贴"]));//6
    PictureGodList.push(new LBitmapData(Resourcelist["雷炎贴"]));//7
    PictureGodList.push(new LBitmapData(Resourcelist["残影神"]));//8
    PictureGodList.push(new LBitmapData(Resourcelist["雷之贴"]));    //9
    PictureGodList.push(new LBitmapData(Resourcelist["炎之贴"]));    //10
    PictureGodList.push(new LBitmapData(Resourcelist["左残影"]));//11
    PictureGodList.push(new LBitmapData(Resourcelist["右残影"]));//12

    PictureCharacterList.push(new LBitmapData(Resourcelist["弱冠照片"]));    //0
    PictureCharacterList.push(new LBitmapData(Resourcelist["不惑照片"]));    //1
    PictureCharacterList.push(new LBitmapData(Resourcelist["古稀照片"]));    //2

    PictureAssessList.push(new LBitmapData(Resourcelist["D-"]));//0
    PictureAssessList.push(new LBitmapData(Resourcelist["D"]));//1
    PictureAssessList.push(new LBitmapData(Resourcelist["D+"]));//2
    PictureAssessList.push(new LBitmapData(Resourcelist["C-"]));//3
    PictureAssessList.push(new LBitmapData(Resourcelist["C"]));//4
    PictureAssessList.push(new LBitmapData(Resourcelist["C+"]));//5
    PictureAssessList.push(new LBitmapData(Resourcelist["B-"]));//6
    PictureAssessList.push(new LBitmapData(Resourcelist["B"]));//7
    PictureAssessList.push(new LBitmapData(Resourcelist["B+"]));//8
    PictureAssessList.push(new LBitmapData(Resourcelist["A-"]));//9
    PictureAssessList.push(new LBitmapData(Resourcelist["A"]));//10
    PictureAssessList.push(new LBitmapData(Resourcelist["A+"]));//11
    PictureAssessList.push(new LBitmapData(Resourcelist["S"]));//12
    PictureAssessList.push(new LBitmapData(Resourcelist["SS"]));//13
    PictureAssessList.push(new LBitmapData(Resourcelist["SSS"]));//14

    PictureMonsterList.push(new LBitmapData(Resourcelist["绿毛怪"]));  //0
    PictureMonsterList.push(new LBitmapData(Resourcelist["白无常"]));  //1
    PictureMonsterList.push(new LBitmapData(Resourcelist["黑无常"]));  //2
    PictureMonsterList.push(new LBitmapData(Resourcelist["夜叉"]));  //3
    PictureMonsterList.push(new LBitmapData(Resourcelist["雪毛怪"]));  //4
    PictureMonsterList.push(new LBitmapData(Resourcelist["鬼魄"]));  //5
    PictureMonsterList.push(new LBitmapData(Resourcelist["七彩怪"]));  //6
    PictureMonsterList.push(new LBitmapData(Resourcelist["巫人"]));  //7
    PictureMonsterList.push(new LBitmapData(Resourcelist["奇兽"]));  //8
    PictureMonsterList.push(new LBitmapData(Resourcelist["绿毛怪txt"]));  //9
    PictureMonsterList.push(new LBitmapData(Resourcelist["白无常txt"]));  //10
    PictureMonsterList.push(new LBitmapData(Resourcelist["黑无常txt"]));  //11
    PictureMonsterList.push(new LBitmapData(Resourcelist["夜叉txt"]));  //12
    PictureMonsterList.push(new LBitmapData(Resourcelist["雪毛怪txt"]));  //13
    PictureMonsterList.push(new LBitmapData(Resourcelist["鬼魄txt"]));  //14
    PictureMonsterList.push(new LBitmapData(Resourcelist["七彩怪txt"]));  //15
    PictureMonsterList.push(new LBitmapData(Resourcelist["巫人txt"]));  //16
    PictureMonsterList.push(new LBitmapData(Resourcelist["奇兽txt"]));  //17

    PictureFishList.push(new LBitmapData(Resourcelist["鱼1"]));//0
    PictureFishList.push(new LBitmapData(Resourcelist["鱼2"]));//1
    PictureFishList.push(new LBitmapData(Resourcelist["鱼3"]));//2

    bgmsound.load(Resourcelist["bgm"]);
    monstermusic.load(Resourcelist["monstermusic"]);
    thiefmusic.load(Resourcelist["thiefmusic"]);
}

function InitGameParameters()
{
  PlayerTotalVatality = 100;
  PlayerCurrentVitality = 100;
  PlayerExperience = 0;
  PlayerExpSpeed = 10; //the speed of exp growth
  PlayerLevel = 0;
  PlayerExpNeed=new Array(0,10,15,20,25,30,40,50,60,70,90,110,130,160,200,250,300,400,500,700,1000,1500,2000,3000,4000,5000,7000,10000);//每个阶段升级所需经验值,估计等级上不了20
  PlayerCoin = 0;
  PlayerFarming = 1;
  PlayerChoice;
  PlayerScene=8;//默认为海边
  PlayerDoor=new Array(0,0,0,1,0,0);//代表门是否解锁,门分别代表从左数的第0,1,2,3,4,5道门，第3道门开局解锁,第0道门为空
  PlayerDoorGod=new Array(0,-1,-1,-1,-1,-1);//从门的编号映射到门神贴的映射,-1表示无门神贴
  PlayerDoorGodBlood=new Array(0,100,100,100,100,100);//从门的编号映射到门神贴的门神血量
  PlayerBag = new Array(0,1,0,0,0,0,0,0,0,0,0,0,0);//7个普通门神+2个随机获得的门神+4个残损的门神

  PossiblityMonster = 700; // the possibility that a monster appears at night
  PossiblityMonsterAttackDouble = 200;//the possibility that a monster will give double attack
  PossiblityThief = 200; // the possibility that a thief appears at night
  PossiblityFish = 700; // the possibility that a fish can be caught during a fishing
  SystemDaytime = 1;
  DiscountMarket = 10-Math.floor(Math.random()*3);
  DiscountMerchant2 = 7-Math.floor(Math.random()*5);
  GeneralCurrentForm = 0;
}