import { delay } from "redux-saga";

export default function* processBigLoop() {
    const LOOP_COUNT = 5;
    const ADD_UP_TO = 900;
    try {
        for (let i = 0; i < LOOP_COUNT; i += 1) {
            console.log('loop #', i);
            let total = 0;
            yield delay(0);
            for (let k = 1; k <= ADD_UP_TO; k += 1) {
                total = yield k + total;
            }
            console.log(i, '-', total);
        }
    } catch (error) {
        console.log('error', error);
    }
    return 'finished';
}