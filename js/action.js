var FrameIndexNight;
var isNight;
var NightEventIndex;

function ActionSleep(){
    removeAllEventinGameMainForm();
    // backLayer.removeAllChild();

    FrameIndexNight = 0;
    isNight = 1;
    backLayer.addEventListener(LEvent.ENTER_FRAME, AnimationNightFall);
}

function AnimationNightFall()
{
    if(!isNight) return;
    if(FrameIndexNight < 20)
    {
        if(FrameIndexNight == 0)
            NightEventGenerate();
        FrameIndexNight++;
        var CurtainBitmap=new LBitmap(PictureSceneList[11]);
        SetBitmap(CurtainBitmap,70,35,0.98,0.9);
        CurtainBitmap.alpha = FrameIndexNight / 40;
        backLayer.addChild(CurtainBitmap);
    }
    else
    {
        // backLayer.removeChild(CurtainBitmap1);

        isNight = 0;
        if(SystemDaytime != 29)
        {
            ActionNight();
            ActionPromotion();
        }
        SystemDaytime +=1;//
        Merchant2hadBought=0;
        DiscountReset();
        Merchant2ItemsGenerate();
        PlayerCurrentVitality=PlayerTotalVatality;
        PlayerFarming=1;
        ActionGainExp(20);
        if(SystemDaytime<30)GameMainForm();
        if(SystemDaytime==30)
        {
            CurrentMonsterIndex = 9; // The B.O.S.S
            CurrentMonsterHP = MonsterHP[CurrentMonsterIndex];
            MonsterAttack();
            ActionGameSuccess();
        }
        backLayer.removeEventListener(LEvent.ENTER_FRAME, AnimationNightFall);
    }
}

function AccidentThief()
{
    var stolencoin = Math.floor((Math.random()*0.25 + 0.05) * PlayerCoin);
    if(stolencoin == 0)
        stolencoin = 1;
    PlayerCoin -= stolencoin;
    window.alert("夜贼闯入！盗取银子" + stolencoin + "文！");
}

function NightEventGenerate()
{
    if(PossibilityDection(PossiblityMonster))
    {
        NightEventIndex = 1;
        monstermusicPlay();
        return;
    }
    if(PossibilityDection(PossiblityThief) && PlayerCoin > 0)
    {
        NightEventIndex = 2;
        thiefmusicPlay();
        return;
    }
    NightEventIndex = 0;
}

function ActionNight()
{
    if(NightEventIndex == 1)
    {
        MonsterShowup();
    }
    else if(NightEventIndex == 2)
    {
        AccidentThief();
    }
    else window.alert("今夜貌似无事发生");
}

function ActionPromotion() // 加官进禄
{
    var PreviousPlayerCoin = PlayerCoin;
    for(var i = 1;i <= 5;i++)
        if(PlayerDoorGod[i] == 0)
        {
            if(PlayerCoin * 0.5 > 100000)
                PlayerCoin += 100000;
            else PlayerCoin = Math.round(PlayerCoin * 1.5);
        }
    if(PreviousPlayerCoin != PlayerCoin)
        window.alert("由于加官进禄的效果！你收获了" + (PlayerCoin - PreviousPlayerCoin) + "文钱！");
}

