init(50,"mylegend",1350,720,Gotomain);

function SetTextAttributes(OperatingText, TextContent, TextX, TextY, TextSize,TextFont,TextColor){
    OperatingText.text = TextContent;
    OperatingText.x = TextX;
    OperatingText.y = TextY;
    OperatingText.color = TextColor;
    OperatingText.size = TextSize;
    OperatingText.font=TextFont;
}

function SetBitmap(OperatingBitmap,Bitmapx,Bitmapy,Bitmapscalex,Bitmapscaley){
    OperatingBitmap.x=Bitmapx;
    OperatingBitmap.y=Bitmapy;
    OperatingBitmap.scaleX=Bitmapscalex;
    OperatingBitmap.scaleY=Bitmapscaley;
}

function SetButton(OperatingButton,Buttonx,Buttony){
    OperatingButton.x=Buttonx;
    OperatingButton.y=Buttony;
    OperatingButton.buttonMode=true;
}

function Gotomain(){//图片加载
    loadinglayer=new LoadingSample4();
    addChild(loadinglayer);
    LLoadManage.load(
        ResourceData,
        function(progress){
            loadinglayer.setProgress(progress);
        },
        function(result){
            Resourcelist=result;
            removeChild(loadinglayer);
            loadinglayer=null;
            PrepareResource();
            main();
        }
    );
}

function main(){
    backLayer = new LSprite();
    backLayer.graphics.drawRect(1,"#cccccc",[0,0,1350,600],true,"#cccccc");          
    addChild(backLayer);
    // backLayer.addEventListener(LEvent.ENTER_FRAME, BgmPlay);

    InitGameParameters();
    DoorOpenRank[1]=13;
    var Mainscene=new LBitmap(PictureSceneList[0]);
    SetBitmap(Mainscene,70,35,0.91875,0.75);
    backLayer.addChild(Mainscene);

    var MainNewgameButtonBitmap1=new LBitmap(PictureButtonList[0]);
    var MainNewgameButtonBitmap2=new LBitmap(PictureButtonList[1]);
    var MainNewgameButtonBitmap3=new LBitmap(PictureButtonList[1]);
    SetBitmap(MainNewgameButtonBitmap1,0,0,0.8,0.8);
    SetBitmap(MainNewgameButtonBitmap2,0,0,0.8,0.8);
    SetBitmap(MainNewgameButtonBitmap3,7.5,7.5,0.7,0.7);
    MainNewgameButton=new LButton(MainNewgameButtonBitmap1,MainNewgameButtonBitmap2,MainNewgameButtonBitmap3);
    SetButton(MainNewgameButton,560,420);
    backLayer.addChild(MainNewgameButton);
    MainNewgameButton.addEventListener(LMouseEvent.MOUSE_UP,GotoFormChoosescene);//点击进入选场景页面

    // var MainLoadgameBitmap1=new LBitmap(PictureButtonList[13]);
    // var MainLoadgameBitmap2=new LBitmap(PictureButtonList[14]);
    // var MainLoadgameBitmap3=new LBitmap(PictureButtonList[14]);
    // SetBitmap(MainLoadgameBitmap3,6,6,0.9,0.9);
    // MainLoadgameButton=new LButton(MainLoadgameBitmap1,MainLoadgameBitmap2,MainLoadgameBitmap3);
    // SetButton(MainLoadgameButton,410,450);
    // backLayer.addChild(MainLoadgameButton);//旧日回忆

    // var MainHonorlisteBitmap1=new LBitmap(PictureButtonList[15]);
    // var MainHonorlisteBitmap2=new LBitmap(PictureButtonList[16]);
    // var MainHonorlisteBitmap3=new LBitmap(PictureButtonList[16]);
    // SetBitmap(MainHonorlisteBitmap3,6,6,0.9,0.9);
    // MainHonorlistButton=new LButton(MainHonorlisteBitmap1,MainHonorlisteBitmap2,MainHonorlisteBitmap3);
    // SetButton(MainHonorlistButton,710,450);
    // backLayer.addChild(MainHonorlistButton);
    // MainHonorlistButton.addEventListener(LMouseEvent.MOUSE_UP,GotoFormHonorlist);//进入荣誉界面

    var MainUsBitmap1=new LBitmap(PictureButtonList[20]);
    var MainUsBitmap2=new LBitmap(PictureButtonList[21]);
    var MainUsBitmap3=new LBitmap(PictureButtonList[21]);
    SetBitmap(MainUsBitmap1,0,0,0.7,0.7);
    SetBitmap(MainUsBitmap2,0,0,0.7,0.7);
    SetBitmap(MainUsBitmap3,10,6,0.6,0.6);
    MainUsButton=new LButton(MainUsBitmap1,MainUsBitmap2,MainUsBitmap3);
    SetButton(MainUsButton,1080,480);
    backLayer.addChild(MainUsButton);
    MainUsButton.addEventListener(LMouseEvent.MOUSE_UP,GotoUslist);//进入关于我们界面

    var HelpBitmap1=new LBitmap(PictureButtonList[48]);
    var HelpBitmap2=new LBitmap(PictureButtonList[49]);
    var HelpBitmap3=new LBitmap(PictureButtonList[49]);
    SetBitmap(HelpBitmap3,6,6,0.9,0.9);
    MainHelpButton=new LButton(HelpBitmap1,HelpBitmap2,HelpBitmap3);
    SetButton(MainHelpButton,1100,310);
    backLayer.addChild(MainHelpButton);
    MainHelpButton.addEventListener(LMouseEvent.MOUSE_UP,GotoHelplist);//进入游戏指南界面

    //下面按钮用来debug
    // var debugBitmap1=new LBitmap(PictureButtonList[20]);
    // var debugBitmap2=new LBitmap(PictureButtonList[21]);
    // var debugBitmap3=new LBitmap(PictureButtonList[21]);
    // var debugbutton=new LButton(debugBitmap1,debugBitmap2,debugBitmap3);
    // SetButton(debugbutton,70,335);
    // backLayer.addChild(debugbutton);
    // debugbutton.addEventListener(LMouseEvent.MOUSE_UP,DebugtoGame);
}

