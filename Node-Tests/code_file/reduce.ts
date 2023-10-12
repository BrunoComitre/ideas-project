// const objetos = [{ arg: 1, msg: 'msg' }, {
//     arg: 2, msg: 'msg2}] => { arg: 1, msg: ['msg', 'msg2']}

// objetos.reduce(function (acc, obj) {
//         acc[obj.arg] = obj.msg
//         return acc
//     }, {})

const reduce = [{ arg: 1, msg: 'msg' }, { arg: 2, msg: 'msg2' }].merge((a, b) => a + b.arg, )
console.log(reduce);