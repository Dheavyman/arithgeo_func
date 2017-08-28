const arithGeo = (arr) => {
    if (!Array.isArray(arr)) {
        return 'Invalid input';
     }
    else if (arr.length === 0) {
        return 0;
    }
    else {
        let commonDifference = arr[1] - arr[0];
        let commonRatio = arr[1] / arr[0];
        let arithmetic = true;
        let geometric = true;
        
        for (let i = 0; i < arr.length - 1; i++) {
            if (commonDifference !== arr[i + 1] - arr[i]) {
                arithmetic = false;
            }
            if (commonRatio !== arr[i + 1] / arr[i]) {
                geometric = false;
            }
        }

        if (arithmetic) {
            return 'Arithmetic';
        }
        else if (geometric) {
            return 'Geometric';
        }
        else {
            return -1;
        }
    }

}
export {arithGeo};