// function DebugtoGame(){//debug专用
//     MainHelpButton.removeEventListener(LMouseEvent.MOUSE_UP,GotoHelplist);
//     MainNewgameButton.removeEventListener(LMouseEvent.MOUSE_UP,GotoFormChoosescene);
//     // MainHonorlistButton.removeEventListener(LMouseEvent.MOUSE_UP,GotoFormHonorlist);
//     MainUsButton.removeEventListener(LMouseEvent.MOUSE_UP,GotoUslist);
//     backLayer.removeAllChild();
//     Merchant2ItemsGenerate();
//     PlayerCoin+=100000;
//     PlayerLevel=20;
//     GameMainForm();
// }

function GotoHelplist(){//游戏指南
    MainHelpButton.removeEventListener(LMouseEvent.MOUSE_UP,GotoHelplist);
    MainNewgameButton.removeEventListener(LMouseEvent.MOUSE_UP,GotoFormChoosescene);
    // MainHonorlistButton.removeEventListener(LMouseEvent.MOUSE_UP,GotoFormHonorlist);
    MainUsButton.removeEventListener(LMouseEvent.MOUSE_UP,GotoUslist);
    backLayer.removeAllChild();
    
    var Helpbitmap=new LBitmap(PictureSceneList[13]);
    SetBitmap(Helpbitmap,70,35,0.91875,0.75);
    backLayer.addChild(Helpbitmap);//关于游戏指南文字图片

    var HelpBitmap1=new LBitmap(PictureButtonList[6]);
    var HelpBitmap2=new LBitmap(PictureButtonList[7]);
    var HelpBitmap3=new LBitmap(PictureButtonList[7]);
    SetBitmap(HelpBitmap3,4,4,0.9,0.9);
    HelpButton=new LButton(HelpBitmap1,HelpBitmap2,HelpBitmap3);
    backLayer.addChild(HelpButton);
    SetButton(HelpButton,1100,450);
    HelpButton.addEventListener(LMouseEvent.MOUSE_UP,PrepareFromHelplisttomain);//返回
}
function PrepareFromHelplisttomain(){
    HelpButton.removeEventListener(LMouseEvent.MOUSE_UP,PrepareFromHelplisttomain);
    backLayer.removeAllChild();
    main();
}

function GotoUslist(){//关于我们
    MainHelpButton.removeEventListener(LMouseEvent.MOUSE_UP,GotoHelplist);
    MainNewgameButton.removeEventListener(LMouseEvent.MOUSE_UP,GotoFormChoosescene);
    // MainHonorlistButton.removeEventListener(LMouseEvent.MOUSE_UP,GotoFormHonorlist);
    MainUsButton.removeEventListener(LMouseEvent.MOUSE_UP,GotoUslist);
    backLayer.removeAllChild();
    
    var Aboutusbitmap=new LBitmap(PictureSceneList[12]);
    SetBitmap(Aboutusbitmap,70,35,0.91875,0.75);
    backLayer.addChild(Aboutusbitmap);//关于我们的背景文字图片

    var UsBitmap1=new LBitmap(PictureButtonList[6]);
    var UsBitmap2=new LBitmap(PictureButtonList[7]);
    var UsBitmap3=new LBitmap(PictureButtonList[7]);
    SetBitmap(UsBitmap3,4,4,0.9,0.9);
    UsButton=new LButton(UsBitmap1,UsBitmap2,UsBitmap3);
    backLayer.addChild(UsButton);
    SetButton(UsButton,1050,450);
    UsButton.addEventListener(LMouseEvent.MOUSE_UP,PrepareFromUslisttomain);
}
function PrepareFromUslisttomain(){
    UsButton.removeEventListener(LMouseEvent.MOUSE_UP,PrepareFromUslisttomain);
    backLayer.removeAllChild();
    main();
}

// function GotoFormHonorlist(){//荣誉面
//     MainHelpButton.removeEventListener(LMouseEvent.MOUSE_UP,GotoHelplist);
//     MainNewgameButton.removeEventListener(LMouseEvent.MOUSE_UP,GotoFormChoosescene);
//     MainHonorlistButton.removeEventListener(LMouseEvent.MOUSE_UP,GotoFormHonorlist);
//     MainUsButton.removeEventListener(LMouseEvent.MOUSE_UP,GotoUslist);
// 	backLayer.removeAllChild();

// 	MainHonorTitle = new LTextField();
//     SetTextAttributes(MainHonorTitle,"过去的荣耀",600,100,40,"宋体","white");
//     backLayer.addChild(MainHonorTitle);
    
//     var FromHonorreturntoMainBitmap1=new LBitmap(PictureButtonList[6]);
//     var FromHonorreturntoMainBitmap2=new LBitmap(PictureButtonList[7]);
//     var FromHonorreturntoMainBitmap3=new LBitmap(PictureButtonList[7]);
//     SetBitmap(FromHonorreturntoMainBitmap3,4,4,0.9,0.9);
//     FromHonorreturntoMainButton=new LButton(FromHonorreturntoMainBitmap1,FromHonorreturntoMainBitmap2,FromHonorreturntoMainBitmap3);
//     backLayer.addChild(FromHonorreturntoMainButton);
//     SetButton(FromHonorreturntoMainButton,1000,500);
//     FromHonorreturntoMainButton.addEventListener(LMouseEvent.MOUSE_UP,PrepareFromHonorlisttomain);
// }
// function PrepareFromHonorlisttomain(){
//     FromHonorreturntoMainButton.removeEventListener(LMouseEvent.MOUSE_UP,PrepareFromHonorlisttomain);
//     backLayer.removeAllChild();
//     main();
// }

