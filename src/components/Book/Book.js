import React, { useState, useMemo, useCallback } from 'react';
import { Container, Row, Col, Card, Button, Form, Badge, ListGroup, Pagination, InputGroup, Spinner, Breadcrumb} from 'react-bootstrap';
import { Heart, Grid, List, ChevronDown, ChevronUp, ShoppingCart, Star, StarHalf, Search, Home, ChevronRight } from 'lucide-react';
import './Book.css';

const BOOKS_DATA = [
  {
    id: 1,
    title: "Thunder Stunt",
    cover: "../images/Thunder.webp",
    categories: ["ADVENTURE", "SCIENCE", "COMEDY"],
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    author: "Kevin Smiley",
    publisher: "Printarea Studios",
    year: 2019,
    rating: 4.0,
    reviews: 125,
    isWishlisted: false,
    inCart: false
  },
  {
    id: 2,
    title: "ALL GOOD NEWS",
    cover: "../images/Thunder.webp",
    categories: ["Biography"],
    price: 34,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    author: "Kevin Smiley",
    publisher: "Printarea Studios",
    year: 2019,
    rating: 4.0,
    reviews: 125,
    isWishlisted: false,
    inCart: false
  },
  {
    id: 3,
    title: "Terrible Madness",
    cover: "../images/TM.webp",
    categories: ["ADVENTURE"],
    price: 40,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    author: "Kevin Smiley",
    publisher: "Printarea Studios",
    year: 2019,
    rating: 4.0,
    reviews: 125,
    isWishlisted: false,
    inCart: false
  },
  {
    id: 4,
    title: "The Missadventure..",
    cover: "../images/M.webp",
    categories: ["Adventure", "science", "Comedy"],
    price: 70,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    author: "Kevin Smiley",
    publisher: "Printarea Studios",
    year: 2019,
    rating: 4.0,
    reviews: 125,
    isWishlisted: false,
    inCart: false
  },
  {
    id: 5,
    title: "A Heavy Lift",
    cover: "../images/Ah.webp",
    categories: ["Horror","Drama"],
    price: 50,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    author: "Kevin Smiley",
    publisher: "Printarea Studios",
    year: 2019,
    rating: 4.0,
    reviews: 125,
    isWishlisted: false,
    inCart: false
  },
  {
    id: 6,
    title: "Thunder Stunt",
    cover: "../images/Thunder.webp",
    categories: ["Adventure", "Science", "Comedy"],
    price: 154,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    author: "Kevin Smiley",
    publisher: "Printarea Studios",
    year: 2019,
    rating: 4.0,
    reviews: 125,
    isWishlisted: false,
    inCart: false
  },
  {
    id: 7,
    title: "Battler Drive",
    cover: "../images/bd.webp",
    categories: ["Racing", "Drama"],
    price: 15,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    author: "Kevin Smiley",
    publisher: "Printarea Studios",
    year: 2019,
    rating: 4.0,
    reviews: 125,
    isWishlisted: false,
    inCart: false
  },
  {
    id: 8,
    title: "Take Out Tango",
    cover: "../images/tot.webp",
    categories: ["Sprots", "Drama",],
    price: 20,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    author: "Kevin Smiley",
    publisher: "Printarea Studios",
    year: 2019,
    rating: 4.0,
    reviews: 125,
    isWishlisted: false,
    inCart: false
  },
  {
    id: 9,
    title: "Pushing Clouds",
    cover: "../images/pc.webp",
    categories: ["Drama", "Comedy"],
    price: 30,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    author: "Kevin Smiley",
    publisher: "Printarea Studios",
    year: 2019,
    rating: 4.0,
    reviews: 125,
    isWishlisted: false,
    inCart: false
  },
  {
    id: 10,
    title: "SECONDS",
    cover: "../images/s.webp",
    categories: ["Thriller"],
    price: 80,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    author: "Kevin Smiley",
    publisher: "Printarea Studios",
    year: 2019,
    rating: 4.0,
    reviews: 125,
    isWishlisted: false,
    inCart: false
  },
  {
    id: 11,
    title: "REWORK",
    cover: "../images/rr.webp",
    categories: ["Drama","Comedy"],
    price: 58,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    author: "Kevin Smiley",
    publisher: "Printarea Studios",
    year: 2019,
    rating: 4.0,
    reviews: 125,
    isWishlisted: false,
    inCart: false
  },
  {
    id: 12,
    title: "Such a Fun Age",
    cover: "../images/sfa.webp",
    categories: ["Thriller"],
    price: 60,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    author: "Kevin Smiley",
    publisher: "Printarea Studios",
    year: 2019,
    rating: 4.0,
    reviews: 125,
    isWishlisted: false,
    inCart: false
  },
  {
    id: 13,
    title: "Emily and The Back..",
    cover: "../images/etb.webp",
    categories: ["Adventure", "Science", "Comedy"],
    price: 20,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    author: "Kevin Smiley",
    publisher: "Printarea Studios",
    year: 2019,
    rating: 4.0,
    reviews: 125,
    isWishlisted: false,
    inCart: false
  },

];

