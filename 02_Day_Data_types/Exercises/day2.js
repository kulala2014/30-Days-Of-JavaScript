
let sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching';



function CheckMaxRepeated(string) {
    let counts = {};
    var keyValues = [];
    let max = [];
    sentence = sentence.replace(/[%@#$&;!,.?]/g,'')
    sentence.match(/\w+/g).sort().forEach(w=> {counts[w] = (counts[w] | 0)+1});
    console.log(counts);

    for(let key in counts) {
        keyValues.push([key, counts[key]])
    }

    keyValues.sort((x,y)=>y[1]-x[1])
    console.log(keyValues)

    let temp = keyValues[0];
    max.push(keyValues[0]);
    for(let item of keyValues){
        if(temp[0] === item[0]) {
            continue;
        }

        if(temp[1] === item[1]) {
            max.push(item)
        }

        if(temp[1] > item[1]) {
            break;
        }
    }
    return max;
}

let result = CheckMaxRepeated(sentence)
result.forEach(x => console.log(`The max repeated words is \'${x[0]}\', repeated times: \'${x[1]}\'`))