function GotoFormChoosescene(){//选场景
    MainHelpButton.removeEventListener(LMouseEvent.MOUSE_UP,GotoHelplist);
    MainNewgameButton.removeEventListener(LMouseEvent.MOUSE_UP,GotoFormChoosescene);
    // MainHonorlistButton.removeEventListener(LMouseEvent.MOUSE_UP,GotoFormHonorlist);
    MainUsButton.removeEventListener(LMouseEvent.MOUSE_UP,GotoUslist);
	backLayer.removeAllChild();

    var MainChoosescenebitmap=new LBitmap(PictureSceneList[21]);
    SetBitmap(MainChoosescenebitmap,70,35,0.91875,0.75);
    backLayer.addChild(MainChoosescenebitmap);//背景

    var SceneBitmap1=new LBitmap(PictureSceneList[8]);
    var SceneBitmap2=new LBitmap(PictureSceneList[9]);
    var SceneBitmap3=new LBitmap(PictureSceneList[10]);
    SetBitmap(SceneBitmap1,150,180,0.27,0.27);
    SetBitmap(SceneBitmap2,500,180,0.27,0.27);
    SetBitmap(SceneBitmap3,850,180,0.27,0.27);
    backLayer.addChild(SceneBitmap1);
    backLayer.addChild(SceneBitmap2);
    backLayer.addChild(SceneBitmap3);//添加场景面图片

    var ChooseSceneBitmap1=new LBitmap(PictureButtonList[22]);
    var ChooseSceneBitmap2=new LBitmap(PictureButtonList[22]);
    SetBitmap(ChooseSceneBitmap1,0,0,1.5,1.2);
    SetBitmap(ChooseSceneBitmap2,7.5,3.6,1.35,1.08);
    ChoosesceneButton1=new LButton(ChooseSceneBitmap1,ChooseSceneBitmap2,ChooseSceneBitmap2);
    SetButton(ChoosesceneButton1,230,360);
    backLayer.addChild(ChoosesceneButton1);
    ChoosesceneButton1.addEventListener(LMouseEvent.MOUSE_UP,GotoFormChooseCharacter);//海边村落Button

    var ChooseSceneStar1 = new LBitmap(PictureStarList[0]);
    SetBitmap(ChooseSceneStar1, 290, 410, 1, 1);
    backLayer.addChild(ChooseSceneStar1);//一星
    
    var ChooseSceneBitmap3=new LBitmap(PictureButtonList[23]);
    var ChooseSceneBitmap4=new LBitmap(PictureButtonList[23]);
    SetBitmap(ChooseSceneBitmap3,0,0,1.5,1.2);
    SetBitmap(ChooseSceneBitmap4,7.5,3.6,1.35,1.08);
    ChoosesceneButton2=new LButton(ChooseSceneBitmap3,ChooseSceneBitmap4,ChooseSceneBitmap4);
    SetButton(ChoosesceneButton2,570,360);
    backLayer.addChild(ChoosesceneButton2);
    ChoosesceneButton2.addEventListener(LMouseEvent.MOUSE_UP,GotoFormChooseCharacter);//平原村落Button

    var ChooseSceneStar2 = new LBitmap(PictureStarList[1]);
    SetBitmap(ChooseSceneStar2, 605, 410, 1, 1);
    backLayer.addChild(ChooseSceneStar2);//两星
    
    var ChooseSceneBitmap5=new LBitmap(PictureButtonList[24]);
    var ChooseSceneBitmap6=new LBitmap(PictureButtonList[24]);
    SetBitmap(ChooseSceneBitmap5,0,0,1.5,1.2);
    SetBitmap(ChooseSceneBitmap6,7.5,3.6,1.35,1.08);
    ChoosesceneButton3=new LButton(ChooseSceneBitmap5,ChooseSceneBitmap6,ChooseSceneBitmap6);
    SetButton(ChoosesceneButton3,945,360);
    backLayer.addChild(ChoosesceneButton3);
    ChoosesceneButton3.addEventListener(LMouseEvent.MOUSE_UP,GotoFormChooseCharacter);//山区村落Button

    var ChooseSceneStar3 = new LBitmap(PictureStarList[2]);
    SetBitmap(ChooseSceneStar3, 960, 410, 1, 1);
    backLayer.addChild(ChooseSceneStar3);//三星
}