function ActionFishing(){//钓鱼
    removeAllEventinGameMainForm();
    //backLayer.removeAllChild();
    
    onlayer=new LBitmap(PictureSceneList[11]);
    SetBitmap(onlayer,70,35,0.98,0.9);
    backLayer.addChild(onlayer);

    var ConfirmBitmap=new LBitmap(PictureSceneList[5]);
    SetBitmap(ConfirmBitmap,400,100,1,0.8);
    backLayer.addChild(ConfirmBitmap); 

    if(PlayerCurrentVitality>=15){
        PlayerCurrentVitality-=15;
        var FishingPossiblenumber=Math.floor(Math.random()*1000);
        
        var ConfirmTitle=new LTextField();
        SetTextAttributes(ConfirmTitle,"钓鱼",600,110,40,"楷书","black");
        ConfirmTitle.weight="bolder";
        backLayer.addChild(ConfirmTitle);

        var Confirmtxt=new LTextField();
        SetTextAttributes(Confirmtxt,"未钓到鱼!",570,200,30,"宋体","white");
        backLayer.addChild(Confirmtxt);

        var ConfirmGrabberBitmap1=new LBitmap(PictureButtonList[40]);
        var ConfirmGrabberBitmap2=new LBitmap(PictureButtonList[40]);
        SetBitmap(ConfirmGrabberBitmap1,20,4,0.8,0.8);
        ConfirmYesButton=new LButton(ConfirmGrabberBitmap1,ConfirmGrabberBitmap2,ConfirmGrabberBitmap1);
        SetButton(ConfirmYesButton,550,400);
        backLayer.addChild(ConfirmYesButton);

        if(PossibilityDection(PossiblityFish)){
            var fishcoin = Math.floor(Math.pow(1.1, PlayerLevel) * (Math.floor(Math.random()*10)+10));
            PlayerCoin+=fishcoin;
            ActionGainExp(5);
            Confirmtxt.text="钓到了一些鱼，并卖出了"+fishcoin+"文钱！";
            Confirmtxt.x=430;
            ConfirmYesButton.addEventListener(LMouseEvent.MOUSE_UP,fromfishturntoaccident);//确认
        }
        else{
            Confirmtxt.text="未钓到鱼!";
            ConfirmYesButton.addEventListener(LMouseEvent.MOUSE_UP,ReturntoMaingameConfirm);//确认
        } 
    }
    else{
        var ConfirmTitle=new LTextField();
        SetTextAttributes(ConfirmTitle,"提醒",600,110,40,"楷书","black");
        ConfirmTitle.weight="bolder";
        backLayer.addChild(ConfirmTitle);

        var Confirmtxt=new LTextField();
        SetTextAttributes(Confirmtxt,"没体力了!",570,200,30,"宋体","white");
        backLayer.addChild(Confirmtxt);

        var ConfirmGrabberBitmap1=new LBitmap(PictureButtonList[40]);
        var ConfirmGrabberBitmap2=new LBitmap(PictureButtonList[40]);
        SetBitmap(ConfirmGrabberBitmap1,20,4,0.8,0.8);
        ConfirmYesButton=new LButton(ConfirmGrabberBitmap1,ConfirmGrabberBitmap2,ConfirmGrabberBitmap1);
        SetButton(ConfirmYesButton,550,400);
        backLayer.addChild(ConfirmYesButton);
        ConfirmYesButton.addEventListener(LMouseEvent.MOUSE_UP,ReturntoMaingameConfirm);//确认
        //GameMainForm();
    }
}
function fromfishturntoaccident(){
    ConfirmYesButton.removeEventListener(LMouseEvent.MOUSE_UP,fromfishturntoaccident);
    AccidentDection(SceneCode["SceneFish"]);
}

function ActionGainExp(GainedExp){
    PlayerExperience += GainedExp;
    while(PlayerExperience >= PlayerExpNeed[PlayerLevel])
    {
        PlayerExperience -= PlayerExpNeed[PlayerLevel];
        PlayerLevel++;

        var Confirmtxt=new LTextField();
        SetTextAttributes(Confirmtxt,"恭喜您升到了" + PlayerLevel + "级！",530,250,30,"宋体","white");
        Confirmtxt.wind();
        Confirmtxt.speed=1;
        backLayer.addChild(Confirmtxt);
    }
}

