angular.module('app.services', [])

.factory('Poems', function() {
    // Might use a resource here that returns a JSON array
    // Some fake testing data
    var poems = [{
        "id": 1,
        "title": "কবিতা ১",
        "details": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently withdesktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        "stared": true
    }, {
        "id": 2,
        "title": "কবিতা ২",
        "details": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently withdesktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        "stared": false
    }, {
        "id": 3,
        "title": "কবিতা ৩",
        "details": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently withdesktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        "stared": false
    }, {
        "id": 4,
        "title": "কবিতা 8",
        "details": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently withdesktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        "stared": false
    }, {
        "id": 5,
        "title": "কবিতা 5",
        "details": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently withdesktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        "stared": false
    }, {
        "id": 6,
        "title": "কবিতা 6",
        "details": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently withdesktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        "stared": false
    }, {
        "id": 7,
        "title": "কবিতা 7",
        "details": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently withdesktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        "stared": false
    }, {
        "id": 8,
        "title": "কবিতা 8",
        "details": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently withdesktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        "stared": false
    }];
    return {
        all: function() {
            return poems;
        },
        star: function(poem) {
            var poemIndex = poems.indexOf(poem);
            poems[poemIndex].stared = (poems[poemIndex].stared === true) ? false : true;
        },
        remove: function(poem) {
            poems.splice(poems.indexOf(poem), 1);
        },
        get: function(poemId) {
            for (var i = 0; i < poems.length; i++) {
                if (poems[i].id === parseInt(poemId)) {
                    return poems[i];
                }
            }
            return null;
        },
        add: function(poem) {
            var poemId = poems.slice(-1)[0].id+1;
        	poems.push({id:poemId,title:poem.title,details:poem.details,stared:false});

            return this.get(poemId);
        }
    };
})