function GotoFormChooseCharacter(event){//选人
    if(event.currentTarget == ChoosesceneButton1) {
        PossiblityFish = 1000;
        PossiblityMonster -= 100;
        PossiblityMonsterAttackDouble = 0;
        PlayerScene = 8;
    }
    else if(event.currentTarget == ChoosesceneButton2){
        PossiblityThief += 100;
        PlayerScene = 9;
    }
    else if(event.currentTarget == ChoosesceneButton3){
        PossiblityMonster += 100;
        PossiblityFish -= 200;
        PossiblityMonsterAttackDouble = 300;
        PlayerScene = 10;
    }

    ChoosesceneButton1.removeEventListener(LMouseEvent.MOUSE_UP,GotoFormChooseCharacter);
    ChoosesceneButton2.removeEventListener(LMouseEvent.MOUSE_UP,GotoFormChooseCharacter);
    ChoosesceneButton3.removeEventListener(LMouseEvent.MOUSE_UP,GotoFormChooseCharacter);
    backLayer.removeAllChild();

    var MainChoosecharacterbitmap=new LBitmap(PictureSceneList[20]);
    SetBitmap(MainChoosecharacterbitmap,70,35,0.91875,0.75);
    backLayer.addChild(MainChoosecharacterbitmap);//背景

    var CharacterBitmap1=new LBitmap(PictureCharacterList[0]);
    SetBitmap(CharacterBitmap1,250,195,0.75,0.68);
    backLayer.addChild(CharacterBitmap1); //弱冠图片

    var CharacterBitmap2=new LBitmap(PictureCharacterList[1]);
    SetBitmap(CharacterBitmap2,580,175,0.65,0.7);
    backLayer.addChild(CharacterBitmap2); //不惑图片

    var CharacterBitmap3=new LBitmap(PictureCharacterList[2]);
    SetBitmap(CharacterBitmap3,930,175,0.65,0.7);
    backLayer.addChild(CharacterBitmap3); //古稀图片

    var ChooseCharacterButtonBitmap1=new LBitmap(PictureButtonList[17]);
    var ChooseCharacterButtonBitmap2=new LBitmap(PictureButtonList[17]);
    SetBitmap(ChooseCharacterButtonBitmap1,0,0,1.5,1.2);
    SetBitmap(ChooseCharacterButtonBitmap2,7.5,3.6,1.35,1.08);
    ChooseCharacterButton1=new LButton(ChooseCharacterButtonBitmap1,ChooseCharacterButtonBitmap2,ChooseCharacterButtonBitmap2);
    SetButton(ChooseCharacterButton1,230,400);
    backLayer.addChild(ChooseCharacterButton1);
    ChooseCharacterButton1.addEventListener(LMouseEvent.MOUSE_UP,SetPersonalAttributes);//弱冠按钮

    var ChooseCharacterButtonBitmap3=new LBitmap(PictureButtonList[18]);
    var ChooseCharacterButtonBitmap4=new LBitmap(PictureButtonList[18]);
    SetBitmap(ChooseCharacterButtonBitmap3,0,0,1.5,1.2);
    SetBitmap(ChooseCharacterButtonBitmap4,7.5,3.6,1.35,1.08);
    ChooseCharacterButton2=new LButton(ChooseCharacterButtonBitmap3,ChooseCharacterButtonBitmap4,ChooseCharacterButtonBitmap4);
    SetButton(ChooseCharacterButton2,570,400);
    backLayer.addChild(ChooseCharacterButton2);
    ChooseCharacterButton2.addEventListener(LMouseEvent.MOUSE_UP,SetPersonalAttributes);//不惑按钮

    var ChooseCharacterButtonBitmap5=new LBitmap(PictureButtonList[19]);
    var ChooseCharacterButtonBitmap6=new LBitmap(PictureButtonList[19]);
    SetBitmap(ChooseCharacterButtonBitmap5,0,0,1.5,1.2);
    SetBitmap(ChooseCharacterButtonBitmap6,7.5,3.6,1.35,1.08);
    ChooseCharacterButton3=new LButton(ChooseCharacterButtonBitmap5,ChooseCharacterButtonBitmap6,ChooseCharacterButtonBitmap6);
    SetButton(ChooseCharacterButton3,945,400);
    backLayer.addChild(ChooseCharacterButton3);
    ChooseCharacterButton3.addEventListener(LMouseEvent.MOUSE_UP,SetPersonalAttributes);//古稀按钮
}

function SetPersonalAttributes(event){
    if(event.currentTarget == ChooseCharacterButton1){
        PlayerExpSpeed += 10;
        PlayerCoin = 50;
    }
    else if(event.currentTarget == ChooseCharacterButton2){
        PlayerTotalVatality = PlayerCurrentVitality=130;
        PlayerLevel=5;
    }
    else if(event.currentTarget == ChooseCharacterButton3){
        PlayerTotalVatality =PlayerCurrentVitality= 80;
        PlayerCoin = 100;
        PlayerLevel = 10;
    }

    ChooseCharacterButton1.removeEventListener(LMouseEvent.MOUSE_UP,SetPersonalAttributes);
    ChooseCharacterButton2.removeEventListener(LMouseEvent.MOUSE_UP,SetPersonalAttributes);
    ChooseCharacterButton3.removeEventListener(LMouseEvent.MOUSE_UP,SetPersonalAttributes);
    backLayer.removeAllChild();

    Merchant2ItemsGenerate();

    GameMainForm();
}

