import { createSlice } from '@reduxjs/toolkit'
import moment from 'moment/moment'
import { DATE_FORMAT } from '../constants/variables'


const initialState = {
    books: [],
    book: {
        id: 0,
        title: '',
        author: '',
        ISBN: 0,
        price: 0,
        available: true,
        borrowDate: null,
        maxReturnDate: null,
    },
    isModalOpen: false,
    modalType: '',
    selectedTab: 'all'
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
            state.book = initialState.book
        },
        handleModalType: (state, action) => {
            state.modalType = action.payload
        },
        changeTab: (state, action) => {
            state.selectedTab = action.payload
        },
        addBook: (state, action) => {
            state.books = [...state.books, action.payload]
        },
        selectBook: (state, action) => {
            state.book = action.payload
        },
        borrowBook: (state) => {
            state.books = state.books?.map((selectedBook) => selectedBook.id !== state.book.id ?
                selectedBook :
                { ...selectedBook, available: false, borrowDate: moment().format(DATE_FORMAT), maxReturnDate: moment().add(14, 'days').format(DATE_FORMAT) }
            )
            state.book = initialState.book

        },
        returnBook: (state) => {
            state.books = state.books?.map((selectedBook) => selectedBook.id !== state.book.id ?
                selectedBook :
                { ...selectedBook, available: true, borrowDate: null, maxReturnDate: null }
            )
            state.book = initialState.book
        },

    }
})

export const books = (state) => state.admin.books;
export const selectedTab = (state) => state.admin.selectedTab;
export const book = (state) => state.admin.book;
export const isModalOpen = (state) => state.admin.isModalOpen;
export const modalType = (state) => state.admin.modalType;
export const {
    addBook,
    openModal,
    closeModal,
    selectBook,
    borrowBook,
    handleModalType,
    changeTab,
    returnBook
} = adminSlice.actions

export default adminSlice.reducer;