function ActionFarming(){//种田
    removeAllEventinGameMainForm();

    onlayer=new LBitmap(PictureSceneList[11]);
    SetBitmap(onlayer,70,35,0.98,0.9);
    backLayer.addChild(onlayer);

    var ConfirmBitmap=new LBitmap(PictureSceneList[5]);
    SetBitmap(ConfirmBitmap,400,100,1,0.8);
    backLayer.addChild(ConfirmBitmap);

    if(PlayerFarming==1 && PlayerCurrentVitality>=50){
        PlayerFarming=0;
        var FarmingCoin = Math.floor(Math.pow(1.1, PlayerLevel) * (Math.floor(Math.random()*30)+15));
        PlayerCurrentVitality-=50;
        PlayerCoin+=FarmingCoin;
        ActionGainExp(20);
        
        var ConfirmTitle=new LTextField();
        SetTextAttributes(ConfirmTitle,"种田",600,110,40,"楷书","black");
        ConfirmTitle.weight="bolder";
        backLayer.addChild(ConfirmTitle);

        var Confirmtxt=new LTextField();
        SetTextAttributes(Confirmtxt,"你种田换到了"+FarmingCoin+"文钱！",520,200,30,"宋体","white");
        backLayer.addChild(Confirmtxt);

        var ConfirmGrabberBitmap1=new LBitmap(PictureButtonList[40]);
        var ConfirmGrabberBitmap2=new LBitmap(PictureButtonList[40]);
        SetBitmap(ConfirmGrabberBitmap1,20,4,0.8,0.8);
        ConfirmYesButton=new LButton(ConfirmGrabberBitmap1,ConfirmGrabberBitmap2,ConfirmGrabberBitmap1);
        SetButton(ConfirmYesButton,550,400);
        backLayer.addChild(ConfirmYesButton);
        ConfirmYesButton.addEventListener(LMouseEvent.MOUSE_UP,fromfarmturntoaccident);//确认
    }
    else if(PlayerFarming==0){
        
        var ConfirmTitle=new LTextField();
        SetTextAttributes(ConfirmTitle,"提醒",600,110,40,"楷书","black");
        ConfirmTitle.weight="bolder";
        backLayer.addChild(ConfirmTitle);

        var Confirmtxt=new LTextField();
        SetTextAttributes(Confirmtxt,"你今天种过田了!",520,200,30,"宋体","white");
        backLayer.addChild(Confirmtxt);

        var ConfirmGrabberBitmap1=new LBitmap(PictureButtonList[40]);
        var ConfirmGrabberBitmap2=new LBitmap(PictureButtonList[40]);
        SetBitmap(ConfirmGrabberBitmap1,20,4,0.8,0.8);
        ConfirmYesButton=new LButton(ConfirmGrabberBitmap1,ConfirmGrabberBitmap2,ConfirmGrabberBitmap1);
        SetButton(ConfirmYesButton,550,400);
        backLayer.addChild(ConfirmYesButton);
        ConfirmYesButton.addEventListener(LMouseEvent.MOUSE_UP,ReturntoMaingameConfirm);//确认
    }
    else{
        
        var ConfirmTitle=new LTextField();
        SetTextAttributes(ConfirmTitle,"T^T",600,110,40,"楷书","black");
        ConfirmTitle.weight="bolder";
        backLayer.addChild(ConfirmTitle);

        var Confirmtxt=new LTextField();
        SetTextAttributes(Confirmtxt,"没体力了!",570,200,30,"宋体","white");
        backLayer.addChild(Confirmtxt);

        var ConfirmGrabberBitmap1=new LBitmap(PictureButtonList[40]);
        var ConfirmGrabberBitmap2=new LBitmap(PictureButtonList[40]);
        SetBitmap(ConfirmGrabberBitmap1,20,4,0.8,0.8);
        ConfirmYesButton=new LButton(ConfirmGrabberBitmap1,ConfirmGrabberBitmap2,ConfirmGrabberBitmap1);
        SetButton(ConfirmYesButton,550,400);
        backLayer.addChild(ConfirmYesButton);
        ConfirmYesButton.addEventListener(LMouseEvent.MOUSE_UP,ReturntoMaingameConfirm);//确认
        //GameMainForm();
    }
    // WriteUserInfo();
}

function fromfarmturntoaccident(){
    ConfirmYesButton.removeEventListener(LMouseEvent.MOUSE_UP,fromfarmturntoaccident);//确认
    AccidentDection(SceneCode["SceneFarm"]);
}

