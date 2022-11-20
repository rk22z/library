import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    books: [],
    book: {
        id: 0,
        title: '',
        author: '',
        ISBN: 0,
        price: 0,
        available: true,
    }
}

export const adminSlice = createSlice({
    name: 'admin',
    initialState,
    reducers: {
        addBook: (state, action) => {
            state.books = [...state.books, action.payload]
        }
    }
})

export const books = (state) => state.admin.books;
export const book = (state) => state.admin.book;
export const { addBook } = adminSlice.actions

export default adminSlice.reducer;
