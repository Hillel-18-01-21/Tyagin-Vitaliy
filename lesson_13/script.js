const button = document.querySelectorAll("button");


button.forEach(function(elem) {
	elem.addEventListener("click", GetFibnumber);})


	//*Function

	function GetFibnumber (elem) {
		let a = 0;
		let b = 1;
		let temp;
		return function GetNextFibnimber() {
			this.nextElementSibling.innerHTML = a;
      temp = a;
      a = b;
      b = temp + a;
		}
	}
