/*!
 * /*
 * taucharts@2.6.0 (2018-09-08)
 * Copyright 2018 Targetprocess, Inc.
 * Licensed under Apache License 2.0
 * * /
 * 
 */
!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t(require("taucharts"));else if("function"==typeof define&&define.amd)define([],t);else{var n="object"==typeof exports?t(require("taucharts")):t(e.Taucharts);for(var r in n)("object"==typeof exports?exports:e)[r]=n[r]}}(window,function(e){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=15)}({0:function(t,n){t.exports=e},15:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),u=o.a.api.utils;function i(e){var t=e.x0,n=e.y0,r=null==e.collapse||e.collapse,o=function(e){return{y0:function(n){return e.scaleY.value(n[t])}}},i=function(e){return{y0:function(t){return e.scaleY.value(t[n])}}},a=function(e){var r=e.data();if(0===r.length)return{};var o=e.scaleY,u=Number.MAX_VALUE,i=Number.MIN_VALUE,a=e.flip?t:n,f=o.dim;return r.forEach(function(e){var t=e[a],n=e[f],r=t<n?t:n,o=n>t?n:t;u=r<u?r:u,i=o>i?o:i}),o.fixup(function(e){var t={};return(!e.hasOwnProperty("max")||e.max<i)&&(t.max=i),(!e.hasOwnProperty("min")||e.min>u)&&(t.min=u),t}),{}},f={},c={},l=function(e){var o=e.data().slice(),i=e.scaleX,a=e.scaleY;if(0===o.length||!i.discrete)return{};var l=e.flip?t:n,s=a.dim;o.sort(u.createMultiSorter(function(e,t){return e[l]-t[l]},function(e,t){return e[s]-t[s]}));var d=i.dim,p=i.domain().reduce(function(e,t){return e[t]=[],e},{}),h=new Map;return o.forEach(r?function(e){var t=e[d],n=p[t],r=n.findIndex(function(t){return t[t.length-1][s]<=e[l]});r<0&&(r=n.length,n.push([])),n[r].push(e),h.set(e,r)}:function(e){var t=e[d],n=p[t],r=r=n.length;n.push([]),n[r].push(e),h.set(e,r)}),Object.keys(p).forEach(function(e){f[e]=p[e]}),i.fixup(function(e){var t={},n=i.domain().reduce(function(e,t){return e+f[t].length},0);return i.domain().forEach(function(e){c[e]=n}),t.ratio=function(e){return f[e].length/c[e]},t}),{xi:function(t){var n=t[d],r=i.stepSize(n);return e.xi(t)-r/2+r/f[n].length*(h.get(t)+.5)}}};return{onSpecReady:function(e,t){e.traverseSpec(t,function(e,t){"ELEMENT.INTERVAL"===e.type&&(e.transformModel=[e.flip?o:i,l],e.adjustScales=[a],e.guide.enableColorToBarPosition=!1,e.guide.label=e.guide.label||{},e.guide.label.position=e.guide.label.position||(e.flip?["inside-start-then-outside-end-horizontal","hide-by-label-height-horizontal"]:["inside-start-then-outside-end-vertical"]))})}}}o.a.api.plugins.add("bar-as-span",i),t.default=i}})});