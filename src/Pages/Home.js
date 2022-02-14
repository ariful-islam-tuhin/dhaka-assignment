import React from 'react';
import { useEffect, useState } from 'react';
import UseProducts from './UseProducts';
import axios from 'axios';
import Pagination from './Pagination';
import Posts from './Posts';

const Home = () => {
    
//    onChange={handleSearch}
//     const handleSearch = event =>{
//         const searchText = (event.target.value);
//         const matchedProducts = products.filter(product => product.name.includes(searchText));
//         console.log(matchedProducts.length)
//     }

    const [products, setProducts] = useState([]);

   

    useEffect(() => {
        fetch("data.json")
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, []);

   

    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);

    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true);
            const res = await axios.get('data.json');
            setPosts(res.data);
            setLoading(false);
        };

        fetchPosts();
    }, []);
    // Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);


    

    return (

        <div className='background'>
            <div className='container'>

                <div className="row row-cols-lg-4 row-cols-md-3 row-cols-sm-2 ">
                    {products.map((Product) => (
                        <UseProducts Product={Product}></UseProducts>
                    ))}

                </div>



                 <ul className='container'>

                    <Posts posts={currentPosts} loading={loading} />
                    <Pagination
                        postsPerPage={postsPerPage}
                        totalPosts={posts.length}
                        paginate={paginate}
                    />
                </ul> 








             


            </div>

        </div>
    );
};

export default Home;