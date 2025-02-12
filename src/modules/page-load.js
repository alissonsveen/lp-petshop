import {btnShow} from "./form/btn.js"
import { schedulesDay } from "../schedules/load.js"

document.addEventListener("DOMContentLoaded", () => {
    
    schedulesDay()
    btnShow()
});
