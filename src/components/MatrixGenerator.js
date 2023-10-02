import { GetDistance } from "./GetDistance";

export function MatrixGenerator(locationArray){
    const x = GetDistance(locationArray[0],locationArray[1]);
    // const n = locationArray.length
    // const Adjascencymatrix = Array.from({ length: n }, () => new Array(n).fill(0));
    // for (let index = 0; index < n; index++) {
    //     for (let j = 0; j < n; j++) {
    //         if(index===j) Adjascencymatrix[index][j] = 0;
    //         else{
    //             Adjascencymatrix[index][j] = 4
    //             // console.log(Adjascencymatrix[index[j]]);
    //         }
    //     }
    // }
    return x;
}