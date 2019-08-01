function ActionDoor(){
    
	if(PlayerDoor[1]==0){//判断第1扇门是否解锁
	    var lockpicture1=new LBitmap(PictureButtonList[45]);
	    var lockpicture2=new LBitmap(PictureButtonList[45]);
	    SetBitmap(lockpicture1,0,0,0.7,0.7);
	    SetBitmap(lockpicture2,-7.5,-7.5,0.8,0.8);
	    DoorButton1=new LButton(lockpicture1,lockpicture2,lockpicture2);
	    SetButton(DoorButton1,130,400);
	    backLayer.addChild(DoorButton1);
	    DoorButton1.addEventListener(LMouseEvent.MOUSE_UP,StartDoor);
	}
	else if(PlayerDoor[1]==1&&PlayerDoorGod[1]==-1){//判断第1扇门是否有门神贴
        var lockpicture1=new LBitmap(PictureButtonList[44]);
        var lockpicture2=new LBitmap(PictureButtonList[44]);
        SetBitmap(lockpicture1,0,0,1,1);
        SetBitmap(lockpicture2,-3.5,-2.5,1.1,1.1);
        DoorButton1=new LButton(lockpicture1,lockpicture2,lockpicture2);
        SetButton(DoorButton1,150,420);
	    backLayer.addChild(DoorButton1);
	    DoorButton1.addEventListener(LMouseEvent.MOUSE_UP,PutGod);
	}
	else if(PlayerDoor[1]==1&&PlayerDoorGod[1]>=0){//第1扇门有门神贴
        var lockpicture1=new LBitmap(PictureGodList[PlayerDoorGod[1]]);
        var lockpicture2=new LBitmap(PictureGodList[PlayerDoorGod[1]]);
        SetBitmap(lockpicture1,10.625,6.375,0.3,0.3);
        SetBitmap(lockpicture2,0,0,0.35,0.35);
        DoorButton1=new LButton(lockpicture1,lockpicture2,lockpicture2);
        SetButton(DoorButton1,105,390);
	    backLayer.addChild(DoorButton1);//贴门神图片

	    var GodBloodTxt1=new LTextField();
	    SetTextAttributes(GodBloodTxt1,"血量:"+PlayerDoorGodBlood[1]+"%",130,375,20,"楷书","black");
	    GodBloodTxt1.weight="bolder";
	    backLayer.addChild(GodBloodTxt1);//门神完整度

	    var GodrepairBitmap1=new LBitmap(PictureButtonList[27]);
	    var GodrepairBitmap2=new LBitmap(PictureButtonList[28]);
	    DoorrepairButton1=new LButton(GodrepairBitmap1,GodrepairBitmap2,GodrepairBitmap1);
	    SetButton(DoorrepairButton1,110,480);
	    backLayer.addChild(DoorrepairButton1);
	    DoorrepairButton1.addEventListener(LMouseEvent.MOUSE_UP,repairgod); //门神修补

	    var GodgiveupBitmap1=new LBitmap(PictureButtonList[31]);
	    var GodgiveupBitmap2=new LBitmap(PictureButtonList[32]);
	    DoorgiveupButton1=new LButton(GodgiveupBitmap1,GodgiveupBitmap2,GodgiveupBitmap1);
	    SetButton(DoorgiveupButton1,200,480);
	    backLayer.addChild(DoorgiveupButton1);
	    DoorgiveupButton1.addEventListener(LMouseEvent.MOUSE_UP,giveupgod); //撕下门神
	}

    if(PlayerDoor[2]==0){//判断第2扇门是否解锁
	    var lockpicture3=new LBitmap(PictureButtonList[45]);
	    var lockpicture4=new LBitmap(PictureButtonList[45]);
	    SetBitmap(lockpicture3,0,0,0.7,0.7);
	    SetBitmap(lockpicture4,-7.5,-7.5,0.8,0.8);
	    DoorButton2=new LButton(lockpicture3,lockpicture4,lockpicture4);
	    SetButton(DoorButton2,350,400);
	    backLayer.addChild(DoorButton2);
	    DoorButton2.addEventListener(LMouseEvent.MOUSE_UP,StartDoor);
	}
	else if(PlayerDoor[2]==1&&PlayerDoorGod[2]==-1){//判断第2扇门是否有门神贴
        var lockpicture3=new LBitmap(PictureButtonList[44]);
        var lockpicture4=new LBitmap(PictureButtonList[44]);
        SetBitmap(lockpicture3,0,0,1,1);
        SetBitmap(lockpicture4,-3.5,-2.5,1.1,1.1);
        DoorButton2=new LButton(lockpicture3,lockpicture4,lockpicture4);
        SetButton(DoorButton2,370,420);
	    backLayer.addChild(DoorButton2);
	    DoorButton2.addEventListener(LMouseEvent.MOUSE_UP,PutGod);
	}
	else if(PlayerDoor[2]==1&&PlayerDoorGod[2]>=0){//第2扇门有门神贴
        var lockpicture3=new LBitmap(PictureGodList[PlayerDoorGod[2]]);
        var lockpicture4=new LBitmap(PictureGodList[PlayerDoorGod[2]]);
        SetBitmap(lockpicture3,10.625,6.375,0.3,0.3);
        SetBitmap(lockpicture4,0,0,0.35,0.35);
        DoorButton2=new LButton(lockpicture3,lockpicture4,lockpicture4);
        SetButton(DoorButton2,333,395);
	    backLayer.addChild(DoorButton2);

	    var GodBloodTxt2=new LTextField();
	    SetTextAttributes(GodBloodTxt2,"血量:"+PlayerDoorGodBlood[2]+"%",360,375,20,"楷书","black");
	    GodBloodTxt2.weight="bolder";
	    backLayer.addChild(GodBloodTxt2);//门神完整度

	    var GodrepairBitmap1=new LBitmap(PictureButtonList[27]);
	    var GodrepairBitmap2=new LBitmap(PictureButtonList[28]);
	    DoorrepairButton2=new LButton(GodrepairBitmap1,GodrepairBitmap2,GodrepairBitmap1);
	    SetButton(DoorrepairButton2,340,480);
	    backLayer.addChild(DoorrepairButton2);
	    DoorrepairButton2.addEventListener(LMouseEvent.MOUSE_UP,repairgod); //门神修补

	    var GodgiveupBitmap1=new LBitmap(PictureButtonList[31]);
	    var GodgiveupBitmap2=new LBitmap(PictureButtonList[32]);
	    DoorgiveupButton2=new LButton(GodgiveupBitmap1,GodgiveupBitmap2,GodgiveupBitmap1);
	    SetButton(DoorgiveupButton2,430,480);
	    backLayer.addChild(DoorgiveupButton2);
	    DoorgiveupButton2.addEventListener(LMouseEvent.MOUSE_UP,giveupgod);//撕下门神
	}

	if(PlayerDoor[3]==1&&PlayerDoorGod[3]==-1){//第3扇门已解锁,判断第3扇门是否有门神贴
        var lockpicture9=new LBitmap(PictureButtonList[44]);
        var lockpicture10=new LBitmap(PictureButtonList[44]);
        SetBitmap(lockpicture9,0,0,1,1);
        SetBitmap(lockpicture10,-3.5,-2.5,1.1,1.1);
        DoorButton3=new LButton(lockpicture9,lockpicture10,lockpicture10);
        SetButton(DoorButton3,610,420);
	    backLayer.addChild(DoorButton3);
	    DoorButton3.addEventListener(LMouseEvent.MOUSE_UP,PutGod);
	}
	else if(PlayerDoor[3]==1&&PlayerDoorGod[3]>=0){//第3扇门有门神贴
        var lockpicture9=new LBitmap(PictureGodList[PlayerDoorGod[3]]);
        var lockpicture10=new LBitmap(PictureGodList[PlayerDoorGod[3]]);
        SetBitmap(lockpicture9,10.625,6.375,0.3,0.3);
        SetBitmap(lockpicture10,0,0,0.35,0.35);
        DoorButton3=new LButton(lockpicture9,lockpicture10,lockpicture10);
        SetButton(DoorButton3,573,398);
	    backLayer.addChild(DoorButton3);

	    var GodBloodTxt3=new LTextField();
	    SetTextAttributes(GodBloodTxt3,"血量:"+PlayerDoorGodBlood[3]+"%",595,375,20,"楷书","black");
	    GodBloodTxt3.weight="bolder";
	    backLayer.addChild(GodBloodTxt3);//门神完整度

	    var GodrepairBitmap1=new LBitmap(PictureButtonList[27]);
	    var GodrepairBitmap2=new LBitmap(PictureButtonList[28]);
	    DoorrepairButton3=new LButton(GodrepairBitmap1,GodrepairBitmap2,GodrepairBitmap1);
	    SetButton(DoorrepairButton3,580,480);
	    backLayer.addChild(DoorrepairButton3);
	    DoorrepairButton3.addEventListener(LMouseEvent.MOUSE_UP,repairgod); //门神修补

	    var GodgiveupBitmap1=new LBitmap(PictureButtonList[31]);
	    var GodgiveupBitmap2=new LBitmap(PictureButtonList[32]);
	    DoorgiveupButton3=new LButton(GodgiveupBitmap1,GodgiveupBitmap2,GodgiveupBitmap1);
	    SetButton(DoorgiveupButton3,670,480);
	    backLayer.addChild(DoorgiveupButton3);
	    DoorgiveupButton3.addEventListener(LMouseEvent.MOUSE_UP,giveupgod);//撕下门神
	}


	if(PlayerDoor[4]==0){//判断第4扇门是否解锁
	    var lockpicture5=new LBitmap(PictureButtonList[45]);
	    var lockpicture6=new LBitmap(PictureButtonList[45]);
	    SetBitmap(lockpicture5,0,0,0.7,0.7);
	    SetBitmap(lockpicture6,-7.5,-7.5,0.8,0.8);
	    DoorButton4=new LButton(lockpicture5,lockpicture6,lockpicture6);
	    SetButton(DoorButton4,850,400);
	    backLayer.addChild(DoorButton4);
	    DoorButton4.addEventListener(LMouseEvent.MOUSE_UP,StartDoor);
	}
	else if(PlayerDoor[4]==1&&PlayerDoorGod[4]==-1){//判断第4扇门是否有门神贴
        var lockpicture5=new LBitmap(PictureButtonList[44]);
        var lockpicture6=new LBitmap(PictureButtonList[44]);
        SetBitmap(lockpicture5,0,0,1,1);
        SetBitmap(lockpicture6,-3.5,-2.5,1.1,1.1);
        DoorButton4=new LButton(lockpicture5,lockpicture6,lockpicture6);
        SetButton(DoorButton4,870,420);
	    backLayer.addChild(DoorButton4);
	    DoorButton4.addEventListener(LMouseEvent.MOUSE_UP,PutGod);
	}
	else if(PlayerDoor[4]==1&&PlayerDoorGod[4]>=0){//第4扇门有门神贴
        var lockpicture5=new LBitmap(PictureGodList[PlayerDoorGod[4]]);
        var lockpicture6=new LBitmap(PictureGodList[PlayerDoorGod[4]]);
        SetBitmap(lockpicture5,10.625,6.375,0.3,0.3);
        SetBitmap(lockpicture6,0,0,0.35,0.35);
        DoorButton4=new LButton(lockpicture5,lockpicture6,lockpicture6);
        SetButton(DoorButton4,823,398);
	    backLayer.addChild(DoorButton4);

	    var GodBloodTxt4=new LTextField();
	    SetTextAttributes(GodBloodTxt4,"血量:"+PlayerDoorGodBlood[4]+"%",850,375,20,"楷书","black");
	    GodBloodTxt4.weight="bolder";
	    backLayer.addChild(GodBloodTxt4);//门神完整度

	    var GodrepairBitmap1=new LBitmap(PictureButtonList[27]);
	    var GodrepairBitmap2=new LBitmap(PictureButtonList[28]);
	    DoorrepairButton4=new LButton(GodrepairBitmap1,GodrepairBitmap2,GodrepairBitmap1);
	    SetButton(DoorrepairButton4,830,480);
	    backLayer.addChild(DoorrepairButton4);
	    DoorrepairButton4.addEventListener(LMouseEvent.MOUSE_UP,repairgod); //门神修补

	    var GodgiveupBitmap1=new LBitmap(PictureButtonList[31]);
	    var GodgiveupBitmap2=new LBitmap(PictureButtonList[32]);
	    DoorgiveupButton4=new LButton(GodgiveupBitmap1,GodgiveupBitmap2,GodgiveupBitmap1);
	    SetButton(DoorgiveupButton4,920,480);
	    backLayer.addChild(DoorgiveupButton4);
	    DoorgiveupButton4.addEventListener(LMouseEvent.MOUSE_UP,giveupgod);//撕下门神
	}

	if(PlayerDoor[5]==0){//判断第5扇门是否解锁
	    var lockpicture7=new LBitmap(PictureButtonList[45]);
	    var lockpicture8=new LBitmap(PictureButtonList[45]);
	    SetBitmap(lockpicture7,0,0,0.7,0.7);
	    SetBitmap(lockpicture8,-7.5,-7.5,0.8,0.8);
	    DoorButton5=new LButton(lockpicture7,lockpicture8,lockpicture8);
	    SetButton(DoorButton5,1090,400);
	    backLayer.addChild(DoorButton5);
	    DoorButton5.addEventListener(LMouseEvent.MOUSE_UP,StartDoor);
	}
	else if(PlayerDoor[5]==1&&PlayerDoorGod[5]==-1){//判断第5扇门是否有门神贴
        var lockpicture7=new LBitmap(PictureButtonList[44]);
        var lockpicture8=new LBitmap(PictureButtonList[44]);
        SetBitmap(lockpicture7,0,0,1,1);
        SetBitmap(lockpicture8,-3.5,-2.5,1.1,1.1);
        DoorButton5=new LButton(lockpicture7,lockpicture8,lockpicture8);
        SetButton(DoorButton5,1110,420);
	    backLayer.addChild(DoorButton5);
	    DoorButton5.addEventListener(LMouseEvent.MOUSE_UP,PutGod);
	}
	else if(PlayerDoor[5]==1&&PlayerDoorGod[5]>=0){//第5扇门有门神贴
        var lockpicture7=new LBitmap(PictureGodList[PlayerDoorGod[5]]);
        var lockpicture8=new LBitmap(PictureGodList[PlayerDoorGod[5]]);
        SetBitmap(lockpicture7,10.625,6.375,0.3,0.3);
        SetBitmap(lockpicture8,0,0,0.35,0.35);
        DoorButton5=new LButton(lockpicture7,lockpicture8,lockpicture8);
        SetButton(DoorButton5,1067,398);
	    backLayer.addChild(DoorButton5);

	    var GodBloodTxt5=new LTextField();
	    SetTextAttributes(GodBloodTxt5,"血量:"+PlayerDoorGodBlood[5]+"%",1090,375,20,"楷书","black");
	    GodBloodTxt5.weight="bolder";
	    backLayer.addChild(GodBloodTxt5);//门神完整度

	    var GodrepairBitmap1=new LBitmap(PictureButtonList[27]);
	    var GodrepairBitmap2=new LBitmap(PictureButtonList[28]);
	    DoorrepairButton5=new LButton(GodrepairBitmap1,GodrepairBitmap2,GodrepairBitmap1);
	    SetButton(DoorrepairButton5,1070,480);
	    backLayer.addChild(DoorrepairButton5);
	    DoorrepairButton5.addEventListener(LMouseEvent.MOUSE_UP,repairgod); //门神修补

	    var GodgiveupBitmap1=new LBitmap(PictureButtonList[31]);
	    var GodgiveupBitmap2=new LBitmap(PictureButtonList[32]);
	    DoorgiveupButton5=new LButton(GodgiveupBitmap1,GodgiveupBitmap2,GodgiveupBitmap1);
	    SetButton(DoorgiveupButton5,1160,480);
	    backLayer.addChild(DoorgiveupButton5);
	    DoorgiveupButton5.addEventListener(LMouseEvent.MOUSE_UP,giveupgod);//撕下门神
	}
}

