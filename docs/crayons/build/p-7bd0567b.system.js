System.register(["./p-c162e3f0.system.js","./p-bac8ecd1.system.js","./p-c66836e9.system.js"],(function(t){"use strict";var e,a,m,s,f;return{setters:[function(t){e=t.f},function(t){a=t.f;m=t.l;s=t.m},function(t){f=t.b}],execute:function(){var i={full:"EEEE, d MMMM yyyy",long:"d MMMM yyyy",medium:"d MMM yyyy",short:"dd/MM/yyyy"};var d={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"};var l={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"};var o={date:f({formats:i,defaultWidth:"full"}),time:f({formats:d,defaultWidth:"full"}),dateTime:f({formats:l,defaultWidth:"full"})};var r=t("default",{code:"en-ZA",formatDistance:e,formatLong:o,formatRelative:a,localize:m,match:s,options:{weekStartsOn:0,firstWeekContainsDate:1}})}}}));