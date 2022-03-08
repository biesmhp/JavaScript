let array = Array(1,2,3,4,5,6,7,8);
let media =  array.reduce((a,b) => a + b, 0) / array.length;
document.write(media);