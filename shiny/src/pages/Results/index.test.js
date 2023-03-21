import { formatJobList } from './'
//Premier test
// test('Ceci est mon premier test', () => {
//     const expectedState = 'item2,'
//     expect(formatJobList('item2', 3, 1)).toEqual(expectedState)
// })

//Version avec describe
// describe('La fonction formatJobList', () => {
//         test('ajoute une virgule à un item', () => {
//             const expectedState = 'item2,'
//             expect(formatJobList('item2', 3, 1)).toEqual(expectedState)
//         })
//         test('ne met pas de virgule pour le dernier élément', () => {
//             const expectedState = 'item3'
//             expect(formatJobList('item3', 3, 2)).toEqual(expectedState)
//         })
//     })
//Avec l'allias it au lieu de "test":::
describe('The formatJobList function', () => {
    it('should add a comma to a word', () => {
        const expectedState = 'item2,'
        expect(formatJobList('item2', 3, 1)).toEqual(expectedState)
    })

    it('should not add a comma to the last element of the list', () => {
        const expectedState = 'item3'
        expect(formatJobList('item3', 3, 2)).toEqual(expectedState)
    })
})