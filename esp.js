var esp = {
    fix : function(chaine){ // Conservation des espaces
        return(unescape(chaine.replace(/ /g,"%A0"))); 
        /* %A0 = traduction du caractère ASCII ' ' en caractère URL URL
         * Syntaxe d'un expression régulière : reg=new RegExp(motif[,  type])
         * ( Syntaxe équivalente : reg = /motif/type )
         * Description :
         * Le paramètre motif (string) décrit le format de chaîne à trouver.
         * Le paramètre type décrit le type d'expression régulière. 
         * Si type vaut "g", l'expression sera analysée globalement sur l'ensemble de la chaîne.
         * Si type vaut "i", l'expression sera analysée indifféremment sur les majuscules ou les minuscules.
         * type peut donc valoir "", "g", "i" ou "gi"
         * Il existe deux syntaxes équivalentes pour créer une expression régulière :   
         * var reg=new RegExp("[0-9]+","g")
         * var reg=/[0-9]+/g
         */
    },

    lim : function(chaine, espaces, apres){    
        /* Retourne une chaine de caractère de longueur fixe en complétant par des espaces si nécessaire.
         * si 'apres' est true(valeur par défaut), les espaces sont ajoutés après la chaîne, sinon, les ajoute avant
         */
        // "&nbsp;"
        // " \u00a0";
        if(apres === undefined || apres === "apres" || apres ==="après" || apres === "post")
            apres = true;
        try{
            var longueur = (chaine+"").length;  // si chaine est un nombre, le fait d'ajouter "" le transforme en string
        } catch(error){
            throw new Error(error);
            //console.log("Chaine Espaces", chaine, espaces, typeof(chaine));
        };
        if(longueur>=espaces && apres)
            return(chaine.substring(0,espaces));
        else // complete aussi si la chaine est vide !
            for(var i=0; i<espaces - longueur; i++)
                if(apres)
                    chaine += "\u00a0";
                else
                    chaine = "\u00a0"+chaine;
        return(chaine);
    },

    pop : function(chaine){  // ote tous les espaces EN FIN DE CHAINE
        return(chaine.replace(/ *$/,"").replace(/\xA0*$/g,""));
        // * signifie 'un ou plusieurs'
        // $ signifie 'fin de chaine'
        // replace(/\xA0/g,"") nécessaire si la chaîne a été codée avec esp.fix
    },

    del : function(chaine){  // ote tous les espaces
        return(chaine.replace(/ /g,"").replace(/\xA0/g,""));
        // replace(/\xA0/g,"") nécessaire si la chaîne a été codée avec esp.fix
    }
};

esp.fixe     = esp.fix;
esp.fixSpace = esp.fix;

esp.limit    = esp.lim;
esp.limSpace = esp.lim;

esp.popSpace = esp.pop;

esp.delete   = esp.del;
esp.delSpace = esp.del;
esp.oteSpace = esp.del;

// Pour uilisation avec require("esp") de node.js : 
var module = module || undefined;
if(module!=undefined){
    module.exports = esp;
};