function ActionGodMix()
{
    while(PlayerBag[GodCode["GodLei"]] && PlayerBag[GodCode["GodYan"]])
    {
        PlayerBag[GodCode["GodLei"]]--;
        PlayerBag[GodCode["GodYan"]]--;
        PlayerBag[GodCode["GodLeiYan"]]++;
    }
    while(PlayerBag[GodCode["GodLeft"]] && PlayerBag[GodCode["GodRight"]])
    {
        PlayerBag[GodCode["GodLeft"]]--;
        PlayerBag[GodCode["GodRight"]]--;
        PlayerBag[GodCode["GodCanYing"]]++;
    }
}

function FormBag(){//背包系统
    removeAllEventinGameMainForm();
    backLayer.removeAllChild();
    
    BagsceneBitmap1=new LBitmap(PictureSceneList[6]);
    SetBitmap(BagsceneBitmap1,70,35,0.98,0.9);
    backLayer.addChild(BagsceneBitmap1);//添加背包背景
 
    PlayerCointxt = new LTextField();
    SetTextAttributes(PlayerCointxt,PlayerCoin+"文",870,108,23,"楷体","black");
    backLayer.addChild(PlayerCointxt);
    
    var OrderofBag=0;
    for(var i = 0;i < 13;i++)
    {
        if(PlayerBag[i]){
            OrderofBag+=1;
            var GodInBag = new LBitmap(PictureGodList[i]);
            SetBitmap(GodInBag,BagX[OrderofBag], BagY[OrderofBag], 0.35, 0.35);
            var NumberOfBaggod = new LTextField();
            SetTextAttributes(NumberOfBaggod, PlayerBag[i], BagX[OrderofBag], BagY[OrderofBag],30,"楷体","black");
            NumberOfBaggod.weight="bolder";
            backLayer.addChild(GodInBag);
            backLayer.addChild(NumberOfBaggod);
        }
    }

    var FromBagreturntohomeBitmap1=new LBitmap(PictureButtonList[34]);
    var FromBagreturntohomeBitmap2=new LBitmap(PictureButtonList[34]);
    var FromBagreturntohomeBitmap3=new LBitmap(PictureButtonList[34]);
    SetBitmap(FromBagreturntohomeBitmap2,-8,-8,1.2,1.2)
    SetBitmap(FromBagreturntohomeBitmap3,4,4,0.9,0.9);
    FromBagreturntohomeButton=new LButton(FromBagreturntohomeBitmap1,FromBagreturntohomeBitmap2,FromBagreturntohomeBitmap3);
    backLayer.addChild(FromBagreturntohomeButton);
    SetButton(FromBagreturntohomeButton,1160,70);
    FromBagreturntohomeButton.addEventListener(LMouseEvent.MOUSE_UP,PreparefromBagtoGameMainForm);//返回村落
}
function PreparefromBagtoGameMainForm(){
    FromBagreturntohomeButton.removeEventListener(LMouseEvent.MOUSE_UP,PreparefromBagtoGameMainForm);
    GameMainForm();
}