.factory('Translate', function() {
    return {
        run: function(text) {
            console.log(text);
            var car = text;//document.conversion.saisie.value; 

            car = car.replace(/a/g, "অ");
            car = car.replace(/A/g, "আ");
            car = car.replace(/i/g, "ই");
            car = car.replace(/I/g, "ঈ");
            car = car.replace(/u/g, "উ");
            car = car.replace(/U/g, "ঊ");
            car = car.replace(/অঅ/g, "আ");
            car = car.replace(/ইই/g, "ঈ");
            car = car.replace(/উউ/g, "ঊ");
            car = car.replace(/e/g, "এ");
            car = car.replace(/E/g, "এ");
            car = car.replace(/o/g, "ও");
            car = car.replace(/O/g, "ও");
            car = car.replace(/অই/g, "ঐ");
            car = car.replace(/অউ/g, "ঔ");


            // suppression du virama 
            car = car.replace(/িই/g, "ী");
            car = car.replace(/ুউ/g, "ূ");
            car = car.replace(/্ও/g, "\u200b");
            car = car.replace(/্অ/g, "া");
            car = car.replace(/\u200bই/g, "ৈ");
            car = car.replace(/\u200bউ/g, "ৌ");
            car = car.replace(/\u200bও/g, "ো");

            car = car.replace(/্আ/g, "া");
            car = car.replace(/্ই/g, "ি");
            car = car.replace(/্ঈ/g, "ী");
            car = car.replace(/্উ/g, "ু");
            car = car.replace(/্ঊ/g, "ূ");

            car = car.replace(/্ঋ/g, "ৃ");
            car = car.replace(/্ৠ/g, "ৄ");
            car = car.replace(/্ঌ/g, "ৢ");
            car = car.replace(/্ৡ/g, " ৣ");
            car = car.replace(/্এ/g, "ে");
            //car = car.replace(/্ও/g, "ো");
            car = car.replace(/্ /g, " ");

            //cons
            car = car.replace(/n/g, "ন্");
            car = car.replace(/k/g, "ক্");
            car = car.replace(/K/g, "ক্");
            car = car.replace(/g/g, "গ্");
            car = car.replace(/c/g, "চ্");
            car = car.replace(/C/g, "চ্");
            car = car.replace(/j/g, "জ্");
            car = car.replace(/T/g, "ট্");
            car = car.replace(/D/g, "ড্");
            car = car.replace(/N/g, "ণ্");
            car = car.replace(/t/g, "ত্");
            car = car.replace(/d/g, "দ্");
            car = car.replace(/p/g, "প্");
            car = car.replace(/P/g, "প্");
            car = car.replace(/b/g, "ব্");
            car = car.replace(/B/g, "ব্");
            car = car.replace(/m/g, "ম্");
            car = car.replace(/Y/g, "য়্");
            car = car.replace(/R/g, "ড়্");
            car = car.replace(/y/g, "য্");
            car = car.replace(/r/g, "র্");
            car = car.replace(/l/g, "ল্");
            car = car.replace(/L/g, "ল্");
            car = car.replace(/h/g, "হ্");
            car = car.replace(/S/g, "ষ্");
            car = car.replace(/s/g, "স্");
            // cas particuliers 
            car = car.replace(/G/g, "ঙ্");
            car = car.replace(/J/g, "ঞ্");
            car = car.replace(/ñ/g, "ঞ্");
            car = car.replace(/ন্গ্/g, "ঙ্");
            car = car.replace(/ন্জ্/g, "ঞ্");

            // aspirées
            car = car.replace(/ক্হ্/g, "খ্");
            car = car.replace(/গ্হ্/g, "ঘ্");
            car = car.replace(/চ্হ্/g, "ছ্");
            car = car.replace(/জ্হ্/g, "ঝ্");
            car = car.replace(/ট্হ্/g, "ঠ্");
            car = car.replace(/ড্হ্/g, "ঢ্");
            car = car.replace(/ত্হ্/g, "থ্");
            car = car.replace(/দ্হ্/g, "ধ্");
            car = car.replace(/প্হ্/g, "ফ্");
            car = car.replace(/ব্হ্/g, "ভ্");
            car = car.replace(/ড়্হ্/g, "ঢ়্");


            // cas du s barre
            car = car.replace(/স্হ্/g, "শ্");
            car = car.replace(/ç/g, "শ্");

            // cas du ri li 
            car = car.replace(/্-র্/g, "ৃ");
            car = car.replace(/-র্/g, "ঋ");
            car = car.replace(/ঋই/g, "ৠ");
            car = car.replace(/ৃই/g, "ৄ");

            car = car.replace(/্-ল্/g, "ৢ");
            car = car.replace(/-ল্/g, "ঌ");
            car = car.replace(/ঌই/g, "ৡ");
            car = car.replace(/ৢই/g, "ৣ");

            // ponctuation devanagari
            car = car.replace(/\|/g, "।");
            car = car.replace(/\//g, "।");
            car = car.replace(/।।/g, "॥");

            //suppression du zero
               car = car.replace(/\u200bক/g, "ক");
            car = car.replace(/\u200bখ/g, "খ");
            car = car.replace(/\u200bগ/g, "গ");
            car = car.replace(/\u200bঘ/g, "ঘ");
            car = car.replace(/\u200bঙ/g, "ঙ");
            car = car.replace(/\u200bচ/g, "চ");
            car = car.replace(/\u200bছ/g, "ছ");
            car = car.replace(/\u200bজ/g, "জ");
            car = car.replace(/\u200bঝ/g, "ঝ");
            car = car.replace(/\u200bঞ/g, "ঞ");
            car = car.replace(/\u200bট/g, "ট");
            car = car.replace(/\u200bঠ/g, "ঠ");
            car = car.replace(/\u200bড/g, "ড");
            car = car.replace(/\u200bঢ/g, "ঢ");
            car = car.replace(/\u200bণ/g, "ণ");
            car = car.replace(/\u200bত/g, "ত");
            car = car.replace(/\u200bথ/g, "থ");
            car = car.replace(/\u200bদ/g, "দ");
            car = car.replace(/\u200bধ/g, "ধ");
            car = car.replace(/\u200bন/g, "ন");
            car = car.replace(/\u200bপ/g, "প");
            car = car.replace(/\u200bফ/g, "ফ");
            car = car.replace(/\u200bব/g, "ব");
            car = car.replace(/\u200bভ/g, "ভ");
            car = car.replace(/\u200bম/g, "ম");
            car = car.replace(/\u200bয/g, "য");
            car = car.replace(/\u200bর/g, "র");
            car = car.replace(/\u200bল/g, "ল");
            car = car.replace(/\u200bশ/g, "শ");
            car = car.replace(/\u200bষ/g, "ষ");
            car = car.replace(/\u200bস/g, "স");
            car = car.replace(/\u200bহ/g, "হ");
            car = car.replace(/\u200b /g, " ");
            car = car.replace(/\u200b\ং/g, "ং");
            car = car.replace(/\u200b\ঃ/g, "ঃ");

            // anusvara
            car = car.replace(/M/g, "ং");
            car = car.replace(/্ং/g, "ং");
            // candrabindu 
            car = car.replace(/ংং/g, "ঁ");
            // visarga
            car = car.replace(/H/g, "ঃ");
            car = car.replace(/্ঃ/g, "ঃ");

            // alternative : car = car.replace(/:/g, "ः");
            // avagraha
            car = car.replace(/\'/g, "ঽ");
            car = car.replace(/’/g, "ঽ");

            car = car.replace(/0/g, "০");
            car = car.replace(/1/g, "১");
            car = car.replace(/2/g, "২");
            car = car.replace(/3/g, "৩");
            car = car.replace(/4/g, "৪");
            car = car.replace(/5/g, "৫");
            car = car.replace(/6/g, "৬");
            car = car.replace(/7/g, "৭");
            car = car.replace(/8/g, "৮");
            car = car.replace(/9/g, "৯");
            return car;
        }
    };
});