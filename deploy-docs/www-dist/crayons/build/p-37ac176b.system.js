System.register(["./p-6fb516eb.system.js"],(function(a){"use strict";var i,e,n,t;return{setters:[function(a){i=a.b;e=a.a;n=a.c;t=a.d}],execute:function(){var r={lessThanXSeconds:{one:"nas lugha na diog",other:"nas lugha na {{count}} diogan"},xSeconds:{one:"1 diog",two:"2 dhiog",twenty:"20 diog",other:"{{count}} diogan"},halfAMinute:"leth mhionaid",lessThanXMinutes:{one:"nas lugha na mionaid",other:"nas lugha na {{count}} mionaidean"},xMinutes:{one:"1 mionaid",two:"2 mhionaid",twenty:"20 mionaid",other:"{{count}} mionaidean"},aboutXHours:{one:"mu uair de thìde",other:"mu {{count}} uairean de thìde"},xHours:{one:"1 uair de thìde",two:"2 uair de thìde",twenty:"20 uair de thìde",other:"{{count}} uairean de thìde"},xDays:{one:"1 là",other:"{{count}} là"},aboutXWeeks:{one:"mu 1 seachdain",other:"mu {{count}} seachdainean"},xWeeks:{one:"1 seachdain",other:"{{count}} seachdainean"},aboutXMonths:{one:"mu mhìos",other:"mu {{count}} mìosan"},xMonths:{one:"1 mìos",other:"{{count}} mìosan"},aboutXYears:{one:"mu bhliadhna",other:"mu {{count}} bliadhnaichean"},xYears:{one:"1 bhliadhna",other:"{{count}} bliadhna"},overXYears:{one:"còrr is bliadhna",other:"còrr is {{count}} bliadhnaichean"},almostXYears:{one:"cha mhòr bliadhna",other:"cha mhòr {{count}} bliadhnaichean"}};function d(a,i,e){e=e||{};var n;if(typeof r[a]==="string"){n=r[a]}else if(i===1){n=r[a].one}else if(i===2&&!!r[a].two){n=r[a].two}else if(i===9&&!!r[a].nine){n=r[a].nine}else if(i===20&&!!r[a].twenty){n=r[a].twenty}else if(i===30&&!!r[a].thirty){n=r[a].thirty}else{n=r[a].other.replace("{{count}}",i)}if(e.addSuffix){if(e.comparison>0){return"ann an "+n}else{return"o chionn "+n}}return n}var h={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"};var o={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"};var m={full:"{{date}} 'aig' {{time}}",long:"{{date}} 'aig' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"};var s={date:i({formats:h,defaultWidth:"full"}),time:i({formats:o,defaultWidth:"full"}),dateTime:i({formats:m,defaultWidth:"full"})};var u={lastWeek:"'mu dheireadh' eeee 'aig' p",yesterday:"'an-dè aig' p",today:"'an-diugh aig' p",tomorrow:"'a-màireach aig' p",nextWeek:"eeee 'aig' p",other:"P"};function l(a,i,e,n){return u[a]}var c={narrow:["R","A"],abbreviated:["RC","AD"],wide:["ro Chrìosta","anno domini"]};var f={narrow:["1","2","3","4"],abbreviated:["C1","C2","C3","C4"],wide:["a' chiad chairteal","an dàrna cairteal","an treas cairteal","an ceathramh cairteal"]};var g={narrow:["F","G","M","G","C","Ò","I","L","S","D","S","D"],abbreviated:["Faoi","Gear","Màrt","Gibl","Cèit","Ògmh","Iuch","Lùn","Sult","Dàmh","Samh","Dùbh"],wide:["Am Faoilleach","An Gearran","Am Màrt","An Giblean","An Cèitean","An t-Ògmhios","An t-Iuchar","An Lùnastal","An t-Sultain","An Dàmhair","An t-Samhain","An Dùbhlachd"]};var v={narrow:["D","L","M","C","A","H","S"],short:["Dò","Lu","Mà","Ci","Ar","Ha","Sa"],abbreviated:["Did","Dil","Dim","Dic","Dia","Dih","Dis"],wide:["Didòmhnaich","Diluain","Dimàirt","Diciadain","Diardaoin","Dihaoine","Disathairne"]};var b={narrow:{am:"m",pm:"f",midnight:"m.o.",noon:"m.l.",morning:"madainn",afternoon:"feasgar",evening:"feasgar",night:"oidhche"},abbreviated:{am:"M.",pm:"F.",midnight:"meadhan oidhche",noon:"meadhan là",morning:"madainn",afternoon:"feasgar",evening:"feasgar",night:"oidhche"},wide:{am:"m.",pm:"f.",midnight:"meadhan oidhche",noon:"meadhan là",morning:"madainn",afternoon:"feasgar",evening:"feasgar",night:"oidhche"}};var w={narrow:{am:"m",pm:"f",midnight:"m.o.",noon:"m.l.",morning:"sa mhadainn",afternoon:"feasgar",evening:"feasgar",night:"air an oidhche"},abbreviated:{am:"M.",pm:"F.",midnight:"meadhan oidhche",noon:"meadhan là",morning:"sa mhadainn",afternoon:"feasgar",evening:"feasgar",night:"air an oidhche"},wide:{am:"m.",pm:"f.",midnight:"meadhan oidhche",noon:"meadhan là",morning:"sa mhadainn",afternoon:"feasgar",evening:"feasgar",night:"air an oidhche"}};function y(a,i){var e=Number(a);var n=e%100;if(n>20||n<10){switch(n%10){case 1:return e+"d";case 2:return e+"na"}}if(n===12){return e+"na"}return e+"mh"}var M={ordinalNumber:y,era:e({values:c,defaultWidth:"wide"}),quarter:e({values:f,defaultWidth:"wide",argumentCallback:function a(i){return Number(i)-1}}),month:e({values:g,defaultWidth:"wide"}),day:e({values:v,defaultWidth:"wide"}),dayPeriod:e({values:b,defaultWidth:"wide",formattingValues:w,defaultFormattingWidth:"wide"})};var p=/^(\d+)(d|na|tr|mh)?/i;var D=/\d+/i;var W={narrow:/^(r|a)/i,abbreviated:/^(r\.?\s?c\.?|r\.?\s?a\.?\s?c\.?|a\.?\s?d\.?|a\.?\s?c\.?)/i,wide:/^(ro Chrìosta|ron aois choitchinn|anno domini|aois choitcheann)/i};var P={any:[/^b/i,/^(a|c)/i]};var A={narrow:/^[1234]/i,abbreviated:/^c[1234]/i,wide:/^[1234](cd|na|tr|mh)? cairteal/i};var C={any:[/1/i,/2/i,/3/i,/4/i]};var S={narrow:/^[fgmcòilsd]/i,abbreviated:/^(faoi|gear|màrt|gibl|cèit|ògmh|iuch|lùn|sult|dàmh|samh|dùbh)/i,wide:/^(am faoilleach|an gearran|am màrt|an giblean|an cèitean|an t-Ògmhios|an t-Iuchar|an lùnastal|an t-Sultain|an dàmhair|an t-Samhain|an dùbhlachd)/i};var x={narrow:[/^f/i,/^g/i,/^m/i,/^g/i,/^c/i,/^ò/i,/^i/i,/^l/i,/^s/i,/^d/i,/^s/i,/^d/i],any:[/^fa/i,/^ge/i,/^mà/i,/^gi/i,/^c/i,/^ò/i,/^i/i,/^l/i,/^su/i,/^d/i,/^sa/i,/^d/i]};var k={narrow:/^[dlmcahs]/i,short:/^(dò|lu|mà|ci|ar|ha|sa)/i,abbreviated:/^(did|dil|dim|dic|dia|dih|dis)/i,wide:/^(didòmhnaich|diluain|dimàirt|diciadain|diardaoin|dihaoine|disathairne)/i};var X={narrow:[/^d/i,/^l/i,/^m/i,/^c/i,/^a/i,/^h/i,/^s/i],any:[/^d/i,/^l/i,/^m/i,/^c/i,/^a/i,/^h/i,/^s/i]};var z={narrow:/^(a|p|mi|n|(san|aig) (madainn|feasgar|feasgar|oidhche))/i,any:/^([ap]\.?\s?m\.?|meadhan oidhche|meadhan là|(san|aig) (madainn|feasgar|feasgar|oidhche))/i};var F={any:{am:/^m/i,pm:/^f/i,midnight:/^meadhan oidhche/i,noon:/^meadhan là/i,morning:/sa mhadainn/i,afternoon:/feasgar/i,evening:/feasgar/i,night:/air an oidhche/i}};var G={ordinalNumber:n({matchPattern:p,parsePattern:D,valueCallback:function a(i){return parseInt(i,10)}}),era:t({matchPatterns:W,defaultMatchWidth:"wide",parsePatterns:P,defaultParseWidth:"any"}),quarter:t({matchPatterns:A,defaultMatchWidth:"wide",parsePatterns:C,defaultParseWidth:"any",valueCallback:function a(i){return i+1}}),month:t({matchPatterns:S,defaultMatchWidth:"wide",parsePatterns:x,defaultParseWidth:"any"}),day:t({matchPatterns:k,defaultMatchWidth:"wide",parsePatterns:X,defaultParseWidth:"any"}),dayPeriod:t({matchPatterns:z,defaultMatchWidth:"any",parsePatterns:F,defaultParseWidth:"any"})};var L=a("default",{code:"gd",formatDistance:d,formatLong:s,formatRelative:l,localize:M,match:G,options:{weekStartsOn:0,firstWeekContainsDate:1}})}}}));