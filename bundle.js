'use strict';

const funcvar$1 = 'func1var';
function func$1() {
  console.log('func1'+ funcvar$1);
}

var module3 = {
  func1() {
    console.log('module3 func1');
    func$1();
  }
};

const funcvar = 'func2var';
function func() {
  console.log('func2'+ funcvar);
}

var module4 = {
  func1() {
    console.log('module3 func1');
    func();
  }
};

// func1();
// func2();
module3.func1();
module4.func1();