const BESTSELLERS = [
  "Alone Here", "Alien Invasion", "Bullo The Cat", 
  "Cut That Hair!", "Dragon Of The King"
];

const CATEGORIES = [
  { id: 1, name: "Action", checked: true },
  { id: 2, name: "Adventure", checked: false },
  { id: 3, name: "Animation", checked: false },
  { id: 4, name: "Biography", checked: false },
  { id: 5, name: "Comedy", checked: false },
  { id: 6, name: "Crime", checked: false },
  { id: 7, name: "Documentary", checked: false },
  { id: 8, name: "Fantasy", checked: false },
  { id: 9, name: "History", checked: false },
  { id: 10, name: "Horror", checked: false },
  { id: 11, name: "Mystery", checked: false },
  { id: 12, name: "Romance", checked: false },
  { id: 13, name: "Sci-fi", checked: false },
  { id: 14, name: "Sport", checked: false },
  { id: 15, name: "Drama", checked: false },
  { id: 16, name: "Racing", checked: false },
  { id: 16, name: "Sprots", checked: false },
  { id: 16, name: "Thriller", checked: false }



];

const Rating = React.memo(({ value, reviews }) => {
  return (
    <div className="rating">
      {[1, 2, 3, 4, 5].map((star) => (
        <span key={star}>
          {star <= Math.floor(value) ? (
            <Star className="star filled" size={16} />
          ) : star === Math.ceil(value) && !Number.isInteger(value) ? (
            <StarHalf className="star half-filled" size={16} />
          ) : (
            <Star className="star" size={16} />
          )}
        </span>
      ))}
      <span className="rating-value">{value}</span>
      <span className="reviews-count">({reviews} Reviews)</span>
    </div>
  );
});

const PriceSlider = React.memo(({ value, onChange }) => {
  const handleChange = useCallback((index, val) => {
    const newValue = [...value];
    newValue[index] = parseInt(val);
    onChange(newValue);
  }, [value, onChange]);

  return (
    <div className="price-slider">
      <div className="slider-track">
        <input
          type="range"
          min={0}
          max={100}
          value={value[0]}
          onChange={(e) => handleChange(0, e.target.value)}
          className="slider slider-1"
        />
      </div>
      <div className="price-values">
        <span>${value[0]}</span>
      </div>
    </div>
  );
});

