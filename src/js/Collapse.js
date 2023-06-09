export default class Collapse {
	constructor(initiator, target, options = {}) {
	  this.initiator = initiator;
	  this.target = target;
	  this.hideClass = options.hideClass || 'collapse';
	  this.toggleClass = options.toggleClass || 'show';
	  this.cb = options.cb;
	}
 
	init() {
	  this.target.classList.add(this.hideClass);
 
	  this.initiator.addEventListener('click', () => this.toggle());
	  this.target.querySelectorAll('.close').forEach((close) => {
		 close.addEventListener('click', () => this.target.classList.toggle(this.toggleClass));
	  });
	}
 
	toggle() {
	  this.target.classList.toggle(this.toggleClass);
	  if (this.cb) {
		 this.cb();
	  }
	}
 }