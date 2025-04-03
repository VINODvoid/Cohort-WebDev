import { atom } from "recoil";

export const counterAtom = atom({
    key:"counter",
    default:0
});
export const loadingAtom = atom({
    key:"loading",
    default:true,
})