(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{10:function(e,t,r){"use strict";r.r(t);var a=r(8),n=r(1),s=r(2),o=r(4),c=r(3),i=r(5),l=r(0),u=r.n(l),h=r(7),m=r.n(h);r(15);function b(e){return u.a.createElement("button",{className:"square",onClick:e.onClick,style:{color:e.color}},e.value)}var f=function(e){function t(){return Object(n.a)(this,t),Object(o.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(s.a)(t,[{key:"renderSquare",value:function(e){var t=this;return u.a.createElement(b,{key:e,value:this.props.squares[e],color:this.props.colors[e],onClick:function(){return t.props.onClick(e)}})}},{key:"render",value:function(){for(var e=[],t=0;t<3;t++){for(var r=[],a=0;a<3;a++)r.push(this.renderSquare(3*t+a));e.push(u.a.createElement("div",{key:t,className:"board-row"},r))}return u.a.createElement("div",null,e)}}]),t}(u.a.Component),p=function(e){function t(e){var r;return Object(n.a)(this,t),(r=Object(o.a)(this,Object(c.a)(t).call(this,e))).state={history:[{squares:Array(9).fill(null),coord:{col:0,row:0},colors:Array(9).fill("black")}],stepNumber:0,xIsNext:!0,isAscending:!0},r}return Object(i.a)(t,e),Object(s.a)(t,[{key:"handleClick",value:function(e){var t=this.state.history.slice(0,this.state.stepNumber+1),r=t[t.length-1],a=r.squares.slice(),n=r.colors.slice(),s={col:0,row:0};if(!v(a)&&!a[e]){switch(e){case 0:s.col=1,s.row=1;break;case 1:s.col=2,s.row=1;break;case 2:s.col=3,s.row=1;break;case 3:s.col=1,s.row=2;break;case 4:s.col=2,s.row=2;break;case 5:s.col=3,s.row=2;break;case 6:s.col=1,s.row=3;break;case 7:s.col=2,s.row=3;break;case 8:s.col=3,s.row=3}a[e]=this.state.xIsNext?"X":"O",this.setState({history:t.concat([{squares:a,coord:s,colors:n}]),stepNumber:t.length,xIsNext:!this.state.xIsNext})}}},{key:"jumpTo",value:function(e){this.setState({stepNumber:e,xIsNext:e%2===0})}},{key:"sortMoves",value:function(){this.setState({isAscending:!this.state.isAscending})}},{key:"hightLightWins",value:function(e){for(var t=this.state.history[this.state.stepNumber].colors,r=0;r<3;r++)t[e[r]]="red"}},{key:"render",value:function(){var e,t,r=this,a=this.state.history,n=a[this.state.stepNumber],s=v(n.squares),o=function(e){for(var t=0;t<e.length;t++)if(!e[t])return!1;return!0}(n.squares),c=a.slice().map((function(e,t){var a=t?"Go to move #".concat(t," (").concat(e.coord.col,", ").concat(e.coord.row,")"):"Go to game start";return t===r.state.stepNumber?u.a.createElement("li",{key:t},u.a.createElement("button",{style:{color:"red"},onClick:function(){return r.jumpTo(t)}},a)):u.a.createElement("li",{key:t},u.a.createElement("button",{onClick:function(){return r.jumpTo(t)}},a))}));return this.state.isAscending||(c=c.reverse()),e=this.state.isAscending?"descending":"ascending",s?(t="Winner: "+s.winner,this.hightLightWins(s.location)):(t="Next player: "+(this.state.xIsNext?"X":"O"),o&&(t="No one wins")),u.a.createElement("div",{className:"game"},u.a.createElement("div",{className:"game-board"},u.a.createElement(f,{squares:n.squares,colors:n.colors,onClick:function(e){return r.handleClick(e)}})),u.a.createElement("div",{className:"game-info"},u.a.createElement("div",null,t),u.a.createElement("button",{className:"sortMoves",onClick:function(){return r.sortMoves()}},e),u.a.createElement("ol",null,c)))}}]),t}(u.a.Component);function v(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],r=0;r<t.length;r++){var n=Object(a.a)(t[r],3),s=n[0],o=n[1],c=n[2];if(e[s]&&e[s]===e[o]&&e[s]===e[c])return{winner:e[s],location:t[r]}}return null}m.a.render(u.a.createElement(p,null),document.getElementById("root"))},15:function(e,t,r){},9:function(e,t,r){e.exports=r(10)}},[[9,1,2]]]);
//# sourceMappingURL=main.03ce5e93.chunk.js.map