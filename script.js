const tagesElement = document.querySelector('#tags');
const textarea = document.querySelector('#textarea');

textarea.addEventListener('keyup', (e) => {
    createTags(e.target.value)
    if(e.key === 'Enter') {
        
    }
})


function createTags(tagsString) {
    const tags = [];
    const tagStringList = tagsString.split(',');

    for (let tag of tagStringList) {
        tag = tag.trim();
        if (tag != '') {
            tags.push(tag);
        }
    } 

    tagesElement.innerHTML = ''


    tags.forEach(tag => {
        const tageElement = document.createElement('span')
        tageElement.classList.add('tag');
        tageElement.innerText = tag;
        tagesElement.appendChild(tageElement)
    })

    console.log(tags);
}