function StartDoor(event){
	if(event.currentTarget==DoorButton1)StartDoorn=1;
	else if(event.currentTarget==DoorButton2)StartDoorn=2;
	else if(event.currentTarget==DoorButton4)StartDoorn=4;
	else if(event.currentTarget=DoorButton5)StartDoorn=5;

	removeAllEventinGameMainForm();

    onlayer=new LBitmap(PictureSceneList[11]);
    SetBitmap(onlayer,70,35,0.98,0.9);
    backLayer.addChild(onlayer);

    if(PlayerLevel>=DoorOpenRank[StartDoorn] && PlayerCoin>=DoorOpenCoin[StartDoorn]){
    	var ConfirmBitmap=new LBitmap(PictureSceneList[5]);
    	SetBitmap(ConfirmBitmap,400,100,1,0.8);
    	backLayer.addChild(ConfirmBitmap);
        
        var ConfirmTitle=new LTextField();
        SetTextAttributes(ConfirmTitle,"提醒",600,110,40,"楷书","black");
        ConfirmTitle.weight="bolder";
        backLayer.addChild(ConfirmTitle);

        var Confirmtxt=new LTextField();
        SetTextAttributes(Confirmtxt,"你确定要花"+DoorOpenCoin[StartDoorn]+"文解封这道门吗？",450,200,30,"宋体","white");
        backLayer.addChild(Confirmtxt);

    	var ConfirmCancelBitmap1=new LBitmap(PictureButtonList[39]);
    	var ConfirmCancelBitmap2=new LBitmap(PictureButtonList[39]);
    	SetBitmap(ConfirmCancelBitmap1,20,4,0.8,0.8);
    	ConfirmCancelButton=new LButton(ConfirmCancelBitmap1,ConfirmCancelBitmap2,ConfirmCancelBitmap2);
    	SetButton(ConfirmCancelButton,440,400);
    	backLayer.addChild(ConfirmCancelButton);
    	ConfirmCancelButton.addEventListener(LMouseEvent.MOUSE_UP,CancelConfirm);//取消解锁

        var ConfirmYesBitmap1=new LBitmap(PictureButtonList[40]);
        var ConfirmYesBitmap2=new LBitmap(PictureButtonList[40]);
        SetBitmap(ConfirmYesBitmap1,20,4,0.8,0.8);
        ConfirmYesButton=new LButton(ConfirmYesBitmap1,ConfirmYesBitmap2,ConfirmYesBitmap2);
        SetButton(ConfirmYesButton,670,400);
        backLayer.addChild(ConfirmYesButton);
        ConfirmYesButton.addEventListener(LMouseEvent.MOUSE_UP,YesConfirm);//确认解锁
    }

    else{
    	var ConfirmBitmap=new LBitmap(PictureSceneList[5]);
    	SetBitmap(ConfirmBitmap,400,100,1,0.8);
    	backLayer.addChild(ConfirmBitmap);
        
        var ConfirmTitle=new LTextField();
        SetTextAttributes(ConfirmTitle,"警示!",600,110,40,"楷书","black");
        ConfirmTitle.weight="bolder";
        backLayer.addChild(ConfirmTitle);

        var Confirmtxt=new LTextField();

        if(PlayerLevel<DoorOpenRank[StartDoorn] && PlayerCoin>=DoorOpenCoin[StartDoorn])
        	SetTextAttributes(Confirmtxt,"等级不够！"+DoorOpenRank[StartDoorn]+"级解封！再历练几天吧！",430,200,25,"宋体","white");

        else if(PlayerLevel>=DoorOpenRank[StartDoorn] && PlayerCoin<DoorOpenCoin[StartDoorn])
        	SetTextAttributes(Confirmtxt,"银子不够！需要"+DoorOpenCoin[StartDoorn]+"文",500,200,30,"宋体","white");

        else 
        	SetTextAttributes(Confirmtxt,"等级和银子都不够(╥╯^╰╥)！"+DoorOpenRank[StartDoorn]+"级解封！"+DoorOpenCoin[StartDoorn]+"文!",425,200,20,"宋体","white");

        backLayer.addChild(Confirmtxt);

        var ConfirmYesBitmap1=new LBitmap(PictureButtonList[40]);
        var ConfirmYesBitmap2=new LBitmap(PictureButtonList[40]);
        SetBitmap(ConfirmYesBitmap1,20,4,0.8,0.8);
        ConfirmYesButton=new LButton(ConfirmYesBitmap1,ConfirmYesBitmap2,ConfirmYesBitmap2);
        SetButton(ConfirmYesButton,550,400);
        backLayer.addChild(ConfirmYesButton);
        ConfirmYesButton.addEventListener(LMouseEvent.MOUSE_UP,TurnOutConfirm);//退出
    }
}