function FromMainToMarket()
{
    if(PlayerCurrentVitality < 30)
    {

        onlayer=new LBitmap(PictureSceneList[11]);
        SetBitmap(onlayer,70,35,0.98,0.9);
        backLayer.addChild(onlayer);

        var ConfirmBitmap=new LBitmap(PictureSceneList[5]);
        SetBitmap(ConfirmBitmap,400,100,1,0.8);
        backLayer.addChild(ConfirmBitmap);
        
        var ConfirmTitle=new LTextField();
        SetTextAttributes(ConfirmTitle,"T^T",600,110,40,"楷书","black");
        ConfirmTitle.weight="bolder";
        backLayer.addChild(ConfirmTitle);

        var Confirmtxt=new LTextField();
        SetTextAttributes(Confirmtxt,"没体力了!快去休息吧！",520,200,30,"宋体","white");
        backLayer.addChild(Confirmtxt);

        var ConfirmGrabberBitmap1=new LBitmap(PictureButtonList[40]);
        var ConfirmGrabberBitmap2=new LBitmap(PictureButtonList[40]);
        SetBitmap(ConfirmGrabberBitmap1,20,4,0.8,0.8);
        ConfirmYesButton=new LButton(ConfirmGrabberBitmap1,ConfirmGrabberBitmap2,ConfirmGrabberBitmap1);
        SetButton(ConfirmYesButton,550,400);
        backLayer.addChild(ConfirmYesButton);
        ConfirmYesButton.addEventListener(LMouseEvent.MOUSE_UP,ReturntoMaingameConfirm);//确认
    }
    else{
        PlayerCurrentVitality -= 30;
        ActionMarket();
    }
}

