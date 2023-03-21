import { formatJobList, formatQueryParams } from './'
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
    // Vous devrez créer deux tests différents pour formatQueryParams  
    // au sein d'une série de tests (regroupés dans describe()).
describe('The formatQueryParams function', () => {
    it('should use the right format for param', () => {
        const expectedState = 'a1=answer1'
        expect(formatQueryParams({ 1: 'answer1' })).toEqual(expectedState)
    })
    it('should concatenate params with an &', () => {
        const expectedState = 'a1=answer1&a2=answer2'
        expect(formatQueryParams({ 1: 'answer1', 2: 'answer2' })).toEqual(
            expectedState
        )
    })
})