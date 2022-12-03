let inputPrice;
let inputNbOfPeople;
let selectTip;
let buttonCalculate;
let spanValue;
let paragraphResult;
let paragraphError;

const main = () => {
	prepareDOMElements();
	prepareDOMEvents();
};

const prepareDOMElements = () => {
	//query selectors
	inputPrice = document.querySelector(".section__main__price-input");
	inputNbOfPeople = document.querySelector(".section__main__people-input");
	selectTip = document.querySelector(".section__main__tip-select");
	buttonCalculate = document.querySelector(".section__main__button");
	spanValue = document.querySelector(".section__main__result__cost");
	paragraphResult = document.querySelector(".section__main__result");
	paragraphError = document.querySelector(".section__main__error");
};

const prepareDOMEvents = () => {
	buttonCalculate.addEventListener("click", calculateResult);
};

const calculateResult = () => {
	let resultPrice;
	paragraphResult.style.display = "none";
	paragraphError.style.display = "none";
	if (
		inputPrice.value != "" &&
		inputNbOfPeople.value != "" &&
		selectTip.value != 0
	) {
		
		resultPrice = (
			(parseFloat(inputPrice.value) * parseFloat(selectTip.value) +
				parseFloat(inputPrice.value)) /
			parseFloat(inputNbOfPeople.value)
		).toFixed(2);

		spanValue.textContent = resultPrice;
        
		paragraphResult.style.display = "block";
	
	} else {
		console.log("error");
		paragraphResult.style.display = "none";
		paragraphError.style.display = "block";
	}
};

document.addEventListener("DOMContentLoaded", main);
