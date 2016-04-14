function functionName(arg1, arg2) {
  var cond1 = false;
  var cond2 = false;
  var cond3 = true;
  if (cond1) {
    // do something if cond1 is true
  } else if (cond2) {
    // do something if cond2 is true
  } else if (cond3) {
    // do something if cond3 is true
  } else {
    // do something if not cond1 or cond2 or cond3
  }
  return 'something';
}
var x = functionName(1, 2);
// x === 'something'
