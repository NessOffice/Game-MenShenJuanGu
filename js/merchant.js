var MerchantGodLevel = 1; //low gods, medium gods, advanced gods

function PrepareActionMerchant2(event){
    MerchantButton.removeEventListener(LMouseEvent.MOUSE_UP,ActionMerchant1);
    MerchantButton2.removeEventListener(LMouseEvent.MOUSE_UP,ActionMerchant2);
    FromMarketreturntohomeButton.removeEventListener(LMouseEvent.MOUSE_UP,PreparefromMarkettoGameMainForm);
    backLayer.removeAllChild();

    var MerchantsceneBitmap2=new LBitmap(PictureSceneList[3]);
    SetBitmap(MerchantsceneBitmap2,160,35,0.8,0.9);
    backLayer.addChild(MerchantsceneBitmap2);//背景
    
    onlayer=new LBitmap(PictureSceneList[11]);
    SetBitmap(onlayer,70,35,0.98,0.9);
    backLayer.addChild(onlayer);

    var MerchantoutlineBitmap=new LBitmap(PictureOutlineList[1]);
    SetBitmap(MerchantoutlineBitmap,130,320,1,1);
    backLayer.addChild(MerchantoutlineBitmap);

    var ad = new LTextField();
    SetTextAttributes(ad,"嘿嘿嘿，俺今天这里只收您"+DiscountMerchant2+"成钱！",250,400,30,"楷书","white");
    ad.speed=1;
    ad.wind();
    backLayer.addChild(ad);//打折字体广告

    backLayer.addEventListener(LMouseEvent.MOUSE_UP,ActionMerchant2);
}

function ActionMerchant2(event){//小贩
    backLayer.removeAllEventListener();
    backLayer.removeAllChild();

    var backLayerMerchant = new LSprite();
    backLayerMerchant.graphics.drawRect(1,"#cccccc",[70,35,1176,540],true,"#cccccc");
    backLayer.addChild(backLayerMerchant);

    var MerchantsceneBitmap2=new LBitmap(PictureSceneList[3]);
    SetBitmap(MerchantsceneBitmap2,160,35,0.8,0.9);
    backLayer.addChild(MerchantsceneBitmap2);//背景
    
    var CoinOutLine=new LBitmap(PictureOutlineList[4]);
    SetBitmap(CoinOutLine,900,40,0.2,0.2);
    backLayer.addChild(CoinOutLine);//钱的框架
    
    var PlayerCointxt = new LTextField();
    SetTextAttributes(PlayerCointxt,PlayerCoin+"文",970,65,30,"楷书","black");
    backLayer.addChild(PlayerCointxt);//钱的文字

    var GodBuyBitmap1=new LBitmap(PictureGodList[Merchant2Items]);
    var GodBuyBitmap2=new LBitmap(PictureGodList[Merchant2Items]);
    SetBitmap(GodBuyBitmap1,21.25,12.75,0.9,0.9);
    SetBitmap(GodBuyBitmap2,0,0,1,1);
    GodBuyLuckButton= new LButton(GodBuyBitmap1,GodBuyBitmap2,GodBuyBitmap1);
    SetButton(GodBuyLuckButton,400,270);
    GodBuyLuckButton.addEventListener(LMouseEvent.MOUSE_UP, ActionBuyGodFromMerchant2);
    backLayer.addChild(GodBuyLuckButton);
    var GodPricetxt = new LTextField();
    SetTextAttributes(GodPricetxt, GodPrice[Merchant2Items]*DiscountMerchant2/10+"文", 560 ,520,40,"楷书","black");
    GodPricetxt.weight="bolder";
    backLayer.addChild(GodPricetxt);//随机卖的一个门神贴

    var FromMerchant2returntoMarketBitmap1 = new LBitmap(PictureButtonList[6]);
    var FromMerchant2returntoMarketBitmap2 = new LBitmap(PictureButtonList[7]);
    var FromMerchant2returntoMarketBitmap3 = new LBitmap(PictureButtonList[7]);
    SetBitmap(FromMerchant2returntoMarketBitmap3,4,4,0.9,0.9);
    FromMerchant2returntoMarketButton = new LButton(FromMerchant2returntoMarketBitmap1,FromMerchant2returntoMarketBitmap2,FromMerchant2returntoMarketBitmap3);
    backLayer.addChild(FromMerchant2returntoMarketButton);
    SetButton(FromMerchant2returntoMarketButton,1100,470);
    FromMerchant2returntoMarketButton.addEventListener(LMouseEvent.MOUSE_UP,PreparefromeMerchant2toMarket);//由小贩返回集市
}
function PreparefromeMerchant2toMarket(){
    FromMerchant2returntoMarketButton.removeEventListener(LMouseEvent.MOUSE_UP,PreparefromeMerchant2toMarket);
    backLayer.removeAllChild();
    ActionMarket();
}


