import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getAuthors } from "../../../service/authors";
import { getGenres } from "../../../service/genres";
import { showBook } from "../../../service/books";

export default function BookEdit() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [genres, setGenres] = useState([]);
    const [authors, setAuthors] = useState([]);
    const [formData, setFormData] = useState({
        title: "",
        price: 0,
        stock: 0,
        genre_id: 0,
        author_id: 0,
        cover_photo: null,
        description: "",
    });

    useEffect(() => {
        const fetchData = async () => {
        const [authorsData, genresData, booksData] = await Promise.all([
            getAuthors(),
            getGenres(),
            showBook(id)
        ]);
        setAuthors(authorsData);
        setGenres(genresData);
        setFormData({
            title: booksData.title,
            price: booksData.price,
            stock: booksData.stock,
            genre_id: booksData.genre_id,
            author_id: booksData.author_id,
            cover_photo: booksData.cover_photo,
            description: booksData.description,
        })
        };
        fetchData();
    }, [id]);

    const handleChange = async (params) => {
        
    }

    const handleSubmit = async (params) => {
        
    }

    return (
        <>
        <section className="bg-white dark:bg-gray-900">
            <div className="max-w-2xl px-4 py-8 mx-auto lg:py-16">
            <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
                Edit Book
            </h2>
            <form onSubmit={handleSubmit}>
                <div className="grid gap-4 mb-4 sm:grid-cols-2 sm:gap-6 sm:mb-5">
                <div className="sm:col-span-2">
                    <label
                    for="title"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                    Title
                    </label>
                    <input
                    type="text"
                    value={formData.title}
                    onChange={handleChange}
                    name="title"
                    id="title"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
                    placeholder="Title"
                    required
                    />
                </div>
                <div className="w-full">
                    <label
                    for="price"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                    Price
                    </label>
                    <input
                    type="number"
                    value={formData.price}
                    onChange={handleChange}
                    name="price"
                    id="price"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
                    placeholder="Price"
                    required
                    />
                </div>
                <div className="w-full">
                    <label
                    for="stock"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                    Stock
                    </label>
                    <input
                    type="number"
                    value={formData.stock}
                    onChange={handleChange}
                    name="stock"
                    id="stock"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
                    placeholder="Stock"
                    required
                    />
                </div>
                <div className="w-full">
                    <label
                    for="cover_photo"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                    Cover Photo
                    </label>
                    <input
                    type="file"
                    name="cover_photo"
                    onChange={handleChange}
                    id="cover_photo"
                    accept="image/*"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
                    required
                    />
                </div>
                <div>
                    <label
                    for="genre_id"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                    Genre
                    </label>
                    <select
                    id="genre_id"
                    name="genre_id"
                    value={formData.genre_id}
                    onChange={handleChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
                    >
                    <option value="">-- Select Genre --</option>
                    {genres.map((genre) => (
                        <option key={genre.id} value={genre.id}>
                        {genre.name}
                        </option>
                    ))}
                    </select>
                </div>
                <div>
                    <label
                    for="author_id"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                    Author
                    </label>
                    <select
                    id="author_id"
                    name="author_id"
                    value={formData.author_id}
                    onChange={handleChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
                    >
                    <option value="">-- Select Author --</option>
                    {authors.map((author) => (
                        <option key={author.id} value={author.id}>
                        {author.name}
                        </option>
                    ))}
                    </select>
                </div>
                <div className="sm:col-span-2">
                    <label
                    for="description"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                    Description
                    </label>
                    <textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    rows="6"
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
                    placeholder="Write a description here..."
                    ></textarea>
                </div>
                </div>
                <div className="flex items-center space-x-4">
                <button
                    type="submit"
                    className="text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800"
                >
                    Edit Book
                </button>
                <button
                    type="reset"
                    className="text-gray-600 inline-flex items-center hover:text-white border border-gray-600 hover:bg-gray-600 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-gray-500 dark:text-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-900"
                >
                    Reset
                </button>
                </div>
            </form>
            </div>
        </section>
        </>
    );
}
