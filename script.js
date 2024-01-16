const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');
const icon = document.querySelector('.icon i');
let linkTag = document.querySelector('a');
let webLink;

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

function search(str) {
	let results = [];
	results = fruit.filter(val => {
		return val.toLowerCase().startsWith(str.toLowerCase())
	});
	//filtering array values based on user input characters to return those values that start with the user iput chars
	return results;
}

function searchHandler(e) {
	// pass the user entered data into search() function to return a filtered array
	
	let userData = e.target.value; //user entered data
	let searchResults = search(userData).map(val => {
		return val = `<li>${val}</li>`
	});
	showSuggestions(searchResults,userData);//display suggestions based on user input;
}

function showSuggestions(results, inputVal) {
	if(inputVal) {
		suggestions.classList.add('has-suggestions')
		if(results.length) {
			suggestions.innerHTML = results.join('');
		} else {
			suggestions.innerHTML = `<li>${inputVal}</li>`;
		};
	} else {
		suggestions.classList.remove('has-suggestions');
		suggestions.innerHTML = '';
	};
	// display the list of suggested fruits or in case no suggestions exist, display the input value
	//remove the list one the input box is empty
}

function useSuggestion(e) {
	let selected = e.target.innerText;
	input.value = selected;
	suggestions.innerHTML = '';
	suggestions.classList.remove('has-suggestions');
	
	// update the placeholder input with the selected suggestion and remove the suggestion list after a selection has been made
};

function searchInWeb(e) {
	if(input.value) {
		webLink = `https://www.google.com/search?q=${input.value}`
		linkTag.setAttribute('href',webLink)
		linkTag.click();
	} //direct to google search page of the input value
}
input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);
icon.addEventListener('click',searchInWeb)