function PrepareActionMerchant1(event){
    MerchantButton.removeEventListener(LMouseEvent.MOUSE_UP,ActionMerchant1);
    MerchantButton2.removeEventListener(LMouseEvent.MOUSE_UP,ActionMerchant2);
    FromMarketreturntohomeButton.removeEventListener(LMouseEvent.MOUSE_UP,PreparefromMarkettoGameMainForm);
    backLayer.removeAllChild();

    var MerchantsceneBitmap=new LBitmap(PictureSceneList[2]);
    SetBitmap(MerchantsceneBitmap,70,35,0.98,0.9);
    backLayer.addChild(MerchantsceneBitmap);//背景
    
    onlayer=new LBitmap(PictureSceneList[11]);
    SetBitmap(onlayer,70,35,0.98,0.9);
    backLayer.addChild(onlayer);

    var MerchantoutlineBitmap=new LBitmap(PictureOutlineList[0]);
    SetBitmap(MerchantoutlineBitmap,130,320,1,1);
    backLayer.addChild(MerchantoutlineBitmap);

    var ad = new LTextField();
    if(DiscountMarket == 10)
        SetTextAttributes(ad,"本店今日不打折!",250,400,30,"楷书","white");
    else
        SetTextAttributes(ad,"今日门神贴"+DiscountMarket+"折!",250,400,30,"楷书","white");
    ad.speed=1;
    ad.wind();
    backLayer.addChild(ad);//打折字体广告

    backLayer.addEventListener(LMouseEvent.MOUSE_UP,ActionMerchant1);
}
function ActionMerchant1(event){//商人
    backLayer.removeAllEventListener();
    backLayer.removeAllChild();
    
    var backLayerMerchant = new LSprite();
    backLayerMerchant.graphics.drawRect(1,"#cccccc",[70,35,1176,540],true,"#cccccc");
    backLayer.addChild(backLayerMerchant);

    var MerchantsceneBitmap=new LBitmap(PictureSceneList[2]);
    SetBitmap(MerchantsceneBitmap,70,35,0.98,0.9);
    backLayer.addChild(MerchantsceneBitmap);//背景
    
    var CoinOutLine=new LBitmap(PictureOutlineList[4]);
    SetBitmap(CoinOutLine,900,40,0.2,0.2);
    backLayer.addChild(CoinOutLine);//钱的框架
    
    var PlayerCointxt = new LTextField();
    SetTextAttributes(PlayerCointxt,PlayerCoin+"文",970,65,30,"楷体","black");
    backLayer.addChild(PlayerCointxt);//钱的文字

    var MerchantslideBitmap1=new LBitmap(PictureButtonList[37]);
    var MerchantslideBitmap2=new LBitmap(PictureButtonList[37]);
    var MerchantslideBitmap3=new LBitmap(PictureButtonList[37]);
    SetBitmap(MerchantslideBitmap2,-8,-8,1.2,1.2)
    MerchantleftslideButton=new LButton(MerchantslideBitmap1,MerchantslideBitmap2,MerchantslideBitmap3);
    SetButton(MerchantleftslideButton,100,350);
    MerchantleftslideButton.addEventListener(LMouseEvent.MOUSE_UP, ActionAdjustGodLevel);
    backLayer.addChild(MerchantleftslideButton);//左滑

    var MerchantslideBitmap4=new LBitmap(PictureButtonList[38]);
    var MerchantslideBitmap5=new LBitmap(PictureButtonList[38]);
    var MerchantslideBitmap6=new LBitmap(PictureButtonList[38]);
    SetBitmap(MerchantslideBitmap5,-8,-8,1.2,1.2)
    MerchantrightslideButton=new LButton(MerchantslideBitmap4,MerchantslideBitmap5,MerchantslideBitmap6);
    SetButton(MerchantrightslideButton,1100,350);
    MerchantrightslideButton.addEventListener(LMouseEvent.MOUSE_UP, ActionAdjustGodLevel);
    backLayer.addChild(MerchantrightslideButton);//右滑

    var GodPriceTxts = [
        "加官进禄  " + GodPrice[0] * DiscountMarket / 10 + "文",
        "哼哈二将  " + GodPrice[1] * DiscountMarket / 10 + "文",
        "男童女童  " + GodPrice[2] * DiscountMarket / 10 + "文",
        "神荼郁垒  " + GodPrice[3] * DiscountMarket / 10 + "文",
        "秦尉迟二将  " + GodPrice[4] * DiscountMarket / 10 + "文",
        "马武铫期  " + GodPrice[5] * DiscountMarket / 10 + "文",
        "黄邪蓝邪  " + GodPrice[6] * DiscountMarket / 10 + "文",
    ];

    if(event.currentTarget == MerchantButton)
        MerchantGodLevel = 1;

    var GodTitleTxt=new LTextField();
    if(MerchantGodLevel==1){
        SetTextAttributes(GodTitleTxt,"低阶门神",550,160,50,"黑体","black");
        GodTitleTxt.weight="bolder";
        backLayer.addChild(GodTitleTxt); 

        var GodBuyBitmap1=new LBitmap(PictureGodList[0]);
        var GodBuyBitmap2=new LBitmap(PictureGodList[0]);
        SetBitmap(GodBuyBitmap1,10.625,6.375,0.5,0.5);
        SetBitmap(GodBuyBitmap2,0,0,0.55,0.55);
        GodBuyButton1= new LButton(GodBuyBitmap1,GodBuyBitmap2,GodBuyBitmap1);
        SetButton(GodBuyButton1,200,220);
        GodBuyButton1.addEventListener(LMouseEvent.MOUSE_UP, ActionBuyGodFromMerchant1);
        backLayer.addChild(GodBuyButton1);
        var GodPricetxt1 = new LTextField();
        SetTextAttributes(GodPricetxt1, GodPriceTxts[0], 240 ,355,20,"楷书","black");
        GodPricetxt1.weight="bolder";
        backLayer.addChild(GodPricetxt1);//加官进禄贴

        var GodBuyBitmap3=new LBitmap(PictureGodList[1]);
        var GodBuyBitmap4=new LBitmap(PictureGodList[1]);
        SetBitmap(GodBuyBitmap3,10.625,6.375,0.5,0.5);
        SetBitmap(GodBuyBitmap4,0,0,0.55,0.55);
        GodBuyButton2= new LButton(GodBuyBitmap3,GodBuyBitmap4,GodBuyBitmap3);
        SetButton(GodBuyButton2,500,220);
        GodBuyButton2.addEventListener(LMouseEvent.MOUSE_UP, ActionBuyGodFromMerchant1);
        backLayer.addChild(GodBuyButton2);
        var GodPricetxt2 = new LTextField();
        SetTextAttributes(GodPricetxt2, GodPriceTxts[1], 540 ,355,20,"楷书","black");
        GodPricetxt2.weight="bolder";
        backLayer.addChild(GodPricetxt2);//哼哈二将贴

        var GodBuyBitmap5=new LBitmap(PictureGodList[2]);
        var GodBuyBitmap6=new LBitmap(PictureGodList[2]);
        SetBitmap(GodBuyBitmap5,10.625,6.375,0.5,0.5);
        SetBitmap(GodBuyBitmap6,0,0,0.55,0.55);
        GodBuyButton3= new LButton(GodBuyBitmap5,GodBuyBitmap6,GodBuyBitmap5);
        SetButton(GodBuyButton3,800,220);
        GodBuyButton3.addEventListener(LMouseEvent.MOUSE_UP, ActionBuyGodFromMerchant1);
        backLayer.addChild(GodBuyButton3);
        var GodPricetxt3 = new LTextField();
        SetTextAttributes(GodPricetxt3, GodPriceTxts[2], 840 ,355,20,"楷书","black");
        GodPricetxt3.weight="bolder";
        backLayer.addChild(GodPricetxt3);//男童女童贴

        var GodBuyBitmap7=new LBitmap(PictureGodList[3]);
        var GodBuyBitmap8=new LBitmap(PictureGodList[3]);
        SetBitmap(GodBuyBitmap7,10.625,6.375,0.5,0.5);
        SetBitmap(GodBuyBitmap8,0,0,0.55,0.55);
        GodBuyButton4= new LButton(GodBuyBitmap7,GodBuyBitmap8,GodBuyBitmap7);
        SetButton(GodBuyButton4,200,390);
        GodBuyButton4.addEventListener(LMouseEvent.MOUSE_UP, ActionBuyGodFromMerchant1);
        backLayer.addChild(GodBuyButton4);
        var GodPricetxt4 = new LTextField();
        SetTextAttributes(GodPricetxt4, GodPriceTxts[3], 240 ,525,20,"楷书","black");
        GodPricetxt4.weight="bolder";
        backLayer.addChild(GodPricetxt4);//神荼郁垒贴
        
    }
    else if(MerchantGodLevel==2){
        SetTextAttributes(GodTitleTxt,"中阶门神",550,160,50,"黑体","black");
        GodTitleTxt.weight="bolder";
        backLayer.addChild(GodTitleTxt); 

        var GodBuyBitmap9=new LBitmap(PictureGodList[4]);
        var GodBuyBitmap10=new LBitmap(PictureGodList[4]);
        SetBitmap(GodBuyBitmap9,10.625,6.375,0.5,0.5);
        SetBitmap(GodBuyBitmap10,0,0,0.55,0.55);
        GodBuyButton5= new LButton(GodBuyBitmap9,GodBuyBitmap10,GodBuyBitmap9);
        SetButton(GodBuyButton5,200,220);
        GodBuyButton5.addEventListener(LMouseEvent.MOUSE_UP, ActionBuyGodFromMerchant1);
        backLayer.addChild(GodBuyButton5);
        var GodPricetxt5 = new LTextField();
        SetTextAttributes(GodPricetxt5, GodPriceTxts[4], 240 ,355,20,"楷书","black");
        GodPricetxt5.weight="bolder";
        backLayer.addChild(GodPricetxt5);//秦尉迟二将

        var GodBuyBitmap11=new LBitmap(PictureGodList[5]);
        var GodBuyBitmap12=new LBitmap(PictureGodList[5]);
        SetBitmap(GodBuyBitmap11,10.625,6.375,0.5,0.5);
        SetBitmap(GodBuyBitmap12,0,0,0.55,0.55);
        GodBuyButton6= new LButton(GodBuyBitmap11,GodBuyBitmap12,GodBuyBitmap11);
        SetButton(GodBuyButton6,500,220);
        GodBuyButton6.addEventListener(LMouseEvent.MOUSE_UP, ActionBuyGodFromMerchant1);
        backLayer.addChild(GodBuyButton6);
        var GodPricetxt6 = new LTextField();
        SetTextAttributes(GodPricetxt6, GodPriceTxts[5], 540 ,355,20,"楷书","black");
        GodPricetxt6.weight="bolder";
        backLayer.addChild(GodPricetxt6);//马武铫期贴

    }
    else{
        SetTextAttributes(GodTitleTxt,"高阶门神",550,160,50,"黑体","black");
        GodTitleTxt.weight="bolder";
        backLayer.addChild(GodTitleTxt); 

        var GodBuyBitmap13=new LBitmap(PictureGodList[6]);
        var GodBuyBitmap14=new LBitmap(PictureGodList[6]);
        SetBitmap(GodBuyBitmap13,10.625,6.375,0.5,0.5);
        SetBitmap(GodBuyBitmap14,0,0,0.55,0.55);
        GodBuyButton7= new LButton(GodBuyBitmap13,GodBuyBitmap14,GodBuyBitmap13);
        SetButton(GodBuyButton7,200,220);
        GodBuyButton7.addEventListener(LMouseEvent.MOUSE_UP, ActionBuyGodFromMerchant1);
        backLayer.addChild(GodBuyButton7);
        var GodPricetxt7 = new LTextField();
        SetTextAttributes(GodPricetxt7, GodPriceTxts[6], 240 ,355,20,"楷书","black");
        GodPricetxt7.weight="bolder";
        backLayer.addChild(GodPricetxt7);//黄邪蓝邪贴

    }

    var FromMerchantreturntoMarketBitmap1 = new LBitmap(PictureButtonList[6]);
    var FromMerchantreturntoMarketBitmap2 = new LBitmap(PictureButtonList[7]);
    var FromMerchantreturntoMarketBitmap3 = new LBitmap(PictureButtonList[7]);
    SetBitmap(FromMerchantreturntoMarketBitmap3,4,4,0.9,0.9);
    FromMerchantreturntoMarketButton = new LButton(FromMerchantreturntoMarketBitmap1,FromMerchantreturntoMarketBitmap2,FromMerchantreturntoMarketBitmap3);
    backLayer.addChild(FromMerchantreturntoMarketButton);
    SetButton(FromMerchantreturntoMarketButton,1100,470);
    FromMerchantreturntoMarketButton.addEventListener(LMouseEvent.MOUSE_UP,PreparefromeMerchanttoMarket);//由商人返回集市
}
function PreparefromeMerchanttoMarket(){
    FromMerchantreturntoMarketButton.removeEventListener(LMouseEvent.MOUSE_UP,PreparefromeMerchanttoMarket);
    backLayer.removeAllChild();
    ActionMarket();
}

