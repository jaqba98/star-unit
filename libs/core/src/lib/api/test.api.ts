import { CallbackType } from "../type/callback.type";

export const test = (description: string, callback: CallbackType<void>) => {
    callback();
    console.log(description);
}
