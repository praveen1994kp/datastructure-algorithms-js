import { LinkedListNode } from "./LinkedListNode"

export class LinkedList {
    constructor () {
        this.head = null
        this.size = 0
        this.tail = null
    }
    add(element) {
        const node = new LinkedListNode(element)
        if (!this.head) {
            this.head = node
        }
        if(!this.tail) {
            this.tail = node
        } else {
            this.tail.next = node
            this.tail = node
        }
        this.size++
        return this
    }

    insertAt(element, index) {
        if (index < 0 || index > this.size) throw new Error('Invalid index')
        const nodeToInsert = new LinkedListNode(element)
        if (index === this.size - 1) {
            this.add(element)
            return this
        }
        if (index === 0) {
            nodeToInsert.next = this.head
            this.head = nodeToInsert
            return this
        }
        let i = 1
        let current = this.head
        while ( i !== index) {
            current = current.next
            i++
        }
        nodeToInsert.next = current.next
        current.next = nodeToInsert
        
        return this
    }

    delete(element) {
        let current = this.head
        let prev = null
        while (current) {
            if (current.value === element) {
                const deletedNode = current
                if (!prev) {
                    this.head = current.next
                } else if (!current.next) {
                    if (!prev) {
                        this.head = null
                        this.tail = null
                    } else {
                        prev.next = null
                        this.tail = prev
                    }
                } else {
                    prev.next = current.next
                }
                this.size--

                return deletedNode
            } else {
                prev = current
                current = current.next
            }            
        }
    }

    toString() {
        let str = ''
        if (!this.head) return str
        let current = this.head
        while (current) {
            str += current.next ? `${current.value} ->` : `${current.value}`
            current = current.next
        }
        return str
    }
}