function YesConfirm(){//确认解锁
    ConfirmCancelButton.removeEventListener(LMouseEvent.MOUSE_UP,CancelConfirm);
    ConfirmYesButton.removeEventListener(LMouseEvent.MOUSE_UP,YesConfirm);
     
    PlayerCoin-=DoorOpenCoin[StartDoorn];
    PlayerDoor[StartDoorn]=1;
        
    var ConfirmBitmap=new LBitmap(PictureSceneList[5]);
    SetBitmap(ConfirmBitmap,400,100,1,0.8);
    backLayer.addChild(ConfirmBitmap);
        
    var ConfirmTitle=new LTextField();
    SetTextAttributes(ConfirmTitle,"解锁成功！",560,110,40,"楷书","black");
    ConfirmTitle.weight="bolder";
    backLayer.addChild(ConfirmTitle);
    ActionGainExp(20);

    var Confirmtxt=new LTextField();
    SetTextAttributes(Confirmtxt,"(*￣︶￣)",580,200,30,"宋体","white");
    backLayer.addChild(Confirmtxt);

    var ConfirmCancelBitmap1=new LBitmap(PictureButtonList[40]);
    var ConfirmCancelBitmap2=new LBitmap(PictureButtonList[40]);
    SetBitmap(ConfirmCancelBitmap1,20,4,0.8,0.8);
    ConfirmYesButton=new LButton(ConfirmCancelBitmap1,ConfirmCancelBitmap2,ConfirmCancelBitmap2);
    SetButton(ConfirmYesButton,550,400);
    backLayer.addChild(ConfirmYesButton);
    ConfirmYesButton.addEventListener(LMouseEvent.MOUSE_UP,CancelConfirm);//确认
}

