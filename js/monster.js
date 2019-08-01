var CurrentMonsterIndex = -1;
var CurrentMonsterHP;
var FlagMonsterAtkDouble = 0;
function ShowMonster()
{
    if(CurrentMonsterIndex == -1) return;

    var MonsterButtonBitmap1=new LBitmap(PictureMonsterList[CurrentMonsterIndex]);
    var MonsterButtonBitmap2=new LBitmap(PictureMonsterList[CurrentMonsterIndex+9]);
    var MonsterButtonBitmap3=new LBitmap(PictureMonsterList[CurrentMonsterIndex]);
    SetBitmap(MonsterButtonBitmap1,0,0,0.8,0.8);
    SetBitmap(MonsterButtonBitmap2,0,0,0.8,0.8);
    SetBitmap(MonsterButtonBitmap3,0,0,0.8,0.8);
    var MonsterHarvestButton=new LButton(MonsterButtonBitmap1,MonsterButtonBitmap2,MonsterButtonBitmap3);
    SetButton(MonsterHarvestButton,480,480);
    backLayer.addChild(MonsterHarvestButton);
    MonsterHarvestButton.addEventListener(LMouseEvent.MOUSE_UP, MonsterHarvest);
}

// if there are monsters and there are no gods fighting against them
function AndThenThereWereNone()
{
    for(var i = 1;i <= 5;i++)
        if(PlayerDoor[i] && PlayerDoorGod[i] != -1)
            return false;
    return true;
}

function MonsterShowup()
{
    MonsterGenerateScheme(Math.floor(SystemDaytime / 10));
    CurrentMonsterHP = MonsterHP[CurrentMonsterIndex];
    window.alert(MonsterName[CurrentMonsterIndex] + "来袭！");
    FlagMonsterAtkDouble = MonsterAtkDoubleDetection();
    MonsterAttack();
}

function MonsterGenerateScheme(CurrentPeriod)
{

    var DieCode = Math.floor((Math.random()*1000)+1);
    var PossibleMonsterIndex = 0;
    while(1)
    {
        if(DieCode < PossibilityMonsterScheme[CurrentPeriod][PossibleMonsterIndex])
        {
            CurrentMonsterIndex = PossibleMonsterIndex;
            break;
        }
        DieCode -= PossibilityMonsterScheme[CurrentPeriod][PossibleMonsterIndex];
        PossibleMonsterIndex++;
    }
    if(SystemDaytime == 1)
        CurrentMonsterIndex = 0;
}

function MonsterAtkDoubleDetection()
{
    var DieCode = Math.floor((Math.random()*1000)+1);
    if(DieCode < PossiblityMonsterAttackDouble)
    {
        window.alert("今夜的"+MonsterName[CurrentMonsterIndex]+"尤为凶暴！");
        return true;
    }
    else
        return false;
}

function MonsterAttackSchemeWeakest()
{
    var NewTarget = -1;
    for(var i = 1;i <= 5;i++)
    {
        if(PlayerDoorGod[i] == -1) continue;
        if(NewTarget == -1 || GodBloodList[PlayerDoorGod[i]] * PlayerDoorGodBlood[i]
        <  GodBloodList[PlayerDoorGod[NewTarget]] * PlayerDoorGodBlood[NewTarget])
            NewTarget = i;
    }
    return NewTarget;
}

function MonsterAttackSchemeRandom()
{
    var DieCode = Math.floor((Math.random()*5)+1);
    while(PlayerDoorGod[DieCode] == -1)
        DieCode = Math.floor((Math.random()*5)+1);
    return DieCode;
}

function MonsterAttackSchemeNext(index)
{
    index = (index + 1) % 6;
    while(index == 0 || PlayerDoorGod[index] == -1)
        index = (index + 1) % 6;
    return index;
}

function MonsterAttack()
{
    var BattleRound = 0;
    var CurrentAttackedGodIndex = 1;
    var CurrentDmg;
    while(CurrentMonsterHP > 0)
    {
        if(AndThenThereWereNone())
        {
            ActionGameOver();
            CurrentMonsterIndex = -1;
            return;
        }
        if(CurrentMonsterIndex == 3 || CurrentMonsterIndex == 4) // 夜叉 雪毛
            CurrentAttackedGodIndex = MonsterAttackSchemeWeakest();
        if(CurrentMonsterIndex == 0 || CurrentMonsterIndex == 5) // 绿毛 鬼魄
            CurrentAttackedGodIndex = MonsterAttackSchemeRandom();
        if(CurrentMonsterIndex == 1 || CurrentMonsterIndex == 2) // 黑白无常
            CurrentAttackedGodIndex = MonsterAttackSchemeNext(CurrentAttackedGodIndex);
        CurrentDmg = MonsterAtk[CurrentMonsterIndex];
        if(FlagMonsterAtkDouble) CurrentDmg *= 2;
        if(CurrentMonsterIndex < 6) // 非群攻类
        {
            PlayerDoorGodBlood[CurrentAttackedGodIndex] -= (100 * CurrentDmg / GodBloodList[PlayerDoorGod[CurrentAttackedGodIndex]]);
            PlayerDoorGodBlood[CurrentAttackedGodIndex]  = Math.round(PlayerDoorGodBlood[CurrentAttackedGodIndex]);
        }
        else // 群攻类
        {
            var GodNumber = 0;
            for(var i = 1;i <= 5;i++)
                if(PlayerDoorGod[i] != -1)
                    GodNumber++;
            CurrentDmg = Math.round(CurrentDmg / GodNumber);
            for(var i = 1;i <= 5;i++)
            {
                if(PlayerDoorGod[i] == -1) continue;
                PlayerDoorGodBlood[i] -= (100 * CurrentDmg / GodBloodList[PlayerDoorGod[i]]);
                PlayerDoorGodBlood[i] = Math.round(PlayerDoorGodBlood[i]);
            }
        }
        for(var i = 1;i <= 5;i++)
        {
            DoorGodCheck(i);
            if(PlayerDoorGod[i] != -1)
                CurrentMonsterHP -= GodPowerList[PlayerDoorGod[i]];
        }
        BattleRound++;
    }
    window.alert("经过了" + BattleRound + "回合的斗争！" + MonsterName[CurrentMonsterIndex] + "被打败了！");
}

function DoorGodCheck(index)
{
    if(PlayerDoorGodBlood[index] <= 0)
    {
        window.alert("第"+index + "道门的门神被打败了！");
        PlayerDoorGod[index] = -1;
        PlayerDoorGodBlood[index] = 100;
    }
}

function MonsterHarvest()
{
	removeAllEventinGameMainForm();
    backLayer.removeAllChild();

    window.alert("你收拾了" + MonsterName[CurrentMonsterIndex] + "的尸体！收获经验"+ MonsterExp[CurrentMonsterIndex] +"点！" + "并从中捡到了" + MonsterCoin[CurrentMonsterIndex] + "文！");
    ActionGainExp(MonsterExp[CurrentMonsterIndex]);
    PlayerCoin += MonsterCoin[CurrentMonsterIndex];

    CurrentMonsterIndex = -1;
    GameMainForm();
}