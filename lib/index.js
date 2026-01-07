"use strict";

const chalk = require("chalk");

console.log(chalk.gray("-----------------------------------------\n"));
console.log(chalk.green(`
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀.;;.,!,,;l:;,:,..                 
             .;;lll!.,!..;l,;.:,.;l!;.             
           ,,,l,;;ll:!lllllll!!!;ll!,.:;.          
        .,,:;.;!!llllllllllllllllll:;,!.:;.        
       ,::,.!!llllllllllllllllllllllll!;::,,       
     .:.;.!lllllllllllllllllllllllllllll:,.!;,     
    ,:,;;!lllllllllllllll!llllllllllllllll!:,,;    
   ;:.,:lllllllllll!;:ll: ;!l!::lllllllllll!!;;;   
  ,,.;!lllllllllll!; ,ll!::ll:.,!lllllllllll:,:;;  
 .::,!llllllll!::!l!!llllllllll!l!::!llllllll:;;,, 
 ;.;!lllllll:.    !lll:,  .:lllll    .:lllllll:..: 
.!ll!llllll,      :lll::   .llll!      ,!llllll!ll,
:llllllll:.       .!lll:    lll!.        :llllllll!
l!!llll!, .         .;;     ,;,         . .!lll!;;!
: ,!ll:  ,  .                         .. ,  ;ll!;.;
!:ll!. ., ., , .                   . , ,. ., .:llll
llll!!!. ., ,. , , .           . , .. , ., .!!!llll
!llll!,,;. ,. ; .. , :.      ! ,  , ,  , .;,,!ll::!
;!;;lll!. ,. ,  ; , .:       :, ; ,  ;  ,  !lll:,,,
.:!;lll::!. ., :,;!:;         ;!!:,:.., .!!:lll,::,
 ;,,:llll:;:l!lllll: .;     ,. ;lllll!l:;;llll!:,, 
 .;;,!lllllllll;;;,,!:       ;!;,;;;!llllllll!,::, 
  .; ;lllllllll!;!::; ; , , ; ;!;!;!!lllllll!;:,;  
   ,;;,!lllllllllll; ;. , , .; ,llllllllllll;,,;   
    ,,,::lllllllll!:!: ;, ,: ;!:!llllllllllll!,    
     .:,,::lllllllllllll!;!lllllllllllll!:lll,     
       ,:,,;!lllllllllllllllllllllllll::..::       
         .:;:llllllllllllllllllllll!:;,::;.        
           .,ll:.,!:!llllllllll!!;:..:,,.          
             .;,,:.:,,;,:,:l!,;!,.l,..             
                 ...;,;;l,ll!,,;;.
¤═―— ⎧ 𝐁𝐀𝐃𝐙𝐙 𝐁𝐀𝐈𝐋𝐄𝐘𝐒 ⎭ ⊱―—═¤
Information:
Developer: @badzzne2
Version: 3.0
Status: Baileys Berhasil Tersambung
`));
console.log(chalk.gray("--------------------------------------------\n"));
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeWASocket = void 0;
const Socket_1 = __importDefault(require("./Socket"));
exports.makeWASocket = Socket_1.default;
__exportStar(require("../WAProto"), exports);
__exportStar(require("./Utils"), exports);
__exportStar(require("./Types"), exports);
__exportStar(require("./Store"), exports);
__exportStar(require("./Defaults"), exports);
__exportStar(require("./WABinary"), exports);
__exportStar(require("./WAM"), exports);
__exportStar(require("./WAUSync"), exports);

exports.default = Socket_1.default;
