function circleArea(param) {
    let result = (Math.PI * param * param).toFixed(2)
    let resultType = typeof (result);
    let paramType = typeof param;
    if (paramType === `number`) {
        console.log(result);
    } else {
        console.log(`We can not calculate the circle area, because we receive a ${paramType}.`);
    }

}
circleArea(5)