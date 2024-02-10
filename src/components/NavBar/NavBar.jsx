import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import CartWidget from '../CarWidget/CartWidget'
import { collection, getDocs, orderBy, query } from 'firebase/firestore'
import { db } from '../../services/firebase/firebaseConfig'

const NavBar = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        const categoriesCollection = query(collection(db, 'categories'), orderBy('name'))

        getDocs(categoriesCollection)
            .then(querySnapshot => {
                const categoriesAdapted = querySnapshot.docs.map(doc => {
                    const fields = doc.data()
                    return { id: doc.id, ...fields }
                })
                setCategories(categoriesAdapted)
            })
    }, [])

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link to='/' className="navbar-brand">Oportuno Regalos </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        {
                            categories.map(cat => (
                                <Link key={cat.id} to={`/category/${cat.slug}`} className="nav-link active">{cat.name}</Link>
                            ))
                        }
                    </ul>
                    <Link to='/cart'>
                    <CartWidget />
                    </Link>
                </div>
            </div>
        </nav>

    )
}

export default NavBar