const FilterSection = ({ title, isOpen, onToggle, children }) => (
  <div className="filter-section">
    <div className="section-header" onClick={onToggle}>
      <h4>{title}</h4>
      {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
    </div>
    {isOpen && <div className="section-content">{children}</div>}
  </div>
);

const BookCard = React.memo(({ book, viewMode, toggleWishlist, toggleCart }) => {
  if (viewMode === 'grid') {
    return (
      <Col md={6} lg={3} className="mb-4">
        <Card className="book-card">
          <div className="book-cover-container">
            <Card.Img variant="top" src={book.cover} alt={book.title} />
            <Button 
              variant="link" 
              className={`wishlist-btn ${book.isWishlisted ? 'active' : ''}`}
              onClick={() => toggleWishlist(book.id)}
            >
              <Heart size={18} fill={book.isWishlisted ? 'currentColor' : 'none'} />
            </Button>
          </div>
          <Card.Body>
            <div className="book-categories">
              {book.categories.map((category, idx) => (
                <Badge key={idx} bg="secondary" className="me-1">{category}</Badge>
              ))}
            </div>
            <Card.Title>{book.title}</Card.Title>
            <Rating value={book.rating} reviews={book.reviews} />
            <div className="book-price">
              <span className="current-price">${book.price.toFixed(2)}</span>
            </div>
            <Button 
              variant="primary" 
              className="add-to-cart-btn"
              onClick={() => toggleCart(book.id)}
            >
              <ShoppingCart size={16} className="me-2" />
              {book.inCart ? 'In Cart' : 'Add to cart'}
            </Button>
          </Card.Body>
        </Card>
      </Col>
    );
  } else {
    return (
      <div className="book-list-item mb-4" key={book.id}>
        <Row>
          <Col md={3}>
            <div className="book-cover-container">
              <img src={book.cover} alt={book.title} className="img-fluid" />
              <Button 
                variant="link" 
                className={`wishlist-btn ${book.isWishlisted ? 'active' : ''}`}
                onClick={() => toggleWishlist(book.id)}
              >
                <Heart size={18} fill={book.isWishlisted ? 'currentColor' : 'none'} />
              </Button>
            </div>
          </Col>
          <Col md={9}>
            <div className="book-details">
              <div className="book-header">
                <div>
                  <h2>{book.title}</h2>
                  <div className="book-categories">
                    {book.categories.map((category, idx) => (
                      <Badge key={idx} bg="secondary" className="me-1">{category}</Badge>
                    ))}
                  </div>
                  <Rating value={book.rating} reviews={book.reviews} />
                </div>
                <div className="book-price-section">
                  <div className="book-price">
                    <span className="current-price">${book.price.toFixed(2)}</span>
                  </div>
                  <Button 
                    variant="primary" 
                    className="add-to-cart-btn"
                    onClick={() => toggleCart(book.id)}
                  >
                    <ShoppingCart size={16} className="me-2" />
                    {book.inCart ? 'In Cart' : 'Add to cart'}
                  </Button>
                </div>
              </div>
              <p className="book-description">{book.description}</p>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
});

const Book = () => {
  const [filters, setFilters] = useState({
    editorPicks: true,
    publisher: false,
    year: false,
    category: true,
    priceRange: true
  });
  
  const [viewMode, setViewMode] = useState('grid');
  const [priceRange, setPriceRange] = useState([15, 120]);
  const [activeTab, setActiveTab] = useState('Today');
  const [sortOption, setSortOption] = useState('Newest');
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [books, setBooks] = useState(BOOKS_DATA);
  const [categories, setCategories] = useState(CATEGORIES);

  const toggleSection = useCallback((section) => {
    setFilters(prev => ({ ...prev, [section]: !prev[section] }));
  }, []);

  const toggleWishlist = useCallback((bookId) => {
    setBooks(prev => prev.map(book => 
      book.id === bookId 
        ? { ...book, isWishlisted: !book.isWishlisted } 
        : book
    ));
  }, []);

  const toggleCart = useCallback((bookId) => {
    setBooks(prev => prev.map(book => 
      book.id === bookId 
        ? { ...book, inCart: !book.inCart } 
        : book
    ));
  }, []);

  const filteredBooks = useMemo(() => {
    return [...books]
      .filter(book => book.price >= priceRange[0] && book.price <= priceRange[1])
      .sort((a, b) => {
        switch(sortOption) {
          case 'Price: Low to High': return a.price - b.price;
          case 'Price: High to Low': return b.price - a.price;
          case 'Rating': return b.rating - a.rating;
          default: return b.year - a.year;
        }
      });
  }, [books, priceRange, sortOption]);

  const itemsPerPage = 12;
  const totalPages = Math.ceil(filteredBooks.length / itemsPerPage);
  const paginatedBooks = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredBooks.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredBooks, currentPage, itemsPerPage]);

   return (
    <Container fluid className="book-page">
      <Breadcrumb>
        <Breadcrumb.Item href="#">
          <Home size={14} className="me-1" />
          Home
        </Breadcrumb.Item>
        <Breadcrumb.Item active>Books</Breadcrumb.Item>
      </Breadcrumb>
      
      <Row>
        <Col md={3} className="filter-sidebar">
          <div className="filter-header">
            <h3>Filter Option</h3>
          </div>

          <FilterSection 
            title="Editor Picks" 
            isOpen={filters.editorPicks} 
            onToggle={() => toggleSection('editorPicks')}
          >
            <div className="bestseller-section">
              <h5>- Best Sales (105)</h5>
              <ListGroup>
                {BESTSELLERS.map((book, idx) => (
                  <ListGroup.Item key={idx} action>{book}</ListGroup.Item>
                ))}
              </ListGroup>
            </div>
            <Button variant="link" className="view-more-btn">View more</Button>
          </FilterSection>

          <FilterSection 
            title="Price Range" 
            isOpen={filters.priceRange} 
            onToggle={() => toggleSection('priceRange')}
          >
            <PriceSlider value={priceRange} onChange={setPriceRange} />
          </FilterSection>

          <FilterSection 
            title="Categories" 
            isOpen={filters.category} 
            onToggle={() => toggleSection('category')}
          >
            <Form>
              {categories.map(category => (
                <Form.Check 
                  key={category.id}
                  type="checkbox"
                  id={`category-${category.id}`}
                  label={category.name}
                  checked={category.checked}
                  onChange={() => setCategories(prev => 
                    prev.map(c => 
                      c.id === category.id 
                        ? { ...c, checked: !c.checked } 
                        : c
                    )
                  )}
                />
              ))}
            </Form>
          </FilterSection>

          <div className="d-grid gap-2">
            <Button variant="primary">Refine Search</Button>
            <Button variant="outline-secondary">Reset Filter</Button>
          </div>
        </Col>

        <Col md={9} className="book-listing">
          <div className="listing-header">
            <h1>Books</h1>
            
            <div className="tab-buttons mb-3">
              {['Today', 'This Week', 'This Month'].map(tab => (
                <Button
                  key={tab}
                  variant={activeTab === tab ? 'primary' : 'outline-secondary'}
                  className="me-2"
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </Button>
              ))}
            </div>
            
            <div className="d-flex justify-content-between mb-4">
              <div className="btn-group">
                <Button 
                  variant={viewMode === 'list' ? 'primary' : 'outline-secondary'}
                  onClick={() => setViewMode('list')}
                >
                  <List size={18} />
                </Button>
                <Button 
                  variant={viewMode === 'grid' ? 'primary' : 'outline-secondary'}
                  onClick={() => setViewMode('grid')}
                >
                  <Grid size={18} />
                </Button>
              </div>
              
              <InputGroup style={{ width: '250px' }}>
                <Form.Select 
                  value={sortOption}
                  onChange={(e) => setSortOption(e.target.value)}
                  aria-label="Sort options"
                >
                  <option value="Newest">Newest</option>
                  <option value="Price: Low to High">Price: Low to High</option>
                  <option value="Price: High to Low">Price: High to Low</option>
                  <option value="Rating">Rating</option>
                </Form.Select>
              </InputGroup>
            </div>
          </div>
          {loading ? (
            <div className="text-center py-5">
              <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            </div>
          ) : viewMode === 'grid' ? (
            <Row>
              {paginatedBooks.map(book => (
                <BookCard 
                  key={book.id} 
                  book={book} 
                  viewMode="grid" 
                  toggleWishlist={toggleWishlist}
                  toggleCart={toggleCart}
                />
              ))}
            </Row>
          ) : (
            <div className="list-view">
              {paginatedBooks.map(book => (
                <BookCard 
                  key={book.id} 
                  book={book} 
                  viewMode="list" 
                  toggleWishlist={toggleWishlist}
                  toggleCart={toggleCart}
                />
              ))}
            </div>
          )}

          <div className="d-flex justify-content-between align-items-center mt-4">
            <div className="showing-info">
              Showing {paginatedBooks.length} of {filteredBooks.length} books
            </div>
            <Pagination>
              <Pagination.Prev 
                disabled={currentPage === 1} 
                onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
              />
              {[...Array(totalPages)].map((_, i) => (
                <Pagination.Item
                  key={i}
                  active={i + 1 === currentPage}
                  onClick={() => setCurrentPage(i + 1)}
                >
                  {i + 1}
                </Pagination.Item>
              ))}
              <Pagination.Next 
                disabled={currentPage === totalPages} 
                onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
              />
            </Pagination>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Book;