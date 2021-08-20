var arvore = (function() {
	var ol;
	var li;
	var span;
	var style;
	
	style = document.createElement('style');
	style.id = 'chaveamento';
	document.head.appendChild(style);
	style.innerHTML = '.expansivel {font-weight: bold;}\n' +
					  '.retratil {font-weight: normal;}\n' +
					  '.inativo {display: none;}\n' +
					  '.ativo {display: block;}';
					  
	function no(info, pai) {
		ol = document.createElement('ol');
		li = document.createElement('li');
		span = document.createElement('span');		
		span.innerHTML = info;
		span.className = 'expansivel';
		ol.className = 'ativo';
		
		li.appendChild(span);
		li.appendChild(ol);
		pai.appendChild(li);
		
		return ol;
	}
	
	function noDeFolha(info, pai) {
		ol = document.createElement('ol');
		li = document.createElement('li');
		li.innerHTML = info;
		
		pai.appendChild(li);
	}
	
	function tornarClicavel() {
		var clicaveis = document.getElementsByClassName('expansivel');
		var olAtivas = document.getElementsByTagName('ol');
		
		for (var i = 1; i < olAtivas.length; i++) {
			olAtivas[i].className = 'inativo';
		}
		
		for (var i = 0; i < clicaveis.length; i++) {
			clicaveis[i].addEventListener('click', function() {
				this.parentElement.querySelector('.inativo').classList.toggle('ativo');
				this.classList.toggle('retratil');
			});
		}
	}
	
	return {
		no: no,
		noDeFolha: noDeFolha,
		tornarClicavel: tornarClicavel
	}
})();