function CancelConfirm(){//取消解锁
	ConfirmCancelButton.removeEventListener(LMouseEvent.MOUSE_UP,CancelConfirm);
	ConfirmYesButton.removeEventListener(LMouseEvent.MOUSE_UP,YesConfirm);
	ConfirmYesButton.removeEventListener(LMouseEvent.MOUSE_UP,CancelConfirm);
    backLayer.removeAllChild();

    GameMainForm();
}

function TurnOutConfirm(){//退出
    ConfirmYesButton.removeEventListener(LMouseEvent.MOUSE_UP,TurnOutConfirm);
    backLayer.removeAllChild();

    GameMainForm();
}

function PutGod(event){
	if(event.currentTarget==DoorButton1)PutGodDoorn=1;
	else if(event.currentTarget==DoorButton2)PutGodDoorn=2;
	else if(event.currentTarget==DoorButton3)PutGodDoorn=3;
	else if(event.currentTarget==DoorButton4)PutGodDoorn=4;
	else if(event.currentTarget==DoorButton5)PutGodDoorn=5;

	removeAllEventinGameMainForm();

    backLayer.removeAllChild();
    
    BagsceneBitmap1=new LBitmap(PictureSceneList[6]);
    SetBitmap(BagsceneBitmap1,70,35,0.98,0.9);
    backLayer.addChild(BagsceneBitmap1);//添加背包背景
 
    PlayerCointxt = new LTextField();
    SetTextAttributes(PlayerCointxt,PlayerCoin+"文",870,108,23,"楷体","black");
    backLayer.addChild(PlayerCointxt);

    var ChooseGodTxt=new LTextField();
    SetTextAttributes(ChooseGodTxt,"请选择要贴的门神",400,50,50,"仿宋","black");
    ChooseGodTxt.weight="bolder";
    backLayer.addChild(ChooseGodTxt);
    
    var OrderofBag=0;

    if(PlayerBag[0]){
        OrderofBag+=1;
        var GodinBag1 = new LBitmap(PictureGodList[0]);
        var GodinBag2 = new LBitmap(PictureGodList[0]);
        SetBitmap(GodinBag1,0,0, 0.35, 0.35);
        SetBitmap(GodinBag2,-10.625,-6.375,0.4,0.4);
        GodinBagButton1=new LButton(GodinBag1,GodinBag2,GodinBag1);
        SetButton(GodinBagButton1,BagX[OrderofBag], BagY[OrderofBag]);
        backLayer.addChild(GodinBagButton1);
        GodinBagButton1.addEventListener(LMouseEvent.MOUSE_UP,PutGodConfirm);
        var NumberOfBaggod1 = new LTextField();
        SetTextAttributes(NumberOfBaggod1, PlayerBag[0], BagX[OrderofBag], BagY[OrderofBag],30,"楷体","black");
        NumberOfBaggod1.weight="bolder";
        backLayer.addChild(NumberOfBaggod1);
    }//判断第1张

    if(PlayerBag[1]){
        OrderofBag+=1;
        var GodinBag1 = new LBitmap(PictureGodList[1]);
        var GodinBag2 = new LBitmap(PictureGodList[1]);
        SetBitmap(GodinBag1,0,0, 0.35, 0.35);
        SetBitmap(GodinBag2,-10.625,-6.375,0.4,0.4);
        GodinBagButton2=new LButton(GodinBag1,GodinBag2,GodinBag1);
        SetButton(GodinBagButton2,BagX[OrderofBag], BagY[OrderofBag]);
        backLayer.addChild(GodinBagButton2);
        GodinBagButton2.addEventListener(LMouseEvent.MOUSE_UP,PutGodConfirm);
        var NumberOfBaggod2 = new LTextField();
        SetTextAttributes(NumberOfBaggod2, PlayerBag[1], BagX[OrderofBag], BagY[OrderofBag],30,"楷体","black");
        NumberOfBaggod2.weight="bolder";
        backLayer.addChild(NumberOfBaggod2);
    }//判断第2张

    if(PlayerBag[2]){
        OrderofBag+=1;
        var GodinBag1 = new LBitmap(PictureGodList[2]);
        var GodinBag2 = new LBitmap(PictureGodList[2]);
        SetBitmap(GodinBag1,0,0, 0.35, 0.35);
        SetBitmap(GodinBag2,-10.625,-6.375,0.4,0.4);
        GodinBagButton3=new LButton(GodinBag1,GodinBag2,GodinBag1);
        SetButton(GodinBagButton3,BagX[OrderofBag], BagY[OrderofBag]);
        backLayer.addChild(GodinBagButton3);
        GodinBagButton3.addEventListener(LMouseEvent.MOUSE_UP,PutGodConfirm);
        var NumberOfBaggod3 = new LTextField();
        SetTextAttributes(NumberOfBaggod3, PlayerBag[2], BagX[OrderofBag], BagY[OrderofBag],30,"楷体","black");
        NumberOfBaggod3.weight="bolder";
        backLayer.addChild(NumberOfBaggod3);
    }//判断第3张

    if(PlayerBag[3]){
        OrderofBag+=1;
        var GodinBag1 = new LBitmap(PictureGodList[3]);
        var GodinBag2 = new LBitmap(PictureGodList[3]);
        SetBitmap(GodinBag1,0,0, 0.35, 0.35);
        SetBitmap(GodinBag2,-10.625,-6.375,0.4,0.4);
        GodinBagButton4=new LButton(GodinBag1,GodinBag2,GodinBag1);
        SetButton(GodinBagButton4,BagX[OrderofBag], BagY[OrderofBag]);
        backLayer.addChild(GodinBagButton4);
        GodinBagButton4.addEventListener(LMouseEvent.MOUSE_UP,PutGodConfirm);
        var NumberOfBaggod4 = new LTextField();
        SetTextAttributes(NumberOfBaggod4, PlayerBag[3], BagX[OrderofBag], BagY[OrderofBag],30,"楷体","black");
        NumberOfBaggod4.weight="bolder";
        backLayer.addChild(NumberOfBaggod4);
    }//判断第4张

    if(PlayerBag[4]){
        OrderofBag+=1;
        var GodinBag1 = new LBitmap(PictureGodList[4]);
        var GodinBag2 = new LBitmap(PictureGodList[4]);
        SetBitmap(GodinBag1,0,0, 0.35, 0.35);
        SetBitmap(GodinBag2,-10.625,-6.375,0.4,0.4);
        GodinBagButton5=new LButton(GodinBag1,GodinBag2,GodinBag1);
        SetButton(GodinBagButton5,BagX[OrderofBag], BagY[OrderofBag]);
        backLayer.addChild(GodinBagButton5);
        GodinBagButton5.addEventListener(LMouseEvent.MOUSE_UP,PutGodConfirm);
        var NumberOfBaggod5 = new LTextField();
        SetTextAttributes(NumberOfBaggod5, PlayerBag[4], BagX[OrderofBag], BagY[OrderofBag],30,"楷体","black");
        NumberOfBaggod5.weight="bolder";
        backLayer.addChild(NumberOfBaggod5);
    }//判断第5张

    if(PlayerBag[5]){
        OrderofBag+=1;
        var GodinBag1 = new LBitmap(PictureGodList[5]);
        var GodinBag2 = new LBitmap(PictureGodList[5]);
        SetBitmap(GodinBag1,0,0, 0.35, 0.35);
        SetBitmap(GodinBag2,-10.625,-6.375,0.4,0.4);
        GodinBagButton6=new LButton(GodinBag1,GodinBag2,GodinBag1);
        SetButton(GodinBagButton6,BagX[OrderofBag], BagY[OrderofBag]);
        backLayer.addChild(GodinBagButton6);
        GodinBagButton6.addEventListener(LMouseEvent.MOUSE_UP,PutGodConfirm);
        var NumberOfBaggod6 = new LTextField();
        SetTextAttributes(NumberOfBaggod6, PlayerBag[5], BagX[OrderofBag], BagY[OrderofBag],30,"楷体","black");
        NumberOfBaggod6.weight="bolder";
        backLayer.addChild(NumberOfBaggod6);
    }//判断第6张

    if(PlayerBag[6]){
        OrderofBag+=1;
        var GodinBag1 = new LBitmap(PictureGodList[6]);
        var GodinBag2 = new LBitmap(PictureGodList[6]);
        SetBitmap(GodinBag1,0,0, 0.35, 0.35);
        SetBitmap(GodinBag2,-10.625,-6.375,0.4,0.4);
        GodinBagButton7=new LButton(GodinBag1,GodinBag2,GodinBag1);
        SetButton(GodinBagButton7,BagX[OrderofBag], BagY[OrderofBag]);
        backLayer.addChild(GodinBagButton7);
        GodinBagButton7.addEventListener(LMouseEvent.MOUSE_UP,PutGodConfirm);
        var NumberOfBaggod7 = new LTextField();
        SetTextAttributes(NumberOfBaggod7, PlayerBag[6], BagX[OrderofBag], BagY[OrderofBag],30,"楷体","black");
        NumberOfBaggod7.weight="bolder";
        backLayer.addChild(NumberOfBaggod7);
    }//判断第7张

    if(PlayerBag[7]){
        OrderofBag+=1;
        var GodinBag1 = new LBitmap(PictureGodList[7]);
        var GodinBag2 = new LBitmap(PictureGodList[7]);
        SetBitmap(GodinBag1,0,0, 0.35, 0.35);
        SetBitmap(GodinBag2,-10.625,-6.375,0.4,0.4);
        GodinBagButton8=new LButton(GodinBag1,GodinBag2,GodinBag1);
        SetButton(GodinBagButton8,BagX[OrderofBag], BagY[OrderofBag]);
        backLayer.addChild(GodinBagButton8);
        GodinBagButton8.addEventListener(LMouseEvent.MOUSE_UP,PutGodConfirm);
        var NumberOfBaggod8 = new LTextField();
        SetTextAttributes(NumberOfBaggod8, PlayerBag[7], BagX[OrderofBag], BagY[OrderofBag],30,"楷体","black");
        NumberOfBaggod8.weight="bolder";
        backLayer.addChild(NumberOfBaggod8);
    }//判断第8张

    if(PlayerBag[8]){
        OrderofBag+=1;
        var GodinBag1 = new LBitmap(PictureGodList[8]);
        var GodinBag2 = new LBitmap(PictureGodList[8]);
        SetBitmap(GodinBag1,0,0, 0.35, 0.35);
        SetBitmap(GodinBag2,-10.625,-6.375,0.4,0.4);
        GodinBagButton9=new LButton(GodinBag1,GodinBag2,GodinBag1);
        SetButton(GodinBagButton9,BagX[OrderofBag], BagY[OrderofBag]);
        backLayer.addChild(GodinBagButton9);
        GodinBagButton9.addEventListener(LMouseEvent.MOUSE_UP,PutGodConfirm);
        var NumberOfBaggod9 = new LTextField();
        SetTextAttributes(NumberOfBaggod9, PlayerBag[8], BagX[OrderofBag], BagY[OrderofBag],30,"楷体","black");
        NumberOfBaggod9.weight="bolder";
        backLayer.addChild(NumberOfBaggod9);
    }//判断第9张

    var FromBagreturntohomeBitmap1=new LBitmap(PictureButtonList[34]);
    var FromBagreturntohomeBitmap2=new LBitmap(PictureButtonList[34]);
    var FromBagreturntohomeBitmap3=new LBitmap(PictureButtonList[34]);
    SetBitmap(FromBagreturntohomeBitmap2,-8,-8,1.2,1.2)
    SetBitmap(FromBagreturntohomeBitmap3,4,4,0.9,0.9);
    FromBagreturntohomeButton=new LButton(FromBagreturntohomeBitmap1,FromBagreturntohomeBitmap2,FromBagreturntohomeBitmap3);
    backLayer.addChild(FromBagreturntohomeButton);
    SetButton(FromBagreturntohomeButton,1160,70);
    FromBagreturntohomeButton.addEventListener(LMouseEvent.MOUSE_UP,PreparefromGodBagtoGameMainForm);
}
function PreparefromGodBagtoGameMainForm(){
    FromBagreturntohomeButton.removeEventListener(LMouseEvent.MOUSE_UP,PreparefromGodBagtoGameMainForm);
    if(PlayerBag[0])GodinBagButton1.removeEventListener(LMouseEvent.MOUSE_UP,PutGodConfirm);
    if(PlayerBag[1])GodinBagButton2.removeEventListener(LMouseEvent.MOUSE_UP,PutGodConfirm);
    if(PlayerBag[2])GodinBagButton3.removeEventListener(LMouseEvent.MOUSE_UP,PutGodConfirm);
    if(PlayerBag[3])GodinBagButton4.removeEventListener(LMouseEvent.MOUSE_UP,PutGodConfirm);
    if(PlayerBag[4])GodinBagButton5.removeEventListener(LMouseEvent.MOUSE_UP,PutGodConfirm);
    if(PlayerBag[5])GodinBagButton6.removeEventListener(LMouseEvent.MOUSE_UP,PutGodConfirm);
    if(PlayerBag[6])GodinBagButton7.removeEventListener(LMouseEvent.MOUSE_UP,PutGodConfirm);
    if(PlayerBag[7])GodinBagButton8.removeEventListener(LMouseEvent.MOUSE_UP,PutGodConfirm);
    if(PlayerBag[8])GodinBagButton9.removeEventListener(LMouseEvent.MOUSE_UP,PutGodConfirm);
    GameMainForm();
}