function GameMainForm(){//游戏主界面
    GeneralCurrentForm = 1;
	backLayer.removeAllChild();

    var Villagepicture=new LBitmap(PictureSceneList[PlayerScene]);
    SetBitmap(Villagepicture,70,35,0.98,0.9);
    backLayer.addChild(Villagepicture);//背景

    var BagBitmap1=new LBitmap(PictureButtonList[4]);
    var BagBitmap2=new LBitmap(PictureButtonList[5]);
    var BagBitmap3=new LBitmap(PictureButtonList[5]);
    SetBitmap(BagBitmap3,4,4,0.9,0.9);
    BagButton=new LButton(BagBitmap1,BagBitmap2,BagBitmap3);
    backLayer.addChild(BagButton);
    SetButton(BagButton,1150,40);
    BagButton.addEventListener(LMouseEvent.MOUSE_UP,FormBag);//进入背包系统

    var MarketBitmap1=new LBitmap(PictureButtonList[11]);
    var MarketBitmap2=new LBitmap(PictureButtonList[12]);
    var MarketBitmap3=new LBitmap(PictureButtonList[12]);
    SetBitmap(MarketBitmap3,4,4,0.9,0.9);
    MarketButton=new LButton(MarketBitmap1,MarketBitmap2,MarketBitmap3);
    backLayer.addChild(MarketButton);
    SetButton(MarketButton,1030,40);
    MarketButton.addEventListener(LMouseEvent.MOUSE_UP,FromMainToMarket);//进入集市
    
    var FishingBitmap1=new LBitmap(PictureButtonList[9]);
    var FishingBitmap2=new LBitmap(PictureButtonList[10]);
    var FishingBitmap3=new LBitmap(PictureButtonList[10]);
    SetBitmap(FishingBitmap3,4,4,0.9,0.9);
    FishingButton=new LButton(FishingBitmap1,FishingBitmap2,FishingBitmap3);
    SetButton(FishingButton,910,40);
    backLayer.addChild(FishingButton);
    FishingButton.addEventListener(LMouseEvent.MOUSE_UP,ActionFishing); //钓鱼
    
    var FarmingBitmap1=new LBitmap(PictureButtonList[2]);
    var FarmingBitmap2=new LBitmap(PictureButtonList[3]);
    var FarmingBitmap3=new LBitmap(PictureButtonList[3]);
    SetBitmap(FarmingBitmap3,4,4,0.9,0.9);
    FarmingButton=new LButton(FarmingBitmap1,FarmingBitmap2,FarmingBitmap3);
    SetButton(FarmingButton,790,40);
    backLayer.addChild(FarmingButton);
    FarmingButton.addEventListener(LMouseEvent.MOUSE_UP,ActionFarming); //种田

    Calculatetimetxt = new LTextField();
    SetTextAttributes(Calculatetimetxt,"第"+SystemDaytime+"天",180,120,50,"楷书","white");
    Calculatetimetxt.weight="bolder";
    if(SystemDaytime>3&&SystemDaytime<=7)Calculatetimetxt.color= "#eeeeee";
    else if(SystemDaytime>7&&SystemDaytime<=12)Calculatetimetxt.color= "#dddddd";
    else if(SystemDaytime>12&&SystemDaytime<=16)Calculatetimetxt.color= "#cccccc";
    else if(SystemDaytime>16&&SystemDaytime<=21)Calculatetimetxt.color= "#bbbbbb";
    else if(SystemDaytime>21&&SystemDaytime<=26)Calculatetimetxt.color= "#aaaaaa";
    else if(SystemDaytime>26&&SystemDaytime<=30)Calculatetimetxt.color= "#000000";
    Calculatetimetxt.speed=1;
    backLayer.addChild(Calculatetimetxt);//计数
    
    var SleepingBitmap1=new LBitmap(PictureButtonList[25]);
    var SleepingBitmap2=new LBitmap(PictureButtonList[26]);
    var SleepingBitmap3=new LBitmap(PictureButtonList[26]);
    SetBitmap(SleepingBitmap3,4,4,0.9,0.9);
    SleepingButton=new LButton(SleepingBitmap1,SleepingBitmap2,SleepingBitmap3);
    SetButton(SleepingButton,670,40);
    backLayer.addChild(SleepingButton);
    SleepingButton.addEventListener(LMouseEvent.MOUSE_UP,ActionSleep);//进入夜晚
    
    var CoinOutLine=new LBitmap(PictureOutlineList[4]);
    SetBitmap(CoinOutLine,400,35,0.15,0.15);
    backLayer.addChild(CoinOutLine);//钱的框架
    
    var PlayerCointxt = new LTextField();
    SetTextAttributes(PlayerCointxt,PlayerCoin+"文",450,55,20,"楷体","black");
    PlayerCointxt.weight="bolder";
    backLayer.addChild(PlayerCointxt);//钱的文字
    
    var AllAttackNumberOutLine=new LBitmap(PictureOutlineList[5]);
    SetBitmap(AllAttackNumberOutLine,400,90,0.75,0.8);
    backLayer.addChild(AllAttackNumberOutLine);//战斗力的框架
    
    var PlayerAllAttackNumbertxt = new LTextField();
    var AllPower=0;
    for(var i=1;i<=5;i++)if(PlayerDoorGod[i]>=0){
        AllPower+=GodPowerList[PlayerDoorGod[i]];
    }
    SetTextAttributes(PlayerAllAttackNumbertxt,AllPower,450,112,20,"楷体","black");
    PlayerAllAttackNumbertxt.weight="bolder";
    backLayer.addChild(PlayerAllAttackNumbertxt);//战斗力的文字

    var PlayerCurrentVitalityrectangle = new LSprite();
    PlayerCurrentVitalityrectangle.graphics.drawRect(1,"blue",[165,60,213*PlayerCurrentVitality/PlayerTotalVatality,25],true,"blue");
    backLayer.addChild(PlayerCurrentVitalityrectangle);//体力条

    VitalityTxt = new LTextField();
    SetTextAttributes(VitalityTxt, "体力值:" + PlayerCurrentVitality + "/" + PlayerTotalVatality, 180, 65,20,"楷书","black");
    VitalityTxt.weight="bolder";
    backLayer.addChild(VitalityTxt);//体力值文字显示

    var PlayerExperencerectangle = new LSprite();
    PlayerExperencerectangle.graphics.drawRect(1,"red",[165,87,213*PlayerExperience/PlayerExpNeed[PlayerLevel],25],true,"red");
    backLayer.addChild(PlayerExperencerectangle);//体力条

    ExpTxt=new LTextField();
    SetTextAttributes(ExpTxt,"等级:"+PlayerLevel+" 经验："+PlayerExperience+"/"+PlayerExpNeed[PlayerLevel],180,92,15,"楷书","black");
    ExpTxt.weight="bolder";
    backLayer.addChild(ExpTxt);//等级文字显示

    var PlayermessageboxBitmap=new LBitmap(PictureOutlineList[3]);
    SetBitmap(PlayermessageboxBitmap,80,40,0.3,0.3);
    backLayer.addChild(PlayermessageboxBitmap); //框
    var CharacterBitmap;
    if(PlayerTotalVatality==100){
        CharacterBitmap=new LBitmap(PictureCharacterList[0]);
        SetBitmap(CharacterBitmap,95,50,0.35,0.3);
    }
    else if(PlayerTotalVatality==130){
        CharacterBitmap=new LBitmap(PictureCharacterList[1]);
        SetBitmap(CharacterBitmap,90,45,0.3,0.28);
    }
    else {
        CharacterBitmap=new LBitmap(PictureCharacterList[2]);
        SetBitmap(CharacterBitmap,90,45,0.3,0.28);
    }
    backLayer.addChild(CharacterBitmap);//建立体力经验框

    ActionDoor();//摆放门的信息
    ShowMonster();
}

