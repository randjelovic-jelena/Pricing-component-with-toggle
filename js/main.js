'use strict';



/*TAB KEY NAVIGATION*/
const tabIndex=document.querySelectorAll('button[tabindex]');
console.log(tabIndex);
const currentActive=tabIndex[0];
let count=0;
window.addEventListener('keydown',(e)=>{
	
	let max=tabIndex.length;
	let target=e.code;

	if(target==='Tab'){
	{
		tabIndex[count].setAttribute('tabindex',-1);
		count++;
		if(count===max){
			count=0;
		}
			
			tabIndex[count].setAttribute('tabindex',0);
		}
	
	}
})

/****/
const toggleBtn=document.querySelector('#toggle-btn');
const pricesPlace=document.querySelectorAll('.price');

const pricing={
	annually:[
		199.99,
		249.99,
		399.99
	],
	monthly:[
		19.99,
		24.99,
		39.99
	]	
};

/*SHOW PRICE */
const showPrice=(val)=>{
	if(val==='monthly'){
		for(let i=0;i<pricesPlace.length;i++){
			pricesPlace[i].innerText=pricing.monthly[i];
		}
	}else{
		for(let i=0;i<pricesPlace.length;i++){
			pricesPlace[i].innerText=pricing.annually[i];
		}
	}
}

/*TOGGLE VALUES*/
const toggleValues=()=>{
	const currentClass=toggleBtn.getAttribute('class');
	toggleBtn.classList.remove(`${currentClass}`);
	if(currentClass==='monthly'){
		
		toggleBtn.classList.add('annually');
		showPrice('annually');
	}else{
		
		toggleBtn.classList.add('monthly');
		showPrice('monthly');
	}
}
/*TOGGLE BTN*/
toggleBtn.addEventListener('click',toggleValues);

/*on load*/
const loadPrices=()=>{
	for(let i=0;i<pricesPlace.length;i++){
		pricesPlace[i].innerText=pricing.monthly[i];
	}
}

window.addEventListener('DOMContentLoaded',loadPrices);

