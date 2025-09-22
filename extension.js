import { lib, game, ui, get, ai, _status } from "../../noname.js";
game.import("extension",function(){
	return {name:"八班杀",content:function(config,pack){
},precontent:function(){
    const ExtName = this.name;
    function add_character_pack(
        PackName,
        PackInfo,
        PreContent = (lib, game, ui, get, ai, _status) => {
            return;
        }
    ) {
        PackInfo.name = PackName;
        PackInfo.connect = true;
        for (const i in PackInfo.character) {
            PackInfo.character[i][4].push(
                `img:extension/${ExtName}/image/character/${i}.jpg`
            );
        }
        game.import(
            "character",
            function (lib, game, ui, get, ai, _status) {
                PreContent(lib, game, ui, get, ai, _status);
                return PackInfo;
            }
        );
    }
    add_character_pack(
        "EKOL",
        {
            character: {
                Goth: [
                    "male",
                    "student",
                    "3/3/0",
                    ["注意力集中","凯特校长","耐冲王"],
                    ["des:凯特杯校长获得者，地滚球之王。"],
                ],
                navy: [
                    "female",
                    "beauty",
                    "8/8/0",
                    ["飞柱","更加可爱","富有","沉默"],
                    ["des:你也有一颗少女心吗？"],
                ],
                "易文":[
                    "female",
                    "shen",
                    "4/4/0",
                    ["dictation","get_out","revision"],
                    ["des:It's your future. I don't care."],
                ],
                "维罗妮卡":[
                    "mua",
                    "rong",
                    "4/4/0",
                    ["摸一摸","test"],
                    ["des:呜~"],
                ],
                "手乒团队":[
                    "none",
                    "student",
                    "3/3/0",
                    ["competition", "徭役", "税收", "群英"],
                    ["des:没有人能篡改，逃开这个时代。"],
                ],
                "翻山":[
                    "male",
                    "shen",
                    "1/1/0",
                    ["算卦","推演","明占","星移"],
                    ["des:地球，处于一个轮回！"],
                ],
                "木子心兑":[
                    "female",
                    "shen",
                    "4/4/0",
                    ["物种多样性","下楼钓鱼","舌战群辱","误会"],
                    ["des:黄色废料的普通朋友"],
                ],
                "百血白板":[
                    "female",
                    "teacher",
                    "128/128/0",
                    [],
                    ["des:实在是太差咯！"],
                ],
                "四血摸八":[
                    "male",
                    "teacher",
                    "4/4/0",
                    ["摸八大人"],
                    ["des:四血摸八大人"],
                ],
                "红":[
                    "female",
                    "teacher",
                    "1/1/0",
                    ["零点", "指数递增"],
                    ["des:双科状元培养者。"],
                ],
                "黄色废料":[
                    "male",
                    "island",
                    "3/3/0",
                    ["岛主", "上岛"],
                    ["des:五千四次。"],
                ],
                "金":[
                    "male",
                    "student",
                    "4/4/0",
                    ["飞行", "赏花", "茎"],
                    ["des:晚风吹过树梢\n带走早春的红艳\n万紫千红之中\n我又为何独自燃烧？"],
                ],
                logn:[
                    "kata",
                    "student",
                    "2/2/0",
                    ["必将施行","举报","正义"],
                    ["des:吾故倒行而逆施之。"],
                ],
                '小芸': [
                    "芸",
                    "student",
                    "4/4/0",
                    ["佳人", "桃色", "懒得上线", "芸手杯"],
                    ["des:八班有佳人，芸手而桃色。"],
                ],
                '柳芸潘': [
                    "芸",
                    "shen",
                    "4/4/0",
                    ["能量", "芸手", "芸脚", "无为"],
                    ["des:八班有佳人，芸手而桃色。"],
                ],
                '久': [
                    "male",
                    "student",
                    "3/3/0",
                    ["棋王", "会赢的", "升变"],
                    ["des:关注嘉然，冠军拿完！"],
                ],
                "侠小芸": [
                    "male",
                    "chivalrous",
                    "2/4/0",
                    ["侠义", "独往", "藏锋"],
                    ["des:侠之大者，为国为民。"],
                ],
                "岳岭": [
                    "male",
                    "teacher",
                    "3/3/0",
                    ["导弹", "美国农村", "中庸"],
                    ["des:杨振宁的弦论，现在还没有办法证明。"]
                ],
                "殷主任":[
                    "原p",
                    "student",
                    "5/5/0",
                    ["53","拉球","亚手"],
                    ["des:无冕之王"],
                ],
                "manager":[
                    "male",
                    "student",
                    "3/3/0",
                    ["强攻","manage","权力","堡垒"],
                    ["des:发明者"],
                ],
                "强哥":[
                    "male",
                    "shen",
                    "1/1/0",
                    ["强大轰鸣","言语威胁","不止于此","身强体壮","生存权利"],
                    ["des:教练补充"],
                ],
            },
            card:{
                "钝刀":{
                    type: "equip",
                    subtype: "equip1",        // 装备类型(equip1武器/equip2防具/equip3防御马/equip4进攻马/equip5宝物)
                    skills: ["dundao_skill"],     // 装备技能
                    distance: {               // 距离修正
                        attackFrom: 1,       // 攻击距离
                    },
                },
                "神兵":{
                    type: "equip",
                    subtype: "equip1",        // 装备类型(equip1武器/equip2防具/equip3防御马/equip4进攻马/equip5宝物)
                    skills: ["shenbing_skill"],     // 装备技能
                    distance: {               // 距离修正
                        attackFrom: 1,       // 攻击距离
                    },
                },
            },
            skill: {
                "摸一摸":{
                    trigger:{
                        global:["phaseZhunbeiBegin"],
                    },
                    frequent:true,
                    content:function(){
                        player.draw(5);
                    },
                    "_priority":0,
                },
                dictation:{
                    filter(event,player){
                        return player.countCards('hes',{suit:'diamond'})+player.countCards('hes',{suit:'heart'})>0;
                    },
                    enable:"chooseToUse",
                    filterCard(card){
                        return get.color(card)=='red';
                    },
                    position:"hes",
                    viewAs:{
                        name:"lebu",
                    },
                    prompt:"将一张红色牌当乐不思蜀使用",
                    check(card){return 6-get.value(card)},
                    ai:{
                        threaten:1.5,
                        basic:{
                            order:1,
                            useful:1,
                            value:8,
                        },
                        result:{
                            ignoreStatus:true,
                            target:(player,target)=>{
                                if(target===_status.currentPhase&&target.skipList.includes('phaseUse')){
                                    let evt=_status.event.getParent('phase');
                                    if(evt&&evt.phaseList.indexOf('phaseJudge')<=evt.num) return 0;
                                }
                                let num=target.needsToDiscard(3),cf=Math.pow(get.threaten(target,player),2);
                                if(!num) return -0.01*cf;
                                if(target.hp>2) num--;
                                let dist=Math.sqrt(get.distance(player,target,'absolute'));
                                if(dist<1) dist=1;
                                if(target.isTurnedOver()) dist++;
                                return Math.min(-0.1,-num)*cf/dist;
                            },
                        },
                        tag:{
                            skip:"phaseUse",
                        },
                    },
                    "_priority":0,
                },
                "get_out":{
                    mod:{
                        globalTo(from,to,distance){
                            return distance + 1;
                        },
                    },
                    "_priority":0,
                },
                revision:{
                    usabel:1,
                    enable:"phaseUse",
                    intro:{
                        content:true,
                    },
                    check(event, player) {
                        return true;
                    },
                    async content(event, trigger, player) {
                        let result = await player.chooseTarget('请选择一名角色',function(card, player, target) {
                            return player != target;
                        }, true).forResult();
                        if(result.bool){
                            let target = result.targets[0];
                            if(target.countCards('h') < 3) {
                                target.loseHp(2);
                                return;
                            }
                            const num = 3;
                            let cards = get.cards(num, true);
                            await target.showCards(cards,"你需要展示 3 张同花色的牌");
                            let list = await cards.map(card => get.suit(card));
                            let targetShow = await target.chooseCard(num, "h", true).forResult();
                            await target.showCards(targetShow.cards);
                            let suit = await targetShow.cards.map(card => get.suit(card));
                            if (suit != list) {
                                target.loseHp(2);
                            }
                            if(player.hasSkill('revision')) {
                                player.removeSkill('revision');
                            }
                        }
                    },
                    ai:{
                        order:9,
                        result:{
                            target(player, target) {
                                return -2;
                            },
                        },
                    },
                    skillAnimation:true,
                    "_priority":0,
                },
                "飞柱":{
                    mod:{
                        targetInRange(card, player, target) {
                            if(card.name == "bingliang" || card.name == "shunshou") {
                                if(get.distance(player, target) <= 2) {
                                    return true;
                                }
                            }
                        },
                        globalFrom(from,to,distance){
                            return distance + 1;
                        },
                    },
                    "_priority":0,
                },
                "更加可爱":{
                    forced:true,
                    trigger:{
                        player:"damageEnd",
                    },
                    logTarget:"source",
                    preHidden:true,
                    filter(event,player){
                        if(event.source) {
                            if(event.num > 0  && event.source.hasSex('male')) {
                                return event.source.countCards('hes') > 0 && event.source != player;
                            }
                            return false;
                        }
                        return false;
                    },
                    async content(event,trigger,player){
                        if(trigger.source) {
                            trigger.source.draw();
                        }
                        if(!trigger.source.hasSex('male')) {
                            return;
                        }
                        await trigger.source.chooseToDiscard();
                    },
                    ai:{
                        "maixie_defend":true,
                        effect:{
                            target(card,player,target){
                                if(player.countCards('he')>1&&get.tag(card,'damage')){
                                    if(player.hasSkillTag('jueqing',false,target)) return [1,-1.5];
                                    if(get.attitude(target,player)<0) return [1,1];
                                }
                            },
                        },
                    },
                    "_priority":0,
                },
                "富有":{
                    trigger:{
                        player:"phaseDrawBegin2",
                    },
                    frequent:true,
                    filter(event,player){
                        return !event.numFixed;
                    },
                    async content(event,trigger,player){
                        trigger.num = trigger.num + 2;
                    },
                    ai:{
                        threaten:1.6,
                    },
                    "_priority":0,
                },
                "沉默":{
                    forced:true,
                    trigger:{
                        player:"damageEnd",
                    },
                    logTarget:"source",
                    preHidden:true,
                    filter(event,player){
                        return event.source && event.num > 0;
                    },
                    async content(event,trigger,player){
                        if(!trigger.source.hasSkill('disableTrick')) {
                            trigger.source.addTempSkill('disableTrick');
                        }
                    },
                    ai:{
                        "maixie_defend":true,
                        effect:{
                            target(card,player,target){
                                if(player.countCards('he')>1&&get.tag(card,'damage')){
                                    if(player.hasSkillTag('jueqing',false,target)) return [1,-1.5];
                                    if(get.attitude(target,player)<0) return [1,1];
                                }
                            },
                        },
                    },
                    "_priority":0,
                },
                test:{
                    forced:true,
                    charlotte:true,
                    preHidden:true,
                    trigger:{
                        player:"phaseZhunbeiBegin",
                    },
                    async content(event, trigger, player) {
                        player.recoverTo(3);
                    },
                    "_priority":0,
                },
                disableTrick:{
                    mod:{
                        cardEnabled(card) {
                            if(get.type(card,'trick')=='trick') {
                                return false;
                            }
                        },
                    },
                    charlotte:true,
                    forced:true,
                    preHidden:true,
                    trigger:{
                        global:["phaseJieshuEnd"],
                    },
                    async content(event, trigger, player) {
                        if(player.hasSkill("disableTrick")) {
                            await player.removeSkill('disableTrick');
                        }
                    },
                    "_priority":0,
                },
                competition:{
                    filter(event,player){
                        return player.countCards('hes', {color:'red'}) > 0;
                    },
                    enable:"chooseToUse",
                    filterCard(card){
                        return get.color(card) == 'red';
                    },
                    position:"hes",
                    viewAs:{
                        name:"juedou",
                    },
                    prompt:"将一张红色牌当【决斗】使用",
                    check(card){return 6-get.value(card)},
                    ai:{
                        threaten:1.8,
                        basic:{
                            order:1,
                            useful:1,
                            value:8,
                        },
                        result:{
                            ignoreStatus:true,
                            target:(player,target)=>{
                                if(target===_status.currentPhase&&target.skipList.includes('phaseUse')){
                                    let evt=_status.event.getParent('phase');
                                    if(evt&&evt.phaseList.indexOf('phaseJudge')<=evt.num) return 0;
                                }
                                let num=target.needsToDiscard(3),cf=Math.pow(get.threaten(target,player),2);
                                if(!num) return -0.01*cf;
                                if(target.hp>2) num--;
                                let dist=Math.sqrt(get.distance(player,target,'absolute'));
                                if(dist<1) dist=1;
                                if(target.isTurnedOver()) dist++;
                                return Math.min(-0.1,-num)*cf/dist;
                            },
                            player:function(player,target,card){
                                if(player.hasSkillTag('directHit_ai',true,{
                                    target:target,
                                    card:card,
                                },true)){
                                    return 0;
                                }
                                if(get.damageEffect(target,player,target)>0&&get.attitude(player,target)>0&&get.attitude(target,player)>0){
                                    return 0;
                                }
                                let hs1=target.getCards('h','sha');
                                let hs2=player.getCards('h','sha');
                                if(hs1.length>hs2.length+1){
                                    return -2;
                                }
                                let hsx=target.getCards('h');
                                if(hsx.length>2&&hs2.length==0&&hsx[0].number<6){
                                    return -2;
                                }
                                if(hsx.length>3&&hs2.length==0){
                                    return -2;
                                }
                                if(hs1.length>hs2.length&&(!hs2.length||hs1[0].number>hs2[0].number)){
                                    return -2;
                                }
                                return -0.5;
                            },
                        },
                        wuxie:function(target,card,player,viewer,status){
                            if(player===game.me&&get.attitude(viewer,player._trueMe||player)>0) return 0;
                            if(status*get.attitude(viewer,target)*get.effect(target,card,player,target)>=0) return 0;
                        },
                        tag:{
                            respond:2,
                            respondSha:2,
                            damage:1,
                        },
                    },
                    "_priority":0,
                },
                "徭役":{
                    filter(event,player){
                        return player.countCards('hes', {color:'black'}) > 0;
                    },
                    enable:"chooseToUse",
                    filterCard(card){
                        return get.color(card) == 'black';
                    },
                    position:"hes",
                    viewAs:{
                        name:"bingliang",
                    },
                    prompt:"将一张黑色牌当【兵粮寸断】使用",
                    check(card){return 6-get.value(card)},
                    ai:{
                        threaten:1.5,
                        basic:{
                            order:1,
                            useful:1,
                            value:8,
                        },
                        result:{
                            ignoreStatus:true,
                            target:(player,target)=>{
                                if(target===_status.currentPhase&&target.skipList.includes('phaseUse')){
                                    let evt=_status.event.getParent('phase');
                                    if(evt&&evt.phaseList.indexOf('phaseJudge')<=evt.num) return 0;
                                }
                                let num=target.needsToDiscard(3),cf=Math.pow(get.threaten(target,player),2);
                                if(!num) return -0.01*cf;
                                if(target.hp>2) num--;
                                let dist=Math.sqrt(get.distance(player,target,'absolute'));
                                if(dist<1) dist=1;
                                if(target.isTurnedOver()) dist++;
                                return Math.min(-0.1,-num)*cf/dist;
                            },
                        },
                        tag:{
                            skip:"phaseUse",
                        },
                    },
                    "_priority":0,
                },
                "税收":{
                    forced:true,
                    charlotte:true,
                    preHidden:true,
                    trigger:{
                        player:["phaseZhunbeiBegin"],
                    },
                    async content(event, trigger, player) {
                        player.draw(game.roundNumber);
                    },
                    "_priority":0,
                },
                "群英":{
                    unique:true,
                    forced:true,
                    charlotte:true,
                    preHidden:true,
                    trigger:{
                        global:"phaseBefore",
                        player:"enterGame",
                    },
                    filter:function(event,player){
                        return (event.name != 'phase' || game.phaseNumber == 0);
                    },
                    async content(event, trigger, player) {
                        event.current = player;
                        while(event.current) {
                            if(event.current.group == 'student') {
                                player.gainMaxHp();
                                player.recover();
                            }
                            event.current = event.current.next;
                            if(event.current == player) {
                                break;
                            }
                        }
                    },
                    "_priority":0,
                },
                "算卦":{
                    forced:true,
                    charlotte:true,
                    preHidden:true,
                    trigger:{
                        player:["dying"],
                    },
                    async content(event, trigger, player) {
                        let result =  await player.chooseTarget(get.prompt('算卦'), function(card,player,target){
                            let ts = target.countCards('h');
                            return target != player && ts > 0;
                        }).set('ai',function(target){
                            let player=_status.event.player,att=get.attitude(player,target);
                            if(target.isTurnedOver()) return att/10;
                            if(!player.hasShan()&&target.canUse({name:'sha',isCard:true},player,false)&&get.effect(player,{name:'sha',isCard:true},target,player)<0&&player.hp<4) return 0;
                            return -att*Math.sqrt(target.countCards('h'));
                        }).forResult();
                        if(result.bool) {
                            let target = result.targets[0];
                            if(target.countCards('h', 'tao') > 0) {
                                player.recoverTo(player.maxHp);
                                let cards = await target.getCards('h', card=>card.name != 'tao');
                                if(cards) {
                                    target.discard(cards);
                                }
                                return;
                            }
                        }
                    },
                    ai:{
                        result:{
                            target(player, target){
                                // 基础态度
                                let att = get.attitude(player, target);
                                
                                // 目标状态
                                if(target.countCards('h') >= 2) return -1.5;  // 手牌多目标优先
                                
                                // 威胁判断
                                if(target.hasSkillTag('threaten')) return -1.2;  // 威胁目标优先
                                
                                return -3;  // 默认价值
                            },
                        },
                        expose:0.2,
                        threaten:1.5,
                    },
                    "_priority":0,
                },
                "推演":{
                    forced:true,
                    charlotte:true,
                    preHidden:true,
                    trigger:{
                        player:["damageBegin4","loseHp"],
                    },
                    filter(event, player) {
                        return true;
                    },
                    async content(event, trigger, player) {
                        if(trigger.num < player.hp) { //没有触发，伤害不足
                            return;
                        }
                        let cards = get.cards(1, true);
                        await player.showCards(cards,"【推演】的结果");
                        if(cards[0].suit == 'club' || cards[0].suit == 'spade') {
                            trigger.cancel();
                            return;
                        }
                    },
                    "_priority":0,
                },
                "明占":{
                    forced:true,
                    charlotte:true,
                    preHidden:true,
                    trigger:{
                        player:["damageBegin3"],
                    },
                    filter(event, player) {
                        return true;
                    },
                    async content(event, trigger, player) {
                        if(trigger.num < player.hp) { //没有触发，伤害不足
                            return;
                        }
                        player.gainMaxHp();
                        const num = 5;
                        let cards = get.cards(num, true);
                        await player.showCards(cards,"【明占】的结果");
                        await game.delayx();
                        let cnt_heart = 0;
                        for(let x of cards) {
                            if(x.suit == 'heart') {
                                cnt_heart ++;
                            }
                        }
                        if(cnt_heart == 1) {
                            let result = await player.chooseTarget(get.prompt('明占'), function(card,player,target) {
                                return target != player;
                            }).forResult();
                            if(result.bool) {
                                let target = result.targets[0];
                                trigger.player = target;
                            }
                        }
                        else if(cnt_heart == 2 || cnt_heart == 3) {
                            player.recover(cnt_heart);
                        }
                    },
                    "_priority":0,
                },
                "星移":{
                    trigger:{
                        global:["damageBegin3"],
                    },
                    filter(event, player) {
                        if(event) {
                            if(!event.card) {
                                return false;
                            }
                            return event.player != player && event.target != player && event.card.name == 'sha' && get.color(event.card) == 'black';
                        }
                        return false;
                    },
                    async content(event, trigger, player) {
                        trigger.player = player;
                    },
                    ai:{
                        order:9,
                        result:{
                            target(player, target) {
                                let att = get.attitude(player, target);
                                if(att > 0) return 1;
                                return -1;
                            },
                        },
                    },
                    "_priority":0,
                },
                "物种多样性":{
                    usable:1,
                    enable:"phaseUse",
                    intro:{
                        content:true,
                    },
                    check(event, player) {
                        return true;
                    },
                    async content(event, trigger, player) {
                        let now = player;
                        let unique_name = new Set();
                        while(now) { //遍历所有角色
                            if(now && now.countCards('h') > 0) {
                                let now_show = await now.chooseCard(1, "h", true).forResult();
                                now.showCards(now_show.cards, get.translation(now) + "展示的手牌");
                                unique_name.add(now_show.cards[0].name);
                            }
                            now = now.next;
                            if(now == player) {
                                break;
                            }
                        }
                        player.draw(unique_name.size);
                    },
                    ai:{
                        order:10,
                        result:{
                            player(player) {
                                return game.players.length;
                            },
                        },
                        expose:0.2,
                        threaten:1.5,
                    },
                    "_priority":1,
                },
                "下楼钓鱼":{
                    usable:1,
                    enable:"phaseUse",
                    intro:{
                        content:true,
                    },
                    check(event, player) {
                        return true;
                    },
                    async content(event, trigger, player) {
                        if(player.hasSkill('下楼钓鱼')) {
                            if(!player.hasSkill('章鱼玩偶')) {
                                player.addSkill('章鱼玩偶');
                            }
                            if(!player.hasSkill('普通朋友')) {
                                player.addSkill('普通朋友');
                            }
                            player.removeSkill('下楼钓鱼');
                        }
                    },
                    ai:{
                        order:0,
                        expose:0,
                        threaten:1,
                    },
                    skillAnimation:true,
                    "_priority":2,
                },
                "舌战群辱":{
                    usable:1,
                    enable:"phaseUse",
                    intro:{
                        content:true,
                    },
                    check(event, player) {
                        return true;
                    },
                    async content(event, trigger, player) {
                        while(true) {
                            let show_sha = await player.chooseToRespond(1, false, 'hs', card=>card.name == 'sha', "请打出一张杀").forResult();
                            if(show_sha.cards == undefined) {
                                const card = new lib.element.VCard({name:'wugu'});
                                player.useCard(card, game.players);
                                break;
                            }
                            let now = player.next;
                            for(; now != player; now = now.next) {
                                let other_show_sha = await now.chooseToRespond(1, false, 'hs', card=>card.name == 'sha', "请打出一张杀").forResult();
                                if(other_show_sha.cards != undefined) {
                                    break;
                                }
                            }
                            if(now == player) {
                                for(let i = player.next; i != player; i = i.next) {
                                    i.loseHp(1);
                                }
                                break;
                            }
                        }
                    },
                    ai:{
                        order:5,
                        result:{
                            player(player) {
                                if(player.countCards('h') <= 2) return 1.2;
                                return 1;
                            },
                        },
                    },
                    "_priority":0,
                },
                "误会":{
                    usable:1,
                    enable:"phaseUse",
                    intro:{
                        content:true,
                    },
                    filter(event, player) {
                        return player.countCards('h') > 0;
                    },
                    check(event, player) {
                        return true;
                    },
                    async content(event, trigger, player) {
                        let result =  await player.chooseTarget(get.prompt('误会'), function(card,player,target){
                            let ts = target.countCards('h');
                            return target != player && ts > 0;
                        }).set('ai',function(target){
                            let player=_status.event.player,att=get.attitude(player,target);
                            if(target.isTurnedOver()) return att/10;
                            if(!player.hasShan()&&target.canUse({name:'sha',isCard:true},player,false)&&get.effect(player,{name:'sha',isCard:true},target,player)<0&&player.hp<4) return 0;
                            return -att*Math.sqrt(target.countCards('h'));
                        }).forResult();
                        if(result.bool) {
                            let target = result.targets[0];
                            let card_give = await player.chooseCard('选择误会的牌', true).forResult();
                            target.gain(card_give.cards, player, 'giveAuto', 'bySelf');
                            for(let i = 0; i < 3; i ++) {
                                const card = new lib.element.VCard({name:'guohe'});
                                player.useCard(card, target);
                            }
                        }
                    },
                    ai:{
                        order:9,
                        result:{
                            target(player, target) {
                                let att = get.attitude(player, target);
                                if(att > 0) return 0;  // 不选择友方
                                return -2;
                            },
                        },
                    },
                    skillAnimation:true,
                    "_priority":0,
                },
                "章鱼玩偶":{
                    usable:1,
                    enable:"phaseUse",
                    intro:{
                        content:true,
                    },
                    check(event, player) {
                        return true;
                    },
                    async content(event, trigger, player) {
                        let now = player.next;
                        while(now) { //遍历所有角色
                            if(now && now.countCards('h') > 0) {
                                let cards = now.getCards('h');
                                player.gain(cards, now, 'giveAuto', 'bySelf')
                            }
                            now = now.next;
                            if(now == player) {
                                break;
                            }
                        }
                        if(player.hasSkill('章鱼玩偶')) {
                            player.removeSkill('章鱼玩偶');
                        }
                        game.log(player, "结束了回合");
                        let evt=_status.event.getParent('phaseUse'); //得到当前阶段
                        if(evt&&evt.name=='phaseUse'){ //跳过出牌阶段
                            evt.skipped=true;
                            evt.finish();
                        }
                        player.skip('phaseDiscard');
                        player.skip('phaseJieshu');
                        player.turnOver();
                    },
                    ai:{
                        order:1,
                        result:{
                            player(player) {
                                return player.hp - 2;
                            },
                        },
                    },
                    skillAnimation:true,
                    "_priority":0,
                },
                "普通朋友":{
                    usable:1,
                    enable:"phaseUse",
                    intro:{
                        content:true,
                    },
                    check(event, player) {
                        return true;
                    },
                    async content(event, trigger, player) {
                        let result =  await player.chooseTarget(get.prompt('普通朋友'), function(card,player,target){
                            let ts = target.countCards('h');
                            return target != player && ts > 0;
                        }).set('ai',function(target){
                            let player=_status.event.player,att=get.attitude(player,target);
                            if(target.isTurnedOver()) return att/10;
                            if(!player.hasShan()&&target.canUse({name:'sha',isCard:true},player,false)&&get.effect(player,{name:'sha',isCard:true},target,player)<0&&player.hp<4) return 0;
                            return -att*Math.sqrt(target.countCards('h'));
                        }).forResult();
                        if(result.bool) {
                            let target = result.targets[0];
                            let choice = await target.chooseControlList(
                                ['你给'+get.translation(player)+'牌', get.translation(player) + '给你牌'],
                                true).set('ai',function(event,player){ return Math.random() > 0.5;
                            }).forResult();
                            let giver = player;
                            let receiver = target;
                            if(choice.index == 0) {
                                giver = target;
                                receiver = player;
                            }
                            let card_give = await giver.chooseCard(get.translation(giver)+'给'+get.translation(receiver)+'的牌', [0,Infinity]).set('ai',card=>{
                                return 4.5-get.value(card);
                            }).forResult();
                            if(card_give.cards != undefined && card_give.cards.length > 0) {
                                receiver.gain(card_give.cards, giver, 'giveAuto', 'bySelf');
                                if(card_give.cards.length >= 3) {
                                    giver.recover(1);
                                }
                            }
                        }
                    },
                    ai:{
                        threaten:1.5,
                    },
                    "_priority":0,
                },
                "注意力集中":{
                    forced:true,
                    charlotte:true,
                    preHidden:true,
                    trigger:{
                        global:["drawAfter"],
                    },
                    filter(event, player) {
                        return event.player != player && event.getParent().name != 'phaseDraw';
                    },
                    async content(event, trigger, player) {
                        // player.draw(trigger.num);
                        player.draw(1);
                    },
                    ai:{
                        threaten:100,
                        effect: { // 对出牌的影响
                            /*
                            * 自身作为目标时的影响，会影响其他角色AI的出牌策略。
                            * 可用 A ，[A,B],[A,B,C,D]格式
                            * A：基础值 × 系数A
                            * [A,B]：基础值 × 系数A + B
                            * [A,B,C,D]：对你的影响：基础值 × 系数A + B | 对使用者的影响：基础值 × 系数C + D 
                            */
                            target(card, player, target){
                                if(get.tag(card, 'damage')) return 1.5;  // 其他AI倾向于对持有者使用伤害牌
                            }
                        }
                    },
                    "_priority":0,
                },
                "凯特校长":{
                    usable:1,
                    trigger:{
                        player:"phaseUseBefore",
                    },
                    async content(event, trigger, player) {
                        game.log(player, "结束了回合");
                        let evt=_status.event.getParent('phaseUse'); //得到当前阶段
                        if(evt&&evt.name=='phaseUse'){ //跳过出牌阶段
                            evt.skipped=true;
                            evt.finish();
                        }
                        player.skip('phaseDiscard');
                        player.skip('phaseJieshu');
                    },
                    check(event, player){ // 为True发动，为False取消
                        return player.countCards('h') <= 30;
                    },
                    ai:{
                        threaten:10,
                        result:{
                            player(player){ // 对自身的收益，正数使用，负数取消
                                if(player.countCards('h') < 20) return 20;
                                return -100; //恐惧魔王（八班版）
                            },
                        },
                    },
                    "_priority":0,
                },
                "耐冲王":{
                    usable:1,
                    enable:"phaseUse",
                    async content(event, trigger, player) {
                        let cards = await player.getCards('h', card=>!get.tag(card, 'damage'));
                        if(cards.length > 0) {
                            player.discard(cards);
                            player.draw(cards.length);
                        }
                        if(!player.hasSkill('无限8')) {
                            player.addTempSkill('无限8');
                        }
                        if(!player.hasSkill('冲死8')) {
                            player.addTempSkill('冲死8');
                        }
                    },
                    check(event, player){ // 为True发动，为False取消
                        return true;
                    },
                    ai:{
                        threaten:0,
                        order:10,
                        result:{
                            player(player){ // 对自身的收益，正数使用，负数取消
                                return 114; //Goth，启动！
                            },
                        },
                    },
                    "_priority":0,
                },
                "无限8":{
                    forced:true,
                    charlotte:true,
                    preHidden:true,
                    mod:{
                        targetInRange(card, player, target) { //用牌没有距离限制
                            return true;
                        },
                        cardUsableTarget:function(card,player,target){ //用牌没有次数限制
                            return true;
                        },
                    },
                    "_priority":0,
                },
                "冲死8":{
                    forced:true,
                    charlotte:true,
                    preHidden:true,
                    trigger:{
                        player:"phaseJieshuAfter",
                    },
                    async content(event, trigger, player) {
                        player.die();
                    },
                    "_priority":0,
                },
                "摸八大人":{
                    trigger:{
                        player:"phaseDrawBegin2",
                    },
                    frequent:true,
                    filter(event,player){
                        return !event.numFixed;
                    },
                    async content(event,trigger,player){
                        trigger.num = trigger.num + 6;
                    },
                    ai:{
                        threaten:2.2,
                    },
                    "_priority":0,
                },
                "零点":{
                    forced:true,
                    charlotte:true,
                    preHidden:true,
                    mod:{
                        ignoredHandcard:function(card,player){
                            if(card.hasGaintag('零点')) return true;
                            return false;
                        },
                        cardDiscardable:function(card,player,name){
                            if(name=='phaseDiscard' && card.hasGaintag('零点')) return false;
                            return true;
                        },
                    },
                    trigger:{
                        player:"phaseBefore",
                    },
                    filter(event, player) {
                        return event.name != 'phase' || game.phaseNumber == 0
                    },
                    async content(event, trigger, player) {
                        await player.draw(8 - player.countCards('h'));
                        player.addGaintag(player.getCards('h'), '零点');
                    },
                    "_priority":0,
                },
                "指数递增":{
                    forced:true,
                    charlotte:true,
                    preHidden:true,
                    trigger:{
                        player:"phaseZhunbeiBefore",
                    },
                    async content(event, trigger, player) {
                        let x = Math.floor(Math.pow(2, game.roundNumber - 1));
                        player.gainMaxHp(x);
                        player.recover(x);
                    },
                    "_priority":0,
                },
                "岛主":{
                    mark:true,
                    marktext:"岛",
                    forced:true,
                    charlotte:true,
                    preHidden:true,
                    intro: {
                        name: "上岛天数",
                        mark(dialog, storage, player){
                            // 自定义标记显示界面
                            dialog.addText(String(player.storage.dao));
                        },
                    },
                    init(player){
                        player.storage.dao = 2;  // 初始化标记值
                        player.storage.loseCardSet = new Set();
                        player.storage.useCardSet = new Set();
                    },
                    trigger: {
                        player: ['loseAfter'],
                    },
                    filter(event, player) {
                        let evt = event.getParent('phaseUse');
                        if(evt && evt.player == player) { //用牌不行的
                            return false;
                        }
                        return true;
                    },
                    async content(event, trigger, player){
                        player.getHistory('lose', function (event) {
                            if(event.cards2) {
                                for(let card of event.cards2) {
                                    if(!player.storage.loseCardSet.has(card) && !player.storage.useCardSet.has(card)) {
                                        player.addMark('dao', 1);
                                        player.storage.loseCardSet.add(card);
                                    }
                                }
                            }
                        });
                    },
                    group:["岛主_1", "岛主_2"],
                    subSkill:{
                        "1":{
                            forced:true,
                            charlotte:true,
                            preHidden:true,
                            trigger:{
                                global:"washCard",
                            },
                            async content(event, trigger, player) {
                                player.storage.loseCardSet = new Set(); //清空
                                player.storage.useCardSet = new Set();
                            }
                        },
                        "2":{
                            forced:true,
                            charlotte:true,
                            preHidden:true,
                            trigger:{
                                player:"useCard2",
                            },
                            async content(event, trigger, player) {
                                if(player.storage.dao > 0) {
                                    player.removeMark('dao', 1);
                                }
                            }
                        }
                    },
                    ai: {
                        threaten: 10,  // 威胁度(默认为1)
                        effect: { // 对出牌的影响
                            /*
                            * 自身使用牌时的影响，会影响自身AI的出牌策略。
                            * 可用 A ，[A,B],[A,B,C,D]格式
                            * A：基础值 × 系数A
                            * [A,B]：基础值 × 系数A + B
                            * [A,B,C,D]：对你的影响：基础值 × 系数A + B | 对被使用者的影响：基础值 × 系数C + D 
                            */
                            player (card, player, target) {
                                if(player.countCards('h') > 30) return [1,0]; //爆发
                                return [0.5, -1];  // 你倾向于不使用牌
                            }
                        }
                    }
                },
                "上岛":{
                    forced:true,
                    charlotte:true,
                    preHidden:true,
                    trigger: {
                        player: 'dying',
                    },
                    async content(event, trigger, player){
                        let cards = get.cards(1, true);
                        await player.showCards(cards,"【上岛】的结果");
                        if(get.color(cards[0]) == 'red') {
                            player.draw(player.storage.dao);
                        }
                        else {
                            player.draw(player.storage.dao * 2);
                            player.storage.dao = 0;
                        }
                    }
                },
                "飞行":{
                    mod:{
                        globalTo(from,to,distance){
                            return distance + 4;
                        },
                    },
                    "_priority":0,
                },
                "赏花":{
                    mark: true,
                    marktext: "花",
                    intro: {
                        name: "花",
                        mark(dialog, storage, player){
                            // 自定义标记显示界面
                            dialog.addText('花中的牌');
                            dialog.add([player.getExpansions("hua"),'vcard']);
                        }
                    },
                    onremove: function (player, skill) {
                        let cards = player.getExpansions(skill);
                        if (cards.length) player.loseToDiscardpile(cards);
                    },
                    group:["赏花_加入花","赏花_给牌"],
                    subSkill:{
                        "加入花":{
                            usable:100,
                            enable:"phaseUse",
                            async content(event, trigger, player) {
                                let hand_card_num = player.countCards('h');
                                let result = await player.chooseCard("h", [1, hand_card_num],
                                    "将任意张手牌加入“花”").set("ai",
                                        function (card) {
                                            let player = _status.event.player;
                                            let count = game.countPlayer(function (current) {
                                                return get.attitude(player, current) > 2 && current.hp - current.countCards("h") > 1;
                                    });
                                    if (ui.selected.cards.length >= count) return -get.value(card);
                                    return 5 - get.value(card);
                                }).forResult();
                                if(result.bool) {
                                    player.addToExpansion(result.cards, player, "giveAuto").gaintag.add("hua");
                                }
                            },
                        },
                        "给牌":{
                            trigger:{
                                player:'phaseJieshuEnd',
                            },
                            async content(event, trigger, player) {
                                let result = await player.chooseTarget('请选择一名角色',function(card, player, target) {
                                    return player != target;
                                }, true).forResult();
                                if(result.bool) {
                                    let target = result.targets[0];
                                    let cards = await player.chooseCardButton(player.getExpansions("hua"),
                                        [1, Infinity], "选择交给" + get.translation(target) + "的牌").set("ai",
                                            function(card) {
                                                return get.value(card);
                                        }).forResult();
                                    target.gain(cards.links, player, 'giveAuto', 'bySelf');
                                }
                            }
                        }
                    }
                },
                "茎":{
                    usable:100,
                    enable:"phaseUse",
                    filter(event, player) {
                        return player.getExpansions('hua').length >= 3; //不足 3 张无法发动
                    },
                    async content(event, trigger, player) {
                        let result = await player.chooseTarget('请选择一名角色',function(card, player, target) {
                            return player != target && target.countCards('h') > 0;
                        }, true).forResult();
                        if(result.bool) {
                            let target = result.targets[0];
                            let discard_hua = await player.chooseCardButton(player.getExpansions("hua"),
                                3, "选择 3 张“花”弃置").set("ai",
                                    function(card) {
                                        return 5 - get.value(card);
                                }).forResult();
                            player.loseToDiscardpile(discard_hua.links);
                            let discard_target = await player.chooseCardButton(target.getCards('h'),
                                1, "选择" + get.translation(target) + "的 1 张手牌弃置").set("ai",
                                    function(card) {
                                        return get.value(card) * 2;
                                }).forResult();
                            target.loseToDiscardpile(discard_target.links);
                        }
                    },
                },
                "必将施行":{
                    forced:true,
                    charlotte:true,
                    preHidden:true,
                    trigger:{
                        target:"useCardToTargeted",
                    },
                    filter(event, player) {
                        if(event.player && event.player != player) {//必须是有来源的卡牌的效果
                            return event.card && event.card.name != 'shunshou' && get.type(event.card) == "trick";
                        }
                        return false;
                    },
                    async content(event, trigger, player) {
                        player.gain(trigger.cards, 'bySelf');
                    },
                },
                "举报":{
                    forced:true,
                    charlotte:true,
                    preHidden:true,
                    trigger:{
                        player:'damageBegin4',
                    },
                    filter(event, player) {
                        return true;
                    },
                    async content(event, trigger, player) {
                        if(!trigger.source || trigger.source == player) {
                            return;
                        } //来源不能是空或自己
                        if(trigger.num >= player.hp) { //导致濒死的伤害
                            trigger.cancel(); 
                            if(player.hp < 1) {
                                player.recoverTo(1);
                            }
                            else {
                                player.loseHp(player.hp - 1);
                            }
                            if(trigger.source.countCards('h') == 0) {
                                return;
                            }
                            if(trigger.source.hp != 1) {
                                if(trigger.source.hp < 1) {
                                    trigger.source.recoverTo(1);
                                }
                                else {
                                    trigger.source.loseHp(trigger.source.hp - 1);
                                }
                            }
                            else {
                                player.die();
                                trigger.source.loseHp(trigger.source.hp);
                                let cards = get.cards(2, true);
                                await player.showCards(cards,"【举报】的判定");
                                await game.delayx();
                                if(get.suit(cards[0]) == get.suit(cards[1])) {
                                    trigger.source.die();
                                }
                            }
                        }
                    },
                    "_priority":0,
                    check(event, player) {
                        return true;
                    },
                    ai:{
                        threaten:-100,
                        effect:{
                            target(card, player, target){
                                if(player.hp > 1) {
                                    if(get.tag(card, 'damage')) return 1.5;
                                    return 1;
                                }
                                else {
                                    if(target.hp == 1) return 1.2;
                                    if(get.tag(card, 'damage')) return -0.5;
                                    return 1;
                                }
                            }
                        }
                    }
                },
                "正义":{
                    usable:1,
                    enable:'phaseUse',
                    check(event, player){ // 为True发动，为False取消
                        return true;
                    },
                    async content(event, trigger, player) {
                        let result = await player.chooseTarget('请选择一名角色',function(card, player, target) {
                            return player != target;
                            }, true).forResult();
                        if(result.bool) {
                            let target = result.targets[0];
                            if(target.countCards('h', card=>(card.name == 'sha' || card.name == 'juedou')) == 0) {
                                target.loseHp();
                                return;
                            } //给不出来
                            let choice = await target.chooseControlList(
                                [
                                    "对" + get.translation(player) + "使用【杀】/【决斗】",
                                    "给" + get.translation(player) + "【杀】/【决斗】",
                                    "失去 1 点体力",
                                ],
                                true).set('ai',
                                    function(event,player){
                                        if(player.countCards('h', card=>(card.name == 'sha' || card.name == 'juedou')) > 0) {
                                            return 1;
                                        }
                                        return 2;
                            }).forResult();
                            if(choice.index == 0) {
                                let card_choose = await target.chooseCard('给出 1 张【杀】/【决斗】',
                                    1, card=>(card.name == 'sha' || card.name == 'juedou')).set('ai',card=>{
                                    return 4.5-get.value(card);
                                }).forResult();
                                let card = card_choose.cards[0];
                                if (target.canUse(card, player, false)) {
                                    target.useCard(card, player, false);
                                }
                            }
                            else if(choice.index == 1) {
                                let card_give = await target.chooseCard('给出 1 张【杀】/【决斗】',
                                    1, card=>(card.name == 'sha' || card.name == 'juedou')).set('ai',card=>{
                                    return 4.5-get.value(card);
                                }).forResult();
                                target.give(card_give.cards, player, 'give');
                            }
                            else if(choice.index == 2) {
                                target.loseHp();
                            }
                        }
                    },
                    ai:{
                        threaten:1.2,
                        order:10,
                        result: {
                            target(player, target){
                                return 1;
                            }
                        },
                    },
                    "_priority":0,
                },
                "佳人":{
                    trigger:{
                        player:"judgeBefore",
                    },
                    filter(event, player) {
                        return !event.directresult;
                    },
                    async content(event, trigger, player) {
                        let choice = await player.chooseControlList(
                            [
                                "男","女","双性","无性",
                                "芸","原p","摄影师","废料","kata",
                            ],
                            true).set('ai',
                                function(event,player){
                                    return Math.floor(Math.random() * 8);
                            }).forResult();
                        switch(choice.index) {
                            case 0:player.sex = 'male'; break;
                            case 1:player.sex = 'female'; break;
                            case 2:player.sex = 'double'; break;
                            case 3:player.sex = 'none'; break;
                            case 4:player.sex = '芸'; break;
                            case 5:player.sex = '原p'; break;
                            case 6:player.sex = '摄影师'; break;
                            case 7:player.sex = '废料'; break;
                            case 8:player.sex = 'kata'; break;
                            default:player.sex = 'unknown';break;
                        }
                    },
                    "_priority":0,
                },
                "桃色":{
                    forced:true,
                    charlotte:true,
                    preHidden:true,
                    trigger:{
                        player:'phaseZhunbeiBegin',
                    },
                    async content(event, trigger, player) {
                        for(let i = 0; i < 16; i ++) {
                            let cards = get.cards(1);
                            if(get.suit(cards[0]) == 'spade') {
                                break;
                            }
                            if(get.suit(cards[0]) == 'heart') {
                                player.recover();
                            }
                            if(get.color(cards[0]) == 'red') {
                                player.gain(cards, 'gain2');
                            }
                        }
                    },
                    "_priority":0,
                },
                "懒得上线":{
                    mod:{
                        globalTo(from,to,distance){
                            return distance + Math.floor(to.countCards('he') / 2);
                        },
                    },
                    "_priority":0,
                },
                "芸手杯":{
                    trigger:{
                        global:'damageBegin1',
                    },
                    async content(event, trigger, player) {
                        const judgeEvent = player.judge(card => {
                            if (card.number > 10) return 1;
                            return -1;
                        });
                        judgeEvent.judge2 = result => result.bool;
                        const {
                            result: { judge },
                        } = await judgeEvent;
                        if(judge == 1) {
                            trigger.num ++;
                        }
                    },
                    ai:{
                        order:10,
                        result:{
                            target(player, target){ // 对目标的收益，正数选友方，负数选敌方
                                if(target != player) return -10;
                                return 0;
                            }
                        }
                    },
                    "_priority":0,
                },
                "能量":{
                    mark:true,
                    marktext:"能量",
                    forced:true,
                    charlotte:true,
                    preHidden:true,
                    intro: {
                        name: "能量",
                        mark(dialog, storage, player){
                            // 自定义标记显示界面
                            dialog.addText(String(player.storage.energy));
                        },
                    },
                    init(player){
                        player.storage.energy = 3 + game.players.length;  // 初始化标记值
                    },
                    group:['能量_increase'],
                    subSkill:{
                        'increase':{
                            forced:true,
                            charlotte:true,
                            preHidden:true,
                            trigger:{
                                player:"phaseUseAfter",
                            },
                            async content(event, trigger, player) {
                                let tmp = player.countCards('h') - player.hp;
                                if(tmp > 0) {
                                    player.addMark('energy', tmp);
                                }
                            },
                        },
                    },
                    "_priority":0,
                },
                "芸手":{
                    trigger:{
                        player:"phaseDrawBegin2",
                    },
                    frequent:true,
                    filter(event, player){
                        return !event.numFixed;
                    },
                    async content(event, trigger, player){
                        trigger.num = trigger.num + Math.floor(player.storage.energy / 3);
                    },
                    ai:{
                        threaten:8,
                    },
                    "_priority":0,
                },
                "芸脚":{
                    usable:100,
                    enable:'phaseUse',
                    intro:{
                        content:true,
                    },
                    filter(event, player) {
                        if(player.storage.energy < player.skills.length) {
                            return false;
                        }
                        return (!player.hasSkill('桃色') || !player.hasSkill('佳人') || !player.hasSkill('懒得上线'));
                    },
                    async content(event, trigger, player) {
                        let list = [];
                        if(!player.hasSkill('桃色')) {
                            list.push('桃色');
                        }
                        if(!player.hasSkill('佳人')) {
                            list.push('佳人');
                        }
                        if(!player.hasSkill('懒得上线')) {
                            list.push('懒得上线');
                        }
                        let choice = await player.chooseControlList(
                            list, true).set('ai',
                                function(event,player){
                                    return Math.floor(Math.random() * list.length);
                            }).forResult();
                        player.removeMark('energy', player.skills.length);
                        player.addSkill(list[choice.index]);
                    },
                    "_priority":0,
                },
                "无为":{
                    mod:{
                        hasWuxie(player){
                            return player.storage.energy > 0;
                        },
                    },
                    trigger: {
                        global: ["useCard"],
                    },
                    filter(event, player) {
                        if (player.storage.energy == 0) return false;
                        if(event.card && get.type(event.card.name) == 'trick') {
                            return true;
                        }
                        return false;
                    },
                    async content(event, trigger, player) {
                        player.removeMark('energy');
                        let tri = event.getParent(2)._trigger;
                        if (tri.name == "phaseJudge") {
                            tri.untrigger("currentOnly");
                            tri.cancelled = true;
                        } else {
                            tri.neutralize();
                            if (event.getParent().guowuxie == true) {
                                tri.getParent().excluded.addArray(
                                    game.filterPlayer(function (current) {
                                        return current.isFriendOf(tri.target);
                                    })
                                );
                            }
                        }
                        // trigger.untrigger();
                        // trigger.responded = true;
                        trigger.result = { bool: true, card: { name: "wuxie", isCard: false } };
                        event.card = { name: "wuxie", isCard: false };
                        trigger.nowuxie = false;
                    },
                    "_priority":0,
                },
                "棋王":{
                    mark: true,
                    marktext: "棋",
                    intro: {
                        name: "棋",
                        mark(dialog, storage, player){
                            // 自定义标记显示界面
                            dialog.addText('棋');
                            dialog.add([player.getExpansions("chess"),'vcard']);
                        }
                    },
                    onremove: function (player, skill) {
                        let cards = player.getExpansions(skill);
                        if (cards.length) player.loseToDiscardpile(cards);
                    },
                    init(player) {
                        player.storage.last_chess = 0;
                    },
                    usable:100,
                    enable:"phaseUse",
                    filter(event, player) {
                        let hand_card_num = player.countCards('h')
                        return hand_card_num > player.storage.last_chess;
                    },
                    async content(event, trigger, player) {
                        let hand_card_num = player.countCards('h');
                        let result = await player.chooseCard("h", [player.storage.last_chess + 1, hand_card_num],
                            "选择手牌加入“棋”").set("ai",
                                function (card) {
                                    let player = _status.event.player;
                                    let count = game.countPlayer(function (current) {
                                        return get.attitude(player, current) > 2 && current.hp - current.countCards("h") > 1;
                            });
                            if (ui.selected.cards.length >= count) return -get.value(card);
                            return 5 - get.value(card);
                        }).forResult();
                        if(result.bool) {
                            player.addToExpansion(result.cards, player, "giveAuto").gaintag.add("chess");
                            player.storage.last_chess = result.cards.length;
                            player.gainMaxHp(1);
                            player.recover(1);
                        }
                    },
                },
                "会赢的":{
                    forced:true,
                    charlotte:true,
                    preHidden:true,
                    trigger:{
                        player:["loseHp","damageBegin3"],
                    },
                    async content(event, trigger, player) {
                        player.draw(1);
                    },
                },
                "升变":{
                    usable:1,
                    enable:"phaseUse",
                    filter(event, player) {
                        return player.getExpansions('chess').length >= 9;
                    },
                    async content(event, trigger, player) {
                        let x = 9 - player.maxHp;
                        if(x > 0) {
                            player.gainMaxHp(x);
                        }
                        player.recoverTo(9);
                        player.removeSkill("棋王");
                        player.removeSkill("会赢的");
                        player.removeSkill("升变");
                        player.addSkill("文翁校长");
                    },
                },
                "文翁校长":{
                    group:["文翁校长_加伤","文翁校长_减伤","文翁校长_抽牌","文翁校长_次数"],
                    subSkill:{
                        "加伤":{
                            forced:true,
                            charlotte:true,
                            preHidden:true,
                            trigger:{
                                source:"damageBegin1",
                            },
                            filter(event, player) {
                                return event.player.hp < player.hp;
                            },
                            async content(event, trigger, player) {
                                trigger.num ++;
                            },
                        },
                        "减伤":{
                            forced:true,
                            charlotte:true,
                            preHidden:true,
                            trigger:{
                                player:'damageBegin3',
                            },
                            filter(event, player) {
                                return event.source && event.source.hp > player.hp;
                            },
                            async content(event, trigger, player) {
                                trigger.num --;
                            }
                        },
                        "抽牌":{
                            trigger:{
                                player:"phaseDrawBegin2",
                            },
                            frequent:true,
                            filter(event,player){
                                return !event.numFixed;
                            },
                            async content(event,trigger,player){
                                trigger.num = game.players.length;
                            },
                            ai:{
                                threaten:10.0,
                            },
                            "_priority":0,
                        },
                        "次数":{
                            forced:true,
                            charlotte:true,
                            preHidden:true,
                            mod:{
                                cardUsableTarget:function(card,player,target){ //用牌没有次数限制
                                    return true;
                                },
                            },
                            "_priority":0,
                        }
                    },
                },
                "侠义":{
                    group:["侠义_biaoji","侠义_guanxing"],
                    subSkill:{
                        "biaoji":{
                            mark:true,
                            marktext:"侠",
                            forced:true,
                            charlotte:true,
                            preHidden:true,
                            intro: {
                                name: "侠",
                                mark(dialog, storage, player){
                                    // 自定义标记显示界面
                                    dialog.addText(String(player.storage.xia));
                                },
                            },
                            init(player){
                                player.storage.xia = 0;  // 初始化标记值
                            },
                            trigger:{
                                global:["dyingAfter","die"], //解除濒死状态，死亡
                            },
                            async content(event, trigger, player) {
                                player.storage.xia ++;
                                player.phase(); //立即执行额外回合
                                // player.insertPhase(); //这个是在回合结束后插入一个回合
                            },
                        },
                        "guanxing":{
                            trigger: {
                                player: "phaseZhunbeiBegin",
                            },
                            filter(event, player) {
                                return player.storage.xia > 0;
                            },
                            frequent: true,
                            preHidden: true,
                            async content(event, trigger, player) {
                                const num = player.hasSkill("yizhi") && player.hasSkill("guanxing") ? 5 : Math.min(5, game.countPlayer());
                                const result = await player.chooseToGuanxing(num)
                                    .set("prompt", "观星：点击或拖动将牌移动到牌堆顶或牌堆底")
                                    .forResult();
                                if (!result.bool || !result.moved[0].length) player.addTempSkill("guanxing_fail");
                                player.storage.xia --;
                            },
                            ai: {
                                threaten: 1.2,
                                guanxing: true,
                            },
                            "_priority": 0,
                        },
                    },
                },
                "独往":{
                    mod:{
                        globalFrom(from,to,distance){
                            return distance + 2;
                        },
                        globalTo(from,to,distance){
                            return distance + 2;
                        },
                    },
                },
                "藏锋":{
                    group:["藏锋_标记","藏锋_销毁","藏锋_升级"],
                    subSkill:{
                        "标记":{
                            mark: true,
                            marktext: "锋",
                            intro: {
                                name: "锋",
                                mark(dialog, storage, player){
                                    dialog.addText("藏锋牌数："+String(player.storage.cangfeng));
                                    dialog.addText("藏锋字数："+String(player.storage.cangfeng_num));
                                },
                            },
                            onremove: function (player, skill) {
                                let cards = player.getExpansions(skill);
                                if (cards.length) player.loseToDiscardpile(cards);
                            },
                            init(player) {
                                player.storage.cangfeng = 0;
                                player.storage.cangfeng_num = 0;
                            },
                            usable:100,
                            enable:"phaseUse",
                            async content(event, trigger, player) {
                                let hand_card_num = player.countCards('h');
                                let result = await player.chooseCard("h", [1, hand_card_num],
                                    "选择手牌铸造“钝刀”").set("ai",
                                        function (card) {
                                            if(Math.random() > 0.8) return true;
                                            return 3 - get.value(card);
                                }).forResult();
                                if(result.bool) {
                                    player.discard(result.cards);
                                    player.storage.cangfeng = result.cards.length;
                                    player.storage.cangfeng_num = 0;
                                    for(let i of result.cards) {
                                        player.storage.cangfeng_num += get.cardNameLength(i);
                                    }
                                    let num = Math.floor(Math.random() * 13) + 1;
                                    let suit = "diamond";
                                    let x = Math.random();
                                    if(x < 0.5 && x >= 0.25) {
                                        suit = "club";
                                    }
                                    else if(x < 0.75 && x >= 0.5) {
                                        suit = "heart";
                                    }
                                    else if(x >= 0.75) {
                                        suit = "spade";
                                    }
                                    //点数和花色是随机的
                                    let c = game.createCard2("钝刀",suit,num);
                                    player.$gain2(c);
                                    game.delayx();
                                    player.equip(c);
                                }
                            },
                        },
                        "销毁":{
                            trigger: {
                                global: ["loseEnd","cardsDiscardEnd"],
                            },
                            forced: true,
                            charlotte: true,
                            popup: false,
                            onremove: true,
                            filter: function (event, player) {
                                if (event.name == "lose" && event.position != ui.discardPile) return false;
                                for (var i of event.cards) {
                                    if (i.name == "钝刀" || i.name == "神兵") return true;
                                }
                                return false;
                            },
                            async content(event, trigger, player) {
                                var cards = [];
                                for (var i of trigger.cards) {
                                    if (i.name == "钝刀" || i.name == "神兵") {
                                        cards.push(i);
                                    }
                                }
                                game.cardsGotoSpecial(cards);
                                game.log(cards, "被移出了游戏");
                            },
                            "_priority": 0,
                        },
                        "升级":{
                            forced:true,
                            charlotte:true,
                            preHidden:true,
                            trigger: {
                                source: "damageBegin2",//伤害结算完成后
                            },
                            async content(event, trigger, player) {
                                const c = player.getEquips(1);
                                let hurt = trigger.num + player.storage.cangfeng_num;
                                if(hurt >= trigger.player.hp && c.length && c[0].name == "钝刀") {
                                    trigger.player.loseHp(trigger.player.hp - 1);
                                    player.discard(c);
                                    let tmp = game.createCard2("神兵",c[0].suit,c[0].num);
                                    player.$gain2(tmp);
                                    game.delayx();
                                    player.equip(tmp);
                                    trigger.player.changeHujia(hurt, "gain", hurt);
                                }
                            },
                        },
                    }
                },
                "dundao_skill":{
                    equipSkill: true,
                    group:["dundao_skill_distance","dundao_skill_attack"],
                    subSkill:{
                        "distance":{
                            forced: true,
                            mod: {
                                attackRange: function (player, num) {
                                    return num + player.storage.cangfeng;
                                },
                            },
                            "_priority": -25,
                        },
                        "attack":{
                            forced: true,
                            charlotte:true,
                            preHidden:true,
                            trigger: {
                                source: "damageBegin1",
                            },
                            filter: function (event) {
                                return true;
                            },
                            async content(event, trigger, player) {
                                trigger.num += player.storage.cangfeng_num;
                            },
                            ai: {
                                effect: {
                                    player: function (card, player, target, current, isLink) {
                                        if (
                                            card.name == "sha" &&
                                            !isLink &&
                                            target.countCards("h") == 0 &&
                                            !target.hasSkillTag("filterDamage", null, {
                                                player: player,
                                                card: card,
                                            })
                                        )
                                            return [1, 0, 1, -3];
                                    },
                                },
                                threaten:5,
                            },
                            "_priority": -25,
                        },
                    },
                },
                "shenbing_skill":{
                    equipSkill: true,
                    group:["shenbing_skill_target","shenbing_skill_distance"],
                    subSkill:{
                        "target":{
                            trigger: {
                                player: "useCard1",
                            },
                            forced: true,
                            firstDo: true,
                            filter: function (event, player) {
                                if (event.card.name != "sha") return false;
                                var card = event.card;
                                var range;
                                var select = get.copy(get.info(card).selectTarget);
                                if (select == undefined) {
                                    if (get.info(card).filterTarget == undefined) return false;
                                    range = [1, 1];
                                } else if (typeof select == "number") range = [select, select];
                                else if (get.itemtype(select) == "select") range = select;
                                else if (typeof select == "function") range = select(card, player);
                                game.checkMod(card, player, range, "selectTarget", player);
                                return range[1] != -1 && event.targets.length > range[1];
                            },
                            content: function () {},
                            mod: {
                                selectTarget: function (card, player, range) {
                                    if (card.name != "sha") return;
                                    if (range[1] == -1) return;
                                    var cards = player.getCards("h");
                                    if (!cards.length) return;
                                    for (var i = 0; i < cards.length; i++) {
                                        if (cards[i].classList.contains("selected") == false) return;
                                    }
                                    range[1] += 2;
                                },
                            },
                        },
                        "distance":{
                            forced: true,
                            mod: {
                                attackRange: function (player, num) {
                                    return num + player.storage.cangfeng;
                                },
                            },
                            "_priority": -25,
                        },
                    },
                },
                "导弹": {
                    charlotte: true,
                    preHidden: true,
                    forced: true,
                    mod: {
                        targetInRange: function (card) {
                            if (card.name == "sha") return true;
                        },
                    },
                    trigger: {
                        player: "useCard",
                    },
                    filter(event, player) {
                        return event.card.name == "sha";
                    },
                    async content(event, trigger, player) {
                        trigger.directHit.addArray(game.players);
                        game.log(trigger.card, "不可被响应");
                    },
                    "_priority": 0,
                },
                "美国农村":{
                    charlotte: true,
                    preHidden: true,
                    forced: true,
                    trigger: {
                        player: "damageBegin3",
                    },
                    filter(event, player) {
                        return event.player && get.distance(event.player, player) > 1;
                    },
                    async content(event, trigger, player) {
                        trigger.num = 0; //取消伤害
                    }
                },
                "中庸": {
                    charlotte: true,
                    preHidden: true,
                    forced: true,
                    trigger:{
                        player: ["lose", "loseHp"],
                    },
                    filter(event, player) {
                        let evt = event.getParent('phaseUse');
                        if(evt && evt.player == player) { //用牌不行的
                            return false;
                        }
                        return true;
                    },
                    async content(event, trigger, player) {
                        player.draw(trigger.num);
                    }
                },
                "拉球": {
                        group:["拉球_damage","拉球_distance"],
                        subSkill:{
                            "damage":{
                                trigger: {
                                    source:"damageBegin1"
                                },
                                charlotte: true,
                                preHidden: true,
                                forced: true,
                                async content(event, trigger, player) {
                                    let x = player.maxHp - player.hp;
                                    trigger.num += x;
                                }
                            },
                            "distance":{
                                mod:{
                                    attackRange(player, num) {
                                        let x = player.maxHp - player.hp;
                                        return num + x;
                                    },
                                }
                            },
                        },                                              
                        "_priority": 0,
                },
                "53": {
                    group:["53_handcards", "53_chusha"],
                    subSkill:{
                        "handcards":{
                            mod: {
                                maxHandcard(player, num) {
                                    return 5; 
                                },
                            },
                        },
                        "chusha":{
                            forced:true,
                            charlotte:true,
                            preHidden:true,
                            trigger:{
                                player:"dying",
                            },
                            async content(event, trigger, player) {
                                for(let i = 0; i < 3; i ++) {
                                    let result = await player.chooseTarget('对一名角色使用虚拟的杀',function(card, player, target) {
                                        return player != target && player.inRange(target);
                                    }, true).forResult();
                                    if(result.bool) {
                                        let target = result.targets[0];
                                        const card = new lib.element.VCard({name:'sha'});
                                        player.useCard(card, target);
                                    }
                                }
                            },
                        }
                    },
                    "_priority":0,
                },
                "亚手": {
                    charlotte: true,
                    preHidden: true,
                    forced: true,
                    trigger: {
                        global:["phaseZhunbeiBegin", "dieAfter"],
                    },
                    filter(event, player) {
                        return game.players.length == 2;
                    },
                    async content(event, trigger, player) {
                        player.die();
                    },
                    "_priority": 0,
                },
                "强攻": {
                    mod: {
                        cardUsable:function(card, player, num) {
                            if(card.name == "sha") {
                                return Infinity;
                            }                            
                        }
                    },
                    "_priority": 0,                   
                },
                "manage": {
                    enable: [
                        "chooseToRespond", "chooseToUse",
                    ],
                    filterCard: function(card) {
                        return true;
                    },
                    position: "he",
                    viewAs: {name: "sha",},
                    viweAsFilter: function(player) {
                        return player.countCards > 0;
                    },
                    check: function(card) {
                        return true;
                    },
                    trigger: {
                        player: "respond",
                    },
                    async content(event, trigger, player) {
                        let x = player.hp - 1;
                        player.loseHp(x);
                    },
                    "_priority": 0,
                },
                "权力": {
                    forced: true,
                    charlotte: true,
                    preHidden: true,
                    trigger: {
                        source:"damageEnd",
                    },
                    filter(event, player) {
                        return true;
                        // return event.player != player;
                    },
                    async content(event, trigger, player){
                       player.draw(trigger.num);
                    },
                    "_priority": 0,
                },
                "堡垒": {
                    group:["堡垒_distance","堡垒_shoushang"],
                    subSkill: {
                        "distance": {
                            charlotte: true,
                            preHidden: true,
                            forced: true,
                            mod: {
                                attackRange(player, num) {
                                    return num - 1;
                                },
                            }
                        },
                        "shoushang": {
                            trigger: {
                                player: "damageBegin3"
                            },
                            charlotte: true,
                            preHidden: true,
                            forced: true,
                            filter(event, player){
                                for(let p of game.players) {
                                    if(p != player && player.inRange(p)) {
                                        return false;
                                    }
                                }
                                return player.countCards('h') <= 1;
                            },
                            async content(event, trigger, player) {
                                trigger.num -- ;
                            }
                        },
                    },
                    "_priority": 0,
                },
                "强大轰鸣": {
                    enable: [
                        "chooseToRespond","chooseToUse"
                    ],
                    filterCard(card, player) {
                        return get.color(card) == "red";
                    },
                    position: "he",
                    viewAs: {name: "wanjian"},
                    viewAsFilter(player) {
                        return player.countCards("he", {color: "red"}) > 0;
                    },
                    "_priority": 0,
                },
                "言语威胁": {
                    usabel: 1,
                    preHidden: true,
                    charlotte: true,                                        
                    // trigger: {
                    //     enable: ["chooseToRespond","chooseToUse"],
                    // },
                    enable: [
                        "chooseToRespond","chooseToUse"
                    ],
                    intro: {
                        content: true,
                    },
                    check(event, player) {
                        return true;
                    },
                    filterCard: function(card) {
                        return true;
                    },
                    position: "he",
                    viewAs: {name: "lebu"},
                    viewAsFilter(player) {
                        return player.countCards() > 0;
                    },
                    trigger: {
                        player: "useCard1",
                    },
                    async content(event, trigger, player) {
                        if(player.hasSkill("言语威胁")) {
                            player.removeSkill("言语威胁");
                        }
                    },
                    "_priority": 0,
                },
                "不止于此": {
                    forced: true,
                    charlotte: true,
                    preHidden :true,
                    trigger: {
                        source: "damageEnd",
                    },
                    filter(event, player) {
                        return event.cards && event.cards.length > 0;
                    },
                    async content(event, trigger, player){
                        let result = await player.judge();
                        if(result.color == "red") {
                            await player.gain(trigger.card);
                            await player.draw(1);
                        }
                    },
                    "_priority": 0,
                },
                "身强体壮": {
                    
                },
                "生存权利": {
                    forceDie: true,
                    trigger: {
                        player: "die"
                    },
                    async content(event, trigger, player) {
                        let result = await player.chooseTarget("请选择一名角色",function(card, player, target) {
                            return player != target && target.countCards("h") > 0;
                        }, true).forResult();
                        if(result.bool) {
                            let x = target.countCards("h");
                            target.chooseToDiscard(x, true);
                        }
                    },
                    "_priority": 0,
                },
            },
            characterSort: {
                EKOL: {
                    student: ["Goth", "手乒团队", "金", "logn", "小芸", "久","殷主任","manager"],
                    rong: ["维罗妮卡"],
                    teacher:["红", "四血摸八", "百血白板", "岳岭"],
                    shen:["木子心兑", "翻山", "易文", "柳芸潘","强哥"],
                    island:["黄色废料"],
                    beauty:["navy"],
                    chivalrous:["侠小芸"],
                },
            },
            translate: {
                EKOL: "八班杀",
                //before all
                student: "生",
                teacher:"师",
                rong:"绒",
                island:"岛",
                beauty:"美",
                //prefix
                navy:"navy",
                "易文":"易文",
                "维罗妮卡":"维罗妮卡",
                "手乒团队":"手乒团队",
                "翻山":"翻山",
                "木子心兑":"木子心兑",
                Goth:"Goth",
                "百血白板":"百血白板",
                "四血摸八":"四血摸八",
                "红":"红",
                "黄色废料":"黄色废料",
                "金":"金",
                logn:"logn",
                "小芸":"小芸",
                "柳芸潘":"柳芸潘",
                "久":"久",
                "侠小芸":"侠小芸",
                "岳岭":"岳岭",
                "殷主任":"殷主任",
                "manager":"manager",
                //character
                "摸一摸":"摸一摸",
                "摸一摸_info":"回合开始，摸5.",
                dictation:"dictation",
                "dictation_info":"你的出牌阶段，可以红牌当乐。",
                "get_out":"get_out",
                "get_out_info":"别人到你的距离+1。",
                revision:"revision",
                "revision_info":"限定技，你的出牌阶段，选择一名角色，其需展示和牌堆顶 3 张同花色的 3 张不同手牌，否则体力 -2。",
                "飞柱":"飞柱",
                "飞柱_info":"你的攻击范围-1。",
                "更加可爱":"更加可爱",
                "更加可爱_info":"你受到男性角色的伤害时，其弃 1 张牌。",
                "富有":"富有",
                "富有_info":"你的抽牌阶段，你抽 4 张牌。",
                "沉默":"沉默",
                "沉默_info":"锁定技，对你造成伤害的角色本回合不能使用锦囊牌。",
                test:"test",
                "test_info":"test",
                disableTrick:"沉默",
                "disableTrick_info":"本回合不能使用锦囊牌",
                competition:"competition",
                "competition_info":"你的出牌阶段，可以红牌当【决斗】使用。",
                "徭役":"徭役",
                "徭役_info":"你的出牌阶段，可以黑牌当【兵粮寸断】。",
                "税收":"税收",
                "税收_info":"你的第 x 个回合，你抽 x 张牌。",
                "群英":"群英",
                "群英_info":"游戏开始时，你的体力和体力上限变为场上“生”前缀角色数+3。",
                "算卦":"算卦",
                "算卦_info":"如果【推演】失效，你可选择一名角色，如果其手牌有桃，你回满体力，其弃置除“桃”外的所有手牌。",
                "推演":"推演",
                "推演_info":"如果【明占】失效，你进行一次判定，为黑色则免疫此伤害。",
                "明占":"明占",
                "明占_info":"你受到伤害濒死时，你体力上限 +1，翻开牌堆顶 5 张牌，如恰有 1 张♥，你可转移此伤害；如有 2/3 张♥，你回复等量体力。",
                "星移":"星移",
                "星移_info":"有人成为黑色杀的目标时，你可代替之",
                "物种多样性":"物种多样性",
                "物种多样性_info":"你的出牌阶段限一次，所有人展示一张手牌，如每有一个不同的名字，你抽1张牌。",
                "下楼钓鱼":"下楼钓鱼",
                "下楼钓鱼_info":"你获得【章鱼玩偶】，【普通朋友】，然后失去【下楼钓鱼】，回合结束时翻面。",
                "舌战群辱":"舌战群辱",
                "舌战群辱_info":"你的出牌阶段限一次，将别的玩家视为一个整体决斗，你先出，如果你输了，视为你使用一张【无中生有】，否则所有人体力-1。",
                "误会":"误会",
                "误会_info":"你的出牌阶段限一次，给一名角色你的一张手牌，其弃3张牌。",
                "章鱼玩偶":"章鱼玩偶",
                "章鱼玩偶_info":"你获得所有人的所有手牌，然后你失去【章鱼玩偶】。",
                "普通朋友":"普通朋友",
                "普通朋友_info":"你的出牌阶段限一次，你可以选择一名角色，其选择：1. 给你 x 张牌；2. 你给其 x 张牌。如果 x 不少于 3，给出牌的人恢复 1 点体力。",
                "注意力集中":"注意力集中",
                "注意力集中_info":"锁定技，别人在抽牌阶段外抽牌时，你抽等量牌。",
                "凯特校长":"凯特校长",
                "凯特校长_info":"你的出牌阶段开始前，可以跳过本回合。",
                "耐冲王":"耐冲王",
                "耐冲王_info":"你的出牌阶段发动，弃置所有非伤害牌，抽等量牌（至多为10），本回合使用牌没有次数和距离限制，本回合结束时，你出局。",
                "无限8":"无限8",
                "无限8_info":"你使用牌没有次数和距离限制。",
                "冲死8":"冲死8",
                "冲死8_info":"回合结束时，你出局。",
                "摸八大人":"摸八大人",
                "摸八大人_info":"四血摸八大人。",
                "零点":"零点",
                "零点_info":"你游戏开始时获得 8 张有“零点”标记的牌，不计入手牌上限。",
                "指数递增":"指数递增",
                "指数递增_info":"你的第 x 个回合开始时，你体力和体力上限 +2^(x-1)。",
                "岛主":"岛主",
                "岛主_info":"游戏开始时，你获得 2 枚“岛”标记。你失去手牌时，获得等量“岛”标记，使用手牌时，失去 1 枚“岛”。",
                "上岛":"上岛",
                "上岛_info":"你濒死时，进行判定，为黑色，“岛”标记数变为0，抽其两倍数量的牌；为红色，抽“岛”数目的牌。",
                "飞行":"飞行",
                "飞行_info":"所有人到你的距离 +4",
                "赏花":"赏花",
                "赏花_info":"你的出牌阶段，可以将任意张手牌加入“花”。你的结束阶段，可以将“花”交给任意一名角色。",
                "茎":"茎",
                "茎_info":"你的出牌阶段，你可以弃置 3 张“花”，然后选择一名角色，你观看其手牌，并选择一张弃置。",
                "必将施行":"必将施行",
                "必将施行_info":"锁定技，有人使用普通锦囊牌以你为对象时，你获得一张同样的牌（除了【顺手牵羊】）（转化牌你获得原本的牌）。",
                "举报":"举报",
                "举报_info":"当你受到导致濒死的伤害时，来源没有手牌，你恢复至 1 体力；来源有手牌且体力不为 1，你们体力均变为 1；否则，你出局，其体力变为 0，其进行 2 次判定，花色相同则出局。",
                "正义":"正义",
                "正义_info":"你的出牌阶段限一次，你可选择一名角色，其选择：1. 对你使用 1 张【杀】/【决斗】；2. 给你 1 张【杀】/【决斗】；3. 失去 1 点体力。",
                "佳人":"佳人",
                "佳人_info":"判定时，你可以决定自己的性别",
                "桃色":"桃色",
                "桃色_info":"锁定技，你的回合开始时，你进行判定，直到出现♠牌，你获得其中所有红色牌，恢复♥牌数目的体力。（至多重复 16 次）",
                "懒得上线":"懒得上线",
                "懒得上线_info":"你每有 2 张手牌/装备，别人到你的距离 +1。",
                "芸手杯":"芸手杯",
                "芸手杯_info":"一次伤害造成时，你可以进行一次判定，如果为 J/Q/K，此伤害 +1。",
                "能量":"能量",
                "能量_info":"游戏开始时，你获得 3 枚“能量”标记。你弃牌阶段，你获得弃置牌等量的“能量”标记。",
                "芸手":"芸手",
                "芸手_info":"你的抽牌阶段，你每有 3 枚“能量”，多抽 1 张牌。",
                "芸脚":"芸脚",
                "芸脚_info":"你的出牌阶段，可以失去 X 枚“能量”，获得【佳人】/【桃色】/【懒得上线】中的一个技能。（X 为你的技能数+3）",
                "无为":"无为",
                "无为_info":"你需要打出【无懈可击】时，可以失去 1 枚“能量”，视为你打出了一张【无懈可击】。",
                "棋王":"棋王",
                "棋王_info":"你的出牌阶段，可以将任意张手牌加入‘棋’。",
                "会赢的":"会赢的",
                "会赢的_info":"你每次失去体力，抽 1 张牌",
                "升变":"升变",
                "升变_info":"当你的棋不少于 9 张时，可以失去【棋王】【会赢的】【升变】，获得【文翁校长】",
                "文翁校长":"文翁校长",
                "文翁校长_info":"你的体力和体力上限变为 9，你的抽牌阶段，你抽场上人数张牌。体力高于你的人对你的伤害-1，你对体力低于你的人的伤害+1。",
                "侠义":"侠义",
                "侠义_info":"当场上有角色进入濒死，在濒死结算后立即进入你的回合，以此法获得的回合里你拥有【观星】。",
                "独往":"独往",
                "独往_info":"锁定技，你与别人的距离，别人与你的距离+2",
                "藏锋":"藏锋",
                "藏锋_info":"你可将x张手牌重铸为一张攻击范围为x的“钝刀”",
                "钝刀":"钝刀",
                "钝刀_info":"武器，攻击范围x，技能：你可将x张牌当作一张伤害+这些牌的总字数的杀打出，当你使用杀对其他角色造成濒死伤害时，你弃置此牌将其体力回复至1点，并获得武器【神兵】",
                "dundao_skill":"",
                "dundao_skill_info":"",
                "神兵":"神兵",
                "神兵_info":"武器，攻击范围与弃置的钝刀相等。技能：你使用的伤害牌可以多指定一个目标，且不可响应。当该武器离开你的装备区时，弃置之。",
                "导弹":"导弹",
                "导弹_info":"",
                "美国农村":"美国农村",
                "美国农村_info":"",
                "中庸":"中庸",
                "中庸_info":"",
                "拉球":"拉球",
                "拉球_info":"锁定技，你造成的伤害 +x   攻击距离 +x   x = 你的体力上限 - 当前体力值 。",
                "53":"53",
                "53_info":"锁定技，你的手牌上限恒为 5 ；当你濒死时，可以出 3 张 【杀】。",
                "亚手":"亚手",
                "亚手_info":"锁定技，当只有 2 名玩家未出局时，你出局。",
                "强攻":"强攻",
                "强攻_info":"锁定技，你使用 【杀】 无次数限制。",
                "manage":"manage",
                "manage_info":"你可以把任意牌当 【杀】 打出，然后，你立刻将体力变为 1 。",
                "权力":"权力",
                "权力_info":"锁定技，你每造成 1 点伤害，就抽 1 张牌。",
                "堡垒":"堡垒",
                "堡垒_info":"锁定技，你的攻击距离 -1 ；当你的攻击范围内没有角色时，你受到的伤害 -1 。",
                "强大轰鸣":"强大轰鸣",
                "强大轰鸣_info":"你可将任意一张红色牌当 【万箭齐发】 打出/使用。",
                "言语威胁":"言语威胁",
                "言语威胁_info":"限定技，你可将任意一张牌当 【乐不思蜀】 打出/使用。",
                "不止于此":"不止于此",
                "不止于此_info":"锁定技，若强哥打出的牌造成伤害，在其结算完成后，进行一次判定，若结果为红色，则你获得造成伤害的牌，并抽 1 张牌。",
                "身强体壮":"身强体壮",
                "身强体壮_info":"锁定技，强哥的武器为 【定海神针】，不可被移除或更换。",
                "生存权利":"生存权利",
                "生存权利_info":"你出局时，可让一位角色失去所有手牌。",
            },
        },
        (lib, game, ui, get, ai, _status) => {
            const faction_datas = {
                student: {
                    color: "#CE8397",
                    translate: "生",
                },
                rong:{
                    color: "#54FF9F",
                    translate: "绒",
                },
                teacher:{
                    color: "#54FF9F",
                    translate: "师",
                },
                island:{
                    color: "#54FF9F",
                    translate: "岛",
                },
                beauty:{
                    color: "#54FF9F",
                    translate: "美",
                },
                chivalrous:{
                    color:"#54FF9F",
                    translate: "侠",
                }
            };
            for (const i in faction_datas) {
                lib.group.push(i);
                lib.translate[i] = faction_datas[i].translate;
                lib.translate[`${i}Color`] = faction_datas[i].color;
            }
        }
    );
},help:{},config:{},package:{
    character: {
        character: {
        },
        translate: {
        },
    },
    card: {
        card: {
        },
        translate: {
        },
        list: [],
    },
    skill: {
        skill: {
        },
        translate: {
        },
    },
    intro: "",
    author: "空中楼阁",
    diskURL: "",
    forumURL: "",
    version: "1.0",
},files:{"character":[],"card":[],"skill":[],"audio":[]}}
});