function PutGodConfirm(event){//贴门的背包系统
	if(event.currentTarget==GodinBagButton1)PutGodDoorm=1;
	else if(event.currentTarget==GodinBagButton2)PutGodDoorm=2;
	else if(event.currentTarget==GodinBagButton3)PutGodDoorm=3;
	else if(event.currentTarget==GodinBagButton4)PutGodDoorm=4;
	else if(event.currentTarget==GodinBagButton5)PutGodDoorm=5;
	else if(event.currentTarget==GodinBagButton6)PutGodDoorm=6;
	else if(event.currentTarget==GodinBagButton7)PutGodDoorm=7;
	else if(event.currentTarget==GodinBagButton8)PutGodDoorm=8;
	else if(event.currentTarget==GodinBagButton9)PutGodDoorm=9;
    
	FromBagreturntohomeButton.removeEventListener(LMouseEvent.MOUSE_UP,PreparefromGodBagtoGameMainForm);
    if(PlayerBag[0])GodinBagButton1.removeEventListener(LMouseEvent.MOUSE_UP,PutGodConfirm);
    if(PlayerBag[1])GodinBagButton2.removeEventListener(LMouseEvent.MOUSE_UP,PutGodConfirm);
    if(PlayerBag[2])GodinBagButton3.removeEventListener(LMouseEvent.MOUSE_UP,PutGodConfirm);
    if(PlayerBag[3])GodinBagButton4.removeEventListener(LMouseEvent.MOUSE_UP,PutGodConfirm);
    if(PlayerBag[4])GodinBagButton5.removeEventListener(LMouseEvent.MOUSE_UP,PutGodConfirm);
    if(PlayerBag[5])GodinBagButton6.removeEventListener(LMouseEvent.MOUSE_UP,PutGodConfirm);
    if(PlayerBag[6])GodinBagButton7.removeEventListener(LMouseEvent.MOUSE_UP,PutGodConfirm);
    if(PlayerBag[7])GodinBagButton8.removeEventListener(LMouseEvent.MOUSE_UP,PutGodConfirm);
    if(PlayerBag[8])GodinBagButton9.removeEventListener(LMouseEvent.MOUSE_UP,PutGodConfirm);
    
    onlayer=new LBitmap(PictureSceneList[11]);
    SetBitmap(onlayer,70,35,0.98,0.9);
    backLayer.addChild(onlayer);

    var ConfirmBitmap=new LBitmap(PictureSceneList[5]);
    SetBitmap(ConfirmBitmap,400,100,1,0.8);
    backLayer.addChild(ConfirmBitmap);
        
    var ConfirmTitle=new LTextField();
    SetTextAttributes(ConfirmTitle,"提醒",600,110,40,"楷书","black");
    ConfirmTitle.weight="bolder";
    backLayer.addChild(ConfirmTitle);

    var Confirmtxt=new LTextField();
    SetTextAttributes(Confirmtxt,"你确定要把"+Godname[PutGodDoorm-1]+"贴在第"+PutGodDoorn+"道门上吗？",450,200,23,"宋体","white");
    backLayer.addChild(Confirmtxt);

    var ConfirmCancelBitmap1=new LBitmap(PictureButtonList[39]);
    var ConfirmCancelBitmap2=new LBitmap(PictureButtonList[39]);
    SetBitmap(ConfirmCancelBitmap1,20,4,0.8,0.8);
    ConfirmCancelButton=new LButton(ConfirmCancelBitmap1,ConfirmCancelBitmap2,ConfirmCancelBitmap2);
    SetButton(ConfirmCancelButton,440,400);
    backLayer.addChild(ConfirmCancelButton);
    ConfirmCancelButton.addEventListener(LMouseEvent.MOUSE_UP,CancelPutConfirm);//取消

    var ConfirmYesBitmap1=new LBitmap(PictureButtonList[40]);
    var ConfirmYesBitmap2=new LBitmap(PictureButtonList[40]);
    SetBitmap(ConfirmYesBitmap1,20,4,0.8,0.8);
    ConfirmYesButton=new LButton(ConfirmYesBitmap1,ConfirmYesBitmap2,ConfirmYesBitmap2);
    SetButton(ConfirmYesButton,670,400);
    backLayer.addChild(ConfirmYesButton);
    ConfirmYesButton.addEventListener(LMouseEvent.MOUSE_UP,YesPutConfirm);//确认
}

