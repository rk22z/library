import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    books: [],
    displayedBooks: [],
    book: {
        id: 0,
        title: '',
        author: '',
        ISBN: 0,
        price: 0,
        available: true,
    },
    isModalOpen: false,
    modalType: '',
}

export const adminSlice = createSlice({
    name: 'admin',
    initialState,
    reducers: {
        openModal: (state) => {
            state.isModalOpen = true
        },
        closeModal: (state) => {
            state.isModalOpen = false
        },
        handleModalType: (state, action) => {
            state.modalType = action.payload
        },
        addBook: (state, action) => {
            state.books = [...state.books, action.payload]
        },
        selectBook: (state, action) => {
            state.book = action.payload
        },
        setDisplayedBooks: (state, action) => {
            state.displayedBooks = [...state.books?.filter(book => book.available === action.payload)]
        },
        resetDisplayedBooks: (state) => {
            state.displayedBooks = state.books
        },
        borrowBook: (state) => {
            state.books = state.books?.map((selectedBook) => selectedBook.id !== state.book.id ?
                selectedBook :
                { ...selectedBook, available: false }
            )
        }
    }
})

export const books = (state) => state.admin.books;
export const displayedBooks = (state) => state.admin.displayedBooks;
export const book = (state) => state.admin.book;
export const isModalOpen = (state) => state.admin.isModalOpen;
export const modalType = (state) => state.admin.modalType;
export const { addBook, openModal, closeModal, selectBook, borrowBook, handleModalType, setDisplayedBooks, resetDisplayedBooks } = adminSlice.actions

export default adminSlice.reducer;
