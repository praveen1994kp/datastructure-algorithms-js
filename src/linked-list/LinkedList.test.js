const { LinkedList } = require("./LinkedList")

describe('Linked List', () => {
    it('Creates a New List of numbers', () => {
        const list = new LinkedList()
        list.add(1)
        list.add(2)
        list.add(3)
        list.add(4)

        expect(list.toString()).toBe('1 ->2 ->3 ->4')
    })
    it('Delete middle node after creating a New List of numbers', () => {
        const list = new LinkedList()
        list.add(1)
        list.add(2)
        list.add(3)
        list.add(4)

        expect(list.toString()).toBe('1 ->2 ->3 ->4')
        
        list.delete(2)

        expect(list.toString()).toBe('1 ->3 ->4')
    })
    it('Delete last node after creating a New List of numbers', () => {
        const list = new LinkedList()
        list.add(1)
        list.add(2)
        list.add(3)
        list.add(4)

        expect(list.toString()).toBe('1 ->2 ->3 ->4')

        list.delete(4)

        expect(list.toString()).toBe('1 ->2 ->3')
    })
    it('Delete node after creating a new List of single element(number)', () => {
        const list = new LinkedList()
        list.add(1)

        expect(list.toString()).toBe('1')

        list.delete(1)

        expect(list.toString()).toBe('')
    })
    it('Add nodes after deleting all elements from a list', () => {
        const list = new LinkedList()
        list.add(1)

        expect(list.toString()).toBe('1')

        list.delete(1)

        expect(list.toString()).toBe('')

        list.add(1)
        list.add(2)
        list.add(3)
        list.add(4)
        
        expect(list.toString()).toBe('1 ->2 ->3 ->4')
    })

    it('Insert to middle of list', () => {
        const list = new LinkedList()
        list.add(1)
        list.add(2)
        list.add(3)
        list.add(4)

        expect(list.toString()).toBe('1 ->2 ->3 ->4')

        list.insertAt(5, 2)

        
        expect(list.toString()).toBe('1 ->2 ->5 ->3 ->4')
    })

    it('Insert to start of list', () => {
        const list = new LinkedList()
        list.add(1)
        list.add(2)
        list.add(3)
        list.add(4)

        expect(list.toString()).toBe('1 ->2 ->3 ->4')

        list.insertAt(5, 0)

        
        expect(list.toString()).toBe('5 ->1 ->2 ->3 ->4')
    })
})