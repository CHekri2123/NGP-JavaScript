let paragraph = `Paragraphs are medium-sized units of writing, longer than sentences, but shorter than sections, chapters, or entire works. Because they connect the "small" ideas of individual sentences to a "bigger" idea, paragraph structure is essential to any writing for organization, flow, and comprehension. Students have a lot of questions when it comes to writing a paragraph: How many sentences should you use? How do you transition within a paragraph? When do you end a paragraph? Etc. Below we explain everything you need to know about paragraph structure to write like an expert, including several paragraph examples.`

const sentence = paragraph.split('. ');

console.log("Count of sentences are: "+sentence.length+"\n");

function wordCount(paragraph){
    return paragraph.split(' ').filter(function(n) {return n != ''}).length;
}

let countWord = wordCount(paragraph);

console.log("No.of words : "+countWord+"\n");

var regx = /[a-zA-Z0-9]/g;

console.log("No of characters in paragraph: "+paragraph.match(regx).length+"\n");

var pragaraphWordCount = (paragraph.match(/paragraph/g) || []).length;

console.log("No. of occurences of the word \"paragraph\" is: "+pragaraphWordCount+"\n");

var specialCharacters = paragraph.match(/[@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/g).length;

console.log("Total no.of special characters is: "+specialCharacters+"\n");

var para = paragraph.replace(/paragraph/gi,'para');

console.log(para+"\n");

var slicePara = sentence.slice(1);
console.log(slicePara.toString());