function ActionMarket(){//进入集市

    removeAllEventinGameMainForm();
    backLayer.removeAllChild();
    
    var Marketscene=new LBitmap(PictureSceneList[1]);
    SetBitmap(Marketscene,70,35,0.98,0.9);
    backLayer.addChild(Marketscene);
    
    CurrentForm = SceneCode["SceneMarket"];
    var MerchantBitmap5=new LBitmap(PictureNPCList[4]);//商贾
    SetBitmap(MerchantBitmap5,800,360,1,1);
    backLayer.addChild(MerchantBitmap5);
    var MerchantBitmap1=new LBitmap(PictureNPCList[0]);//商贾
    var MerchantBitmap2=new LBitmap(PictureNPCList[1]);
    SetBitmap(MerchantBitmap1,-30,-30,1.3,1.3);
    SetBitmap(MerchantBitmap2,-30,-30,1.3,1.3);
    MerchantButton=new LButton(MerchantBitmap1,MerchantBitmap2,MerchantBitmap2);
    backLayer.addChild(MerchantButton);
    SetButton(MerchantButton,850,345);
    MerchantButton.addEventListener(LMouseEvent.MOUSE_UP,PrepareActionMerchant1);//进入商店

    var MerchantBitmap6=new LBitmap(PictureNPCList[5]);//贩夫
    SetBitmap(MerchantBitmap6,440,200,1,1);
    backLayer.addChild(MerchantBitmap6);
    var MerchantBitmap3=new LBitmap(PictureNPCList[2]);//贩夫
    var MerchantBitmap4=new LBitmap(PictureNPCList[3]);
    SetBitmap(MerchantBitmap3,10,10,0.9,0.9);
    SetBitmap(MerchantBitmap4,10,10,0.9,0.9);
    MerchantButton2=new LButton(MerchantBitmap3,MerchantBitmap4,MerchantBitmap4);
    backLayer.addChild(MerchantButton2);
    SetButton(MerchantButton2,300,250);
    MerchantButton2.addEventListener(LMouseEvent.MOUSE_UP,PrepareActionMerchant2);//向小贩购买

    var FromMarketreturntohomeBitmap1=new LBitmap(PictureButtonList[6]);
    var FromMarketreturntohomeBitmap2=new LBitmap(PictureButtonList[8]);
    var FromMarketreturntohomeBitmap3=new LBitmap(PictureButtonList[8]);
    SetBitmap(FromMarketreturntohomeBitmap3,4,4,0.9,0.9);
    FromMarketreturntohomeButton=new LButton(FromMarketreturntohomeBitmap1,FromMarketreturntohomeBitmap2,FromMarketreturntohomeBitmap3);
    SetButton(FromMarketreturntohomeButton,1100,470);
    backLayer.addChild(FromMarketreturntohomeButton);
    FromMarketreturntohomeButton.addEventListener(LMouseEvent.MOUSE_UP,PreparefromMarkettoGameMainForm);//返回村落
}
function PreparefromMarkettoGameMainForm(){
    MerchantButton.removeEventListener(LMouseEvent.MOUSE_UP,ActionMerchant1);
    MerchantButton2.removeEventListener(LMouseEvent.MOUSE_UP,ActionMerchant2);
    FromMarketreturntohomeButton.removeEventListener(LMouseEvent.MOUSE_UP,PreparefromMarkettoGameMainForm);
    AccidentDection(SceneCode["SceneMarket"]);
}
function ActionGameSuccess(){//通关
    var Coinassess=Math.round(Math.sqrt(PlayerCoin));
    if(Coinassess>100)Coinassess=100;
    var rankassess=PlayerLevel*5;
    if(rankassess>100)rankassess=100;
    var Powerassess=0,AllPower;
    for(var i=1;i<=5;i++)if(PlayerDoorGod[i]>=0){
        Powerassess+=GodPowerList[PlayerDoorGod[i]];
    }
    AllPower=Powerassess;
    Powerassess=Math.round(Math.sqrt(1.9220779*Powerassess+Powerassess*Powerassess*0.01766234));//构造了函数
    if(Powerassess>100)Powerassess=100;
    var Generalassess=Math.round((Coinassess+rankassess+Powerassess)/3);
    if(Generalassess>100)Generalassess=100;

    SleepingButton.removeEventListener(LMouseEvent.MOUSE_UP,ActionSleep);
    FishingButton.removeEventListener(LMouseEvent.MOUSE_UP,ActionFishing); 
    MarketButton.removeEventListener(LMouseEvent.MOUSE_UP,ActionMarket);
    BagButton.removeEventListener(LMouseEvent.MOUSE_UP,FormBag);
    backLayer.removeAllChild();

    var Villagepicture=new LBitmap(PictureSceneList[PlayerScene]);
    SetBitmap(Villagepicture,70,35,0.98,0.9);
    backLayer.addChild(Villagepicture);//背景

    onlayer=new LBitmap(PictureSceneList[11]);
    SetBitmap(onlayer,70,35,0.98,0.9);
    backLayer.addChild(onlayer);
    
    var assessrankList=new Array(30,35,40,45,50,55,60,65,70,75,80,85,90,95,1000);//评分变等级
    var assessrank;
    for(var i=0;i<15;i++){
        if(Generalassess<assessrankList[i]){
            assessrank=i;
            break;
        }
    }
    if(PlayerScene==9)assessrank+=1;//平原地图加分
    else if(PlayerScene==10)assessrank+=2;//山区地图加分

    if(PlayerScene==8&&assessrank>=12)assessrank=12;
    else if(PlayerScene==9&&assessrank>=13)assessrank=13;
    else if(PlayerScene==10&&assessrank>=14)assessrank=14;

    if(assessrank>=14)assessrank=14;
    var assessBitmap=new LBitmap(PictureAssessList[assessrank]);
    SetBitmap(assessBitmap,700,50,1,1);
    backLayer.addChild(assessBitmap);

    var SuccessTxt=new LTextField();
    SetTextAttributes(SuccessTxt,"恭喜你！通关啦！φ(≧ω≦*)♪ ",200,230,70,"楷书","white");
    SuccessTxt.weight="bolder";
    backLayer.addChild(SuccessTxt);
    
    var honorTxt=new LTextField();
    SetTextAttributes(honorTxt,"获得称号：",200,330,40,"楷体","white");
    var flag=0;
    if(PlayerCoin>=1000000){
        honorTxt.text+=" 百万富翁";
        flag=1;
    }
    else if(PlayerCoin<1000000&&PlayerCoin>=10000){
        honorTxt.text+=" 腰缠万贯";
        flag=1;
    }
    if(AllPower>=600&&AllPower<700){
        honorTxt.text+=" 门神欧皇";
        flag=1;
    }
    else if(AllPower==900){
        honorTxt.text+=" 你就是神";
        flag=1;
    }
    else if(AllPower>=800&&AllPower<900){
        honorTxt.text+=" 半人半神";
        flag=1;
    }
    else if(AllPower>=700&&AllPower<800){
        honorTxt.text+=" 欧到炸裂";
        flag=1;
    }
    else if(AllPower<600&&AllPower>=550){
        honorTxt.text+=" 深谋远虑";
        flag=1;
    }
    else if(AllPower<200){
        honorTxt.text+=" 险中求胜";
        flag=1;
    }
    if(!flag){
        honorTxt.text="你没有获得什么称号";
    }
    honorTxt.wind();
    honorTxt.speed=1;
    backLayer.addChild(honorTxt);

    var continueTxt=new LTextField();
    SetTextAttributes(continueTxt,"To be continue...",1050,520,20,"楷书","white");
    backLayer.addChild(continueTxt);

    var ConfirmYesBitmap1=new LBitmap(PictureButtonList[40]);
    var ConfirmYesBitmap2=new LBitmap(PictureButtonList[40]);
    SetBitmap(ConfirmYesBitmap1,10,2,0.9,0.9);
    ConfirmYesButton=new LButton(ConfirmYesBitmap1,ConfirmYesBitmap2,ConfirmYesBitmap2);
    SetButton(ConfirmYesButton,500,450);
    backLayer.addChild(ConfirmYesButton);
    ConfirmYesButton.addEventListener(LMouseEvent.MOUSE_UP,ReturntoBegin);
}

