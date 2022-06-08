const a;
const x = `{
    'quotes':
    [
        {
            'id':1,
            'quote':'Life isn’t about getting and having, it’s about giving and being.',
            'author':'Kevin Kruse'
        },
        {
            'id':2,
            'quote':'Whatever the mind of man can conceive and believe, it can achieve.',
            'author':'Napoleon Hill'
        },
        {
            'id':3,
            'quote':'Strive not to be a success, but rather to be of value.',
            'author':'Albert Einstein'
        },
        {
            'id':4,
            'quote':'Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference.',
            'author':'Robert Frost'
        },
        {
            'id':5,
            'quote':'I attribute my success to this: I never gave or took any excuse.',
            'author':'Florence Nightingale'
        }
    ]
}`

a = JSON.parse(x);
console.log(a);



for (let i = 0; i < a.quotes.length; i++) {
    const element = a.quotes[i].author;
    console.log(element);
    console.log(j);
}

//console.log(a.filter((el) => el.author.length < 15));


console.log('******************************');
let b = a.filter((el) => el.quote.length < 65)

b.forEach(element => {
    console.log(element.quotes);
});
