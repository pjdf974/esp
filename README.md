pfesp
=====

Gestion des espaces insécables dans le DOM

Installation : npm install pfesp

Utilisation : (privée)

Node.js : var esp = require("pfesp");

HTML    : script src="esp.js" après avoir copier le fichier esp.js dans le même
          répertoire que la page html. (esp.js se trouve dans node_modules/pfesp/)

fix(chaine)

		conservation des espaces de 'chaine'

lim(chaine, limit, apres)

		Retourne une chaine de caractère dont la longueur = limit' en complétant par des espaces si nécessaire.
         * si 'apres' est true(valeur par défaut = true), les espaces sont ajoutés après la chaîne, sinon, ils sont ajoutés avant.

pop(chaine)

		ote tous les espaces EN FIN DE CHAINE même si 'chaine' a été codée par esp.fix

del(chaine)

		ote tous les espaces même si 'chaine' a été codée avec esp.fix
 
-------------------------
esp.fixe     = esp.fix;

esp.fixSpace = esp.fix;

esp.limit    = esp.lim;

esp.limSpace = esp.lim;

esp.popSpace = esp.pop;

esp.delete   = esp.del;

esp.delSpace = esp.del;

esp.oteSpace = esp.del;

-------------------------

EXEMPLE 1:
```html
<body>
	<h1></h1>
	<h1></h1>
	<select id="slt" size="10"></select>
	<script type="application/javascript" src="esp.js"></script>
	<script type="application/javascript">
		var a = "    Ceci    est    un    test    ";

		var h = document.querySelectorAll("h1");
		h[0].innerText = a;
		h[1].innerText = esp.fix(a);

		slt.add(new Option(a));
		slt.add(new Option(esp.fix(a)));
	</script>
</body>
</html>
```

EXEMPLE 2 :
```js
var esp = require("pfesp");

var ch = "Salut";

console.log(esp.lim(ch, 20, false));
```