function removeAllEventinGameMainForm(){//把GameMainForm里的事件全部移除
    
    BagButton.removeEventListener(LMouseEvent.MOUSE_UP,FormBag);
    MarketButton.removeEventListener(LMouseEvent.MOUSE_UP,FromMainToMarket);
    FishingButton.removeEventListener(LMouseEvent.MOUSE_UP,ActionFishing); 
    SleepingButton.removeEventListener(LMouseEvent.MOUSE_UP,ActionSleep);
    FarmingButton.removeEventListener(LMouseEvent.MOUSE_UP,ActionFarming);

    if(PlayerDoor[1]==0)DoorButton1.removeEventListener(LMouseEvent.MOUSE_UP,StartDoor);
    else if(PlayerDoor[1]==1&&PlayerDoorGod[1]==-1)DoorButton1.removeEventListener(LMouseEvent.MOUSE_UP,PutGod);
    else if(PlayerDoor[1]==1&&PlayerDoorGod[1]>=0){
        DoorrepairButton1.removeEventListener(LMouseEvent.MOUSE_UP,repairgod);
        DoorgiveupButton1.removeEventListener(LMouseEvent.MOUSE_UP,giveupgod);
    }

    if(PlayerDoor[2]==0)DoorButton2.removeEventListener(LMouseEvent.MOUSE_UP,StartDoor);
    else if(PlayerDoor[2]==1&&PlayerDoorGod[2]==-1)DoorButton2.removeEventListener(LMouseEvent.MOUSE_UP,PutGod);
    else if(PlayerDoor[2]==1&&PlayerDoorGod[2]>=0){
        DoorrepairButton2.removeEventListener(LMouseEvent.MOUSE_UP,repairgod);
        DoorgiveupButton2.removeEventListener(LMouseEvent.MOUSE_UP,giveupgod);
    }

    if(PlayerDoor[3]==0)DoorButton3.removeEventListener(LMouseEvent.MOUSE_UP,StartDoor);
    else if(PlayerDoor[3]==1&&PlayerDoorGod[3]==-1)DoorButton3.removeEventListener(LMouseEvent.MOUSE_UP,PutGod);
    else if(PlayerDoor[3]==1&&PlayerDoorGod[3]>=0){
        DoorrepairButton3.removeEventListener(LMouseEvent.MOUSE_UP,repairgod);
        DoorgiveupButton3.removeEventListener(LMouseEvent.MOUSE_UP,giveupgod);
    }

    if(PlayerDoor[4]==0)DoorButton4.removeEventListener(LMouseEvent.MOUSE_UP,StartDoor);
    else if(PlayerDoor[4]==1&&PlayerDoorGod[4]==-1)DoorButton4.removeEventListener(LMouseEvent.MOUSE_UP,PutGod);
    else if(PlayerDoor[4]==1&&PlayerDoorGod[4]>=0){
        DoorrepairButton4.removeEventListener(LMouseEvent.MOUSE_UP,repairgod);
        DoorgiveupButton4.removeEventListener(LMouseEvent.MOUSE_UP,giveupgod);
    }

    if(PlayerDoor[5]==0)DoorButton5.removeEventListener(LMouseEvent.MOUSE_UP,StartDoor);
    else if(PlayerDoor[5]==1&&PlayerDoorGod[5]==-1)DoorButton5.removeEventListener(LMouseEvent.MOUSE_UP,PutGod);
    else if(PlayerDoor[5]==1&&PlayerDoorGod[5]>=0){
        DoorrepairButton5.removeEventListener(LMouseEvent.MOUSE_UP,repairgod);
        DoorgiveupButton5.removeEventListener(LMouseEvent.MOUSE_UP,giveupgod);
    }
}

function AccidentDection(scene)
{
    var Possiblitynum = Math.floor((Math.random()*4)+1);
    if(scene==SceneCode["SceneFarm"]){
        if(Possiblitynum==1&&PossibilityDection(200))//200
        {
            AccidentProcess(AccidentCode["AccidentFarmGodLei"]);
        }
        else if(Possiblitynum==2&&PossibilityDection(200))//200
        {
            AccidentProcess(AccidentCode["AccidentFarmGodYan"]);
        }
        else if(Possiblitynum==3&&PossibilityDection(120))//120
        {
            AccidentProcess(AccidentCode["AccidentFarmGodZuo"]);
        }
        else if(Possiblitynum==4&&PossibilityDection(120))//120
        {
            AccidentProcess(AccidentCode["AccidentFarmGodYou"]);
        }
        else GameMainForm();
    }
    else if(scene==SceneCode["SceneFish"]){
        if(Possiblitynum==1&&PossibilityDection(80))//80
        {
            AccidentProcess(AccidentCode["AccidentFishGodLei"]);
        }
        else if(Possiblitynum==2&&PossibilityDection(80))//80
        {
            AccidentProcess(AccidentCode["AccidentFishGodYan"]);
        }
        else if(Possiblitynum==3&&PossibilityDection(40))//40
        {
            AccidentProcess(AccidentCode["AccidentFishGodZuo"]);
        }
        else if(Possiblitynum==4&&PossibilityDection(40))//40
        {
            AccidentProcess(AccidentCode["AccidentFishGodYou"]);
        }
        else GameMainForm();
    }
    else if(scene==SceneCode["SceneMarket"]){
            if(PossibilityDection(100)&&PlayerCoin>=10)AccidentProcess(AccidentCode["AccidentGrabbers"]);
            else GameMainForm();
    }
}

function PossibilityDection(possibility)
{
    var DieCode = Math.floor((Math.random()*1000)+1);
    if(DieCode <= possibility)
        return true;
    else
        return false;
}

