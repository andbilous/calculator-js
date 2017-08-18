let difference= (arr)=> {
	result= arr[0];
	for(let i= 1; arr.length > i; i++){
		result-= arr[i];
	}
	return result;
}