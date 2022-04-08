System.register(["./p-6fb516eb.system.js"],(function(e){"use strict";var t,n,a,r;return{setters:[function(e){t=e.b;n=e.a;a=e.c;r=e.d}],execute:function(){var o={lessThanXSeconds:{one:"أقل من ثانية",two:"أقل من زوز ثواني",threeToTen:"أقل من {{count}} ثواني",other:"أقل من {{count}} ثانية"},xSeconds:{one:"ثانية",two:"زوز ثواني",threeToTen:"{{count}} ثواني",other:"{{count}} ثانية"},halfAMinute:"نص دقيقة",lessThanXMinutes:{one:"أقل من دقيقة",two:"أقل من دقيقتين",threeToTen:"أقل من {{count}} دقايق",other:"أقل من {{count}} دقيقة"},xMinutes:{one:"دقيقة",two:"دقيقتين",threeToTen:"{{count}} دقايق",other:"{{count}} دقيقة"},aboutXHours:{one:"ساعة تقريب",two:"ساعتين تقريب",threeToTen:"{{count}} سوايع تقريب",other:"{{count}} ساعة تقريب"},xHours:{one:"ساعة",two:"ساعتين",threeToTen:"{{count}} سوايع",other:"{{count}} ساعة"},xDays:{one:"نهار",two:"نهارين",threeToTen:"{{count}} أيام",other:"{{count}} يوم"},aboutXWeeks:{one:"جمعة تقريب",two:"جمعتين تقريب",threeToTen:"{{count}} جماع تقريب",other:"{{count}} جمعة تقريب"},xWeeks:{one:"جمعة",two:"جمعتين",threeToTen:"{{count}} جماع",other:"{{count}} جمعة"},aboutXMonths:{one:"شهر تقريب",two:"شهرين تقريب",threeToTen:"{{count}} أشهرة تقريب",other:"{{count}} شهر تقريب"},xMonths:{one:"شهر",two:"شهرين",threeToTen:"{{count}} أشهرة",other:"{{count}} شهر"},aboutXYears:{one:"عام تقريب",two:"عامين تقريب",threeToTen:"{{count}} أعوام تقريب",other:"{{count}} عام تقريب"},xYears:{one:"عام",two:"عامين",threeToTen:"{{count}} أعوام",other:"{{count}} عام"},overXYears:{one:"أكثر من عام",two:"أكثر من عامين",threeToTen:"أكثر من {{count}} أعوام",other:"أكثر من {{count}} عام"},almostXYears:{one:"عام تقريب",two:"عامين تقريب",threeToTen:"{{count}} أعوام تقريب",other:"{{count}} عام تقريب"}};var i=function e(t,n,a){var r=o[t];var i;if(typeof r==="string"){i=r}else if(n===1){i=r.one}else if(n===2){i=r.two}else if(n<=10){i=r.threeToTen.replace("{{count}}",String(n))}else{i=r.other.replace("{{count}}",String(n))}if(a!==null&&a!==void 0&&a.addSuffix){if(a.comparison&&a.comparison>0){return"في "+i}else{return"عندو "+i}}return i};var d={full:"EEEE، do MMMM y",long:"do MMMM y",medium:"d MMM y",short:"dd/MM/yyyy"};var u={full:"HH:mm:ss",long:"HH:mm:ss",medium:"HH:mm:ss",short:"HH:mm"};var h={full:"{{date}} 'مع' {{time}}",long:"{{date}} 'مع' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"};var s={date:t({formats:d,defaultWidth:"full"}),time:t({formats:u,defaultWidth:"full"}),dateTime:t({formats:h,defaultWidth:"full"})};var m={lastWeek:"eeee 'إلي فات مع' p",yesterday:"'البارح مع' p",today:"'اليوم مع' p",tomorrow:"'غدوة مع' p",nextWeek:"eeee 'الجمعة الجاية مع' p 'نهار'",other:"P"};var c=function e(t){return m[t]};var l={narrow:["ق","ب"],abbreviated:["ق.م.","ب.م."],wide:["قبل الميلاد","بعد الميلاد"]};var f={narrow:["1","2","3","4"],abbreviated:["ر1","ر2","ر3","ر4"],wide:["الربع الأول","الربع الثاني","الربع الثالث","الربع الرابع"]};var v={narrow:["د","ن","أ","س","أ","ج","ج","م","أ","م","ف","ج"],abbreviated:["جانفي","فيفري","مارس","أفريل","ماي","جوان","جويلية","أوت","سبتمبر","أكتوبر","نوفمبر","ديسمبر"],wide:["جانفي","فيفري","مارس","أفريل","ماي","جوان","جويلية","أوت","سبتمبر","أكتوبر","نوفمبر","ديسمبر"]};var w={narrow:["ح","ن","ث","ر","خ","ج","س"],short:["أحد","اثنين","ثلاثاء","أربعاء","خميس","جمعة","سبت"],abbreviated:["أحد","اثنين","ثلاثاء","أربعاء","خميس","جمعة","سبت"],wide:["الأحد","الاثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"]};var g={narrow:{am:"ص",pm:"ع",morning:"الصباح",noon:"القايلة",afternoon:"بعد القايلة",evening:"العشية",night:"الليل",midnight:"نص الليل"},abbreviated:{am:"ص",pm:"ع",morning:"الصباح",noon:"القايلة",afternoon:"بعد القايلة",evening:"العشية",night:"الليل",midnight:"نص الليل"},wide:{am:"ص",pm:"ع",morning:"الصباح",noon:"القايلة",afternoon:"بعد القايلة",evening:"العشية",night:"الليل",midnight:"نص الليل"}};var T={narrow:{am:"ص",pm:"ع",morning:"في الصباح",noon:"في القايلة",afternoon:"بعد القايلة",evening:"في العشية",night:"في الليل",midnight:"نص الليل"},abbreviated:{am:"ص",pm:"ع",morning:"في الصباح",noon:"في القايلة",afternoon:"بعد القايلة",evening:"في العشية",night:"في الليل",midnight:"نص الليل"},wide:{am:"ص",pm:"ع",morning:"في الصباح",noon:"في القايلة",afternoon:"بعد القايلة",evening:"في العشية",night:"في الليل",midnight:"نص الليل"}};var b=function e(t){return String(t)};var y={ordinalNumber:b,era:n({values:l,defaultWidth:"wide"}),quarter:n({values:f,defaultWidth:"wide",argumentCallback:function e(t){return t-1}}),month:n({values:v,defaultWidth:"wide"}),day:n({values:w,defaultWidth:"wide"}),dayPeriod:n({values:g,defaultWidth:"wide",formattingValues:T,defaultFormattingWidth:"wide"})};var p=/^(\d+)(th|st|nd|rd)?/i;var W=/\d+/i;var M={narrow:/[قب]/,abbreviated:/[قب]\.م\./,wide:/(قبل|بعد) الميلاد/};var P={any:[/قبل/,/بعد/]};var x={narrow:/^[1234]/i,abbreviated:/ر[1234]/,wide:/الربع (الأول|الثاني|الثالث|الرابع)/};var H={any:[/1/i,/2/i,/3/i,/4/i]};var k={narrow:/^[جفمأسند]/,abbreviated:/^(جانفي|فيفري|مارس|أفريل|ماي|جوان|جويلية|أوت|سبتمبر|أكتوبر|نوفمبر|ديسمبر)/,wide:/^(جانفي|فيفري|مارس|أفريل|ماي|جوان|جويلية|أوت|سبتمبر|أكتوبر|نوفمبر|ديسمبر)/};var S={narrow:[/^ج/i,/^ف/i,/^م/i,/^أ/i,/^م/i,/^ج/i,/^ج/i,/^أ/i,/^س/i,/^أ/i,/^ن/i,/^د/i],any:[/^جانفي/i,/^فيفري/i,/^مارس/i,/^أفريل/i,/^ماي/i,/^جوان/i,/^جويلية/i,/^أوت/i,/^سبتمبر/i,/^أكتوبر/i,/^نوفمبر/i,/^ديسمبر/i]};var X={narrow:/^[حنثرخجس]/i,short:/^(أحد|اثنين|ثلاثاء|أربعاء|خميس|جمعة|سبت)/i,abbreviated:/^(أحد|اثنين|ثلاثاء|أربعاء|خميس|جمعة|سبت)/i,wide:/^(الأحد|الاثنين|الثلاثاء|الأربعاء|الخميس|الجمعة|السبت)/i};var C={narrow:[/^ح/i,/^ن/i,/^ث/i,/^ر/i,/^خ/i,/^ج/i,/^س/i],wide:[/^الأحد/i,/^الاثنين/i,/^الثلاثاء/i,/^الأربعاء/i,/^الخميس/i,/^الجمعة/i,/^السبت/i],any:[/^أح/i,/^اث/i,/^ث/i,/^أر/i,/^خ/i,/^ج/i,/^س/i]};var E={narrow:/^(ص|ع|ن ل|ل|(في|مع) (صباح|قايلة|عشية|ليل))/,any:/^([صع]|نص الليل|قايلة|(في|مع) (صباح|قايلة|عشية|ليل))/};var Y={any:{am:/^ص/,pm:/^ع/,midnight:/نص الليل/,noon:/قايلة/,afternoon:/بعد القايلة/,morning:/صباح/,evening:/عشية/,night:/ليل/}};var D={ordinalNumber:a({matchPattern:p,parsePattern:W,valueCallback:function e(t){return parseInt(t,10)}}),era:r({matchPatterns:M,defaultMatchWidth:"wide",parsePatterns:P,defaultParseWidth:"any"}),quarter:r({matchPatterns:x,defaultMatchWidth:"wide",parsePatterns:H,defaultParseWidth:"any",valueCallback:function e(t){return t+1}}),month:r({matchPatterns:k,defaultMatchWidth:"wide",parsePatterns:S,defaultParseWidth:"any"}),day:r({matchPatterns:X,defaultMatchWidth:"wide",parsePatterns:C,defaultParseWidth:"any"}),dayPeriod:r({matchPatterns:E,defaultMatchWidth:"any",parsePatterns:Y,defaultParseWidth:"any"})};var N=e("default",{code:"ar-TN",formatDistance:i,formatLong:s,formatRelative:c,localize:y,match:D,options:{weekStartsOn:1,firstWeekContainsDate:1}})}}}));