function GrabberCoin(){//强盗抢的钱
    if(PlayerCoin>=10&&PlayerCoin<100)return  Math.floor((Math.random() * 0.04 +0.06)* PlayerCoin);
    else if(PlayerCoin>=100&&PlayerCoin<1000)return  Math.floor((Math.random() * 0.02 +0.03)* PlayerCoin);
    else if(PlayerCoin>=1000)return  Math.floor((Math.random() * 0.015 +0.005)* PlayerCoin);
}

function AccidentProcess(CurrentAccidentCode)
{
    onlayer=new LBitmap(PictureSceneList[11]);
    SetBitmap(onlayer,70,35,0.98,0.9);
    backLayer.addChild(onlayer);

    var ConfirmBitmap=new LBitmap(PictureSceneList[5]);
    SetBitmap(ConfirmBitmap,400,100,1,0.8);
    backLayer.addChild(ConfirmBitmap);
        
    var ConfirmTitle=new LTextField();
    SetTextAttributes(ConfirmTitle,"你遇到了强盗！",520,110,40,"楷书","red");
    ConfirmTitle.weight="bolder";
    backLayer.addChild(ConfirmTitle);

    var Confirmtxt=new LTextField();
    SetTextAttributes(Confirmtxt,"是否耗费30体力抵抗？",480,200,30,"宋体","white");
    backLayer.addChild(Confirmtxt);
    
    if(CurrentAccidentCode==AccidentCode["AccidentGrabbers"]){
        if(PlayerCoin >=10){

            var ConfirmGrabberBitmap1=new LBitmap(PictureButtonList[43]);
            var ConfirmGrabberBitmap2=new LBitmap(PictureButtonList[43]);
            SetBitmap(ConfirmGrabberBitmap1,20,4,0.8,0.8);
            ConfirmGrabbergiveupButton=new LButton(ConfirmGrabberBitmap1,ConfirmGrabberBitmap2,ConfirmGrabberBitmap2);
            SetButton(ConfirmGrabbergiveupButton,440,400);
            backLayer.addChild(ConfirmGrabbergiveupButton);
            ConfirmGrabbergiveupButton.addEventListener(LMouseEvent.MOUSE_UP,GrabbergiveupConfirm);//放弃
 
            var ConfirmYesBitmap1=new LBitmap(PictureButtonList[42]);
            var ConfirmYesBitmap2=new LBitmap(PictureButtonList[42]);
            SetBitmap(ConfirmYesBitmap1,20,4,0.8,0.8);
            ConfirmGrabberattackButton=new LButton(ConfirmYesBitmap1,ConfirmYesBitmap2,ConfirmYesBitmap2);
            SetButton(ConfirmGrabberattackButton,670,400);
            backLayer.addChild(ConfirmGrabberattackButton);
            ConfirmGrabberattackButton.addEventListener(LMouseEvent.MOUSE_UP,GrabberattackConfirm);//斗争
            //window.alert("你遇上了强盗！被盗" + AccidentLossMoney + "文!");
        }
    }
    else if(CurrentAccidentCode==AccidentCode["AccidentFarmGodLei"]||CurrentAccidentCode==AccidentCode["AccidentFishGodLei"]){
        PlayerBag[GodCode["GodLei"]]++;

        removeAllEventinGameMainForm();

        ConfirmTitle.text="捡到了门神！";
        ConfirmTitle.x=550;
        Confirmtxt.text="残破的‘雷’";
        Confirmtxt.x=550;
        var ConfirmGrabberBitmap1=new LBitmap(PictureButtonList[40]);
        var ConfirmGrabberBitmap2=new LBitmap(PictureButtonList[40]);
        SetBitmap(ConfirmGrabberBitmap1,20,4,0.8,0.8);
        ConfirmYesButton=new LButton(ConfirmGrabberBitmap1,ConfirmGrabberBitmap2,ConfirmGrabberBitmap2);
        SetButton(ConfirmYesButton,550,400);
        backLayer.addChild(ConfirmYesButton);
        ConfirmYesButton.addEventListener(LMouseEvent.MOUSE_UP,ReturntoMaingameConfirm);//确认
    }
    else if(CurrentAccidentCode==AccidentCode["AccidentFarmGodYan"]||CurrentAccidentCode==AccidentCode["AccidentFishGodYan"]){
        PlayerBag[GodCode["GodYan"]]++;

        removeAllEventinGameMainForm();

        ConfirmTitle.text="捡到了门神！";
        ConfirmTitle.x=550;
        Confirmtxt.text="残破的‘炎’";
        Confirmtxt.x=550;
        var ConfirmGrabberBitmap1=new LBitmap(PictureButtonList[40]);
        var ConfirmGrabberBitmap2=new LBitmap(PictureButtonList[40]);
        SetBitmap(ConfirmGrabberBitmap1,20,4,0.8,0.8);
        ConfirmYesButton=new LButton(ConfirmGrabberBitmap1,ConfirmGrabberBitmap2,ConfirmGrabberBitmap2);
        SetButton(ConfirmYesButton,550,400);
        backLayer.addChild(ConfirmYesButton);
        ConfirmYesButton.addEventListener(LMouseEvent.MOUSE_UP,ReturntoMaingameConfirm);//确认
        }
    else if(CurrentAccidentCode==AccidentCode["AccidentFarmGodZuo"]||CurrentAccidentCode==AccidentCode["AccidentFishGodZuo"]){
        PlayerBag[GodCode["GodLeft"]]++;

        removeAllEventinGameMainForm();

        ConfirmTitle.text="捡到了门神！";
        ConfirmTitle.x=550;
        Confirmtxt.text="残破的‘左残影’";
        Confirmtxt.x=550;
        var ConfirmGrabberBitmap1=new LBitmap(PictureButtonList[40]);
        var ConfirmGrabberBitmap2=new LBitmap(PictureButtonList[40]);
        SetBitmap(ConfirmGrabberBitmap1,20,4,0.8,0.8);
        ConfirmYesButton=new LButton(ConfirmGrabberBitmap1,ConfirmGrabberBitmap2,ConfirmGrabberBitmap2);
        SetButton(ConfirmYesButton,550,400);
        backLayer.addChild(ConfirmYesButton);
        ConfirmYesButton.addEventListener(LMouseEvent.MOUSE_UP,ReturntoMaingameConfirm);//确认
    }
    else if(CurrentAccidentCode==AccidentCode["AccidentFarmGodYou"]||CurrentAccidentCode==AccidentCode["AccidentFishGodYou"]){
        PlayerBag[GodCode["GodRight"]]++;

        removeAllEventinGameMainForm();

        ConfirmTitle.text="捡到了门神！";
        ConfirmTitle.x=550;
        Confirmtxt.text="残破的‘右残影’";
        Confirmtxt.x=550;
        var ConfirmGrabberBitmap1=new LBitmap(PictureButtonList[40]);
        var ConfirmGrabberBitmap2=new LBitmap(PictureButtonList[40]);
        SetBitmap(ConfirmGrabberBitmap1,20,4,0.8,0.8);
        ConfirmYesButton=new LButton(ConfirmGrabberBitmap1,ConfirmGrabberBitmap2,ConfirmGrabberBitmap2);
        SetButton(ConfirmYesButton,550,400);
        backLayer.addChild(ConfirmYesButton);
        ConfirmYesButton.addEventListener(LMouseEvent.MOUSE_UP,ReturntoMaingameConfirm);//确认
    }
    ActionGodMix();
}

