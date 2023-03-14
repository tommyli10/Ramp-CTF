const sections = document.querySelectorAll('#mainContainer > section');

// console.log('sections', sections)

let output = '';

for (let i = 0; i < sections.length; i++) {
    const main = sections[i].querySelector('main > article > p');

    console.log('article', main.attributes.value.nodeValue);

    output += main.attributes.value.nodeValue;
}

console.log('output', output)
