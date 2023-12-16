export default function addClassNamesFromString(node, classString) {
    const newNode = node

    const classNamesArray = classString.split(' ')
    classNamesArray.forEach(className => {
        newNode.classList.add(className)
    })
    
    return newNode
}