function GrabbergiveupConfirm(){
    ConfirmGrabbergiveupButton.removeEventListener(LMouseEvent.MOUSE_UP,GrabbergiveupConfirm);
    ConfirmGrabberattackButton.removeEventListener(LMouseEvent.MOUSE_UP,GrabberattackConfirm);
    backLayer.removeAllChild();

    onlayer=new LBitmap(PictureSceneList[11]);
    SetBitmap(onlayer,70,35,0.98,0.9);
    backLayer.addChild(onlayer);

    var ConfirmBitmap=new LBitmap(PictureSceneList[5]);
    SetBitmap(ConfirmBitmap,400,100,1,0.8);
    backLayer.addChild(ConfirmBitmap);
        
    var ConfirmTitle=new LTextField();
    SetTextAttributes(ConfirmTitle,"T^T",600,110,40,"楷书","red");
    ConfirmTitle.weight="bolder";
    backLayer.addChild(ConfirmTitle);

    AccidentLossMoney =GrabberCoin();//被偷的钱
    PlayerCoin-=AccidentLossMoney;

    var Confirmtxt=new LTextField();
    SetTextAttributes(Confirmtxt,"你被盗了" + AccidentLossMoney + "文!",520,200,30,"宋体","white");
    backLayer.addChild(Confirmtxt);

    var ConfirmGrabberBitmap1=new LBitmap(PictureButtonList[40]);
    var ConfirmGrabberBitmap2=new LBitmap(PictureButtonList[40]);
    SetBitmap(ConfirmGrabberBitmap1,20,4,0.8,0.8);
    ConfirmYesButton=new LButton(ConfirmGrabberBitmap1,ConfirmGrabberBitmap2,ConfirmGrabberBitmap2);
    SetButton(ConfirmYesButton,550,400);
    backLayer.addChild(ConfirmYesButton);
    ConfirmYesButton.addEventListener(LMouseEvent.MOUSE_UP,ReturntoMaingameConfirm);//确认
}

function ReturntoMaingameConfirm(){
    backLayer.removeAllChild();
    GameMainForm();
}

function GrabberattackConfirm(){
    ConfirmGrabbergiveupButton.removeEventListener(LMouseEvent.MOUSE_UP,GrabbergiveupConfirm);
    ConfirmGrabberattackButton.removeEventListener(LMouseEvent.MOUSE_UP,GrabberattackConfirm);
    backLayer.removeAllChild();

    onlayer=new LBitmap(PictureSceneList[11]);
    SetBitmap(onlayer,70,35,0.98,0.9);
    backLayer.addChild(onlayer);

    var ConfirmBitmap=new LBitmap(PictureSceneList[5]);
    SetBitmap(ConfirmBitmap,400,100,1,0.8);
    backLayer.addChild(ConfirmBitmap);
        
    var ConfirmTitle=new LTextField();
    SetTextAttributes(ConfirmTitle,"T^T",600,110,40,"楷书","red");
    ConfirmTitle.weight="bolder";
    backLayer.addChild(ConfirmTitle);

    AccidentLossMoney =GrabberCoin();//被偷的钱

    var Confirmtxt=new LTextField();
    SetTextAttributes(Confirmtxt,"你被盗了" + AccidentLossMoney + "文!",520,200,30,"宋体","white");
    backLayer.addChild(Confirmtxt);

    if(PlayerCurrentVitality<30){
        PlayerCoin-=AccidentLossMoney;
        Confirmtxt.text="体力不够，被盗"+AccidentLossMoney + "文!";
    }
    else{
        ConfirmTitle.text="(*^▽^*)";
        Confirmtxt.text="成功阻挡了强盗!";
    }

    var ConfirmGrabberBitmap1=new LBitmap(PictureButtonList[40]);
    var ConfirmGrabberBitmap2=new LBitmap(PictureButtonList[40]);
    SetBitmap(ConfirmGrabberBitmap1,20,4,0.8,0.8);
    ConfirmYesButton=new LButton(ConfirmGrabberBitmap1,ConfirmGrabberBitmap2,ConfirmGrabberBitmap2);
    SetButton(ConfirmYesButton,550,400);
    backLayer.addChild(ConfirmYesButton);
    ConfirmYesButton.addEventListener(LMouseEvent.MOUSE_UP,ReturntoMaingameConfirm);//确认
}