function CancelPutConfirm(){
	ConfirmCancelButton.removeEventListener(LMouseEvent.MOUSE_UP,CancelPutConfirm);
	ConfirmYesButton.removeEventListener(LMouseEvent.MOUSE_UP,YesPutConfirm);
	ConfirmYesButton.removeEventListener(LMouseEvent.MOUSE_UP,CancelPutConfirm);
	backLayer.removeAllChild();
    
    GameMainForm();
}

function YesPutConfirm(){
    ConfirmCancelButton.removeEventListener(LMouseEvent.MOUSE_UP,CancelPutConfirm);
	ConfirmYesButton.removeEventListener(LMouseEvent.MOUSE_UP,YesPutConfirm);
     
    PlayerDoorGod[PutGodDoorn]=PutGodDoorm-1;
    PlayerBag[PutGodDoorm-1]-=1;
        
    var ConfirmBitmap=new LBitmap(PictureSceneList[5]);
    SetBitmap(ConfirmBitmap,400,100,1,0.8);
    backLayer.addChild(ConfirmBitmap);
        
    var ConfirmTitle=new LTextField();
    SetTextAttributes(ConfirmTitle,"门神贴好了！",550,110,40,"楷书","black");
    ConfirmTitle.weight="bolder";
    backLayer.addChild(ConfirmTitle);

    var Confirmtxt=new LTextField();
    SetTextAttributes(Confirmtxt,"︿(￣︶￣)︿",570,200,30,"宋体","white");
    backLayer.addChild(Confirmtxt);

    var ConfirmCancelBitmap1=new LBitmap(PictureButtonList[40]);
    var ConfirmCancelBitmap2=new LBitmap(PictureButtonList[40]);
    SetBitmap(ConfirmCancelBitmap1,20,4,0.8,0.8);
    ConfirmYesButton=new LButton(ConfirmCancelBitmap1,ConfirmCancelBitmap2,ConfirmCancelBitmap2);
    SetButton(ConfirmYesButton,550,400);
    backLayer.addChild(ConfirmYesButton);
    ConfirmYesButton.addEventListener(LMouseEvent.MOUSE_UP,CancelPutConfirm);//确认
}


