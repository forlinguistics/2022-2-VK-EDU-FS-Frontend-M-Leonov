/*
 * В этом задании надо разработать функцию
 * `convertBytesToHuman`. Эта функция  должна принимать
 * аргумент `bytes` только числового типа.
 * На выходе функция должна отдать
 * человекопонятную строку, которая будет
 * отражать размер файла. Примеры использования:
 * `convertBytesToHuman(1024) === '1 KB';`
 * `convertBytesToHuman(123123123) === '117.42 MB';`
 * Необходимо предусмотреть защиту от
 * передачи аргументов неправильного типа
 * и класса (например, отрицательные числа)
 */

//import {re} from "@babel/core/lib/vendor/import-meta-resolve.js";

export default function convertBytesToHuman(bytes) {
    const t_arr = [' B',' KB',' MB',' GB',' TB',' PB',' EB']
    if (typeof(bytes) != 'number' ) {
        return false;
    }
    if (bytes < 0){
        return false;
    }
    let b_type = 1
    for (let i = 0; i < t_arr.length - 1; i++) {
        if (bytes < b_type * 1024) {
            return Math.round((bytes / b_type + Number.EPSILON) * 100) / 100 + t_arr[i]
        }
        b_type *= 1024
    }
    return Math.round((bytes / b_type + Number.EPSILON) * 100) / 100 + t_arr.at(-1)
}