function ActionGameOver(){//输了
    SleepingButton.removeEventListener(LMouseEvent.MOUSE_UP,ActionSleep);
    FishingButton.removeEventListener(LMouseEvent.MOUSE_UP,ActionFishing); 
    MarketButton.removeEventListener(LMouseEvent.MOUSE_UP,ActionMarket);
    BagButton.removeEventListener(LMouseEvent.MOUSE_UP,FormBag);

    var Villagepicture=new LBitmap(PictureSceneList[PlayerScene]);
    SetBitmap(Villagepicture,70,35,0.98,0.9);
    backLayer.addChild(Villagepicture);//背景

    onlayer=new LBitmap(PictureSceneList[11]);
    SetBitmap(onlayer,70,35,0.98,0.9);
    backLayer.addChild(onlayer);

    var SuccessTxt1=new LTextField();
    SetTextAttributes(SuccessTxt1,MonsterName[CurrentMonsterIndex]+"打败了门神，冲破了大门！村落遭灭族之灾！",170,200,40,"宋体","red");
    SuccessTxt1.weight="bolder";
    backLayer.addChild(SuccessTxt1);

    var SuccessTxt=new LTextField();
    SetTextAttributes(SuccessTxt,"失败乃成功之母！",335,300,70,"楷书","white");
    var randomi=Math.random()*5;
    if(randomi>=1&&randomi<2)SuccessTxt.text="少侠请重新来过！";
    else if(randomi>=2&&randomi<3)SuccessTxt.text="再来一把报血仇！";
    else if(randomi>=3&&randomi<4)SuccessTxt.text="血海深仇怎不报！";
    else if(randomi>=4&&randomi<5)SuccessTxt.text="不要怂，接着干！";
    SuccessTxt.weight="bolder";
    backLayer.addChild(SuccessTxt);

    var ConfirmYesBitmap1=new LBitmap(PictureButtonList[40]);
    var ConfirmYesBitmap2=new LBitmap(PictureButtonList[40]);
    SetBitmap(ConfirmYesBitmap1,10,2,0.9,0.9);
    ConfirmYesButton=new LButton(ConfirmYesBitmap1,ConfirmYesBitmap2,ConfirmYesBitmap2);
    SetButton(ConfirmYesButton,500,450);
    backLayer.addChild(ConfirmYesButton);
    ConfirmYesButton.addEventListener(LMouseEvent.MOUSE_UP,ReturntoBegin);
    sleep();
}

function ReturntoBegin(){//返回首页
    CurrentMonsterIndex = -1;
    InitGameParameters();
    ConfirmYesButton.removeEventListener(LMouseEvent.MOUSE_UP,ReturntoBegin);
    backLayer.removeAllChild();

    main();
}