function ActionAdjustGodLevel(event){
    if(event.currentTarget == MerchantleftslideButton){
        MerchantGodLevel=(MerchantGodLevel+1)%3+1;//向左循环滑
    }
    if(event.currentTarget == MerchantrightslideButton){
        MerchantGodLevel=MerchantGodLevel%3+1;//向右循环滑
    }
    ActionMerchant1(event);
}

function ActionBuyGodFromMerchant1(event){
    var price, BuyItem;

    if(event.currentTarget == GodBuyButton1)BuyItem=0;
    else if(event.currentTarget == GodBuyButton2)BuyItem=1;
    else if(event.currentTarget == GodBuyButton3)BuyItem=2;
    else if(event.currentTarget == GodBuyButton4)BuyItem=3;
    else if(event.currentTarget == GodBuyButton5)BuyItem=4;
    else if(event.currentTarget == GodBuyButton6)BuyItem=5;
    else BuyItem=6;
    
    price=GodPrice[BuyItem] * DiscountMarket / 10;
    if(price > PlayerCoin)
        window.alert("客官，银子不够！");
    else{
        PlayerCoin -= price;
        window.alert("购买成功！");
        PlayerBag[BuyItem]++;
    }
    ActionMerchant1(event);
}

function ActionBuyGodFromMerchant2(event){
    var price=GodPrice[Merchant2Items]*DiscountMerchant2/10;
    if(Merchant2hadBought)window.alert("你今天已经买过了！");
    else if(price > PlayerCoin)
        window.alert("没钱勿来！");
    else{
        PlayerCoin -= price;
        window.alert("嘻嘻谢谢老爷惠顾！");
        PlayerBag[Merchant2Items]++;
        Merchant2hadBought=1;
        ActionGainExp(10);
    }
    ActionMerchant2(event);
}

function Merchant2ItemsGenerate(){
    Merchant2Items=Math.floor(Math.random()*7);
}

function DiscountReset(){
    DiscountMarket = 10-Math.floor(Math.random()*3);
    DiscountMerchant2 = 7-Math.floor(Math.random()*5);
}
