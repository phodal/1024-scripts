const myCode = {
  isFinished: true
};
let marry = () => {};
let you = () => {} ;
let meet = () => {} ;
let yourLove = () => {} ;
let action = '分享到朋友圈';
// let when = () => {};
const when = (arg) => Promise.resolve(arg)

when(myCode.isFinished).then(marry(you));
when(action === '分享到朋友圈').then(meet(yourLove));
