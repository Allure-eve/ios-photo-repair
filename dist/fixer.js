parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r},p.cache={};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"l4X9":[function(require,module,exports) {
var define;
var e;(function(){var t=!1,r=function(e){return e instanceof r?e:this instanceof r?void(this.EXIFwrapped=e):new r(e)};"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=r),exports.EXIF=r):this.EXIF=r;var o=r.Tags={36864:"ExifVersion",40960:"FlashpixVersion",40961:"ColorSpace",40962:"PixelXDimension",40963:"PixelYDimension",37121:"ComponentsConfiguration",37122:"CompressedBitsPerPixel",37500:"MakerNote",37510:"UserComment",40964:"RelatedSoundFile",36867:"DateTimeOriginal",36868:"DateTimeDigitized",37520:"SubsecTime",37521:"SubsecTimeOriginal",37522:"SubsecTimeDigitized",33434:"ExposureTime",33437:"FNumber",34850:"ExposureProgram",34852:"SpectralSensitivity",34855:"ISOSpeedRatings",34856:"OECF",37377:"ShutterSpeedValue",37378:"ApertureValue",37379:"BrightnessValue",37380:"ExposureBias",37381:"MaxApertureValue",37382:"SubjectDistance",37383:"MeteringMode",37384:"LightSource",37385:"Flash",37396:"SubjectArea",37386:"FocalLength",41483:"FlashEnergy",41484:"SpatialFrequencyResponse",41486:"FocalPlaneXResolution",41487:"FocalPlaneYResolution",41488:"FocalPlaneResolutionUnit",41492:"SubjectLocation",41493:"ExposureIndex",41495:"SensingMethod",41728:"FileSource",41729:"SceneType",41730:"CFAPattern",41985:"CustomRendered",41986:"ExposureMode",41987:"WhiteBalance",41988:"DigitalZoomRation",41989:"FocalLengthIn35mmFilm",41990:"SceneCaptureType",41991:"GainControl",41992:"Contrast",41993:"Saturation",41994:"Sharpness",41995:"DeviceSettingDescription",41996:"SubjectDistanceRange",40965:"InteroperabilityIFDPointer",42016:"ImageUniqueID"},i=r.TiffTags={256:"ImageWidth",257:"ImageHeight",34665:"ExifIFDPointer",34853:"GPSInfoIFDPointer",40965:"InteroperabilityIFDPointer",258:"BitsPerSample",259:"Compression",262:"PhotometricInterpretation",274:"Orientation",277:"SamplesPerPixel",284:"PlanarConfiguration",530:"YCbCrSubSampling",531:"YCbCrPositioning",282:"XResolution",283:"YResolution",296:"ResolutionUnit",273:"StripOffsets",278:"RowsPerStrip",279:"StripByteCounts",513:"JPEGInterchangeFormat",514:"JPEGInterchangeFormatLength",301:"TransferFunction",318:"WhitePoint",319:"PrimaryChromaticities",529:"YCbCrCoefficients",532:"ReferenceBlackWhite",306:"DateTime",270:"ImageDescription",271:"Make",272:"Model",305:"Software",315:"Artist",33432:"Copyright"},a=r.GPSTags={0:"GPSVersionID",1:"GPSLatitudeRef",2:"GPSLatitude",3:"GPSLongitudeRef",4:"GPSLongitude",5:"GPSAltitudeRef",6:"GPSAltitude",7:"GPSTimeStamp",8:"GPSSatellites",9:"GPSStatus",10:"GPSMeasureMode",11:"GPSDOP",12:"GPSSpeedRef",13:"GPSSpeed",14:"GPSTrackRef",15:"GPSTrack",16:"GPSImgDirectionRef",17:"GPSImgDirection",18:"GPSMapDatum",19:"GPSDestLatitudeRef",20:"GPSDestLatitude",21:"GPSDestLongitudeRef",22:"GPSDestLongitude",23:"GPSDestBearingRef",24:"GPSDestBearing",25:"GPSDestDistanceRef",26:"GPSDestDistance",27:"GPSProcessingMethod",28:"GPSAreaInformation",29:"GPSDateStamp",30:"GPSDifferential"},s=r.IFD1Tags={256:"ImageWidth",257:"ImageHeight",258:"BitsPerSample",259:"Compression",262:"PhotometricInterpretation",273:"StripOffsets",274:"Orientation",277:"SamplesPerPixel",278:"RowsPerStrip",279:"StripByteCounts",282:"XResolution",283:"YResolution",284:"PlanarConfiguration",296:"ResolutionUnit",513:"JpegIFOffset",514:"JpegIFByteCount",529:"YCbCrCoefficients",530:"YCbCrSubSampling",531:"YCbCrPositioning",532:"ReferenceBlackWhite"},l=r.StringValues={ExposureProgram:{0:"Not defined",1:"Manual",2:"Normal program",3:"Aperture priority",4:"Shutter priority",5:"Creative program",6:"Action program",7:"Portrait mode",8:"Landscape mode"},MeteringMode:{0:"Unknown",1:"Average",2:"CenterWeightedAverage",3:"Spot",4:"MultiSpot",5:"Pattern",6:"Partial",255:"Other"},LightSource:{0:"Unknown",1:"Daylight",2:"Fluorescent",3:"Tungsten (incandescent light)",4:"Flash",9:"Fine weather",10:"Cloudy weather",11:"Shade",12:"Daylight fluorescent (D 5700 - 7100K)",13:"Day white fluorescent (N 4600 - 5400K)",14:"Cool white fluorescent (W 3900 - 4500K)",15:"White fluorescent (WW 3200 - 3700K)",17:"Standard light A",18:"Standard light B",19:"Standard light C",20:"D55",21:"D65",22:"D75",23:"D50",24:"ISO studio tungsten",255:"Other"},Flash:{0:"Flash did not fire",1:"Flash fired",5:"Strobe return light not detected",7:"Strobe return light detected",9:"Flash fired, compulsory flash mode",13:"Flash fired, compulsory flash mode, return light not detected",15:"Flash fired, compulsory flash mode, return light detected",16:"Flash did not fire, compulsory flash mode",24:"Flash did not fire, auto mode",25:"Flash fired, auto mode",29:"Flash fired, auto mode, return light not detected",31:"Flash fired, auto mode, return light detected",32:"No flash function",65:"Flash fired, red-eye reduction mode",69:"Flash fired, red-eye reduction mode, return light not detected",71:"Flash fired, red-eye reduction mode, return light detected",73:"Flash fired, compulsory flash mode, red-eye reduction mode",77:"Flash fired, compulsory flash mode, red-eye reduction mode, return light not detected",79:"Flash fired, compulsory flash mode, red-eye reduction mode, return light detected",89:"Flash fired, auto mode, red-eye reduction mode",93:"Flash fired, auto mode, return light not detected, red-eye reduction mode",95:"Flash fired, auto mode, return light detected, red-eye reduction mode"},SensingMethod:{1:"Not defined",2:"One-chip color area sensor",3:"Two-chip color area sensor",4:"Three-chip color area sensor",5:"Color sequential area sensor",7:"Trilinear sensor",8:"Color sequential linear sensor"},SceneCaptureType:{0:"Standard",1:"Landscape",2:"Portrait",3:"Night scene"},SceneType:{1:"Directly photographed"},CustomRendered:{0:"Normal process",1:"Custom process"},WhiteBalance:{0:"Auto white balance",1:"Manual white balance"},GainControl:{0:"None",1:"Low gain up",2:"High gain up",3:"Low gain down",4:"High gain down"},Contrast:{0:"Normal",1:"Soft",2:"Hard"},Saturation:{0:"Normal",1:"Low saturation",2:"High saturation"},Sharpness:{0:"Normal",1:"Soft",2:"Hard"},SubjectDistanceRange:{0:"Unknown",1:"Macro",2:"Close view",3:"Distant view"},FileSource:{3:"DSC"},Components:{0:"",1:"Y",2:"Cb",3:"Cr",4:"R",5:"G",6:"B"}};function u(e){return!!e.exifdata}function c(e,n){function o(o){var i=d(o);e.exifdata=i||{};var a=function(e){var n=new DataView(e);t&&console.log("Got file of length "+e.byteLength);if(255!=n.getUint8(0)||216!=n.getUint8(1))return t&&console.log("Not a valid JPEG"),!1;var r=2,o=e.byteLength,i=function(e,t){return 56===e.getUint8(t)&&66===e.getUint8(t+1)&&73===e.getUint8(t+2)&&77===e.getUint8(t+3)&&4===e.getUint8(t+4)&&4===e.getUint8(t+5)};for(;r<o;){if(i(n,r)){var a=n.getUint8(r+7);a%2!=0&&(a+=1),0===a&&(a=4);var s=r+8+a,l=n.getUint16(r+6+a);return g(e,s,l)}r++}}(o);if(e.iptcdata=a||{},r.isXmpEnabled){var s=function(e){if(!("DOMParser"in self))return;var n=new DataView(e);t&&console.log("Got file of length "+e.byteLength);if(255!=n.getUint8(0)||216!=n.getUint8(1))return t&&console.log("Not a valid JPEG"),!1;var r=2,o=e.byteLength,i=new DOMParser;for(;r<o-4;){if("http"==h(n,r,4)){var a=r-1,s=n.getUint16(r-2)-1,l=h(n,a,s),u=l.indexOf("xmpmeta>")+8,c=(l=l.substring(l.indexOf("<x:xmpmeta"),u)).indexOf("x:xmpmeta")+10;l=l.slice(0,c)+'xmlns:Iptc4xmpCore="http://iptc.org/std/Iptc4xmpCore/1.0/xmlns/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:tiff="http://ns.adobe.com/tiff/1.0/" xmlns:plus="http://schemas.android.com/apk/lib/com.google.android.gms.plus" xmlns:ext="http://www.gettyimages.com/xsltExtension/1.0" xmlns:exif="http://ns.adobe.com/exif/1.0/" xmlns:stEvt="http://ns.adobe.com/xap/1.0/sType/ResourceEvent#" xmlns:stRef="http://ns.adobe.com/xap/1.0/sType/ResourceRef#" xmlns:crs="http://ns.adobe.com/camera-raw-settings/1.0/" xmlns:xapGImg="http://ns.adobe.com/xap/1.0/g/img/" xmlns:Iptc4xmpExt="http://iptc.org/std/Iptc4xmpExt/2008-02-29/" '+l.slice(c);var d=i.parseFromString(l,"text/xml");return F(d)}r++}}(o);e.xmpdata=s||{}}n&&n.call(e)}if(e.src)if(/^data\:/i.test(e.src))o(function(e,t){t=t||e.match(/^data\:([^\;]+)\;base64,/im)[1]||"",e=e.replace(/^data\:([^\;]+)\;base64,/gim,"");for(var n=atob(e),r=n.length,o=new ArrayBuffer(r),i=new Uint8Array(o),a=0;a<r;a++)i[a]=n.charCodeAt(a);return o}(e.src));else if(/^blob\:/i.test(e.src)){(a=new FileReader).onload=function(e){o(e.target.result)},function(e,t){var n=new XMLHttpRequest;n.open("GET",e,!0),n.responseType="blob",n.onload=function(e){200!=this.status&&0!==this.status||t(this.response)},n.send()}(e.src,function(e){a.readAsArrayBuffer(e)})}else{var i=new XMLHttpRequest;i.onload=function(){if(200!=this.status&&0!==this.status)throw"Could not load image";o(i.response),i=null},i.open("GET",e.src,!0),i.responseType="arraybuffer",i.send(null)}else if(self.FileReader&&(e instanceof self.Blob||e instanceof self.File)){var a;(a=new FileReader).onload=function(e){t&&console.log("Got file of length "+e.target.result.byteLength),o(e.target.result)},a.readAsArrayBuffer(e)}}function d(e){var n=new DataView(e);if(t&&console.log("Got file of length "+e.byteLength),255!=n.getUint8(0)||216!=n.getUint8(1))return t&&console.log("Not a valid JPEG"),!1;for(var r,o=2,i=e.byteLength;o<i;){if(255!=n.getUint8(o))return t&&console.log("Not a valid marker at offset "+o+", found: "+n.getUint8(o)),!1;if(r=n.getUint8(o+1),t&&console.log(r),225==r)return t&&console.log("Found 0xFFE1 marker"),S(n,o+4,n.getUint16(o+2));o+=2+n.getUint16(o+2)}}var f={120:"caption",110:"credit",25:"keywords",55:"dateCreated",80:"byline",85:"bylineTitle",122:"captionWriter",105:"headline",116:"copyright",15:"category"};function g(e,t,n){for(var r,o,i,a,s=new DataView(e),l={},u=t;u<t+n;)28===s.getUint8(u)&&2===s.getUint8(u+1)&&(a=s.getUint8(u+2))in f&&((i=s.getInt16(u+3))+5,o=f[a],r=h(s,u+5,i),l.hasOwnProperty(o)?l[o]instanceof Array?l[o].push(r):l[o]=[l[o],r]:l[o]=r),u++;return l}function m(e,n,r,o,i){var a,s,l,u=e.getUint16(r,!i),c={};for(l=0;l<u;l++)a=r+12*l+2,!(s=o[e.getUint16(a,!i)])&&t&&console.log("Unknown tag: "+e.getUint16(a,!i)),c[s]=p(e,a,n,r,i);return c}function p(e,t,n,r,o){var i,a,s,l,u,c,d=e.getUint16(t+2,!o),f=e.getUint32(t+4,!o),g=e.getUint32(t+8,!o)+n;switch(d){case 1:case 7:if(1==f)return e.getUint8(t+8,!o);for(i=f>4?g:t+8,a=[],l=0;l<f;l++)a[l]=e.getUint8(i+l);return a;case 2:return h(e,i=f>4?g:t+8,f-1);case 3:if(1==f)return e.getUint16(t+8,!o);for(i=f>2?g:t+8,a=[],l=0;l<f;l++)a[l]=e.getUint16(i+2*l,!o);return a;case 4:if(1==f)return e.getUint32(t+8,!o);for(a=[],l=0;l<f;l++)a[l]=e.getUint32(g+4*l,!o);return a;case 5:if(1==f)return u=e.getUint32(g,!o),c=e.getUint32(g+4,!o),(s=new Number(u/c)).numerator=u,s.denominator=c,s;for(a=[],l=0;l<f;l++)u=e.getUint32(g+8*l,!o),c=e.getUint32(g+4+8*l,!o),a[l]=new Number(u/c),a[l].numerator=u,a[l].denominator=c;return a;case 9:if(1==f)return e.getInt32(t+8,!o);for(a=[],l=0;l<f;l++)a[l]=e.getInt32(g+4*l,!o);return a;case 10:if(1==f)return e.getInt32(g,!o)/e.getInt32(g+4,!o);for(a=[],l=0;l<f;l++)a[l]=e.getInt32(g+8*l,!o)/e.getInt32(g+4+8*l,!o);return a}}function h(e,t,r){var o="";for(n=t;n<t+r;n++)o+=String.fromCharCode(e.getUint8(n));return o}function S(e,n){if("Exif"!=h(e,n,4))return t&&console.log("Not valid EXIF data! "+h(e,n,4)),!1;var r,u,c,d,f,g=n+6;if(18761==e.getUint16(g))r=!1;else{if(19789!=e.getUint16(g))return t&&console.log("Not valid TIFF data! (no 0x4949 or 0x4D4D)"),!1;r=!0}if(42!=e.getUint16(g+2,!r))return t&&console.log("Not valid TIFF data! (no 0x002A)"),!1;var p=e.getUint32(g+4,!r);if(p<8)return t&&console.log("Not valid TIFF data! (First offset less than 8)",e.getUint32(g+4,!r)),!1;if((u=m(e,g,g+p,i,r)).ExifIFDPointer)for(c in d=m(e,g,g+u.ExifIFDPointer,o,r)){switch(c){case"LightSource":case"Flash":case"MeteringMode":case"ExposureProgram":case"SensingMethod":case"SceneCaptureType":case"SceneType":case"CustomRendered":case"WhiteBalance":case"GainControl":case"Contrast":case"Saturation":case"Sharpness":case"SubjectDistanceRange":case"FileSource":d[c]=l[c][d[c]];break;case"ExifVersion":case"FlashpixVersion":d[c]=String.fromCharCode(d[c][0],d[c][1],d[c][2],d[c][3]);break;case"ComponentsConfiguration":d[c]=l.Components[d[c][0]]+l.Components[d[c][1]]+l.Components[d[c][2]]+l.Components[d[c][3]]}u[c]=d[c]}if(u.GPSInfoIFDPointer)for(c in f=m(e,g,g+u.GPSInfoIFDPointer,a,r)){switch(c){case"GPSVersionID":f[c]=f[c][0]+"."+f[c][1]+"."+f[c][2]+"."+f[c][3]}u[c]=f[c]}return u.thumbnail=function(e,t,n,r){var o=function(e,t,n){var r=e.getUint16(t,!n);return e.getUint32(t+2+12*r,!n)}(e,t+n,r);if(!o)return{};if(o>e.byteLength)return{};var i=m(e,t,t+o,s,r);if(i.Compression)switch(i.Compression){case 6:if(i.JpegIFOffset&&i.JpegIFByteCount){var a=t+i.JpegIFOffset,l=i.JpegIFByteCount;i.blob=new Blob([new Uint8Array(e.buffer,a,l)],{type:"image/jpeg"})}break;case 1:console.log("Thumbnail image format is TIFF, which is not implemented.");break;default:console.log("Unknown thumbnail image format '%s'",i.Compression)}else 2==i.PhotometricInterpretation&&console.log("Thumbnail image format is RGB, which is not implemented.");return i}(e,g,p,r),u}function P(e){var t={};if(1==e.nodeType){if(e.attributes.length>0){t["@attributes"]={};for(var n=0;n<e.attributes.length;n++){var r=e.attributes.item(n);t["@attributes"][r.nodeName]=r.nodeValue}}}else if(3==e.nodeType)return e.nodeValue;if(e.hasChildNodes())for(var o=0;o<e.childNodes.length;o++){var i=e.childNodes.item(o),a=i.nodeName;if(null==t[a])t[a]=P(i);else{if(null==t[a].push){var s=t[a];t[a]=[],t[a].push(s)}t[a].push(P(i))}}return t}function F(e){try{var t={};if(e.children.length>0)for(var n=0;n<e.children.length;n++){var r=e.children.item(n),o=r.attributes;for(var i in o){var a=o[i],s=a.nodeName,l=a.nodeValue;void 0!==s&&(t[s]=l)}var u=r.nodeName;if(void 0===t[u])t[u]=P(r);else{if(void 0===t[u].push){var c=t[u];t[u]=[],t[u].push(c)}t[u].push(P(r))}}else t=e.textContent;return t}catch(d){console.log(d.message)}}r.enableXmp=function(){r.isXmpEnabled=!0},r.disableXmp=function(){r.isXmpEnabled=!1},r.getData=function(e,t){return!((self.Image&&e instanceof self.Image||self.HTMLImageElement&&e instanceof self.HTMLImageElement)&&!e.complete)&&(u(e)?t&&t.call(e):c(e,t),!0)},r.getTag=function(e,t){if(u(e))return e.exifdata[t]},r.getIptcTag=function(e,t){if(u(e))return e.iptcdata[t]},r.getAllTags=function(e){if(!u(e))return{};var t,n=e.exifdata,r={};for(t in n)n.hasOwnProperty(t)&&(r[t]=n[t]);return r},r.getAllIptcTags=function(e){if(!u(e))return{};var t,n=e.iptcdata,r={};for(t in n)n.hasOwnProperty(t)&&(r[t]=n[t]);return r},r.pretty=function(e){if(!u(e))return"";var t,n=e.exifdata,r="";for(t in n)n.hasOwnProperty(t)&&("object"==typeof n[t]?n[t]instanceof Number?r+=t+" : "+n[t]+" ["+n[t].numerator+"/"+n[t].denominator+"]\r\n":r+=t+" : ["+n[t].length+" values]\r\n":r+=t+" : "+n[t]+"\r\n");return r},r.readFromBinaryFile=function(e){return d(e)},"function"==typeof e&&e.amd&&e("exif-js",[],function(){return r})}).call(this);
},{}],"T7i6":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.fixImgFile=exports.fixBySelector=void 0;var t=require("exif-js"),e=function(e){return new Promise(function(i){t.getData(e,function(){var e=t.getTag(this,"Orientation");i(e)})})},i=function(t,e){var i=document.createElement("canvas"),n=i.getContext("2d");return 6===e?(i.width=t.height,i.height=t.width,n.translate(i.width/2,i.height/2),n.rotate(Math.PI/180*90),n.drawImage(t,-t.width/2,-t.height/2,t.width,t.height)):(i.width=t.width,i.height=t.height,n.drawImage(t,0,0,t.width,t.height)),new Promise(function(t){t(i)})},n=function(t){var n=document.querySelectorAll(t);if(n.length)for(var o=function(t){var o=n[t];"img"===o.tagName.toLowerCase()&&(o.onload=function(){o.dataset.iosfixed||e(o).then(function(t){6==t&&i(o,t).then(function(t){o.dataset.iosfixed=!0,o.src=t.toDataURL("image/png")})})})},r=0;r<n.length;r++)o(r);else console.log("fixer WARN no files:"+t)};exports.fixBySelector=n;var o=function(t,e,i,n){var o=t,r=e;return(t>i||e>n)&&(t/e>i/n?(o=i,r=Math.round(i*(e/t))):(r=n,o=Math.round(n*(t/e)))),{width:o,height:r}},r=function(t,n){return new Promise(function(r){0===t.type.indexOf("image")&&e(t).then(function(e){var a=new FileReader;a.onload=function(t){var a=t.target.result,h=document.createElement("img");h.onload=function(){document.createElement("canvas").getContext("2d");if(n&&n.width&&n.height){var t=o(h.width,h.height,n.width,n.height);h.width=t.width,h.height=t.height}i(h,e).then(function(t){r(t.toDataURL())})},h.src=a},a.readAsDataURL(t)})})};exports.fixImgFile=r;
},{"exif-js":"l4X9"}]},{},["T7i6"], null)
//# sourceMappingURL=/fixer.map