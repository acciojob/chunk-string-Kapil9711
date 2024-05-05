function stringChop(str, size) {
    let tempStrArr = str.trim().split('');
	const chunkArr = [];
	while(tempStrArr.length) chunkArr.push(tempStrArr.splice(0,size).join(''));
	return chunkArr;
}

Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
