function strongBrickwall(dimensions, bricks) {
    let rows = dimensions[0];
    let columns = dimensions[1];
    let secondLayerOfBricks = bricks.slice(); //This array is the one that the program will be working with so that the original array won't be changed;
    let arr = []; //This array is for storing the 'bricks' that are vertical;
    let newArr = []; //This is the final array that is printed on the console;

    if (rows * columns !== secondLayerOfBricks.length) {
        console.log('-1'); //Checking if the rows multiplied by columns are bigger number than the bricks. If they are '-1' is printed on the console;
    } else if (rows % 2 !== 0 && columns % 2 !== 0) {
        console.log('-1'); //Checking if rows and columns are not both even numbers;
    } else if (rows % 2 === 0 && columns % 2 !== 0) {
        console.log('-1'); //Checking again if the rows and columns are not even numbers;
    } else if (rows % 2 !== 0 && columns % 2 === 0) {
        console.log('-1'); //Checking again if the rows and columns are not even numbers;
    } else if (rows > 100 || columns > 100) {
        console.log('-1'); //If one of the two sides(rows or columns) are greater than 100, '-1' is printed on the console;
    } else {
        for (let i = 0; i < secondLayerOfBricks.length; i += secondLayerOfBricks.length / rows) { //This for loop takes elements away the secondLayerOfBricks array to new array. From this array the vertical bricks are being taken for the final array;
            arr.push(secondLayerOfBricks.shift());
            arr.push(secondLayerOfBricks.pop());
        }
        let slicedBricks = secondLayerOfBricks.slice(); //This array contains the horizontal bricks and inserts them into the final array;
        for (let i = 0; i < slicedBricks.length; i += 2) { //This for loop inserts the first and the last elements to the final array (the vertical bricks);
            if (newArr[0] == undefined) {  //For every iteration this checks whether the first element of the final array is empty(meaning that there is no vertical brick). If its empty then the next command line inserts the first part of the vertical brick;
                newArr.unshift(arr.shift()); //
                if (arr[0] == undefined) { //If the array that the vertical bricks are stored is empty then the whole second layer is finished and we exit from the loop;
                    break;
                }
            }
            for (let j = 0; j < slicedBricks.length; j += 2) { //This nested loop inserts all the middle bricks to the final array;
                newArr.push(secondLayerOfBricks.shift());
                if (newArr.length == columns - 1) { //This checks whether only the last element of the array misses. If it does, then the next line inserts that final element;
                    newArr.push(arr.shift());
                    console.log(newArr.join(' '));
                    newArr = []; //After the printing is done the result array is emptied so that we can store the next line of bricks;
                    break;
                }
            }
        }
    }
}
strongBrickwall([2, 4], [1, 1, 2, 2, 3, 3, 4, 4]);