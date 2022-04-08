System.register(["./p-c66836e9.system.js"],(function(e){"use strict";var a,t,r,n;return{setters:[function(e){a=e.b;t=e.a;r=e.c;n=e.d}],execute:function(){var i={lessThanXSeconds:{singular:"mindre enn ett sekund",plural:"mindre enn {{count}} sekunder"},xSeconds:{singular:"ett sekund",plural:"{{count}} sekunder"},halfAMinute:"et halvt minutt",lessThanXMinutes:{singular:"mindre enn ett minutt",plural:"mindre enn {{count}} minutter"},xMinutes:{singular:"ett minutt",plural:"{{count}} minutter"},aboutXHours:{singular:"omtrent en time",plural:"omtrent {{count}} timer"},xHours:{singular:"en time",plural:"{{count}} timer"},xDays:{singular:"en dag",plural:"{{count}} dager"},aboutXWeeks:{singular:"omtrent en uke",plural:"omtrent {{count}} uker"},xWeeks:{singular:"en uke",plural:"{{count}} uker"},aboutXMonths:{singular:"omtrent en måned",plural:"omtrent {{count}} måneder"},xMonths:{singular:"en måned",plural:"{{count}} måneder"},aboutXYears:{singular:"omtrent ett år",plural:"omtrent {{count}} år"},xYears:{singular:"ett år",plural:"{{count}} år"},overXYears:{singular:"over ett år",plural:"over {{count}} år"},almostXYears:{singular:"nesten ett år",plural:"nesten {{count}} år"}};function d(e,a,t){t=t||{};var r=i[e];var n;if(typeof r==="string"){n=r}else if(a===0||a>1){n=r.plural.replace("{{count}}",a)}else{n=r.singular}if(t.addSuffix){if(t.comparison>0){return"om "+n}else{return n+" siden"}}return n}var u={full:"EEEE d. MMMM y",long:"d. MMMM y",medium:"d. MMM y",short:"dd.MM.y"};var o={full:"'kl'. HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"};var s={full:"{{date}} 'kl.' {{time}}",long:"{{date}} 'kl.' {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"};var m={date:a({formats:u,defaultWidth:"full"}),time:a({formats:o,defaultWidth:"full"}),dateTime:a({formats:s,defaultWidth:"full"})};var l={lastWeek:"'forrige' eeee 'kl.' p",yesterday:"'i går kl.' p",today:"'i dag kl.' p",tomorrow:"'i morgen kl.' p",nextWeek:"EEEE 'kl.' p",other:"P"};function f(e,a,t,r){return l[e]}var g={narrow:["f.Kr.","e.Kr."],abbreviated:["f.Kr.","e.Kr."],wide:["før Kristus","etter Kristus"]};var v={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1. kvartal","2. kvartal","3. kvartal","4. kvartal"]};var p={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["jan.","feb.","mars","apr.","mai","juni","juli","aug.","sep.","okt.","nov.","des."],wide:["januar","februar","mars","april","mai","juni","juli","august","september","oktober","november","desember"]};var h={narrow:["S","M","T","O","T","F","L"],short:["sø","ma","ti","on","to","fr","lø"],abbreviated:["søn","man","tir","ons","tor","fre","lør"],wide:["søndag","mandag","tirsdag","onsdag","torsdag","fredag","lørdag"]};var c={narrow:{am:"a",pm:"p",midnight:"midnatt",noon:"middag",morning:"på morg.",afternoon:"på etterm.",evening:"på kvelden",night:"på natten"},abbreviated:{am:"a.m.",pm:"p.m.",midnight:"midnatt",noon:"middag",morning:"på morg.",afternoon:"på etterm.",evening:"på kvelden",night:"på natten"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnatt",noon:"middag",morning:"på morgenen",afternoon:"på ettermiddagen",evening:"på kvelden",night:"på natten"}};function b(e){var a=Number(e);return a+"."}var k={ordinalNumber:b,era:t({values:g,defaultWidth:"wide"}),quarter:t({values:v,defaultWidth:"wide",argumentCallback:function e(a){return Number(a)-1}}),month:t({values:p,defaultWidth:"wide"}),day:t({values:h,defaultWidth:"wide"}),dayPeriod:t({values:c,defaultWidth:"wide"})};var w=/^(\d+)\.?/i;var y=/\d+/i;var M={narrow:/^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i,abbreviated:/^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i,wide:/^(før Kristus|før vår tid|etter Kristus|vår tid)/i};var W={any:[/^f/i,/^e/i]};var j={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](\.)? kvartal/i};var P={any:[/1/i,/2/i,/3/i,/4/i]};var K={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mars?|apr|mai|juni?|juli?|aug|sep|okt|nov|des)\.?/i,wide:/^(januar|februar|mars|april|mai|juni|juli|august|september|oktober|november|desember)/i};var x={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^mai/i,/^jun/i,/^jul/i,/^aug/i,/^s/i,/^o/i,/^n/i,/^d/i]};var H={narrow:/^[smtofl]/i,short:/^(sø|ma|ti|on|to|fr|lø)/i,abbreviated:/^(søn|man|tir|ons|tor|fre|lør)/i,wide:/^(søndag|mandag|tirsdag|onsdag|torsdag|fredag|lørdag)/i};var E={any:[/^s/i,/^m/i,/^ti/i,/^o/i,/^to/i,/^f/i,/^l/i]};var X={narrow:/^(midnatt|middag|(på) (morgenen|ettermiddagen|kvelden|natten)|[ap])/i,any:/^([ap]\.?\s?m\.?|midnatt|middag|(på) (morgenen|ettermiddagen|kvelden|natten))/i};var S={any:{am:/^a(\.?\s?m\.?)?$/i,pm:/^p(\.?\s?m\.?)?$/i,midnight:/^midn/i,noon:/^midd/i,morning:/morgen/i,afternoon:/ettermiddag/i,evening:/kveld/i,night:/natt/i}};var z={ordinalNumber:r({matchPattern:w,parsePattern:y,valueCallback:function e(a){return parseInt(a,10)}}),era:n({matchPatterns:M,defaultMatchWidth:"wide",parsePatterns:W,defaultParseWidth:"any"}),quarter:n({matchPatterns:j,defaultMatchWidth:"wide",parsePatterns:P,defaultParseWidth:"any",valueCallback:function e(a){return a+1}}),month:n({matchPatterns:K,defaultMatchWidth:"wide",parsePatterns:x,defaultParseWidth:"any"}),day:n({matchPatterns:H,defaultMatchWidth:"wide",parsePatterns:E,defaultParseWidth:"any"}),dayPeriod:n({matchPatterns:X,defaultMatchWidth:"any",parsePatterns:S,defaultParseWidth:"any"})};var N=e("default",{code:"nb",formatDistance:d,formatLong:m,formatRelative:f,localize:k,match:z,options:{weekStartsOn:1,firstWeekContainsDate:4}})}}}));