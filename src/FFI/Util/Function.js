'use strict';

function handleMaybe(justAndNothing, arg) {
  const justValue = justAndNothing[0],
        nothingValue = justAndNothing[1];

  return arg.constructor == justValue.constructor ? arg.value0 : (
    arg.constructor == nothingValue.constructor ? null : arg
  );
}

exports._mkError = function(justAndNothing, e) {
  const justValue = justAndNothing[0],
        nothingValue = justAndNothing[1];

  if (e instanceof Error) {
    return new justValue.constructor(e);
  }
  else {
    return new nothingValue.constructor();
  }
}

exports.apply = function(fn) {
  return function(args) {
    return fn.apply(null, args);
  };
};

exports.bind = function(f) {
  return function(a) {
    return f.bind(a);
  };
};

exports._call0 = function(justAndNothing, obj, method) {
  return obj[method]();
};

exports._call1 = function(justAndNothing, obj, method, arg1) {
  return obj[method](handleMaybe(justAndNothing, arg1));
};

exports._call2 = function(justAndNothing, obj, method, arg1, arg2) {
  return obj[method]( handleMaybe(justAndNothing, arg1)
                    , handleMaybe(justAndNothing, arg2)
                    );
};

exports._call3 = function(justAndNothing, obj, method, arg1, arg2, arg3) {
  return obj[method]( handleMaybe(justAndNothing, arg1)
                    , handleMaybe(justAndNothing, arg2)
                    , handleMaybe(justAndNothing, arg3)
                    );
};

exports._call4 = function(justAndNothing, obj, method, arg1, arg2, arg3, arg4) {
  return obj[method]( handleMaybe(justAndNothing, arg1)
                    , handleMaybe(justAndNothing, arg2)
                    , handleMaybe(justAndNothing, arg3)
                    , handleMaybe(justAndNothing, arg4)
                    );
};

exports._call5 = function(justAndNothing, obj, method, arg1, arg2, arg3, arg4, arg5) {
  return obj[method]( handleMaybe(justAndNothing, arg1)
                    , handleMaybe(justAndNothing, arg2)
                    , handleMaybe(justAndNothing, arg3)
                    , handleMaybe(justAndNothing, arg4)
                    , handleMaybe(justAndNothing, arg5)
                    );
};

exports._call6 = function(justAndNothing, obj, method, arg1, arg2, arg3, arg4, arg5, arg6) {
  return obj[method]( handleMaybe(justAndNothing, arg1)
                    , handleMaybe(justAndNothing, arg2)
                    , handleMaybe(justAndNothing, arg3)
                    , handleMaybe(justAndNothing, arg4)
                    , handleMaybe(justAndNothing, arg5)
                    , handleMaybe(justAndNothing, arg6)
                    );
};

exports._call7 = function(justAndNothing, obj, method, arg1, arg2, arg3, arg4, arg5, arg6, arg7) {
  return obj[method]( handleMaybe(justAndNothing, arg1)
                    , handleMaybe(justAndNothing, arg2)
                    , handleMaybe(justAndNothing, arg3)
                    , handleMaybe(justAndNothing, arg4)
                    , handleMaybe(justAndNothing, arg5)
                    , handleMaybe(justAndNothing, arg6)
                    , handleMaybe(justAndNothing, arg7)
                    );
};


exports._callEff0 = exports._call0;
exports._callEff1 = exports._call1;
exports._callEff2 = exports._call2;
exports._callEff3 = exports._call3;
exports._callEff4 = exports._call4;
exports._callEff5 = exports._call5;
exports._callEff6 = exports._call6;
exports._callEff7 = exports._call7;