function repairgod(event){//修补门神
    if(event.currentTarget==DoorrepairButton1)RepairGodDoorn=1;
    else if(event.currentTarget==DoorrepairButton2)RepairGodDoorn=2;
    else if(event.currentTarget==DoorrepairButton3)RepairGodDoorn=3;
    else if(event.currentTarget==DoorrepairButton4)RepairGodDoorn=4;
    else if(event.currentTarget==DoorrepairButton5)RepairGodDoorn=5;

    repaircoin=(100-PlayerDoorGodBlood[RepairGodDoorn])/100*GodPrice[PlayerDoorGod[RepairGodDoorn]]/3*(SystemDaytime/10+1);
    repaircoin = Math.round(repaircoin);

    removeAllEventinGameMainForm();

    onlayer=new LBitmap(PictureSceneList[11]);
    SetBitmap(onlayer,70,35,0.98,0.9);
    backLayer.addChild(onlayer);

    var ConfirmBitmap=new LBitmap(PictureSceneList[5]);
    SetBitmap(ConfirmBitmap,400,100,1,0.8);
    backLayer.addChild(ConfirmBitmap);
    
    if(repaircoin==0){//不需要修补
        
        var ConfirmTitle=new LTextField();
        SetTextAttributes(ConfirmTitle,"提醒",600,110,40,"楷书","black");
        ConfirmTitle.weight="bolder";
        backLayer.addChild(ConfirmTitle);

        var Confirmtxt=new LTextField();
        SetTextAttributes(Confirmtxt,"门神现在正处于满血！",500,200,30,"宋体","white");
        backLayer.addChild(Confirmtxt);

        var ConfirmYesBitmap1=new LBitmap(PictureButtonList[40]);
        var ConfirmYesBitmap2=new LBitmap(PictureButtonList[40]);
        SetBitmap(ConfirmYesBitmap1,20,4,0.8,0.8);
        ConfirmYesButton=new LButton(ConfirmYesBitmap1,ConfirmYesBitmap2,ConfirmYesBitmap2);
        SetButton(ConfirmYesButton,550,400);
        backLayer.addChild(ConfirmYesButton);
        ConfirmYesButton.addEventListener(LMouseEvent.MOUSE_UP,CancelrepairConfirm);//确认
    }
    else if(PlayerCoin<repaircoin&&PlayerCurrentVitality < 15){//增加弹出框
        
        var ConfirmTitle=new LTextField();
        SetTextAttributes(ConfirmTitle,"警告！",600,110,40,"楷书","red");
        ConfirmTitle.weight="bolder";
        backLayer.addChild(ConfirmTitle);

        var Confirmtxt=new LTextField();
        SetTextAttributes(Confirmtxt,"银子和体力都不够啦！",470,200,30,"宋体","white");
        backLayer.addChild(Confirmtxt);

        var ConfirmYesBitmap1=new LBitmap(PictureButtonList[40]);
        var ConfirmYesBitmap2=new LBitmap(PictureButtonList[40]);
        SetBitmap(ConfirmYesBitmap1,20,4,0.8,0.8);
        ConfirmYesButton=new LButton(ConfirmYesBitmap1,ConfirmYesBitmap2,ConfirmYesBitmap2);
        SetButton(ConfirmYesButton,550,400);
        backLayer.addChild(ConfirmYesButton);
        ConfirmYesButton.addEventListener(LMouseEvent.MOUSE_UP,CancelrepairConfirm);//确认
    }
    else if(PlayerCoin<repaircoin&&PlayerCurrentVitality >= 15){//增加弹出框
        
        var ConfirmTitle=new LTextField();
        SetTextAttributes(ConfirmTitle,"警告！",600,110,40,"楷书","red");
        ConfirmTitle.weight="bolder";
        backLayer.addChild(ConfirmTitle);

        var Confirmtxt=new LTextField();
        SetTextAttributes(Confirmtxt,"银子不够修补门神啦！",500,200,30,"宋体","white");
        backLayer.addChild(Confirmtxt);

        var ConfirmYesBitmap1=new LBitmap(PictureButtonList[40]);
        var ConfirmYesBitmap2=new LBitmap(PictureButtonList[40]);
        SetBitmap(ConfirmYesBitmap1,20,4,0.8,0.8);
        ConfirmYesButton=new LButton(ConfirmYesBitmap1,ConfirmYesBitmap2,ConfirmYesBitmap2);
        SetButton(ConfirmYesButton,550,400);
        backLayer.addChild(ConfirmYesButton);
        ConfirmYesButton.addEventListener(LMouseEvent.MOUSE_UP,CancelrepairConfirm);//确认
    }
    else if(PlayerCoin>=repaircoin&&PlayerCurrentVitality < 15){//增加弹出框
        
        var ConfirmTitle=new LTextField();
        SetTextAttributes(ConfirmTitle,"警告！",600,110,40,"楷书","red");
        ConfirmTitle.weight="bolder";
        backLayer.addChild(ConfirmTitle);

        var Confirmtxt=new LTextField();
        SetTextAttributes(Confirmtxt,"体力不够修补门神啦！",500,200,30,"宋体","white");
        backLayer.addChild(Confirmtxt);

        var ConfirmYesBitmap1=new LBitmap(PictureButtonList[40]);
        var ConfirmYesBitmap2=new LBitmap(PictureButtonList[40]);
        SetBitmap(ConfirmYesBitmap1,20,4,0.8,0.8);
        ConfirmYesButton=new LButton(ConfirmYesBitmap1,ConfirmYesBitmap2,ConfirmYesBitmap2);
        SetButton(ConfirmYesButton,550,400);
        backLayer.addChild(ConfirmYesButton);
        ConfirmYesButton.addEventListener(LMouseEvent.MOUSE_UP,CancelrepairConfirm);//确认
    }
    else if(PlayerCoin>=repaircoin && PlayerCurrentVitality >= 15){
        
        var ConfirmTitle=new LTextField();
        SetTextAttributes(ConfirmTitle,"提醒",600,110,40,"楷书","black");
        ConfirmTitle.weight="bolder";
        backLayer.addChild(ConfirmTitle);

        var Confirmtxt=new LTextField();
        SetTextAttributes(Confirmtxt,"你确定要用"+repaircoin+"文钱来修补门神吗？",450,200,30,"宋体","white");
        backLayer.addChild(Confirmtxt);

    	var ConfirmCancelBitmap1=new LBitmap(PictureButtonList[39]);
    	var ConfirmCancelBitmap2=new LBitmap(PictureButtonList[39]);
    	SetBitmap(ConfirmCancelBitmap1,20,4,0.8,0.8);
    	ConfirmCancelButton=new LButton(ConfirmCancelBitmap1,ConfirmCancelBitmap2,ConfirmCancelBitmap2);
    	SetButton(ConfirmCancelButton,440,400);
    	backLayer.addChild(ConfirmCancelButton);
    	ConfirmCancelButton.addEventListener(LMouseEvent.MOUSE_UP,CancelrepairConfirm);//取消

        var ConfirmYesBitmap1=new LBitmap(PictureButtonList[40]);
        var ConfirmYesBitmap2=new LBitmap(PictureButtonList[40]);
        SetBitmap(ConfirmYesBitmap1,20,4,0.8,0.8);
        ConfirmYesButton=new LButton(ConfirmYesBitmap1,ConfirmYesBitmap2,ConfirmYesBitmap2);
        SetButton(ConfirmYesButton,670,400);
        backLayer.addChild(ConfirmYesButton);
        ConfirmYesButton.addEventListener(LMouseEvent.MOUSE_UP,YesrepairConfirm);//确认
    }
}

