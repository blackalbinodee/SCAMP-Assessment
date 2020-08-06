var fibonacci_series = function (n) 
{
  if (n===1) 
  {
    return [0, 1];
  } 
  else 
  {
    var d = fibonacci_series(n - 1);
    d.push(d[d.length - 1] + d[d.length - 2]);
    return d;
  }
};

console.log(fibonacci_series());


//my example
console.log(fibonacci_series(10));//[0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55]