function CancelrepairConfirm(){
	ConfirmYesButton.removeEventListener(LMouseEvent.MOUSE_UP,CancelrepairConfirm);
	ConfirmCancelButton.removeEventListener(LMouseEvent.MOUSE_UP,CancelrepairConfirm);
	ConfirmYesButton.removeEventListener(LMouseEvent.MOUSE_UP,YesrepairConfirm);
	backLayer.removeAllChild();

	GameMainForm();
}

function YesrepairConfirm(){
	ConfirmCancelButton.removeEventListener(LMouseEvent.MOUSE_UP,CancelrepairConfirm);
	ConfirmYesButton.removeEventListener(LMouseEvent.MOUSE_UP,YesrepairConfirm);
	backLayer.removeAllChild();

    PlayerCoin-=repaircoin;
    PlayerDoorGodBlood[RepairGodDoorn]=100;
    PlayerCurrentVitality -= 15;

    GameMainForm();
}


function giveupgod(event){
    if(event.currentTarget==DoorgiveupButton1)giveupdoorgod=1;
    else if(event.currentTarget==DoorgiveupButton2)giveupdoorgod=2;
    else if(event.currentTarget==DoorgiveupButton3)giveupdoorgod=3;
    else if(event.currentTarget==DoorgiveupButton4)giveupdoorgod=4;
    else if(event.currentTarget==DoorgiveupButton5)giveupdoorgod=5;

    removeAllEventinGameMainForm();

    onlayer=new LBitmap(PictureSceneList[11]);
    SetBitmap(onlayer,70,35,0.98,0.9);
    backLayer.addChild(onlayer);

    var ConfirmBitmap=new LBitmap(PictureSceneList[5]);
    SetBitmap(ConfirmBitmap,400,100,1,0.8);
    backLayer.addChild(ConfirmBitmap);

    var ConfirmTitle=new LTextField();
    SetTextAttributes(ConfirmTitle,"提醒",600,110,40,"楷书","red");
    ConfirmTitle.weight="bolder";
    backLayer.addChild(ConfirmTitle);

    var Confirmtxt=new LTextField();
    SetTextAttributes(Confirmtxt,"你确定要撕下"+Godname[PlayerDoorGod[giveupdoorgod]]+"吗？",470,200,30,"宋体","white");
    backLayer.addChild(Confirmtxt);

    var ConfirmCancelBitmap1=new LBitmap(PictureButtonList[39]);
    var ConfirmCancelBitmap2=new LBitmap(PictureButtonList[39]);
    SetBitmap(ConfirmCancelBitmap1,20,4,0.8,0.8);
    ConfirmCancelButton=new LButton(ConfirmCancelBitmap1,ConfirmCancelBitmap2,ConfirmCancelBitmap2);
    SetButton(ConfirmCancelButton,440,400);
    backLayer.addChild(ConfirmCancelButton);
    ConfirmCancelButton.addEventListener(LMouseEvent.MOUSE_UP,CancelgiveupConfirm);//取消

    var ConfirmYesBitmap1=new LBitmap(PictureButtonList[40]);
    var ConfirmYesBitmap2=new LBitmap(PictureButtonList[40]);
    SetBitmap(ConfirmYesBitmap1,20,4,0.8,0.8);
    ConfirmYesButton=new LButton(ConfirmYesBitmap1,ConfirmYesBitmap2,ConfirmYesBitmap2);
    SetButton(ConfirmYesButton,670,400);
    backLayer.addChild(ConfirmYesButton);
    ConfirmYesButton.addEventListener(LMouseEvent.MOUSE_UP,YesgiveupConfirm);//确认
}

function CancelgiveupConfirm(event){
    ConfirmCancelButton.removeEventListener(LMouseEvent.MOUSE_UP,CancelgiveupConfirm);
    ConfirmYesButton.removeEventListener(LMouseEvent.MOUSE_UP,YesgiveupConfirm);
    backLayer.removeAllChild();

    GameMainForm();
}

function YesgiveupConfirm(event){
    ConfirmCancelButton.removeEventListener(LMouseEvent.MOUSE_UP,CancelgiveupConfirm);
    ConfirmYesButton.removeEventListener(LMouseEvent.MOUSE_UP,YesgiveupConfirm);
    backLayer.removeAllChild();

    PlayerDoorGod[giveupdoorgod]=-1;
    PlayerDoorGodBlood[giveupdoorgod]=100;
    
    GameMainForm();
}